import * as React from "react";

export type InputSize = "sm" | "md" | "lg";

/**
 * Labelled text field with helper text, error state and optional leading /
 * trailing icon adornments. Wires up label/aria-describedby/aria-invalid.
 */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Field label rendered above the control. */
  label?: string;
  /** @default "md" */
  size?: InputSize;
  /** Marks the field required (adds *). */
  required?: boolean;
  /** Adds an "(optional)" hint next to the label. */
  optional?: boolean;
  /** Error message — switches the field to its error style. */
  error?: string;
  /** Helper text shown below when there is no error. */
  helperText?: string;
  /** Icon node inside the field, before the text. */
  iconLeading?: React.ReactNode;
  /** Icon node inside the field, after the text. */
  iconTrailing?: React.ReactNode;
}

export declare function Input(props: InputProps): React.ReactElement;
