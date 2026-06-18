import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

const CSS = `
.atl-table-wrap { width: 100%; overflow-x: auto; border: 1px solid var(--color-border-subtle); border-radius: var(--radius-card); background: var(--color-surface-default); }
.atl-table { width: 100%; border-collapse: separate; border-spacing: 0; font-family: var(--font-sans); font-size: 14px; }
.atl-table thead th {
  position: sticky; top: 0; text-align: left; font-size: 12px; font-weight: 600; letter-spacing: 0.02em;
  text-transform: uppercase; color: var(--color-text-muted); background: var(--color-surface-muted);
  padding: 10px 16px; border-bottom: 1px solid var(--color-border-subtle); white-space: nowrap;
}
.atl-table th.atl-table__sortable { cursor: pointer; user-select: none; }
.atl-table th.atl-table__sortable:hover { color: var(--color-text-secondary); }
.atl-table__sorticon { display: inline-flex; vertical-align: middle; margin-left: 4px; opacity: 0.5; }
.atl-table__sorticon--active { opacity: 1; color: var(--color-text-brand); }
.atl-table tbody td { padding: 12px 16px; border-bottom: 1px solid var(--color-border-subtle); color: var(--color-text-secondary); vertical-align: middle; }
.atl-table tbody tr:last-child td { border-bottom: none; }
.atl-table--striped tbody tr:nth-child(even) { background: var(--color-surface-muted); }
.atl-table--hover tbody tr { transition: background var(--duration-fast); }
.atl-table--hover tbody tr:hover { background: var(--color-surface-selected); }
.atl-table td.atl-table__num, .atl-table th.atl-table__num { text-align: right; font-variant-numeric: tabular-nums; }
.atl-table--compact tbody td { padding: 8px 16px; }
.atl-table--compact thead th { padding: 8px 16px; }
`;

const SortIcon = ({ dir }) => (
  <span className={cx("atl-table__sorticon", dir && "atl-table__sorticon--active")}>
    {dir === "desc"
      ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
      : <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15" /></svg>}
  </span>
);

/**
 * Table — data-driven. Pass `columns` ({key,header,align,sortable,render}) and
 * `data`. Sorting is handled internally when a column is `sortable`.
 */
export function Table({
  columns = [],
  data = [],
  striped = false,
  hover = true,
  compact = false,
  rowKey = "id",
  onRowClick,
  className = "",
  ...rest
}) {
  injectStyles("table", CSS);
  const [sort, setSort] = React.useState(null);
  const sorted = React.useMemo(() => {
    if (!sort) return data;
    const col = columns.find((c) => c.key === sort.key);
    if (!col) return data;
    const arr = [...data].sort((a, b) => {
      const av = a[sort.key], bv = b[sort.key];
      if (av == null) return 1; if (bv == null) return -1;
      if (typeof av === "number" && typeof bv === "number") return av - bv;
      return String(av).localeCompare(String(bv));
    });
    return sort.dir === "desc" ? arr.reverse() : arr;
  }, [data, sort, columns]);

  const toggle = (key) => setSort((s) => s && s.key === key ? (s.dir === "asc" ? { key, dir: "desc" } : null) : { key, dir: "asc" });

  return (
    <div className={cx("atl-table-wrap", className)}>
      <table className={cx("atl-table", striped && "atl-table--striped", hover && "atl-table--hover", compact && "atl-table--compact")} {...rest}>
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c.key}
                className={cx(c.align === "right" && "atl-table__num", c.sortable && "atl-table__sortable")}
                style={c.width ? { width: c.width } : undefined}
                onClick={c.sortable ? () => toggle(c.key) : undefined}
                aria-sort={sort && sort.key === c.key ? (sort.dir === "asc" ? "ascending" : "descending") : undefined}
              >
                {c.header}
                {c.sortable && <SortIcon dir={sort && sort.key === c.key ? sort.dir : null} />}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.map((row, i) => (
            <tr key={row[rowKey] ?? i} onClick={onRowClick ? () => onRowClick(row) : undefined} style={onRowClick ? { cursor: "pointer" } : undefined}>
              {columns.map((c) => (
                <td key={c.key} className={cx(c.align === "right" && "atl-table__num")}>
                  {c.render ? c.render(row[c.key], row) : row[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
