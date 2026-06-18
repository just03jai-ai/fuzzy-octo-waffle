import * as React from "react";

export type AlertTone = "info" | "success" | "warning" | "danger";

/** Inline contextual message banner with tone icon, optional title & actions. */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** @default "info" */
  tone?: AlertTone;
  title?: React.ReactNode;
  /** Action row (e.g. buttons) rendered below the message. */
  actions?: React.ReactNode;
  /** Shows a dismiss button when provided. */
  onClose?: () => void;
  /** Override the default tone icon. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Alert(props: AlertProps): React.ReactElement;
