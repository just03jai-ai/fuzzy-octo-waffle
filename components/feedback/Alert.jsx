import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

const CSS = `
.atl-alert {
  display: flex; gap: 12px; padding: 14px 16px; border-radius: var(--radius-md);
  border: 1px solid; font-family: var(--font-sans); font-size: 14px; line-height: 1.5;
}
.atl-alert__icon { flex: none; margin-top: 1px; }
.atl-alert__icon svg { width: 18px; height: 18px; display: block; }
.atl-alert__body { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.atl-alert__title { font-weight: 600; color: var(--color-text-primary); }
.atl-alert__msg { color: var(--color-text-secondary); }
.atl-alert__actions { display: flex; gap: 8px; margin-top: 8px; }
.atl-alert__close { flex: none; border: none; background: transparent; color: var(--color-icon-muted); cursor: pointer; padding: 2px; border-radius: var(--radius-xs); align-self: flex-start; }
.atl-alert__close:hover { color: var(--color-text-primary); background: var(--color-surface-sunken); }
.atl-alert__close svg { width: 16px; height: 16px; display: block; }

.atl-alert--info { background: var(--color-status-info-bg); border-color: var(--color-status-info-border); }
.atl-alert--info .atl-alert__icon { color: var(--color-status-info-text); }
.atl-alert--success { background: var(--color-status-success-bg); border-color: var(--color-status-success-border); }
.atl-alert--success .atl-alert__icon { color: var(--color-status-success-text); }
.atl-alert--warning { background: var(--color-status-warning-bg); border-color: var(--color-status-warning-border); }
.atl-alert--warning .atl-alert__icon { color: var(--color-status-warning-text); }
.atl-alert--danger { background: var(--color-status-error-bg); border-color: var(--color-status-error-border); }
.atl-alert--danger .atl-alert__icon { color: var(--color-status-error-text); }
`;

const ICONS = {
  info: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>,
  success: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  warning: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
  danger: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>,
};
const X = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);

/** Alert — inline contextual message banner. */
export function Alert({
  tone = "info",
  title,
  actions,
  onClose,
  icon,
  className = "",
  children,
  ...rest
}) {
  injectStyles("alert", CSS);
  return (
    <div role="alert" className={cx("atl-alert", `atl-alert--${tone}`, className)} {...rest}>
      <span className="atl-alert__icon">{icon || ICONS[tone]}</span>
      <div className="atl-alert__body">
        {title && <div className="atl-alert__title">{title}</div>}
        {children && <div className="atl-alert__msg">{children}</div>}
        {actions && <div className="atl-alert__actions">{actions}</div>}
      </div>
      {onClose && <button type="button" className="atl-alert__close" aria-label="Dismiss" onClick={onClose}><X /></button>}
    </div>
  );
}
