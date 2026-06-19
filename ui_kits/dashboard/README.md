# SaaS Dashboard — UI kit

An interactive, click-through recreation of a typical Atlas SaaS admin surface.
It composes the design-system primitives (no re-implemented components) and runs
entirely on the compiled bundle (`window.AtlasDesignSystem_221c8f`).

## Run
Open `index.html`. The bundle (`/_ds_bundle.js`) and `/styles.css` load from the
project root; React + Babel load from CDN.

## Screens & interactions
- **Dashboard** — KPI tiles with trend deltas, a revenue area chart, recent-accounts table.
- **Customers** — searchable + filterable account table (sortable columns, row menus).
- **Settings** — Profile / Preferences / Security tabs (inputs, switches, alert, sessions).
- **Billing** — current-plan card + invoice table.
- **Global** — sidebar nav, top bar search, "New account" dialog, toast notifications,
  account dropdown, and a **light/dark theme toggle** (sets `data-theme` on `<html>`).

## Files
| File | Role |
|------|------|
| `index.html` | Mounts React, the bundle, and all view scripts |
| `Icons.jsx` | Shared Lucide-style icon set (`window.Icon`) |
| `Sidebar.jsx` / `Topbar.jsx` | App chrome |
| `DashboardView.jsx` | KPIs, chart, recent table |
| `CustomersView.jsx` | Filterable data table |
| `SettingsView.jsx` | Settings tabs |
| `App.jsx` | Shell: routing, theme, dialog, toasts |

Each view script attaches its component to `window`; `App.jsx` wires them together.

> Recreation for design reference — data is mocked and flows are cosmetic.
