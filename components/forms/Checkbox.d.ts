import * as React from "react";

/** Checkbox with label, description, indeterminate and error states. */
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  /** Renders the dash glyph instead of a check. */
  indeterminate?: boolean;
  error?: boolean;
}

export declare function Checkbox(props: CheckboxProps): React.ReactElement;
