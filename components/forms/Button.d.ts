import * as React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "link";
export type ButtonSize = "sm" | "md" | "lg";

/**
 * The primary action primitive. Five variants, three sizes, optional leading/
 * trailing icons and a loading state. Always renders a real focus ring.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. @default "primary" */
  variant?: ButtonVariant;
  /** Control height. @default "md" */
  size?: ButtonSize;
  /** Stretch to fill the container width. @default false */
  fullWidth?: boolean;
  /** Show a spinner and block interaction. @default false */
  loading?: boolean;
  /** Icon node rendered before the label. */
  iconLeading?: React.ReactNode;
  /** Icon node rendered after the label. */
  iconTrailing?: React.ReactNode;
  /** Render as a different element (e.g. "a" for links). @default "button" */
  as?: "button" | "a";
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): React.ReactElement;
