# Aubuscule brand

The source of truth for the Aubuscule brand: tokens, mark, components, templates and usage rules. Plain HTML and CSS, no build step, no dependencies. Published at brand.aubuscule.com.

Aubuscule is a Brussels-based pair of digital craftspeople serving artists across four domains: digital, audio, video, admin. It also publishes small paid software (Remplate, Zones Tonales). Tagline: *Concentrez-vous sur votre art. On fait le reste.*

## What is here

| Path | Contents |
|---|---|
| `index.html` | The brand guidelines page |
| `tokens/` | `colors.css`, `typography.css`, `spacing.css`: CSS variables, the only place values are defined |
| `styles.css` | Imports the three token files and sets the base |
| `components/` | `components.css` plus one preview page per component |
| `guidelines/` | Specimen cards for colour, type, spacing, radii, shadows and the mark |
| `templates/` | Fixed-size social and print artboards |
| `assets/` | Finished exports: mark, business cards, social images |
| `sources/` | Design masters (Git LFS, never deployed) |
| `CHANGELOG.md` | What changed in each version, written so a project can act on it |

## How projects use it

Nothing depends on this repo. A project copies what it needs (usually the token values and a few classes) and records which version it follows, for example in its `CLAUDE.md`:

> Brand: `aubuscule-brand` v0.1.0. Tokens copied into `src/styles/tokens.css`.

To bring a project up to date, read `CHANGELOG.md` from the recorded version to the latest, apply the changes in the project's own idiom, re-copy any changed asset, and bump the recorded version. A project that is never updated keeps working as it is.

## Rules

- No build step, no package manager, no framework. Every page opens straight from disk.
- Colours, sizes and radii come from `tokens/`. No literal colour values anywhere else, except inside exported files in `assets/`.
- Components are an HTML snippet plus classes. Hover and focus are CSS. Class names match `aubuscule-agency` where the site already has them.
- Light is the default. Dark is `data-theme="dark"`, on `<html>` or on any element. `data-theme="light"` forces light the same way.
- Script only where the browser must act for the visitor: the theme toggle on `index.html` and PNG downloads on the artboard templates. Nothing needs script to render.
- Printed and shared material always uses the dark theme.

## Content

- French first; English and Dutch mirror it. Address the reader as **vous**; the studio speaks as **on / nous**.
- Direct, calm, jargon-free. Short declaratives, benefit before feature.
- Sentence case for headings and buttons. Eyebrows are mono capitals with middle dots (`Prestations · 01—04`).
- No emoji, no exclamation marks. Prices are stated plainly (`Achat unique de 15 €`).

## Visual foundations

- **Colour:** lavender-grey page, white cards, deep purple accent, lighter purple headings. Dark mode is Tokyo Night inspired, with a lavender accent and a pink second accent. One accent per screen.
- **Type:** Space Grotesk for interface and display (600, tight tracking); JetBrains Mono for labels, specs and prices.
- **Spacing:** 4px-based `--sp-*` scale. Content width 1120px with 40px gutters; sections separated by 1px hairlines and 64–96px of padding.
- **Shape:** square. Buttons and fields 2px, cards 3px, hub cards 8px, pills only for badges. Cards have no border, only one faint shadow.
- **Motion:** 0.15–0.2s ease on hover; an 8s looping gradient reserved for the mark and the hub title. Reduced motion is respected.
- **Imagery:** portraits are grayscale and return to colour on hover; no photos as backgrounds.
- **Icons:** thin outline, 1.5–2px stroke, rounded caps, `currentColor`.

## Templates

Each template page holds an artboard at its exact export size. Text marked editable can be typed over in the browser. Use **Download PNG** above the artboard to save it at 2× resolution (for example, a 1080 × 1350 Instagram post downloads as 2160 × 2700). This uses a pinned capture library from jsDelivr, so exporting requires an internet connection. If the library is unavailable, the screenshot method below remains available.

Alternatively, add `#export` to the address so only the artboard shows, then screenshot at the artboard size (for the business card, use `#front` or `#back` to export each side):

```bash
chromium --headless --hide-scrollbars --virtual-time-budget=6000 \
  --window-size=1080,1350 --screenshot=post.png \
  "file://$PWD/templates/social/instagram-post.html#export"
```

Sizes: Instagram post 1080×1350, story 1080×1920, LinkedIn banner 1584×396, profile 1080×1080, business card 850×550 (10px per mm).

## Where files live

| What | Where |
|---|---|
| Brand masters and reusable exports | This repo: `sources/` and `assets/` |
| Working files for one project or campaign | NAS: `Aubuscule/<project>/<year-month campaign>/` |
| The final file a product ships | That project's own repo |

If a second project would need it, it belongs here; otherwise it is a deliverable.

## Deploy

```bash
npx wrangler deploy --dry-run   # list what would be uploaded
npx wrangler deploy             # publish to brand.aubuscule.com
```

`.assetsignore` keeps `sources/`, Markdown files and config off the site. `_headers` asks search engines not to index it.
