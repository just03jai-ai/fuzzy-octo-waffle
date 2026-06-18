import * as React from "react";

export interface TableColumn<Row = any> {
  /** Key into the row object. */
  key: string;
  header: React.ReactNode;
  align?: "left" | "right";
  sortable?: boolean;
  width?: number | string;
  /** Custom cell renderer. */
  render?: (value: any, row: Row) => React.ReactNode;
}

/**
 * Data-driven table with internal client-side sorting on `sortable` columns,
 * optional striping, hover and compact density.
 */
export interface TableProps<Row = any> extends React.HTMLAttributes<HTMLTableElement> {
  columns: TableColumn<Row>[];
  data: Row[];
  striped?: boolean;
  /** @default true */
  hover?: boolean;
  compact?: boolean;
  /** Field used as the React key. @default "id" */
  rowKey?: string;
  onRowClick?: (row: Row) => void;
}

export declare function Table<Row = any>(props: TableProps<Row>): React.ReactElement;
