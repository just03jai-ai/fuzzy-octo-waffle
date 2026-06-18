import * as React from "react";

export interface TabItem {
  value: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  /** Count / status chip shown after the label. */
  badge?: React.ReactNode;
  disabled?: boolean;
}

/**
 * Tabbed navigation. Controlled (`value`) or uncontrolled (`defaultValue`).
 * `children` may be a render function receiving the active value.
 */
export interface TabsProps {
  items: TabItem[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** @default "line" */
  variant?: "line" | "pill";
  className?: string;
  children?: React.ReactNode | ((active: string) => React.ReactNode);
}

export declare function Tabs(props: TabsProps): React.ReactElement;
