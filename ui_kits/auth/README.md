# Authentication — UI kit

A branded split-screen auth flow composed from Atlas primitives.

## Run
Open `index.html` (loads `/_ds_bundle.js` + `/styles.css` from the project root).

## Flow
- **Sign in** — email/password, social (Google), remember-me, forgot-password.
- **Sign up** — name + email + password with helper text; toggles from sign in.
- **2FA** — 6-digit code entry, then a success state.

The right panel is the marketing/brand surface (gradient, headline, stat row).

## Files
- `index.html` — mounts React, the bundle and the app script.
- `AuthApp.jsx` — the full flow (`window.AuthApp`).

> Recreation for design reference — auth is cosmetic, no real backend.
