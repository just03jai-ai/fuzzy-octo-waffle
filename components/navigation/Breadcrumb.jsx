import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

const CSS = `
.atl-bc { display: flex; align-items: center; flex-wrap: wrap; gap: 2px; font-family: var(--font-sans); font-size: 14px; }
.atl-bc__item { display: inline-flex; align-items: center; gap: 5px; color: var(--color-text-muted); text-decoration: none; padding: 3px 6px; border-radius: var(--radius-xs); transition: color var(--duration-fast), background var(--duration-fast); }
.atl-bc__item:hover { color: var(--color-text-secondary); background: var(--color-surface-sunken); }
.atl-bc__item svg { width: 15px; height: 15px; }
.atl-bc__item--current { color: var(--color-text-primary); font-weight: 500; pointer-events: none; }
.atl-bc__sep { color: var(--color-icon-disabled); display: inline-flex; }
.atl-bc__sep svg { width: 16px; height: 16px; }
`;

const Slash = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>);

/** Breadcrumb — hierarchical location trail. `items`: {label,href,icon}. */
export function Breadcrumb({ items = [], className = "", ...rest }) {
  injectStyles("breadcrumb", CSS);
  return (
    <nav aria-label="Breadcrumb" className={cx("atl-bc", className)} {...rest}>
      {items.map((it, i) => {
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            <a
              href={it.href || "#"}
              className={cx("atl-bc__item", last && "atl-bc__item--current")}
              aria-current={last ? "page" : undefined}
            >
              {it.icon}
              {it.label}
            </a>
            {!last && <span className="atl-bc__sep" aria-hidden="true"><Slash /></span>}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
