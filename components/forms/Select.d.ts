import * as React from "react";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

/**
 * Styled native select. Provide `options` (array) or raw <option> children.
 * Set `placeholder` for an empty leading option.
 */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  label?: string;
  size?: "sm" | "md" | "lg";
  options?: SelectOption[];
  placeholder?: string;
  error?: string;
  helperText?: string;
}

export declare function Select(props: SelectProps): React.ReactElement;
