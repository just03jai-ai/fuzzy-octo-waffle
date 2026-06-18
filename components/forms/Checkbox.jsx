import React from "react";
import { injectStyles, cx, useId } from "../lib/styles.js";

const CSS = `
.atl-cb { display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-sans); cursor: pointer; }
.atl-cb--disabled { cursor: not-allowed; }
.atl-cb__input { position: absolute; opacity: 0; width: 0; height: 0; }
.atl-cb__box {
  flex: none; width: 20px; height: 20px; margin-top: 1px; border-radius: var(--radius-xs);
  border: 1.5px solid var(--color-checkbox-border-default, var(--color-border-strong));
  background: var(--color-surface-default); color: var(--color-checkbox-glyph-checked, #fff);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard);
}
.atl-cb__box svg { width: 14px; height: 14px; opacity: 0; transform: scale(0.6); transition: opacity var(--duration-fast), transform var(--duration-fast) var(--ease-emphasized); }
.atl-cb__input:checked + .atl-cb__box,
.atl-cb__input:indeterminate + .atl-cb__box { background: var(--color-checkbox-bg-checked, var(--color-action-primary-bg-default)); border-color: var(--color-checkbox-bg-checked, var(--color-action-primary-bg-default)); }
.atl-cb__input:checked + .atl-cb__box svg,
.atl-cb__input:indeterminate + .atl-cb__box svg { opacity: 1; transform: scale(1); }
.atl-cb__input:focus-visible + .atl-cb__box { box-shadow: var(--shadow-focus); border-color: var(--color-border-focus); }
.atl-cb__input:disabled + .atl-cb__box { background: var(--color-surface-disabled); border-color: var(--color-border-disabled); }
.atl-cb--error .atl-cb__box { border-color: var(--color-border-danger); }
.atl-cb__body { display: flex; flex-direction: column; gap: 2px; }
.atl-cb__label { font-size: 14px; font-weight: 500; color: var(--color-text-primary); line-height: 1.4; }
.atl-cb--disabled .atl-cb__label { color: var(--color-text-disabled); }
.atl-cb__desc { font-size: 13px; color: var(--color-text-muted); line-height: 1.4; }
`;

const Check = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>);
const Dash = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /></svg>);

/** Checkbox — supports checked, indeterminate, description and error states. */
export function Checkbox({
  label,
  description,
  indeterminate = false,
  error = false,
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  injectStyles("checkbox", CSS);
  const autoId = useId("cb");
  const fieldId = id || autoId;
  const ref = React.useRef(null);
  React.useEffect(() => { if (ref.current) ref.current.indeterminate = indeterminate; }, [indeterminate]);
  return (
    <label htmlFor={fieldId} className={cx("atl-cb", disabled && "atl-cb--disabled", error && "atl-cb--error", className)}>
      <input ref={ref} id={fieldId} type="checkbox" className="atl-cb__input" disabled={disabled} aria-invalid={error || undefined} {...rest} />
      <span className="atl-cb__box">{indeterminate ? <Dash /> : <Check />}</span>
      {(label || description) && (
        <span className="atl-cb__body">
          {label && <span className="atl-cb__label">{label}</span>}
          {description && <span className="atl-cb__desc">{description}</span>}
        </span>
      )}
    </label>
  );
}
