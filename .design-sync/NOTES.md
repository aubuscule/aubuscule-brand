# design-sync notes

- Repo is plain HTML/CSS (no package.json, no React, no dist/). The converter is not used; `ds-bundle/` is staged by hand from the repo (see `.design-sync/stage.sh`).
- Preview cards are the existing `components/*.html` and `guidelines/*.html`; they already carry `@dsCard` first lines. Uploaded as-is at the same relative paths so their `../styles.css` links resolve.
- `styles.css` in the bundle gets an extra `@import "./components/components.css"` so designs receive the component classes through the styles.css import closure. The repo's own styles.css is unchanged.
- `templates/`, `assets/`, `sources/`, `site.css`, `index.html` stay local (not part of the DS surface).
- No `_ds_sync.json` anchor: next sync re-uploads everything.
