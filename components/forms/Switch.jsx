import React from "react";
import { injectStyles, cx, useId } from "../lib/styles.js";

const CSS = `
.atl-sw { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-sans); cursor: pointer; }
.atl-sw--disabled { cursor: not-allowed; }
.atl-sw__input { position: absolute; opacity: 0; width: 0; height: 0; }
.atl-sw__track {
  flex: none; position: relative; width: 40px; height: 24px; border-radius: 999px;
  background: var(--color-border-strong); transition: background var(--duration-normal) var(--ease-standard);
}
.atl-sw__track--sm { width: 32px; height: 18px; }
.atl-sw__track--lg { width: 48px; height: 28px; }
.atl-sw__thumb {
  position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; border-radius: 999px;
  background: #fff; box-shadow: 0 1px 2px rgba(15,23,42,.3);
  transition: transform var(--duration-normal) var(--ease-emphasized);
}
.atl-sw__track--sm .atl-sw__thumb { width: 14px; height: 14px; }
.atl-sw__track--lg .atl-sw__thumb { width: 24px; height: 24px; }
.atl-sw__input:checked + .atl-sw__track { background: var(--color-action-primary-bg-default); }
.atl-sw__input:checked + .atl-sw__track .atl-sw__thumb { transform: translateX(16px); }
.atl-sw__input:checked + .atl-sw__track--sm .atl-sw__thumb { transform: translateX(14px); }
.atl-sw__input:checked + .atl-sw__track--lg .atl-sw__thumb { transform: translateX(20px); }
.atl-sw__input:focus-visible + .atl-sw__track { box-shadow: var(--shadow-focus); }
.atl-sw__input:disabled + .atl-sw__track { opacity: 0.5; }
.atl-sw__body { display: flex; flex-direction: column; gap: 1px; }
.atl-sw__label { font-size: 14px; font-weight: 500; color: var(--color-text-primary); line-height: 1.4; }
.atl-sw--disabled .atl-sw__label { color: var(--color-text-disabled); }
.atl-sw__desc { font-size: 13px; color: var(--color-text-muted); line-height: 1.4; }
`;

/** Switch — binary on/off toggle for instant settings. */
export function Switch({
  label,
  description,
  size = "md",
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  injectStyles("switch", CSS);
  const autoId = useId("sw");
  const fieldId = id || autoId;
  return (
    <label htmlFor={fieldId} className={cx("atl-sw", disabled && "atl-sw--disabled", className)}>
      <input id={fieldId} type="checkbox" role="switch" className="atl-sw__input" disabled={disabled} {...rest} />
      <span className={cx("atl-sw__track", `atl-sw__track--${size}`)}>
        <span className="atl-sw__thumb" />
      </span>
      {(label || description) && (
        <span className="atl-sw__body">
          {label && <span className="atl-sw__label">{label}</span>}
          {description && <span className="atl-sw__desc">{description}</span>}
        </span>
      )}
    </label>
  );
}
