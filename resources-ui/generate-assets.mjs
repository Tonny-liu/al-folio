// Build local website icons and badge textures from downloaded official artwork.
// Source URLs are recorded in assets/resources/official-icons/manifest.json; no network is used at build or render time.
// Run from any directory: node resources-ui/generate-assets.mjs
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve, join, basename } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const resources = JSON.parse(await readFile(join(root, "_data/resources.json"), "utf8"));
const output = join(root, "assets/resources");
const officialIconDirectory = join(output, "official-icons");
const officialIcons = JSON.parse(await readFile(join(officialIconDirectory, "manifest.json"), "utf8"));
const imageData = new Map();
const supportedTypes = new Set(["image/png", "image/jpeg", "image/svg+xml", "image/webp"]);

// Load every source before writing outputs. A missing icon is an explicit build
// error, rather than silently replacing the official artwork with a placeholder.
for (const resource of resources) {
  if (!/^[a-z0-9-]+$/.test(resource.id)) throw new Error(`Unsafe resource id: ${resource.id}`);
  const source = officialIcons[resource.id];
  if (!source || !source.file || basename(source.file) !== source.file || !supportedTypes.has(source.mimeType)) {
    throw new Error(`Missing or invalid official icon for ${resource.id}`);
  }
  const bytes = await readFile(join(officialIconDirectory, source.file));
  if (!bytes.length) throw new Error(`Empty official icon for ${resource.id}`);
  imageData.set(resource.id, `data:${source.mimeType};base64,${bytes.toString("base64")}`);
}
await Promise.all(["icons", "faces"].map((folder) => mkdir(join(output, folder), { recursive: true })));

const escape = (text) => String(text).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[char]);
const FONT = "Arial, Helvetica, sans-serif";
const PURPLE = "#88349d";
const INK = "#211b28";
const MUTED = "#655e6e";

// Embed the downloaded bytes so SVG textures remain self-contained when Three.js
// draws them into a canvas. Preserve the source colors and aspect ratio.
function officialImage(resource, x, y, size) {
  return `<image x="${x}" y="${y}" width="${size}" height="${size}" preserveAspectRatio="xMidYMid meet" href="${imageData.get(resource.id)}"/>`;
}

function icon(resource) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" role="img" aria-label="${escape(
    resource.name
  )}"><title>${escape(resource.name)}</title>${officialImage(resource, 0, 0, 64)}</svg>`;
}

function width(text, size) {
  return (
    [...text].reduce((sum, char) => sum + (/[ilI1.,' :;]/.test(char) ? 0.27 : /[mwMW@]/.test(char) ? 0.85 : /[A-Z]/.test(char) ? 0.64 : 0.52), 0) *
    size
  );
}

function wrap(text, size, maxWidth) {
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    const next = line ? `${line} ${word}` : word;
    if (line && width(next, size) > maxWidth) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

function textBlock(lines, { x = 648, y, size = 64, lineHeight = 1.35, fill = INK, weight = 400, anchor = "middle", letterSpacing = 0 } = {}) {
  return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-family="${FONT}" font-size="${size}" font-weight="${weight}" fill="${fill}" letter-spacing="${letterSpacing}">${lines
    .map((line, i) => `<tspan x="${x}" dy="${i ? size * lineHeight : 0}">${escape(line)}</tspan>`)
    .join("")}</text>`;
}

function frame(resource, body, index) {
  const domain = new URL(resource.url).hostname.replace(/^www\./, "");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1296" height="1824" viewBox="0 0 1296 1824">
<title>${escape(resource.name)} research toolkit pass</title>
<defs><linearGradient id="paper" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#ffffff"/><stop offset="1" stop-color="#f5eff9"/></linearGradient><clipPath id="rounded"><rect width="1296" height="1824" rx="90"/></clipPath></defs>
<g clip-path="url(#rounded)"><rect width="1296" height="1824" fill="url(#paper)"/><rect width="1296" height="322" fill="${PURPLE}"/>
${textBlock(["RESEARCH TOOLKIT"], { y: 228, size: 43, fill: "#ffffff", weight: 600, letterSpacing: 2.4 })}
${body}
<path d="M136 1544H1160" stroke="#d2c7d9" stroke-width="3"/>
${textBlock([domain], { x: 140, y: 1644, size: domain.length > 29 ? 35 : 44, fill: MUTED, anchor: "start" })}
${textBlock([String(index + 1).padStart(2, "0")], { x: 1156, y: 1644, size: 43, fill: MUTED, anchor: "end" })}
${textBlock(["PERSONAL RESEARCH COLLECTION"], { y: 1733, size: 25, fill: "#8b7d94", letterSpacing: 3 })}
</g></svg>`;
}

function front(resource, index) {
  const title = resource.cardTitle || resource.name;
  const titleSize = title.length > 23 ? 92 : 112;
  const titleLines = wrap(title, titleSize, 1020);
  const titleBaseline = 1045;
  const descriptionBaseline = titleBaseline + (titleLines.length - 1) * titleSize * 1.23 + 145;
  const category = resource.category === "Research" ? "LITERATURE" : resource.category.toUpperCase();
  const cardDescriptions = {
    "google-scholar": "Find papers, follow citations, and discover related research.",
    arxiv: "Explore preprints and discover new ideas across disciplines.",
    github: "Explore code and collaborate on reproducible research.",
    overleaf: "Write, review, and collaborate on LaTeX manuscripts.",
    "copernicus-cds": "Discover climate datasets, tools, and documentation.",
    chatgpt: "Explore ideas, work through questions, and develop drafts.",
    claude: "Read, analyse, and develop your writing and code.",
    gemini: "Explore ideas and get help with everyday questions.",
    deepseek: "Work through questions, develop ideas, and explore code.",
    "dcent-i": "Explore climate data through the dataset selector.",
    "zoom-earth": "Explore weather satellite imagery on interactive maps.",
  };
  return frame(
    resource,
    [
      textBlock([category], { y: 450, size: 40, weight: 500, fill: MUTED, letterSpacing: 7 }),
      `<circle cx="648" cy="665" r="195" fill="${resource.color}" opacity=".055"/>`,
      officialImage(resource, 478, 495, 340),
      textBlock(titleLines, { y: titleBaseline, size: titleSize, weight: 700, lineHeight: 1.23 }),
      textBlock(wrap(cardDescriptions[resource.id] || resource.description, 66, 980), {
        y: descriptionBaseline,
        size: 66,
        fill: MUTED,
        lineHeight: 1.35,
      }),
      `<path d="M606 1455h84" stroke="${PURPLE}" stroke-width="6" stroke-linecap="round"/>`,
    ].join("\n"),
    index
  );
}

function back(resource, index) {
  const title = resource.cardTitle || resource.name;
  const titleLines = wrap(title, 76, 1020);
  const notes = wrap(resource.note, 64, 980);
  return frame(
    resource,
    [
      textBlock(["WHEN TO USE IT"], { y: 480, size: 38, fill: MUTED, letterSpacing: 6 }),
      officialImage(resource, 584, 553, 128),
      textBlock(titleLines, { y: 800, size: 76, weight: 700, lineHeight: 1.22 }),
      textBlock(notes, { y: titleLines.length > 1 ? 1000 : 956, size: 64, fill: MUTED, lineHeight: 1.42 }),
      textBlock(["Click to return to the front"], { y: 1452, size: 33, fill: "#8b7d94" }),
    ].join("\n"),
    index
  );
}

function strap() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="1024" viewBox="0 0 128 1024"><rect width="128" height="1024" fill="${PURPLE}"/><defs><pattern id="weave" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 0h8M0 4h8" stroke="#fff" stroke-opacity=".10" stroke-width="1"/><path d="M2 0v8M6 0v8" stroke="#31113c" stroke-opacity=".12" stroke-width="1"/></pattern></defs><rect width="128" height="1024" fill="url(#weave)"/><path d="M11 0v1024M117 0v1024" stroke="#e7cbea" stroke-opacity=".36" stroke-width="2" stroke-dasharray="8 7"/><g transform="translate(64 512) rotate(-90)"><text x="0" y="11" text-anchor="middle" font-family="${FONT}" font-size="31" font-weight="600" letter-spacing="5" fill="#fff" fill-opacity=".85">TENG LIU · RESOURCES</text></g></svg>`;
}

for (const [index, resource] of resources.entries()) {
  await Promise.all([
    writeFile(join(output, "icons", `${resource.id}.svg`), icon(resource)),
    writeFile(join(output, "faces", `${resource.id}-front.svg`), front(resource, index)),
    writeFile(join(output, "faces", `${resource.id}-back.svg`), back(resource, index)),
    writeFile(join(output, "faces", `${resource.id}-strap.svg`), strap()),
  ]);
}
console.log(`Generated ${resources.length} official-icon wrappers and ${resources.length * 3} badge textures in assets/resources.`);
