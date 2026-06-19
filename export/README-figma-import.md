# Atlas → Figma: token import

`atlas-tokens.tokens.json` is a cleaned, **Tokens Studio**–format export of the Atlas
token layer, ready to import into Figma as Variables.

## How to import
1. In Figma, install the **Tokens Studio for Figma** plugin.
2. Plugin → **Settings → use existing file / JSON** → paste or load `atlas-tokens.tokens.json`.
3. You'll get three token sets: `core`, `semantic/light`, `semantic/dark`, and two
   themes (**Light**, **Dark**) already mapped under `$themes`.
4. Use **Export to Figma → Variables**. The two themes become **modes** on your
   color collection; `core` (scales, type, radius, spacing, shadows) imports once.

## What was fixed vs. the raw `tokens/fig-tokens.css`
- **Duplicate declarations** — the raw dark/light blocks emitted ~150 variables
  twice with different values. Collapsed to the CSS last-wins value (the one that
  was actually rendering).
- **Collapsed typography** — the raw `--type-*` role tokens were all flattened
  (every body = 14, heading = 24, display = 48). Dropped them and rebuilt the real
  ramp from `tokens/typography.css` as composite `text/*` typography tokens
  (display 48/36 · heading 30/24/20/18 · body 18/16/14 · labels/caption/code).
- **Mis-tagged kinds** — e.g. `easing-*` (cubic-bezier strings tagged `spacing`)
  are now `other`, not numeric.
- **Type coercion** — colors → hex (8-digit when alpha); radius/spacing/sizing/
  font-size given `px`; shadows composed into real `boxShadow` tokens (light + dark).
- **Path collisions** — tokens that were both a value and a group (e.g.
  `color-primary-bg` vs `color-primary-bg-hover`) now nest the base value under
  `…/DEFAULT` so Figma can represent both.

## Scope / decisions
- **Modes included:** Light + Dark (the two primary color themes). The source CSS
  also defines `enterprise`, `ai-product`, `aaa`, `large-text`, `reduced-motion`,
  `high-contrast`, `mobile`, `tablet`, `enterprise-dense`, `compact`, `expressive`.
  These are mostly density / breakpoint / a11y overrides — say the word and I'll
  add any of them as extra Variable modes.
- **Values are resolved, not aliased.** The source stores final values (not
  primitive→semantic references), so semantic tokens import as concrete values.
  If you want true alias chains (e.g. `color/primary/bg` → `{color.blue.600}`),
  that's a separate pass I can do.
- **Not included:** the React components — those have no automatic path into Figma
  (see below).

## Components
The Atlas components are React + CSS. There is **no reliable automatic conversion**
to native Figma components. They must be rebuilt by hand as Figma component sets
(variants for size/state), bound to the Variables above. Code-to-design plugins
exist but produce messy, non-systematic output — not recommended for a system meant
to be the source of truth.
