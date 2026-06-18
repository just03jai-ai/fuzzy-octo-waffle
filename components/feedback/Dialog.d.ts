import * as React from "react";

/**
 * Modal dialog with scrim, Escape / backdrop dismissal and body scroll lock.
 * Controlled via `open` / `onClose`. Provide `footer` for action buttons.
 */
export interface DialogProps {
  open: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  /** @default "md" */
  size?: "sm" | "md" | "lg" | "xl";
  /** Vertical placement. @default "center" */
  align?: "center" | "top";
  /** Footer action row (right-aligned). */
  footer?: React.ReactNode;
  /** @default true */
  closeOnBackdrop?: boolean;
  /** @default true */
  showClose?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export declare function Dialog(props: DialogProps): React.ReactElement | null;
