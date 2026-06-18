import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

const CSS = `
.atl-dd { position: relative; display: inline-flex; }
.atl-dd__menu {
  position: absolute; z-index: var(--z-dropdown, 300); min-width: 200px; padding: 6px;
  background: var(--color-surface-overlay, var(--color-surface-default));
  border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg); font-family: var(--font-sans);
  animation: atl-dd-in var(--duration-fast) var(--ease-emphasized); transform-origin: top;
}
@keyframes atl-dd-in { from { opacity: 0; transform: translateY(-4px) scale(0.98); } to { opacity: 1; transform: none; } }
.atl-dd__menu--end { right: 0; } .atl-dd__menu--start { left: 0; }
.atl-dd__menu--top { bottom: calc(100% + 6px); } .atl-dd__menu--bottom { top: calc(100% + 6px); }
.atl-dd__label { font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-text-muted); padding: 6px 10px 4px; }
.atl-dd__item {
  display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; text-align: left;
  padding: 8px 10px; border: none; background: transparent; border-radius: var(--radius-sm); cursor: pointer;
  font-family: inherit; font-size: 14px; color: var(--color-text-secondary); transition: background var(--duration-fast), color var(--duration-fast);
}
.atl-dd__item:hover:not(:disabled), .atl-dd__item:focus-visible { background: var(--color-surface-selected); color: var(--color-text-primary); outline: none; }
.atl-dd__item:disabled { color: var(--color-text-disabled); cursor: not-allowed; }
.atl-dd__item--danger { color: var(--color-text-danger); }
.atl-dd__item--danger:hover:not(:disabled) { background: var(--color-status-error-bg); color: var(--color-text-danger); }
.atl-dd__item svg { width: 16px; height: 16px; flex: none; }
.atl-dd__shortcut { margin-left: auto; font-size: 12px; color: var(--color-text-muted); font-variant-numeric: tabular-nums; }
.atl-dd__sep { height: 1px; background: var(--color-border-subtle); margin: 6px 4px; }
`;

/**
 * Dropdown menu. Pass a `trigger` element and `items`
 * ({label,icon,shortcut,danger,disabled,onSelect} | {type:"separator"} | {type:"label",label}).
 */
export function Dropdown({
  trigger,
  items = [],
  align = "start",
  side = "bottom",
  className = "",
}) {
  injectStyles("dropdown", CSS);
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, [open]);
  return (
    <span className={cx("atl-dd", className)} ref={ref}>
      {React.cloneElement(React.Children.only(trigger), {
        onClick: (e) => { trigger.props.onClick && trigger.props.onClick(e); setOpen((o) => !o); },
        "aria-haspopup": "menu",
        "aria-expanded": open,
      })}
      {open && (
        <div className={cx("atl-dd__menu", `atl-dd__menu--${align}`, `atl-dd__menu--${side}`)} role="menu">
          {items.map((it, i) => {
            if (it.type === "separator") return <div key={i} className="atl-dd__sep" role="separator" />;
            if (it.type === "label") return <div key={i} className="atl-dd__label">{it.label}</div>;
            return (
              <button
                key={i}
                role="menuitem"
                type="button"
                className={cx("atl-dd__item", it.danger && "atl-dd__item--danger")}
                disabled={it.disabled}
                onClick={() => { it.onSelect && it.onSelect(); setOpen(false); }}
              >
                {it.icon}
                <span>{it.label}</span>
                {it.shortcut && <span className="atl-dd__shortcut">{it.shortcut}</span>}
              </button>
            );
          })}
        </div>
      )}
    </span>
  );
}
