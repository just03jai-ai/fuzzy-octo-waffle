import * as React from "react";

/** Binary on/off toggle. Use for settings that apply immediately. */
export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
}

export declare function Switch(props: SwitchProps): React.ReactElement;
