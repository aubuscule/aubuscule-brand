# Changelog

Each entry says what changed and what a project following the brand has to do about it.

## v0.1.0 · 2026-10-13

First version. Seeded from the live site (`aubuscule-agency`, `src/styles/tokens.css` and `shared.css`) and from the "Aubuscule logo design" project on claude.ai/design.

### Tokens

- Colour and spacing values are the ones the live site renders. A project already matching the site has nothing to change.
- Token names that differ from `aubuscule-agency`:

  | Brand | Site today | Note |
  |---|---|---|
  | `--font-sans`, `--font-mono` | `--font-space-grotesk`, `--font-jetbrains-mono` | The site's names come from `next/font`; keep them there |
  | `--accent-2` | `--hero-accent-2` | Light `#593c9d`, dark `#f7768e` |
  | `--grad-center`, `--grad-mid`, `--grad-edge` | `--hero-grad-center`, `--hero-grad-mid`, `--hero-grad-edge` | Same values |

- New here, not on the site: type scale (`--fs-*`, `--tracking-*`, `--lh-*`), radii (`--radius-*`), shadows (`--shadow-*`), motion (`--ease-out`, `--dur-*`), `--content-width`, `--positive`, `--negative`.
- `--positive` and `--negative` in dark (`#9ece6a`, `#f7768e`) are new choices; light values come from the guidelines draft.
- Site-only tokens stay in the site: `--hero-card-*`, `--nav-bg`, `--nav-open-bg`, `--footer-body`, `--footer-link`, `--quote`.

### Components

- `.btn-primary`, `.btn-secondary`, `.card`, `.eyebrow`, `.label`, `.label-sm`, `.logo`, `.logo-wordmark` keep the site's class names and values.
- New: `.badge`, `.tag`, `.field`, `.segmented`, `.accordion`, `.mark`, `.btn-sm`, `.card--padded`, `.card-title`, `.eyebrow--accent`, `.text-gradient`, `.logo--vertical`.
- `.mark` is a single element drawn with a CSS mask, so it needs no inline SVG and no unique ids. The site's `Mark.tsx` can stay as it is.

### Templates and assets

- Social templates are rebuilt on the current palette. The earlier exports used the retired warm-paper colours (`#1c1b18`, `#e8e6e0`) and should be replaced wherever they are still in use.
- `assets/mark.svg`, `assets/mark-night.svg`, both business-card SVGs, and PNG exports of the profile picture and LinkedIn banner.
