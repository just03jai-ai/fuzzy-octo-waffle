import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

const CSS = `
.atl-tag {
  display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-sans);
  font-size: 13px; font-weight: 500; line-height: 1; color: var(--color-text-secondary);
  padding: 5px 10px; border-radius: 999px; background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle); white-space: nowrap;
}
.atl-tag--removable { padding-right: 6px; }
.atl-tag__close {
  display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px;
  border-radius: 999px; border: none; background: transparent; color: var(--color-icon-muted); cursor: pointer;
  transition: background var(--duration-fast), color var(--duration-fast);
}
.atl-tag__close:hover { background: var(--color-border-default); color: var(--color-text-primary); }
.atl-tag__close svg { width: 11px; height: 11px; }
.atl-tag__dot { width: 8px; height: 8px; border-radius: 999px; flex: none; }
`;

const X = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);

/** Tag — a removable, pill-shaped descriptor (filters, multi-select chips). */
export function Tag({
  color,
  onRemove,
  className = "",
  children,
  ...rest
}) {
  injectStyles("tag", CSS);
  return (
    <span className={cx("atl-tag", onRemove && "atl-tag--removable", className)} {...rest}>
      {color && <span className="atl-tag__dot" style={{ background: color }} />}
      {children}
      {onRemove && (
        <button type="button" className="atl-tag__close" aria-label="Remove" onClick={onRemove}><X /></button>
      )}
    </span>
  );
}
