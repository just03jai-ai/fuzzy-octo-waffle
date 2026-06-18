import React from "react";
import { injectStyles, cx, useId } from "../lib/styles.js";

const CSS = `
.atl-rb { display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-sans); cursor: pointer; }
.atl-rb--disabled { cursor: not-allowed; }
.atl-rb__input { position: absolute; opacity: 0; width: 0; height: 0; }
.atl-rb__dot {
  flex: none; width: 20px; height: 20px; margin-top: 1px; border-radius: 999px;
  border: 1.5px solid var(--color-border-strong); background: var(--color-surface-default);
  display: inline-flex; align-items: center; justify-content: center;
  transition: border-color var(--duration-fast) var(--ease-standard);
}
.atl-rb__dot::after { content: ""; width: 8px; height: 8px; border-radius: 999px; background: var(--color-action-primary-bg-default); transform: scale(0); transition: transform var(--duration-fast) var(--ease-emphasized); }
.atl-rb__input:checked + .atl-rb__dot { border-color: var(--color-action-primary-bg-default); }
.atl-rb__input:checked + .atl-rb__dot::after { transform: scale(1); }
.atl-rb__input:focus-visible + .atl-rb__dot { box-shadow: var(--shadow-focus); border-color: var(--color-border-focus); }
.atl-rb__input:disabled + .atl-rb__dot { background: var(--color-surface-disabled); border-color: var(--color-border-disabled); }
.atl-rb__body { display: flex; flex-direction: column; gap: 2px; }
.atl-rb__label { font-size: 14px; font-weight: 500; color: var(--color-text-primary); line-height: 1.4; }
.atl-rb--disabled .atl-rb__label { color: var(--color-text-disabled); }
.atl-rb__desc { font-size: 13px; color: var(--color-text-muted); line-height: 1.4; }
`;

/** Radio — single-choice control. Group several with a shared `name`. */
export function Radio({
  label,
  description,
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  injectStyles("radio", CSS);
  const autoId = useId("rb");
  const fieldId = id || autoId;
  return (
    <label htmlFor={fieldId} className={cx("atl-rb", disabled && "atl-rb--disabled", className)}>
      <input id={fieldId} type="radio" className="atl-rb__input" disabled={disabled} {...rest} />
      <span className="atl-rb__dot" />
      {(label || description) && (
        <span className="atl-rb__body">
          {label && <span className="atl-rb__label">{label}</span>}
          {description && <span className="atl-rb__desc">{description}</span>}
        </span>
      )}
    </label>
  );
}
