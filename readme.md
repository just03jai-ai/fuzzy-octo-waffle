# Atlas Design System

A scalable, minimal, modern design system for a solo product designer to reuse
across **SaaS, mobile apps, dashboards, AI products, internal tools and
marketplaces**. Atlas is deliberately neutral and "industry-wide" — a strong,
unopinionated foundation you brand per-project rather than a single product skin.

> **Source:** Generated from the Figma file **"Global UI (Industry-Wide)"**
> (attached, read-only). The system's real value is its token architecture —
> **574 Figma Variables across 12 collections** (primitives, semantic colour,
> typography, spacing, radius, effects, motion, breakpoints, z-index, brand,
> accessibility, component aliases) with **Light / Dark / High-Contrast** modes,
> all materialized into `tokens/fig-tokens.css`. The Figma file also enumerates
> 263 abstract component *families*; they are not laid out on the canvas, so
> Atlas re-authors a curated, production-grade component set (below) on top of
> the real token values rather than importing empty shells.

---

## How it's wired (for the compiler)

- **`styles.css`** (root) is the single entry point — `@import`s only.
  It reaches: `tokens/fonts.css` → `tokens/fig-tokens.css` → `tokens/typography.css` → `tokens/semantic.css`.
- **Tokens** are CSS custom properties under `:root` (+ themed scopes like
  `:root[data-theme="dark"]`). Toggle a theme by setting `data-theme="dark"`
  (or `"light"`, `"high-contrast-*"`) on `<html>`.
- **Components** are React (`.jsx` + sibling `.d.ts`) under `components/<group>/`,
  bundled to `window.AtlasDesignSystem_221c8f` at build time.
- **Cards** (`@dsCard`) and **UI kits** populate the Design System tab.

---

## CONTENT FUNDAMENTALS

How Atlas writes UI copy. Atlas is a *neutral platform voice* — clear, calm,
confident, never cute.

- **Voice:** plain, direct, professional. Short sentences. Lead with the noun
  or the action ("New account", "Verify it's you", "Two-factor authentication
  is off"). No exclamation marks except a single celebratory success ("You're in!").
- **Person:** address the user as **you** ("Sign in to *your* workspace",
  "Protect *your* account"). The product refers to itself by name ("Atlas AI"),
  not "we" except in trust/legal microcopy ("We'll never share it").
- **Casing:** **Sentence case everywhere** — buttons, headings, menu items,
  labels ("Add account", "Change plan", "Weekly digest"). Never Title Case UI.
- **Buttons** are verb-first and specific: "Create account", "Update password",
  "Upgrade", "Export" — not "Submit" / "OK".
- **Labels** are nouns ("Email", "Timezone", "Account name"); **helper text** is
  a short sentence with a period ("At least 12 characters.", "Markdown supported.").
- **Empty / status copy** is reassuring and brief ("All caught up", "No new
  notifications.", "You can't undo this action.").
- **Numbers** are humanized: `$48.2k`, `2,318`, `1.8%`. Tabular figures in tables.
- **Emoji:** none. **Icons** carry meaning instead (see ICONOGRAPHY).
- **Tone in errors:** factual, no blame ("Upload failed — check your connection
  and retry", "Connection lost").

---

## VISUAL FOUNDATIONS

The motifs that make a screen read as "Atlas".

**Colour.** A single blue accent — `--color-brand-600` **#2563EB** — drives every
primary action, link, selection and focus ring. Neutrals are a cool, slate-tuned
gray ramp (`--color-neutral-0…1000`) that forms every surface, border and text
colour. Status colours are reserved and semantic: green = success, amber = warning,
red = danger, blue = info, violet = AI. Colour is used **sparingly** — most of any
screen is white/near-white surfaces on a faint canvas, with blue appearing only on
the one primary action. Backgrounds are flat fills (`--color-background-canvas`,
`--color-background-app`); the **only** gradient in the system is the auth brand
panel (brand-700 → brand-900). No noise, no textures, no decorative imagery.

**Type.** **Inter** for everything UI (sans + data), **Roboto Mono** for code,
Georgia as the system serif. A tight display ramp (48 → 36) with negative tracking
for headlines; body at 16/1.6; labels at 14/500; captions 12. Headings use
`-0.01 to -0.022em` letter-spacing; body is neutral. Numbers use tabular figures.

**Spacing & layout.** 4px base grid (`--space-1…24`). Generous but not airy:
24px page padding, 16–20px card padding, 16px grid gaps. Content max-widths
(1080px dashboards, 380px auth forms) keep line lengths and forms comfortable.
Responsive grid columns: 4 (mobile) / 8 (tablet) / 12 (desktop).

**Corners.** Soft, consistent: controls & inputs **8px**, cards & panels **12px**,
overlays (dialogs/drawers) **16px**, tooltips **6px**, pills/tags **999px**.

**Elevation.** Five soft, slate-tinted ambient shadows (`--shadow-xs…xl`) — low
spread, low opacity (8–18%), never harsh. Cards default to `sm`; menus/popovers
`lg`; dialogs `xl`. In dark mode shadows deepen to near-black. Borders
(`--color-border-subtle`) do most of the separation work; shadow adds hierarchy.

**Cards** = white surface + 1px subtle border + `sm` shadow + 12px radius.
Interactive cards lift 2px and gain an `lg` shadow on hover.

**Motion.** Quick and functional. Durations 120/180/260ms; standard easing
`cubic-bezier(0.2,0,0,1)`. Hovers are instant colour shifts; overlays fade+scale
from 0.98; toasts slide up 8px; the press state nudges 0.5px down. Everything
respects `prefers-reduced-motion` (durations collapse to 0).

**States.**
- *Hover:* darker fill for solid buttons (`-hover` token), tinted-blue wash for
  ghost/secondary, subtle surface fill for rows/menu items.
- *Press:* darkest fill (`-pressed`) + 0.5px downward nudge.
- *Focus:* always visible — a 3px `rgba(37,99,235,.32)` ring (`--shadow-focus`),
  never removed. Inputs also switch border to brand.
- *Disabled:* muted surface + muted text, `not-allowed` cursor, no shadow.
- *Selected:* tinted brand surface (`--color-surface-selected`) + brand text.

**Transparency / blur.** Used rarely — scrims (`rgba(0,0,0,.56)`) behind dialogs;
no glassmorphism. Imagery, where present, is the user's own (avatars, uploads).

---

## ICONOGRAPHY

- **Style:** a single **Lucide-style** line set — 24px viewbox, **2px** stroke,
  round caps and joins, no fills. Icons inherit `currentColor` and size to the
  surrounding control (16 / 18 / 20 / 24px via `--size-icon-*`).
- **In components:** icons are passed as React nodes (e.g. `iconLeading`), so the
  consumer supplies any icon library. Atlas components never hard-code an icon set.
- **In the UI kits:** a small inline icon set lives in
  `ui_kits/dashboard/Icons.jsx` (`window.Icon` — grid, users, chart, settings,
  search, bell, plus, chevron, arrows, logout, download, sparkles, moon/sun, …).
  This matches Lucide's geometry; **for production, install
  [`lucide-react`](https://lucide.dev) and pass its icons directly** — Atlas is
  built to that stroke weight and grid.
- **Emoji / unicode:** not used as iconography anywhere.
- **Brand mark:** Atlas uses a typographic mark — a rounded blue square with a
  bold "A" (set in Inter), not a bespoke logo SVG. The source Figma's "Logo / 01"
  symbol had empty vector geometry, so no logo asset was importable (see Caveats).

---

## Components (`window.AtlasDesignSystem_221c8f`)

| Group | Components |
|-------|-----------|
| `forms/` | Button · IconButton · Input · Textarea · Select · Checkbox · Radio · Switch |
| `data-display/` | Card (+Header/Body/Footer/Media) · Badge · Tag · Avatar (+Group) · Table |
| `feedback/` | Alert · Tooltip · Toast (+ToastProvider/useToast) · Dialog |
| `navigation/` | Tabs · Breadcrumb |
| `overlays/` | Dropdown |

Every component is theme-aware, keyboard-accessible (visible focus, ARIA wired),
and sized to the 44px touch-target minimum on the relevant variants. Each has a
sibling `.d.ts` (props + docs) and a `@dsCard` demo HTML in its directory.

## UI kits (`ui_kits/`)
- **`dashboard/`** — full SaaS admin app: sidebar nav, KPIs, revenue chart, sortable
  customer tables, settings tabs, billing, "New account" dialog, toasts, dark-mode toggle.
- **`auth/`** — split-screen sign in / sign up / 2FA with a branded marketing panel.

## Foundations (`guidelines/`)
Specimen cards for the Design System tab: primary & neutral ramps, semantic/status
colours, light↔dark token demo, display & body type, spacing, radius, elevation.

## Repository index
| Path | What |
|------|------|
| `styles.css` | Global entry (imports only) |
| `tokens/` | `fonts.css`, `fig-tokens.css` (574 vars, all modes), `typography.css`, `semantic.css` |
| `components/<group>/` | React primitives + `.d.ts` + `.prompt.md` + `@dsCard` HTML |
| `components/lib/styles.js` | Shared style-injection helper |
| `guidelines/` | Foundation specimen cards |
| `ui_kits/dashboard`, `ui_kits/auth` | Full-screen product recreations |
| `SKILL.md` | Agent-skill manifest for reuse in Claude Code |

## Caveats
- **Brand assets:** the Figma file is a generic "industry-wide" kit; its logo
  symbol had empty geometry and there were no brand images, so Atlas uses a
  typographic wordmark. Drop in a real logo + imagery to brand a project.
- **Fonts** load from Google Fonts (Inter, Roboto Mono) via `tokens/fonts.css`.
  Self-host with local `@font-face` for offline/production use.
- **Component coverage** is curated (the primitives a solo designer reaches for
  daily), not a 1:1 port of all 263 abstract Figma families.
