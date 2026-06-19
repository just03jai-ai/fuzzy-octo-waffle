import * as React from "react";

export type ToastTone = "info" | "success" | "warning" | "danger";

export interface ToastOptions {
  tone?: ToastTone;
  title?: React.ReactNode;
  message?: React.ReactNode;
  /** Auto-dismiss ms; 0 keeps it until dismissed. */
  duration?: number;
}

export interface ToastProps extends ToastOptions {
  onClose?: () => void;
  leaving?: boolean;
  className?: string;
}

/** Controlled single toast surface. */
export declare function Toast(props: ToastProps): React.ReactElement;

export interface ToastProviderProps {
  position?: "top-right" | "bottom-right" | "bottom-center";
  /** Default auto-dismiss ms. @default 4000 */
  duration?: number;
  children?: React.ReactNode;
}
/** Provider that renders the toast region and supplies the useToast() API. */
export declare function ToastProvider(props: ToastProviderProps): React.ReactElement;

/** Returns `{ toast(opts), dismiss(id) }`. Must be used under a ToastProvider. */
export declare function useToast(): {
  toast: (opts: ToastOptions) => string;
  dismiss: (id: string) => void;
};
