import { build } from "esbuild";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
await mkdir(path.join(root, "assets/resources"), { recursive: true });
await build({
  absWorkingDir: root,
  entryPoints: ["resources-ui/App.jsx"],
  outfile: "assets/resources/resources.js",
  bundle: true,
  minify: true,
  format: "esm",
  target: ["es2020"],
  jsx: "automatic",
  legalComments: "linked",
  define: { "process.env.NODE_ENV": '"production"' },
  logLevel: "info",
});
await copyFile(path.join(root, "resources-ui/vendor/LICENSE.md"), path.join(root, "assets/resources/LANYARD-LICENSE.txt"));
await copyFile(path.join(root, "resources-ui/vendor/SOURCE.md"), path.join(root, "assets/resources/LANYARD-SOURCE.txt"));
await copyFile(path.join(root, "resources-ui/vendor/AI-CREW-PASS-LICENSE.md"), path.join(root, "assets/resources/AI-CREW-PASS-LICENSE.txt"));
const licenses = await Promise.all(
  ["react", "react-dom", "three"].map(async (name) => {
    const license = await readFile(path.join(root, "node_modules", name, "LICENSE"), "utf8");
    return `${name}\n${"=".repeat(name.length)}\n${license}`;
  })
);
await writeFile(path.join(root, "assets/resources/THIRD-PARTY-LICENSES.txt"), licenses.join("\n\n"));
