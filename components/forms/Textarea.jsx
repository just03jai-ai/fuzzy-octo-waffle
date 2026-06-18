import React from "react";
import { injectStyles, cx, useId } from "../lib/styles.js";

const CSS = `
.atl-ta-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.atl-ta-field__label { font-size: 14px; font-weight: 500; color: var(--color-text-secondary); }
.atl-ta {
  width: 100%; box-sizing: border-box; resize: vertical; min-height: 88px;
  padding: 10px 12px; font-family: var(--font-sans); font-size: 14px; line-height: 1.55;
  color: var(--color-text-primary); background: var(--color-surface-default);
  border: 1px solid var(--color-border-default); border-radius: var(--radius-control);
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
}
.atl-ta::placeholder { color: var(--color-text-muted); }
.atl-ta:focus-visible { outline: none; border-color: var(--color-border-focus); box-shadow: var(--shadow-focus); }
.atl-ta--error { border-color: var(--color-border-danger); }
.atl-ta:disabled { background: var(--color-surface-disabled); color: var(--color-text-disabled); cursor: not-allowed; }
.atl-ta-field__foot { display: flex; justify-content: space-between; gap: 12px; }
.atl-ta-field__help { font-size: 13px; color: var(--color-text-muted); }
.atl-ta-field__help--error { color: var(--color-text-danger); }
.atl-ta-field__count { font-size: 13px; color: var(--color-text-muted); margin-left: auto; font-variant-numeric: tabular-nums; }
`;

/** Textarea — multi-line text field with optional character counter. */
export function Textarea({
  label,
  error,
  helperText,
  maxLength,
  value,
  defaultValue,
  rows = 4,
  disabled = false,
  id,
  className = "",
  onChange,
  ...rest
}) {
  injectStyles("textarea", CSS);
  const autoId = useId("ta");
  const fieldId = id || autoId;
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const current = value !== undefined ? value : internal;
  const count = typeof current === "string" ? current.length : 0;
  return (
    <div className={cx("atl-ta-field", className)}>
      {label && <label className="atl-ta-field__label" htmlFor={fieldId}>{label}</label>}
      <textarea
        id={fieldId}
        rows={rows}
        maxLength={maxLength}
        value={current}
        disabled={disabled}
        aria-invalid={error ? true : undefined}
        className={cx("atl-ta", error && "atl-ta--error")}
        onChange={(e) => { if (value === undefined) setInternal(e.target.value); onChange && onChange(e); }}
        {...rest}
      />
      <div className="atl-ta-field__foot">
        {error ? (
          <span className="atl-ta-field__help atl-ta-field__help--error">{error}</span>
        ) : helperText ? (
          <span className="atl-ta-field__help">{helperText}</span>
        ) : <span />}
        {maxLength && <span className="atl-ta-field__count">{count}/{maxLength}</span>}
      </div>
    </div>
  );
}
