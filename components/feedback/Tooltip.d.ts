import * as React from "react";

/** Hover / focus tooltip. Wraps a single trigger element as its child. */
export interface TooltipProps {
  content: React.ReactNode;
  /** @default "top" */
  side?: "top" | "bottom" | "left" | "right";
  /** Open delay in ms. @default 200 */
  delay?: number;
  className?: string;
  children: React.ReactElement;
}

export declare function Tooltip(props: TooltipProps): React.ReactElement;
