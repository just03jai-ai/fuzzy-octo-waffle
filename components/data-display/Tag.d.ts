import * as React from "react";

/** Removable pill descriptor — filters, multi-select chips, labels. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Optional leading colour dot. */
  color?: string;
  /** When provided, renders a remove (×) button. */
  onRemove?: () => void;
  children?: React.ReactNode;
}

export declare function Tag(props: TagProps): React.ReactElement;
