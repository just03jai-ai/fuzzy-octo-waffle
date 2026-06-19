import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

const CSS = `
.atl-badge {
  display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-sans);
  font-size: 12px; font-weight: 600; line-height: 1; letter-spacing: 0.005em;
  padding: 4px 8px; border-radius: var(--radius-sm); border: 1px solid transparent; white-space: nowrap;
}
.atl-badge--pill { border-radius: 999px; }
.atl-badge--sm { font-size: 11px; padding: 3px 7px; }
.atl-badge--lg { font-size: 13px; padding: 5px 10px; }
.atl-badge__dot { width: 6px; height: 6px; border-radius: 999px; background: currentColor; flex: none; }
.atl-badge svg { width: 13px; height: 13px; }

.atl-badge--neutral { background: var(--color-surface-sunken); color: var(--color-text-secondary); border-color: var(--color-border-subtle); }
.atl-badge--brand { background: var(--color-surface-brand); color: var(--color-text-brand); }
.atl-badge--success { background: var(--color-status-success-bg); color: var(--color-status-success-text); }
.atl-badge--warning { background: var(--color-status-warning-bg); color: var(--color-status-warning-text); }
.atl-badge--danger { background: var(--color-status-error-bg); color: var(--color-status-error-text); }
.atl-badge--info { background: var(--color-status-info-bg); color: var(--color-status-info-text); }
.atl-badge--ai { background: var(--color-ai-generated-bg); color: var(--color-ai-generated-text); }

.atl-badge--solid.atl-badge--neutral { background: var(--color-neutral-700); color: #fff; }
.atl-badge--solid.atl-badge--brand { background: var(--color-action-primary-bg-default); color: var(--color-action-primary-text-default); }
.atl-badge--solid.atl-badge--success { background: var(--color-success-bg); color: #fff; }
.atl-badge--solid.atl-badge--warning { background: var(--color-warning-500); color: #fff; }
.atl-badge--solid.atl-badge--danger { background: var(--color-action-destructive-bg-default); color: #fff; }
`;

/** Badge — compact status / count label. Soft by default, `solid` for emphasis. */
export function Badge({
  tone = "neutral",
  solid = false,
  size = "md",
  pill = false,
  dot = false,
  icon = null,
  className = "",
  children,
  ...rest
}) {
  injectStyles("badge", CSS);
  return (
    <span className={cx("atl-badge", `atl-badge--${tone}`, `atl-badge--${size}`, solid && "atl-badge--solid", pill && "atl-badge--pill", className)} {...rest}>
      {dot && <span className="atl-badge__dot" />}
      {icon}
      {children}
    </span>
  );
}
