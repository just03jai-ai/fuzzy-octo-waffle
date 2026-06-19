import React from "react";
import { injectStyles, cx, useId } from "../lib/styles.js";

const CSS = `
.atl-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.atl-field__label { font-size: 14px; font-weight: 500; color: var(--color-text-secondary); display: inline-flex; gap: 4px; align-items: center; }
.atl-field__req { color: var(--color-text-danger); }
.atl-field__optional { color: var(--color-text-muted); font-weight: 400; }
.atl-inputwrap {
  display: flex; align-items: center; gap: 8px;
  height: 40px; padding: 0 12px;
  background: var(--color-surface-default);
  border: 1px solid var(--color-input-border-default, var(--color-border-default));
  border-radius: var(--radius-control);
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
}
.atl-inputwrap--sm { height: 32px; padding: 0 10px; }
.atl-inputwrap--lg { height: 44px; padding: 0 14px; }
.atl-inputwrap:focus-within { border-color: var(--color-border-focus); box-shadow: var(--shadow-focus); }
.atl-inputwrap--error { border-color: var(--color-border-danger); }
.atl-inputwrap--error:focus-within { box-shadow: 0 0 0 3px rgba(239,68,68,.28); }
.atl-inputwrap--disabled { background: var(--color-surface-disabled); cursor: not-allowed; }
.atl-inputwrap__adorn { display: inline-flex; flex: none; color: var(--color-icon-muted); }
.atl-inputwrap__adorn svg { width: 18px; height: 18px; display: block; }
.atl-input {
  flex: 1 1 auto; min-width: 0; border: none; outline: none; background: transparent;
  font-family: var(--font-sans); font-size: 14px; color: var(--color-text-primary);
}
.atl-input::placeholder { color: var(--color-input-text-placeholder, var(--color-text-muted)); }
.atl-input:disabled { cursor: not-allowed; color: var(--color-text-disabled); }
.atl-field__help { font-size: 13px; color: var(--color-text-muted); }
.atl-field__help--error { color: var(--color-text-danger); }
`;

/** Input — labelled text field with helper / error text and adornments. */
export function Input({
  label,
  size = "md",
  type = "text",
  required = false,
  optional = false,
  error,
  helperText,
  iconLeading = null,
  iconTrailing = null,
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  injectStyles("input", CSS);
  const autoId = useId("input");
  const fieldId = id || autoId;
  const describedBy = error ? `${fieldId}-err` : helperText ? `${fieldId}-help` : undefined;
  return (
    <div className={cx("atl-field", className)}>
      {label && (
        <label className="atl-field__label" htmlFor={fieldId}>
          {label}
          {required && <span className="atl-field__req" aria-hidden="true">*</span>}
          {optional && <span className="atl-field__optional">(optional)</span>}
        </label>
      )}
      <div className={cx("atl-inputwrap", `atl-inputwrap--${size}`, error && "atl-inputwrap--error", disabled && "atl-inputwrap--disabled")}>
        {iconLeading && <span className="atl-inputwrap__adorn">{iconLeading}</span>}
        <input
          id={fieldId}
          type={type}
          className="atl-input"
          disabled={disabled}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...rest}
        />
        {iconTrailing && <span className="atl-inputwrap__adorn">{iconTrailing}</span>}
      </div>
      {error ? (
        <span id={`${fieldId}-err`} className="atl-field__help atl-field__help--error">{error}</span>
      ) : helperText ? (
        <span id={`${fieldId}-help`} className="atl-field__help">{helperText}</span>
      ) : null}
    </div>
  );
}
