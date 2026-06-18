import * as React from "react";

/** Single radio control. Group with a shared `name`; pair with label/description. */
export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
}

export declare function Radio(props: RadioProps): React.ReactElement;
