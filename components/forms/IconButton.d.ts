import * as React from "react";

export type IconButtonVariant = "ghost" | "solid" | "outline";
export type IconButtonSize = "sm" | "md" | "lg";

/**
 * Square, icon-only control. Requires an accessible `label` (used for both
 * aria-label and the native tooltip). Pass an SVG icon as children.
 */
export interface IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "aria-label"> {
  /** @default "ghost" */
  variant?: IconButtonVariant;
  /** @default "md" */
  size?: IconButtonSize;
  /** Accessible label — required. */
  label: string;
  children?: React.ReactNode;
}

export declare function IconButton(props: IconButtonProps): React.ReactElement;
