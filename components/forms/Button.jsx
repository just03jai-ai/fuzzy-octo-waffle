import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

const CSS = `
.atl-btn {
  --_h: 40px; --_px: 16px; --_fs: 14px; --_gap: 8px;
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--_gap); height: var(--_h); padding: 0 var(--_px);
  font-family: var(--font-sans); font-size: var(--_fs); font-weight: 600;
  line-height: 1; letter-spacing: -0.006em; white-space: nowrap;
  border: 1px solid transparent; border-radius: var(--radius-control);
  cursor: pointer; user-select: none; text-decoration: none;
  transition: background var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard);
}
.atl-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.atl-btn:active:not(:disabled) { transform: translateY(0.5px); }
.atl-btn:disabled { cursor: not-allowed; opacity: 1; }
.atl-btn--full { width: 100%; }

/* sizes */
.atl-btn--sm { --_h: 32px; --_px: 12px; --_fs: 13px; --_gap: 6px; }
.atl-btn--md { --_h: 40px; --_px: 16px; --_fs: 14px; --_gap: 8px; }
.atl-btn--lg { --_h: 44px; --_px: 20px; --_fs: 15px; --_gap: 8px; }

/* primary */
.atl-btn--primary { background: var(--color-action-primary-bg-default); color: var(--color-action-primary-text-default); }
.atl-btn--primary:hover:not(:disabled) { background: var(--color-action-primary-bg-hover); }
.atl-btn--primary:active:not(:disabled) { background: var(--color-action-primary-bg-pressed); }
.atl-btn--primary:disabled { background: var(--color-action-primary-bg-disabled); color: var(--color-action-primary-text-disabled); }

/* secondary */
.atl-btn--secondary { background: var(--color-action-secondary-bg-default); color: var(--color-text-primary); border-color: var(--color-action-secondary-border-default); }
.atl-btn--secondary:hover:not(:disabled) { background: var(--color-action-secondary-bg-hover); }
.atl-btn--secondary:disabled { color: var(--color-text-disabled); border-color: var(--color-border-disabled); }

/* ghost */
.atl-btn--ghost { background: transparent; color: var(--color-text-primary); }
.atl-btn--ghost:hover:not(:disabled) { background: var(--color-action-ghost-bg-hover); color: var(--color-text-brand); }
.atl-btn--ghost:disabled { color: var(--color-text-disabled); }

/* destructive */
.atl-btn--destructive { background: var(--color-action-destructive-bg-default); color: var(--color-action-destructive-text-default); }
.atl-btn--destructive:hover:not(:disabled) { background: var(--color-action-destructive-bg-hover); }
.atl-btn--destructive:disabled { background: var(--color-surface-disabled); color: var(--color-text-disabled); }

/* link */
.atl-btn--link { background: transparent; color: var(--color-text-link); height: auto; padding: 0; border-radius: var(--radius-xs); }
.atl-btn--link:hover:not(:disabled) { text-decoration: underline; }

.atl-btn__spinner { width: 1em; height: 1em; border-radius: 999px; border: 2px solid currentColor; border-right-color: transparent; animation: atl-btn-spin 0.6s linear infinite; }
@keyframes atl-btn-spin { to { transform: rotate(360deg); } }
.atl-btn__icon { display: inline-flex; flex: none; }
`;

/**
 * Button — the primary action primitive.
 */
export function Button({
  variant = "primary",
  size = "md",
  type = "button",
  fullWidth = false,
  loading = false,
  disabled = false,
  iconLeading = null,
  iconTrailing = null,
  as = "button",
  className = "",
  children,
  ...rest
}) {
  injectStyles("button", CSS);
  const Tag = as;
  const cls = cx(
    "atl-btn",
    `atl-btn--${variant}`,
    `atl-btn--${size}`,
    fullWidth && "atl-btn--full",
    className
  );
  return (
    <Tag
      className={cls}
      type={Tag === "button" ? type : undefined}
      disabled={Tag === "button" ? disabled || loading : undefined}
      aria-busy={loading || undefined}
      aria-disabled={disabled || loading || undefined}
      {...rest}
    >
      {loading && <span className="atl-btn__spinner" aria-hidden="true" />}
      {!loading && iconLeading && <span className="atl-btn__icon">{iconLeading}</span>}
      {children}
      {!loading && iconTrailing && <span className="atl-btn__icon">{iconTrailing}</span>}
    </Tag>
  );
}
