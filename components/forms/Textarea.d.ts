import * as React from "react";

/** Multi-line text field with an optional character counter and error state. */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
  /** Shows an `n/max` counter when set. */
  maxLength?: number;
}

export declare function Textarea(props: TextareaProps): React.ReactElement;
