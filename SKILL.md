---
name: Design System
description: Use this skill to generate well-branded interfaces and assets for Atlas, a scalable industry-wide design system for SaaS, mobile, dashboards, AI products, internal tools and marketplaces — either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, tokens, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

Atlas is token-first. Everything is driven by CSS custom properties:
- `styles.css` (root) is the single stylesheet to link — it imports the full token + font closure.
- `tokens/fig-tokens.css` holds 574 variables across Light / Dark / High-Contrast modes. Toggle a theme by setting `data-theme="dark"` on `<html>`.
- React components are bundled to `window.AtlasDesignSystem_221c8f` (`_ds_bundle.js`). See each component's `.d.ts` for its props and `.prompt.md` for usage.
- `ui_kits/` has full-screen recreations (dashboard, auth) you can copy from.
- `guidelines/` and `components/**/*.card.html` show every foundation and component in use.

Design system core structure:
- Foundations: Tokens, Typography, Colors, Layout, Accessibility.
- Core components: Forms, Navigation, Feedback, Data Display, Overlays.
- Product patterns: Charts, Tables, AI, Commerce, Mobile.
- Templates: SaaS, AI, Marketplace, CRM, Internal Tool.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view — link `styles.css`, load `_ds_bundle.js`, and read components via `const { Button } = window.AtlasDesignSystem_221c8f`.
If working on production code, copy the token CSS and read the rules here to become an expert in designing with this brand (sentence-case copy, single blue accent, Lucide-style icons, soft slate shadows, 8/12/16px radii).

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.
