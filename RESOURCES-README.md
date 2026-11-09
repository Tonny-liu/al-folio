# Resources page

The interactive Resources page is integrated into this al-folio project. Its generated assets are included so a normal Jekyll build can serve the page.

## Preview locally

```sh
cd /Users/tonnyliu/GitHub/al-folio
npm run preview:resources
```

Open http://127.0.0.1:4173/resources/ and stop the preview with Ctrl+C. The preview script uses this Mac's existing Ruby 3.4.1 and Jupyter installations. On another computer, install the Ruby gems with `bundle install` and JavaScript dependencies with `npm ci`, then use the local configuration when running Jekyll.

The local configuration disables external article/citation fetching and thumbnail regeneration so the UI can be built without those remote services. Production configuration retains the original integrations.

## Build the site

After changing resource data, icons, or interactive source, rebuild its assets before Jekyll:

```sh
npm run build:resources
bundle exec jekyll build
```

If the generated assets are already current, `bundle exec jekyll build` is sufficient. It writes `_site` without starting a preview server.

## Edit the directory

Edit `_data/resources.json`. Each entry has a unique `id`, `name`, `url`, `category`, short `description`, longer back-of-pass `note`, and a `color` for its card accent. Optional `cardTitle` provides a shorter name for the printed card. The desktop directory uses three compact cards per row, with two columns on narrower screens. The first six entries appear initially; all 25 can be searched or filtered, and the full list can be expanded. The directory includes 11 Research websites, 7 Data websites, and 7 Tools. Research includes Google Scholar, arXiv, and nine journals. Tools includes GitHub, Overleaf, ChatGPT, Claude, Gemini, DeepSeek, and LaTeX Previewer.

Official website icons are stored locally in `assets/resources/official-icons/`. Its `manifest.json` maps each resource ID to a downloaded file, MIME type, source URL, and original page URL. To add or replace an icon, download it from the official website and update that entry. PNG, JPEG, SVG, and WebP are supported; convert ICO files to PNG first. Keep SVG sources self-contained (no external fonts or image references). Builds embed those files into the list icons and both card faces without changing their aspect ratios. Nature journal icons use the official vector mark with each journal’s masthead color, as requested; the untouched original and the color adaptation details are retained in the manifest. No icon-host requests are made when a visitor loads the page. Missing icons fail the build instead of using a drawn placeholder.

After editing data, icons, textures or interactive code:

```sh
npm run build:resources
```

If the Jekyll preview is already running, it will rebuild. The generated assets in `assets/resources/` must accompany the site. They are intentionally included so static Jekyll deployments can serve the page. The GitHub deployment workflow also rebuilds these assets automatically.

## Files

- `_pages/resources.md`: navigation entry, static link fallback and page mounting.
- `_layouts/resources.liquid`: page-only layout.
- `_data/resources.json`: links and card content.
- `resources-ui/App.jsx`: selection, search and category filters.
- `resources-ui/BadgePreview.jsx`: accessible 3D/static card preview and flip control.
- `resources-ui/resources.css`, `badge.css`: responsive and dark-theme styling.
- `resources-ui/generate-assets.mjs`: official-icon wrappers and card artwork.
- `assets/resources/official-icons/`: downloaded official artwork and its source manifest.
- `resources-ui/vendor/Lanyard.jsx`: Three.js renderer and built-in physical simulation.

Only the Resources page loads React and Three.js. The Jekyll navigation, themes, and other pages use the existing site templates. The first bookmark selection after a page load releases the pass from above using the existing rope physics, once its image is ready. Later selections stay steady, and reduced-motion preferences skip the drop. Selecting a website changes the card; external-link icons and the separate Visit button open a new tab. Dragging moves the card, clicking flips it, and the Flip pass button supports keyboard users. WebGL failures fall back to a static flip preview; without JavaScript the page retains all links.

## Attribution

Lanyard originates from React Bits (David Haz), via `fanhuayishiy/ai-crew-pass` at commit `a988ebdac0db42d6cc8805f36c70b2aecf48baca`. The component's MIT + Commons Clause license and the adaptation's MIT license are retained in `resources-ui/vendor/` and copied into `assets/resources/`. Local changes are listed in `resources-ui/vendor/SOURCE.md`. React and Three.js license notices accompany the bundled JavaScript. Website logos and icons are downloaded from their official sites; source URLs are recorded in `assets/resources/official-icons/manifest.json`. They remain the property of their respective owners. No AI Crew Pass character artwork or audio is reused.
