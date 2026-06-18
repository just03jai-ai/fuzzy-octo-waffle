import React from "react";
import { injectStyles, cx, useId } from "../lib/styles.js";

const CSS = `
.atl-sel-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.atl-sel-field__label { font-size: 14px; font-weight: 500; color: var(--color-text-secondary); }
.atl-sel-wrap { position: relative; display: flex; align-items: center; }
.atl-sel {
  appearance: none; -webkit-appearance: none; width: 100%; box-sizing: border-box;
  height: 40px; padding: 0 36px 0 12px; font-family: var(--font-sans); font-size: 14px;
  color: var(--color-text-primary); background: var(--color-surface-default);
  border: 1px solid var(--color-border-default); border-radius: var(--radius-control); cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
}
.atl-sel--sm { height: 32px; font-size: 13px; }
.atl-sel--lg { height: 44px; }
.atl-sel:focus-visible { outline: none; border-color: var(--color-border-focus); box-shadow: var(--shadow-focus); }
.atl-sel--error { border-color: var(--color-border-danger); }
.atl-sel:disabled { background: var(--color-surface-disabled); color: var(--color-text-disabled); cursor: not-allowed; }
.atl-sel--placeholder { color: var(--color-text-muted); }
.atl-sel-wrap__chevron { position: absolute; right: 12px; pointer-events: none; color: var(--color-icon-muted); display: inline-flex; }
.atl-sel-field__help { font-size: 13px; color: var(--color-text-muted); }
.atl-sel-field__help--error { color: var(--color-text-danger); }
`;

const Chevron = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
);

/** Select — styled native dropdown. Pass `options` or <option> children. */
export function Select({
  label,
  size = "md",
  options,
  placeholder,
  error,
  helperText,
  value,
  defaultValue,
  disabled = false,
  id,
  className = "",
  children,
  ...rest
}) {
  injectStyles("select", CSS);
  const autoId = useId("sel");
  const fieldId = id || autoId;
  const isPlaceholder = (value ?? defaultValue ?? "") === "";
  return (
    <div className={cx("atl-sel-field", className)}>
      {label && <label className="atl-sel-field__label" htmlFor={fieldId}>{label}</label>}
      <div className="atl-sel-wrap">
        <select
          id={fieldId}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          className={cx("atl-sel", `atl-sel--${size}`, error && "atl-sel--error", placeholder && isPlaceholder && "atl-sel--placeholder")}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options
            ? options.map((o) => (
                <option key={o.value} value={o.value} disabled={o.disabled}>{o.label}</option>
              ))
            : children}
        </select>
        <span className="atl-sel-wrap__chevron"><Chevron /></span>
      </div>
      {error ? (
        <span className="atl-sel-field__help atl-sel-field__help--error">{error}</span>
      ) : helperText ? (
        <span className="atl-sel-field__help">{helperText}</span>
      ) : null}
    </div>
  );
}
