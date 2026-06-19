import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

const CSS = `
.atl-iconbtn {
  --_s: 40px;
  display: inline-flex; align-items: center; justify-content: center;
  width: var(--_s); height: var(--_s); flex: none;
  border: 1px solid transparent; border-radius: var(--radius-control);
  background: transparent; color: var(--color-icon-secondary); cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
}
.atl-iconbtn svg { width: 20px; height: 20px; display: block; }
.atl-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.atl-iconbtn:disabled { cursor: not-allowed; color: var(--color-icon-disabled); }
.atl-iconbtn--sm { --_s: 32px; } .atl-iconbtn--sm svg { width: 16px; height: 16px; }
.atl-iconbtn--md { --_s: 40px; }
.atl-iconbtn--lg { --_s: 44px; } .atl-iconbtn--lg svg { width: 24px; height: 24px; }
.atl-iconbtn--ghost:hover:not(:disabled) { background: var(--color-action-ghost-bg-hover); color: var(--color-text-brand); }
.atl-iconbtn--solid { background: var(--color-action-primary-bg-default); color: var(--color-action-primary-text-default); }
.atl-iconbtn--solid:hover:not(:disabled) { background: var(--color-action-primary-bg-hover); }
.atl-iconbtn--outline { border-color: var(--color-border-default); color: var(--color-icon-primary); }
.atl-iconbtn--outline:hover:not(:disabled) { background: var(--color-surface-muted); }
`;

/** IconButton — a square, icon-only control with an accessible label. */
export function IconButton({
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  injectStyles("iconbtn", CSS);
  return (
    <button
      type="button"
      className={cx("atl-iconbtn", `atl-iconbtn--${variant}`, `atl-iconbtn--${size}`, className)}
      aria-label={label}
      title={label}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
