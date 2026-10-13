# Building with the Aubuscule brand

Plain HTML and CSS. There is no React, no provider and no JS bundle. Components are class names on ordinary elements. Do not invent classes, hex values or font names; use what is listed here.

## Setup

Link `styles.css` once. It imports the tokens, the base reset and every component class (`components/components.css`). Without it nothing is styled and no `var(--*)` resolves.

```html
<link rel="stylesheet" href="styles.css">
```

- Light is the default. Dark is `data-theme="dark"` on `<html>` or on any element (`data-theme="light"` forces light). Printed and shared material (social posts, cards) always uses dark.
- Fonts load from Google Fonts through `tokens/typography.css`: Space Grotesk (UI, display, weight 600 with tight tracking) and JetBrains Mono (labels, specs, prices).

## Styling idiom: tokens, never literals

All values are CSS variables. Never write a literal colour, size or radius outside the token files.

- Surfaces: `--bg`, `--surface`, `--surface-dark`. Lines: `--hairline`, `--hairline-soft`.
- Ink, strong to faint: `--ink`, `--ink-soft`, `--ink-mute`, `--ink-dim`, `--ink-faint`. Headings use `--heading-ink`.
- Accent: `--accent`, `--accent-fg` (text on accent), `--accent-2`, `--focus-ring`. Status (do/avoid labels only): `--positive`, `--negative`. Use one accent per screen.
- Type: `--font-sans`, `--font-mono`; sizes `--fs-display` `--fs-hub` `--fs-h2` `--fs-h3` `--fs-card-title` `--fs-lead` `--fs-body` `--fs-small` `--fs-eyebrow` `--fs-label`; tracking `--tracking-display` `--tracking-h2` `--tracking-title` `--tracking-eyebrow` `--tracking-label`; line heights `--lh-display` `--lh-h2` `--lh-body` `--lh-lead`.
- Spacing, 4px base: `--sp-1` (4px) `--sp-2` (8) `--sp-3` (12) `--sp-4` (16) `--sp-5` (20) `--sp-6` (24) `--sp-8` (32) `--sp-10` (40) `--sp-12` (48) `--sp-16` (64) `--sp-24` (96), with half steps like `--sp-1_5`. Content width `--content-width` (1120px).
- Shape: `--radius-field` and `--radius-button` 2px, `--radius-card` 3px, `--radius-panel` 8px, `--radius-pill` for badges only. Everything else stays square.
- Shadow: `--shadow-card` is the only shadow on cards. `--shadow-hub-card` and `--shadow-object` are for floating objects.
- Motion: `--dur-fast` (.15s), `--dur-base` (.2s), `--ease-out`.

## Component classes

| Need | Markup |
|---|---|
| Buttons | `.btn-primary`, `.btn-secondary`, add `.btn-sm` for small |
| Card | `.card` (+ `.card--padded`), title `.card-title` |
| Mono labels | `.eyebrow` (+ `.eyebrow--accent`), `.label`, `.label-sm` |
| Badge, tag | `.badge` (pill with dot), `.tag` (hairline box) |
| Field | `<label class="field"><span>Label</span><input></label>`, also `textarea` / `select` |
| Segmented control | `.segmented` with radio inputs, no script |
| Accordion | `<details class="accordion"><summary>…</summary><div class="accordion-body">…</div></details>` |
| Mark and logo | `.mark` (size with `--mark-size`, colour follows text colour), `.mark--gradient`, `.logo` with `.logo-wordmark`, `.logo--vertical`, `.logo--inverted`, `.text-gradient` |

The cards in `components/*.html` and `guidelines/*.html` (bound as `_ds/<folder>/…`) show each class in use; read `components/components.css` and `tokens/*.css` before styling anything new.

## Voice and content

French first, address the reader as **vous**, the studio speaks as **on / nous**. Sentence case for headings and buttons. Eyebrows are mono capitals with middle dots (`Prestations · 01—04`). No emoji, no exclamation marks. Prices stated plainly (`Achat unique de 15 €`).

## Example

```html
<link rel="stylesheet" href="styles.css">
<section style="max-width:var(--content-width);margin:0 auto;padding:var(--sp-16) var(--sp-10)">
  <span class="eyebrow eyebrow--accent">Prestations · 01—04</span>
  <h2 style="font:600 var(--fs-h2)/var(--lh-h2) var(--font-sans);letter-spacing:var(--tracking-h2);color:var(--heading-ink)">Concentrez-vous sur votre art.</h2>
  <div class="card card--padded" style="max-width:320px;display:flex;flex-direction:column;gap:var(--sp-3)">
    <strong class="card-title">Simple</strong>
    <span style="font-size:var(--fs-small);color:var(--ink-soft)">Un besoin, une solution claire.</span>
    <a class="btn-primary" href="#">Nous contacter</a>
  </div>
</section>
```
