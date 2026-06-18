import * as React from "react";

export type DropdownItem =
  | { type: "separator" }
  | { type: "label"; label: React.ReactNode }
  | {
      type?: "item";
      label: React.ReactNode;
      icon?: React.ReactNode;
      shortcut?: string;
      danger?: boolean;
      disabled?: boolean;
      onSelect?: () => void;
    };

/**
 * Click-triggered dropdown menu with outside-click / Escape dismissal.
 * Supports item, separator and label rows; danger items; keyboard shortcuts.
 */
export interface DropdownProps {
  /** The element that opens the menu (cloned with aria + onClick). */
  trigger: React.ReactElement;
  items: DropdownItem[];
  /** Horizontal alignment to the trigger. @default "start" */
  align?: "start" | "end";
  /** @default "bottom" */
  side?: "top" | "bottom";
  className?: string;
}

export declare function Dropdown(props: DropdownProps): React.ReactElement;
