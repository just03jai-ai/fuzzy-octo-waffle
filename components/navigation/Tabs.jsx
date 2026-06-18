import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

const CSS = `
.atl-tabs { font-family: var(--font-sans); }
.atl-tabs__list { display: flex; gap: 4px; position: relative; }
.atl-tabs--line .atl-tabs__list { border-bottom: 1px solid var(--color-border-subtle); gap: 8px; }
.atl-tabs__tab {
  appearance: none; border: none; background: transparent; cursor: pointer; font-family: inherit;
  font-size: 14px; font-weight: 500; color: var(--color-text-muted); display: inline-flex; align-items: center; gap: 7px;
  transition: color var(--duration-fast), background var(--duration-fast);
}
.atl-tabs__tab svg { width: 16px; height: 16px; }
.atl-tabs__tab:disabled { color: var(--color-text-disabled); cursor: not-allowed; }
.atl-tabs__tab:focus-visible { outline: none; box-shadow: var(--shadow-focus); border-radius: var(--radius-sm); }

.atl-tabs--line .atl-tabs__tab { padding: 10px 4px; margin-bottom: -1px; border-bottom: 2px solid transparent; }
.atl-tabs--line .atl-tabs__tab:hover:not(:disabled) { color: var(--color-text-secondary); }
.atl-tabs--line .atl-tabs__tab[aria-selected="true"] { color: var(--color-text-brand); border-bottom-color: var(--color-action-primary-bg-default); }

.atl-tabs--pill .atl-tabs__list { background: var(--color-surface-sunken); padding: 4px; border-radius: var(--radius-md); gap: 2px; display: inline-flex; }
.atl-tabs--pill .atl-tabs__tab { padding: 7px 14px; border-radius: var(--radius-sm); }
.atl-tabs--pill .atl-tabs__tab:hover:not(:disabled) { color: var(--color-text-secondary); }
.atl-tabs--pill .atl-tabs__tab[aria-selected="true"] { color: var(--color-text-primary); background: var(--color-surface-default); box-shadow: var(--shadow-xs); }

.atl-tabs__badge { font-size: 11px; font-weight: 600; padding: 1px 6px; border-radius: 999px; background: var(--color-surface-sunken); color: var(--color-text-muted); }
.atl-tabs__tab[aria-selected="true"] .atl-tabs__badge { background: var(--color-surface-brand); color: var(--color-text-brand); }
.atl-tabs__panel { padding-top: 16px; }
`;

/** Tabs — controlled or uncontrolled. `items`: {value,label,icon,badge,disabled}. */
export function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "line",
  className = "",
  children,
}) {
  injectStyles("tabs", CSS);
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = (v) => { if (value === undefined) setInternal(v); onChange && onChange(v); };
  return (
    <div className={cx("atl-tabs", `atl-tabs--${variant}`, className)}>
      <div className="atl-tabs__list" role="tablist">
        {items.map((it) => (
          <button
            key={it.value}
            role="tab"
            type="button"
            className="atl-tabs__tab"
            aria-selected={active === it.value}
            disabled={it.disabled}
            onClick={() => select(it.value)}
          >
            {it.icon}
            {it.label}
            {it.badge != null && <span className="atl-tabs__badge">{it.badge}</span>}
          </button>
        ))}
      </div>
      {children && <div className="atl-tabs__panel" role="tabpanel">{typeof children === "function" ? children(active) : children}</div>}
    </div>
  );
}
