import * as React from "react";

export type BadgeTone = "neutral" | "brand" | "success" | "warning" | "danger" | "info" | "ai";

/** Compact status / count label. Soft fill by default; `solid` for high emphasis. */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default "neutral" */
  tone?: BadgeTone;
  /** High-emphasis filled style. */
  solid?: boolean;
  size?: "sm" | "md" | "lg";
  /** Fully rounded. */
  pill?: boolean;
  /** Leading status dot. */
  dot?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): React.ReactElement;
