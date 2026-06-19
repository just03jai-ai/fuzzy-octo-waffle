/* @ds-bundle: {"format":3,"namespace":"AtlasDesignSystem_221c8f","components":[{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Table","sourcePath":"components/data-display/Table.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastProvider","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dropdown","sourcePath":"components/overlays/Dropdown.jsx"}],"sourceHashes":{"components/data-display/Avatar.jsx":"a7bb83249dcb","components/data-display/Badge.jsx":"18d2677c8918","components/data-display/Card.jsx":"51fa7fb1c212","components/data-display/Table.jsx":"66393c512046","components/data-display/Tag.jsx":"f92fa9d0462b","components/feedback/Alert.jsx":"999ff93e506f","components/feedback/Dialog.jsx":"fb5999fd3d06","components/feedback/Toast.jsx":"3ae16e1d8bb4","components/feedback/Tooltip.jsx":"e1e11289b647","components/forms/Button.jsx":"b23544000533","components/forms/Checkbox.jsx":"c0ff6f2e3c5b","components/forms/IconButton.jsx":"8f189da6d04d","components/forms/Input.jsx":"402d2f581b61","components/forms/Radio.jsx":"cd958aa85d1d","components/forms/Select.jsx":"116a10566bdf","components/forms/Switch.jsx":"5d81b22d239c","components/forms/Textarea.jsx":"258015d8b1ba","components/lib/styles.js":"5e015f570713","components/navigation/Breadcrumb.jsx":"f966f6d5d09f","components/navigation/Tabs.jsx":"4991ac80f2b0","components/overlays/Dropdown.jsx":"c383dbc3660b","ui_kits/auth/AuthApp.jsx":"2111ac5580fc","ui_kits/dashboard/App.jsx":"2129ba179982","ui_kits/dashboard/CustomersView.jsx":"f921f461cdf5","ui_kits/dashboard/DashboardView.jsx":"4cd4288e4bb5","ui_kits/dashboard/Icons.jsx":"f69bb7045264","ui_kits/dashboard/SettingsView.jsx":"0a1352cdca08","ui_kits/dashboard/Sidebar.jsx":"b77b0aa664c0","ui_kits/dashboard/Topbar.jsx":"b81891be25a7"},"inlinedExternals":[],"unexposedExports":[{"name":"cx","sourcePath":"components/lib/styles.js"},{"name":"injectStyles","sourcePath":"components/lib/styles.js"},{"name":"useId","sourcePath":"components/lib/styles.js"},{"name":"useToast","sourcePath":"components/feedback/Toast.jsx"}]} */

(() => {

const __ds_ns = (window.AtlasDesignSystem_221c8f = window.AtlasDesignSystem_221c8f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/lib/styles.js
try { (() => {
// Atlas — shared style injector.
// Components reference design tokens via CSS custom properties; for stateful
// styling (hover/focus/active/disabled) we inject a scoped <style> block once
// per component id. Import React only elsewhere; this is the single shared util.

const injected = new Set();
function injectStyles(id, css) {
  if (typeof document === "undefined") return;
  if (injected.has(id)) return;
  injected.add(id);
  const el = document.createElement("style");
  el.setAttribute("data-atlas", id);
  el.textContent = css;
  document.head.appendChild(el);
}
let _uid = 0;
function useId(prefix = "atl") {
  const React = window.React;
  const ref = React.useRef(null);
  if (ref.current === null) ref.current = `${prefix}-${++_uid}`;
  return ref.current;
}
function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}
Object.assign(__ds_scope, { injectStyles, useId, cx });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lib/styles.js", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-avatar { position: relative; display: inline-flex; flex: none; align-items: center; justify-content: center; font-family: var(--font-sans); font-weight: 600; color: #fff; border-radius: 999px; overflow: hidden; background: var(--color-neutral-400); user-select: none; }
.atl-avatar--square { border-radius: var(--radius-md); }
.atl-avatar img { width: 100%; height: 100%; object-fit: cover; }
.atl-avatar__status { position: absolute; right: 0; bottom: 0; border-radius: 999px; border: 2px solid var(--color-surface-default); }
.atl-avatar__status--online { background: var(--color-success-500); }
.atl-avatar__status--away { background: var(--color-warning-500); }
.atl-avatar__status--busy { background: var(--color-danger-500); }
.atl-avatar__status--offline { background: var(--color-neutral-400); }
.atl-avatar-group { display: inline-flex; }
.atl-avatar-group .atl-avatar { box-shadow: 0 0 0 2px var(--color-surface-default); }
.atl-avatar-group .atl-avatar:not(:first-child) { margin-left: -8px; }
.atl-avatar-group__more { background: var(--color-surface-sunken); color: var(--color-text-secondary); }
`;
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 48,
  xl: 64
};
const DOT = {
  xs: 7,
  sm: 9,
  md: 11,
  lg: 13,
  xl: 16
};
const PALETTE = ["#2563EB", "#16A34A", "#7C3AED", "#EA580C", "#0891B2", "#DB2777"];
function initialsOf(name = "") {
  const p = name.trim().split(/\s+/);
  return ((p[0]?.[0] || "") + (p[1]?.[0] || "")).toUpperCase() || "?";
}
function colorFor(name = "") {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = h * 31 + name.charCodeAt(i) >>> 0;
  return PALETTE[h % PALETTE.length];
}

/** Avatar — image, initials fallback, presence dot. Use Avatar.Group to stack. */
function Avatar({
  src,
  name = "",
  size = "md",
  shape = "circle",
  status,
  className = "",
  style,
  ...rest
}) {
  __ds_scope.injectStyles("avatar", CSS);
  const px = SIZES[size] || size;
  const dot = DOT[size] || 11;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx("atl-avatar", shape === "square" && "atl-avatar--square", className),
    style: {
      width: px,
      height: px,
      fontSize: px * 0.4,
      background: src ? undefined : colorFor(name),
      ...style
    },
    role: "img",
    "aria-label": name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initialsOf(name), status && /*#__PURE__*/React.createElement("span", {
    className: `atl-avatar__status atl-avatar__status--${status}`,
    style: {
      width: dot,
      height: dot
    }
  }));
}
Avatar.Group = function AvatarGroup({
  max = 4,
  size = "md",
  children,
  className = ""
}) {
  __ds_scope.injectStyles("avatar", CSS);
  const items = React.Children.toArray(children);
  const shown = items.slice(0, max);
  const extra = items.length - shown.length;
  const px = SIZES[size] || size;
  return /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx("atl-avatar-group", className)
  }, shown, extra > 0 && /*#__PURE__*/React.createElement("span", {
    className: "atl-avatar atl-avatar-group__more",
    style: {
      width: px,
      height: px,
      fontSize: px * 0.36
    }
  }, "+", extra));
};
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-badge {
  display: inline-flex; align-items: center; gap: 5px; font-family: var(--font-sans);
  font-size: 12px; font-weight: 600; line-height: 1; letter-spacing: 0.005em;
  padding: 4px 8px; border-radius: var(--radius-sm); border: 1px solid transparent; white-space: nowrap;
}
.atl-badge--pill { border-radius: 999px; }
.atl-badge--sm { font-size: 11px; padding: 3px 7px; }
.atl-badge--lg { font-size: 13px; padding: 5px 10px; }
.atl-badge__dot { width: 6px; height: 6px; border-radius: 999px; background: currentColor; flex: none; }
.atl-badge svg { width: 13px; height: 13px; }

.atl-badge--neutral { background: var(--color-surface-sunken); color: var(--color-text-secondary); border-color: var(--color-border-subtle); }
.atl-badge--brand { background: var(--color-surface-brand); color: var(--color-text-brand); }
.atl-badge--success { background: var(--color-status-success-bg); color: var(--color-status-success-text); }
.atl-badge--warning { background: var(--color-status-warning-bg); color: var(--color-status-warning-text); }
.atl-badge--danger { background: var(--color-status-error-bg); color: var(--color-status-error-text); }
.atl-badge--info { background: var(--color-status-info-bg); color: var(--color-status-info-text); }
.atl-badge--ai { background: var(--color-ai-generated-bg); color: var(--color-ai-generated-text); }

.atl-badge--solid.atl-badge--neutral { background: var(--color-neutral-700); color: #fff; }
.atl-badge--solid.atl-badge--brand { background: var(--color-action-primary-bg-default); color: var(--color-action-primary-text-default); }
.atl-badge--solid.atl-badge--success { background: var(--color-success-bg); color: #fff; }
.atl-badge--solid.atl-badge--warning { background: var(--color-warning-500); color: #fff; }
.atl-badge--solid.atl-badge--danger { background: var(--color-action-destructive-bg-default); color: #fff; }
`;

/** Badge — compact status / count label. Soft by default, `solid` for emphasis. */
function Badge({
  tone = "neutral",
  solid = false,
  size = "md",
  pill = false,
  dot = false,
  icon = null,
  className = "",
  children,
  ...rest
}) {
  __ds_scope.injectStyles("badge", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx("atl-badge", `atl-badge--${tone}`, `atl-badge--${size}`, solid && "atl-badge--solid", pill && "atl-badge--pill", className)
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "atl-badge__dot"
  }), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-card {
  display: flex; flex-direction: column; background: var(--color-surface-default);
  border: 1px solid var(--color-border-subtle); border-radius: var(--radius-card);
  color: var(--color-text-primary); font-family: var(--font-sans); overflow: hidden;
  transition: box-shadow var(--duration-normal) var(--ease-standard), border-color var(--duration-normal) var(--ease-standard), transform var(--duration-normal) var(--ease-standard);
}
.atl-card--flat { box-shadow: none; }
.atl-card--raised { box-shadow: var(--shadow-sm); border-color: var(--color-border-subtle); }
.atl-card--elevated { box-shadow: var(--shadow-md); border-color: transparent; }
.atl-card--interactive { cursor: pointer; }
.atl-card--interactive:hover { box-shadow: var(--shadow-lg); transform: translateY(-2px); border-color: var(--color-border-default); }
.atl-card--interactive:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.atl-card__media { display: block; width: 100%; }
.atl-card__media img { display: block; width: 100%; height: 100%; object-fit: cover; }
.atl-card__pad--sm { padding: 16px; }
.atl-card__pad--md { padding: 20px; }
.atl-card__pad--lg { padding: 24px; }
.atl-card__header { display: flex; flex-direction: column; gap: 4px; padding: 20px 20px 0; }
.atl-card__title { font-size: 16px; font-weight: 600; letter-spacing: -0.01em; }
.atl-card__subtitle { font-size: 13px; color: var(--color-text-muted); }
.atl-card__body { padding: 16px 20px; font-size: 14px; line-height: 1.55; color: var(--color-text-secondary); }
.atl-card__footer { display: flex; align-items: center; gap: 8px; padding: 0 20px 20px; }
`;

/** Card — surface container. Compose with Card.Header/Body/Footer or pass children. */
function Card({
  elevation = "raised",
  padding,
  interactive = false,
  as = "div",
  className = "",
  children,
  ...rest
}) {
  __ds_scope.injectStyles("card", CSS);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: __ds_scope.cx("atl-card", `atl-card--${elevation}`, interactive && "atl-card--interactive", padding && `atl-card__pad--${padding}`, className),
    tabIndex: interactive ? 0 : undefined
  }, rest), children);
}
Card.Header = function CardHeader({
  title,
  subtitle,
  action,
  children,
  className = ""
}) {
  __ds_scope.injectStyles("card", CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-card__header", className),
    style: action ? {
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "space-between"
    } : undefined
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "atl-card__title"
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    className: "atl-card__subtitle"
  }, subtitle)), action);
};
Card.Body = function CardBody({
  children,
  className = ""
}) {
  __ds_scope.injectStyles("card", CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-card__body", className)
  }, children);
};
Card.Footer = function CardFooter({
  children,
  className = ""
}) {
  __ds_scope.injectStyles("card", CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-card__footer", className)
  }, children);
};
Card.Media = function CardMedia({
  src,
  alt = "",
  height,
  children,
  className = ""
}) {
  __ds_scope.injectStyles("card", CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-card__media", className),
    style: height ? {
      height
    } : undefined
  }, children || /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }));
};
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Table.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
const SortIcon = ({
  dir
}) => /*#__PURE__*/React.createElement("span", {
  className: __ds_scope.cx("atl-table__sorticon", dir && "atl-table__sorticon--active")
}, dir === "desc" ? /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "6 9 12 15 18 9"
})) : /*#__PURE__*/React.createElement("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "18 15 12 9 6 15"
})));

/**
 * Table — data-driven. Pass `columns` ({key,header,align,sortable,render}) and
 * `data`. Sorting is handled internally when a column is `sortable`.
 */
function Table({
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
  __ds_scope.injectStyles("table", CSS);
  const [sort, setSort] = React.useState(null);
  const sorted = React.useMemo(() => {
    if (!sort) return data;
    const col = columns.find(c => c.key === sort.key);
    if (!col) return data;
    const arr = [...data].sort((a, b) => {
      const av = a[sort.key],
        bv = b[sort.key];
      if (av == null) return 1;
      if (bv == null) return -1;
      if (typeof av === "number" && typeof bv === "number") return av - bv;
      return String(av).localeCompare(String(bv));
    });
    return sort.dir === "desc" ? arr.reverse() : arr;
  }, [data, sort, columns]);
  const toggle = key => setSort(s => s && s.key === key ? s.dir === "asc" ? {
    key,
    dir: "desc"
  } : null : {
    key,
    dir: "asc"
  });
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-table-wrap", className)
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: __ds_scope.cx("atl-table", striped && "atl-table--striped", hover && "atl-table--hover", compact && "atl-table--compact")
  }, rest), /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    className: __ds_scope.cx(c.align === "right" && "atl-table__num", c.sortable && "atl-table__sortable"),
    style: c.width ? {
      width: c.width
    } : undefined,
    onClick: c.sortable ? () => toggle(c.key) : undefined,
    "aria-sort": sort && sort.key === c.key ? sort.dir === "asc" ? "ascending" : "descending" : undefined
  }, c.header, c.sortable && /*#__PURE__*/React.createElement(SortIcon, {
    dir: sort && sort.key === c.key ? sort.dir : null
  }))))), /*#__PURE__*/React.createElement("tbody", null, sorted.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: row[rowKey] ?? i,
    onClick: onRowClick ? () => onRowClick(row) : undefined,
    style: onRowClick ? {
      cursor: "pointer"
    } : undefined
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    className: __ds_scope.cx(c.align === "right" && "atl-table__num")
  }, c.render ? c.render(row[c.key], row) : row[c.key])))))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Table.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-tag {
  display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-sans);
  font-size: 13px; font-weight: 500; line-height: 1; color: var(--color-text-secondary);
  padding: 5px 10px; border-radius: 999px; background: var(--color-surface-sunken);
  border: 1px solid var(--color-border-subtle); white-space: nowrap;
}
.atl-tag--removable { padding-right: 6px; }
.atl-tag__close {
  display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px;
  border-radius: 999px; border: none; background: transparent; color: var(--color-icon-muted); cursor: pointer;
  transition: background var(--duration-fast), color var(--duration-fast);
}
.atl-tag__close:hover { background: var(--color-border-default); color: var(--color-text-primary); }
.atl-tag__close svg { width: 11px; height: 11px; }
.atl-tag__dot { width: 8px; height: 8px; border-radius: 999px; flex: none; }
`;
const X = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.6",
  strokeLinecap: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));

/** Tag — a removable, pill-shaped descriptor (filters, multi-select chips). */
function Tag({
  color,
  onRemove,
  className = "",
  children,
  ...rest
}) {
  __ds_scope.injectStyles("tag", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: __ds_scope.cx("atl-tag", onRemove && "atl-tag--removable", className)
  }, rest), color && /*#__PURE__*/React.createElement("span", {
    className: "atl-tag__dot",
    style: {
      background: color
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "atl-tag__close",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement(X, null)));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-alert {
  display: flex; gap: 12px; padding: 14px 16px; border-radius: var(--radius-md);
  border: 1px solid; font-family: var(--font-sans); font-size: 14px; line-height: 1.5;
}
.atl-alert__icon { flex: none; margin-top: 1px; }
.atl-alert__icon svg { width: 18px; height: 18px; display: block; }
.atl-alert__body { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 2px; }
.atl-alert__title { font-weight: 600; color: var(--color-text-primary); }
.atl-alert__msg { color: var(--color-text-secondary); }
.atl-alert__actions { display: flex; gap: 8px; margin-top: 8px; }
.atl-alert__close { flex: none; border: none; background: transparent; color: var(--color-icon-muted); cursor: pointer; padding: 2px; border-radius: var(--radius-xs); align-self: flex-start; }
.atl-alert__close:hover { color: var(--color-text-primary); background: var(--color-surface-sunken); }
.atl-alert__close svg { width: 16px; height: 16px; display: block; }

.atl-alert--info { background: var(--color-status-info-bg); border-color: var(--color-status-info-border); }
.atl-alert--info .atl-alert__icon { color: var(--color-status-info-text); }
.atl-alert--success { background: var(--color-status-success-bg); border-color: var(--color-status-success-border); }
.atl-alert--success .atl-alert__icon { color: var(--color-status-success-text); }
.atl-alert--warning { background: var(--color-status-warning-bg); border-color: var(--color-status-warning-border); }
.atl-alert--warning .atl-alert__icon { color: var(--color-status-warning-text); }
.atl-alert--danger { background: var(--color-status-error-bg); border-color: var(--color-status-error-border); }
.atl-alert--danger .atl-alert__icon { color: var(--color-status-error-text); }
`;
const ICONS = {
  info: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  })),
  success: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  })),
  warning: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  })),
  danger: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  }))
};
const X = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));

/** Alert — inline contextual message banner. */
function Alert({
  tone = "info",
  title,
  actions,
  onClose,
  icon,
  className = "",
  children,
  ...rest
}) {
  __ds_scope.injectStyles("alert", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "alert",
    className: __ds_scope.cx("atl-alert", `atl-alert--${tone}`, className)
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "atl-alert__icon"
  }, icon || ICONS[tone]), /*#__PURE__*/React.createElement("div", {
    className: "atl-alert__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "atl-alert__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "atl-alert__msg"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "atl-alert__actions"
  }, actions)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "atl-alert__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const CSS = `
.atl-dialog__scrim {
  position: fixed; inset: 0; z-index: var(--z-modal, 800); display: flex; padding: 24px;
  align-items: center; justify-content: center; background: var(--color-overlay-scrim, rgba(0,0,0,.56));
  animation: atl-scrim-in var(--duration-fast) var(--ease-standard);
}
.atl-dialog__scrim--top { align-items: flex-start; padding-top: 10vh; }
@keyframes atl-scrim-in { from { opacity: 0; } to { opacity: 1; } }
.atl-dialog {
  display: flex; flex-direction: column; width: 100%; max-height: calc(100vh - 48px);
  background: var(--color-surface-overlay, var(--color-surface-default));
  border: 1px solid var(--color-border-subtle); border-radius: var(--radius-overlay, 16px);
  box-shadow: var(--shadow-xl); font-family: var(--font-sans); overflow: hidden;
  animation: atl-dialog-in var(--duration-normal) var(--ease-emphasized);
}
@keyframes atl-dialog-in { from { opacity: 0; transform: translateY(12px) scale(0.98); } to { opacity: 1; transform: none; } }
.atl-dialog--sm { max-width: 400px; } .atl-dialog--md { max-width: 512px; } .atl-dialog--lg { max-width: 640px; } .atl-dialog--xl { max-width: 800px; }
.atl-dialog__header { display: flex; align-items: flex-start; gap: 12px; padding: 20px 24px 0; }
.atl-dialog__titles { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 4px; }
.atl-dialog__title { font-size: 18px; font-weight: 600; letter-spacing: -0.01em; color: var(--color-text-primary); }
.atl-dialog__desc { font-size: 14px; color: var(--color-text-muted); line-height: 1.5; }
.atl-dialog__close { flex: none; border: none; background: transparent; color: var(--color-icon-muted); cursor: pointer; padding: 4px; border-radius: var(--radius-xs); margin: -4px -8px 0 0; }
.atl-dialog__close:hover { background: var(--color-surface-sunken); color: var(--color-text-primary); }
.atl-dialog__close svg { width: 18px; height: 18px; display: block; }
.atl-dialog__body { padding: 16px 24px; overflow-y: auto; font-size: 14px; line-height: 1.6; color: var(--color-text-secondary); }
.atl-dialog__footer { display: flex; gap: 10px; justify-content: flex-end; padding: 16px 24px 20px; border-top: 1px solid var(--color-border-subtle); margin-top: auto; }
`;
const X = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));

/** Dialog — modal surface with scrim, escape / backdrop close and focus trap-lite. */
function Dialog({
  open,
  onClose,
  title,
  description,
  size = "md",
  align = "center",
  footer,
  closeOnBackdrop = true,
  showClose = true,
  className = "",
  children
}) {
  __ds_scope.injectStyles("dialog", CSS);
  const titleId = __ds_scope.useId("dlg-t");
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current && ref.current.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-dialog__scrim", align === "top" && "atl-dialog__scrim--top"),
    onMouseDown: e => {
      if (closeOnBackdrop && e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: ref,
    tabIndex: -1,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    className: __ds_scope.cx("atl-dialog", `atl-dialog--${size}`, className)
  }, (title || showClose) && /*#__PURE__*/React.createElement("div", {
    className: "atl-dialog__header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "atl-dialog__titles"
  }, title && /*#__PURE__*/React.createElement("div", {
    id: titleId,
    className: "atl-dialog__title"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "atl-dialog__desc"
  }, description)), showClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "atl-dialog__close",
    "aria-label": "Close",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null))), children && /*#__PURE__*/React.createElement("div", {
    className: "atl-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "atl-dialog__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-toaster { position: fixed; z-index: var(--z-toast, 900); display: flex; flex-direction: column; gap: 10px; padding: 16px; pointer-events: none; }
.atl-toaster--top-right { top: 0; right: 0; align-items: flex-end; }
.atl-toaster--bottom-right { bottom: 0; right: 0; align-items: flex-end; }
.atl-toaster--bottom-center { bottom: 0; left: 50%; transform: translateX(-50%); align-items: center; }
.atl-toast {
  pointer-events: auto; display: flex; gap: 12px; align-items: flex-start; width: 360px; max-width: calc(100vw - 32px);
  background: var(--color-surface-raised); border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md); box-shadow: var(--shadow-lg); padding: 14px 14px 14px 16px;
  font-family: var(--font-sans); animation: atl-toast-in var(--duration-normal) var(--ease-emphasized);
}
@keyframes atl-toast-in { from { opacity: 0; transform: translateY(8px) scale(0.98); } to { opacity: 1; transform: none; } }
.atl-toast--leaving { animation: atl-toast-out var(--duration-fast) var(--ease-exit) forwards; }
@keyframes atl-toast-out { to { opacity: 0; transform: translateY(-6px); } }
.atl-toast__icon { flex: none; margin-top: 1px; } .atl-toast__icon svg { width: 18px; height: 18px; display: block; }
.atl-toast--success .atl-toast__icon { color: var(--color-icon-success); }
.atl-toast--danger .atl-toast__icon { color: var(--color-icon-danger); }
.atl-toast--info .atl-toast__icon { color: var(--color-icon-brand); }
.atl-toast--warning .atl-toast__icon { color: var(--color-icon-warning); }
.atl-toast__body { flex: 1 1 auto; min-width: 0; }
.atl-toast__title { font-size: 14px; font-weight: 600; color: var(--color-text-primary); }
.atl-toast__msg { font-size: 13px; color: var(--color-text-muted); margin-top: 2px; line-height: 1.45; }
.atl-toast__close { flex: none; border: none; background: transparent; color: var(--color-icon-muted); cursor: pointer; padding: 2px; border-radius: var(--radius-xs); }
.atl-toast__close:hover { color: var(--color-text-primary); }
.atl-toast__close svg { width: 15px; height: 15px; display: block; }
`;
const ICONS = {
  success: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22 4 12 14.01 9 11.01"
  })),
  danger: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "15",
    y1: "9",
    x2: "9",
    y2: "15"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "9",
    y1: "9",
    x2: "15",
    y2: "15"
  })),
  info: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "16",
    x2: "12",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "8",
    x2: "12.01",
    y2: "8"
  })),
  warning: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "9",
    x2: "12",
    y2: "13"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "17",
    x2: "12.01",
    y2: "17"
  }))
};
const X = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2.2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("line", {
  x1: "18",
  y1: "6",
  x2: "6",
  y2: "18"
}), /*#__PURE__*/React.createElement("line", {
  x1: "6",
  y1: "6",
  x2: "18",
  y2: "18"
}));

/** Single toast surface (controlled). Most apps use ToastProvider + useToast. */
function Toast({
  tone = "info",
  title,
  message,
  onClose,
  leaving = false,
  className = ""
}) {
  __ds_scope.injectStyles("toast", CSS);
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-toast", `atl-toast--${tone}`, leaving && "atl-toast--leaving", className),
    role: "status"
  }, ICONS[tone] && /*#__PURE__*/React.createElement("span", {
    className: "atl-toast__icon"
  }, ICONS[tone]), /*#__PURE__*/React.createElement("div", {
    className: "atl-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "atl-toast__title"
  }, title), message && /*#__PURE__*/React.createElement("div", {
    className: "atl-toast__msg"
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "atl-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(X, null)));
}
const ToastCtx = React.createContext(null);

/** Wrap your app; call useToast() to push toasts. */
function ToastProvider({
  position = "bottom-right",
  duration = 4000,
  children
}) {
  __ds_scope.injectStyles("toast", CSS);
  const [toasts, setToasts] = React.useState([]);
  const remove = React.useCallback(id => {
    setToasts(t => t.map(x => x.id === id ? {
      ...x,
      leaving: true
    } : x));
    setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 160);
  }, []);
  const toast = React.useCallback(opts => {
    const id = Math.random().toString(36).slice(2);
    setToasts(t => [...t, {
      id,
      ...opts
    }]);
    if (opts.duration !== 0) setTimeout(() => remove(id), opts.duration || duration);
    return id;
  }, [duration, remove]);
  return /*#__PURE__*/React.createElement(ToastCtx.Provider, {
    value: {
      toast,
      dismiss: remove
    }
  }, children, /*#__PURE__*/React.createElement("div", {
    className: `atl-toaster atl-toaster--${position}`
  }, toasts.map(t => /*#__PURE__*/React.createElement(Toast, _extends({
    key: t.id
  }, t, {
    onClose: () => remove(t.id)
  })))));
}
function useToast() {
  const ctx = React.useContext(ToastCtx);
  if (!ctx) return {
    toast: () => {},
    dismiss: () => {}
  };
  return ctx;
}
Object.assign(__ds_scope, { Toast, ToastProvider, useToast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const CSS = `
.atl-tip-wrap { position: relative; display: inline-flex; }
.atl-tip {
  position: absolute; z-index: var(--z-tooltip, 450); pointer-events: none;
  background: var(--color-surface-inverse); color: var(--color-text-inverse);
  font-family: var(--font-sans); font-size: 12.5px; font-weight: 500; line-height: 1.4;
  padding: 6px 9px; border-radius: var(--radius-overlay-tooltip, 6px); max-width: 240px; width: max-content;
  box-shadow: var(--shadow-md); opacity: 0; transform: scale(0.96);
  transition: opacity var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard);
}
.atl-tip-wrap[data-open="true"] .atl-tip { opacity: 1; transform: scale(1); }
.atl-tip--top { bottom: calc(100% + 8px); left: 50%; transform-origin: bottom center; translate: -50% 0; }
.atl-tip--bottom { top: calc(100% + 8px); left: 50%; transform-origin: top center; translate: -50% 0; }
.atl-tip--left { right: calc(100% + 8px); top: 50%; transform-origin: center right; translate: 0 -50%; }
.atl-tip--right { left: calc(100% + 8px); top: 50%; transform-origin: center left; translate: 0 -50%; }
.atl-tip__arrow { position: absolute; width: 8px; height: 8px; background: var(--color-surface-inverse); transform: rotate(45deg); }
.atl-tip--top .atl-tip__arrow { bottom: -4px; left: calc(50% - 4px); }
.atl-tip--bottom .atl-tip__arrow { top: -4px; left: calc(50% - 4px); }
.atl-tip--left .atl-tip__arrow { right: -4px; top: calc(50% - 4px); }
.atl-tip--right .atl-tip__arrow { left: -4px; top: calc(50% - 4px); }
`;

/** Tooltip — hover / focus label that wraps a single trigger child. */
function Tooltip({
  content,
  side = "top",
  delay = 200,
  className = "",
  children
}) {
  __ds_scope.injectStyles("tooltip", CSS);
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef(null);
  const id = __ds_scope.useId("tip");
  const show = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx("atl-tip-wrap", className),
    "data-open": open,
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide
  }, React.cloneElement(React.Children.only(children), {
    "aria-describedby": open ? id : undefined
  }), /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    id: id,
    className: __ds_scope.cx("atl-tip", `atl-tip--${side}`)
  }, content, /*#__PURE__*/React.createElement("span", {
    className: "atl-tip__arrow"
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-btn {
  --_h: 40px; --_px: 16px; --_fs: 14px; --_gap: 8px;
  display: inline-flex; align-items: center; justify-content: center;
  gap: var(--_gap); height: var(--_h); padding: 0 var(--_px);
  font-family: var(--font-sans); font-size: var(--_fs); font-weight: 600;
  line-height: 1; letter-spacing: -0.006em; white-space: nowrap;
  border: 1px solid transparent; border-radius: var(--radius-control);
  cursor: pointer; user-select: none; text-decoration: none;
  transition: background var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard),
              transform var(--duration-fast) var(--ease-standard);
}
.atl-btn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.atl-btn:active:not(:disabled) { transform: translateY(0.5px); }
.atl-btn:disabled { cursor: not-allowed; opacity: 1; }
.atl-btn--full { width: 100%; }

/* sizes */
.atl-btn--sm { --_h: 32px; --_px: 12px; --_fs: 13px; --_gap: 6px; }
.atl-btn--md { --_h: 40px; --_px: 16px; --_fs: 14px; --_gap: 8px; }
.atl-btn--lg { --_h: 44px; --_px: 20px; --_fs: 15px; --_gap: 8px; }

/* primary */
.atl-btn--primary { background: var(--color-action-primary-bg-default); color: var(--color-action-primary-text-default); }
.atl-btn--primary:hover:not(:disabled) { background: var(--color-action-primary-bg-hover); }
.atl-btn--primary:active:not(:disabled) { background: var(--color-action-primary-bg-pressed); }
.atl-btn--primary:disabled { background: var(--color-action-primary-bg-disabled); color: var(--color-action-primary-text-disabled); }

/* secondary */
.atl-btn--secondary { background: var(--color-action-secondary-bg-default); color: var(--color-text-primary); border-color: var(--color-action-secondary-border-default); }
.atl-btn--secondary:hover:not(:disabled) { background: var(--color-action-secondary-bg-hover); }
.atl-btn--secondary:disabled { color: var(--color-text-disabled); border-color: var(--color-border-disabled); }

/* ghost */
.atl-btn--ghost { background: transparent; color: var(--color-text-primary); }
.atl-btn--ghost:hover:not(:disabled) { background: var(--color-action-ghost-bg-hover); color: var(--color-text-brand); }
.atl-btn--ghost:disabled { color: var(--color-text-disabled); }

/* destructive */
.atl-btn--destructive { background: var(--color-action-destructive-bg-default); color: var(--color-action-destructive-text-default); }
.atl-btn--destructive:hover:not(:disabled) { background: var(--color-action-destructive-bg-hover); }
.atl-btn--destructive:disabled { background: var(--color-surface-disabled); color: var(--color-text-disabled); }

/* link */
.atl-btn--link { background: transparent; color: var(--color-text-link); height: auto; padding: 0; border-radius: var(--radius-xs); }
.atl-btn--link:hover:not(:disabled) { text-decoration: underline; }

.atl-btn__spinner { width: 1em; height: 1em; border-radius: 999px; border: 2px solid currentColor; border-right-color: transparent; animation: atl-btn-spin 0.6s linear infinite; }
@keyframes atl-btn-spin { to { transform: rotate(360deg); } }
.atl-btn__icon { display: inline-flex; flex: none; }
`;

/**
 * Button — the primary action primitive.
 */
function Button({
  variant = "primary",
  size = "md",
  type = "button",
  fullWidth = false,
  loading = false,
  disabled = false,
  iconLeading = null,
  iconTrailing = null,
  as = "button",
  className = "",
  children,
  ...rest
}) {
  __ds_scope.injectStyles("button", CSS);
  const Tag = as;
  const cls = __ds_scope.cx("atl-btn", `atl-btn--${variant}`, `atl-btn--${size}`, fullWidth && "atl-btn--full", className);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls,
    type: Tag === "button" ? type : undefined,
    disabled: Tag === "button" ? disabled || loading : undefined,
    "aria-busy": loading || undefined,
    "aria-disabled": disabled || loading || undefined
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    className: "atl-btn__spinner",
    "aria-hidden": "true"
  }), !loading && iconLeading && /*#__PURE__*/React.createElement("span", {
    className: "atl-btn__icon"
  }, iconLeading), children, !loading && iconTrailing && /*#__PURE__*/React.createElement("span", {
    className: "atl-btn__icon"
  }, iconTrailing));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-cb { display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-sans); cursor: pointer; }
.atl-cb--disabled { cursor: not-allowed; }
.atl-cb__input { position: absolute; opacity: 0; width: 0; height: 0; }
.atl-cb__box {
  flex: none; width: 20px; height: 20px; margin-top: 1px; border-radius: var(--radius-xs);
  border: 1.5px solid var(--color-checkbox-border-default, var(--color-border-strong));
  background: var(--color-surface-default); color: var(--color-checkbox-glyph-checked, #fff);
  display: inline-flex; align-items: center; justify-content: center;
  transition: background var(--duration-fast) var(--ease-standard), border-color var(--duration-fast) var(--ease-standard);
}
.atl-cb__box svg { width: 14px; height: 14px; opacity: 0; transform: scale(0.6); transition: opacity var(--duration-fast), transform var(--duration-fast) var(--ease-emphasized); }
.atl-cb__input:checked + .atl-cb__box,
.atl-cb__input:indeterminate + .atl-cb__box { background: var(--color-checkbox-bg-checked, var(--color-action-primary-bg-default)); border-color: var(--color-checkbox-bg-checked, var(--color-action-primary-bg-default)); }
.atl-cb__input:checked + .atl-cb__box svg,
.atl-cb__input:indeterminate + .atl-cb__box svg { opacity: 1; transform: scale(1); }
.atl-cb__input:focus-visible + .atl-cb__box { box-shadow: var(--shadow-focus); border-color: var(--color-border-focus); }
.atl-cb__input:disabled + .atl-cb__box { background: var(--color-surface-disabled); border-color: var(--color-border-disabled); }
.atl-cb--error .atl-cb__box { border-color: var(--color-border-danger); }
.atl-cb__body { display: flex; flex-direction: column; gap: 2px; }
.atl-cb__label { font-size: 14px; font-weight: 500; color: var(--color-text-primary); line-height: 1.4; }
.atl-cb--disabled .atl-cb__label { color: var(--color-text-disabled); }
.atl-cb__desc { font-size: 13px; color: var(--color-text-muted); line-height: 1.4; }
`;
const Check = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.5",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "20 6 9 17 4 12"
}));
const Dash = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "3.5",
  strokeLinecap: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("line", {
  x1: "5",
  y1: "12",
  x2: "19",
  y2: "12"
}));

/** Checkbox — supports checked, indeterminate, description and error states. */
function Checkbox({
  label,
  description,
  indeterminate = false,
  error = false,
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  __ds_scope.injectStyles("checkbox", CSS);
  const autoId = __ds_scope.useId("cb");
  const fieldId = id || autoId;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    className: __ds_scope.cx("atl-cb", disabled && "atl-cb--disabled", error && "atl-cb--error", className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    id: fieldId,
    type: "checkbox",
    className: "atl-cb__input",
    disabled: disabled,
    "aria-invalid": error || undefined
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "atl-cb__box"
  }, indeterminate ? /*#__PURE__*/React.createElement(Dash, null) : /*#__PURE__*/React.createElement(Check, null)), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "atl-cb__body"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "atl-cb__label"
  }, label), description && /*#__PURE__*/React.createElement("span", {
    className: "atl-cb__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-iconbtn {
  --_s: 40px;
  display: inline-flex; align-items: center; justify-content: center;
  width: var(--_s); height: var(--_s); flex: none;
  border: 1px solid transparent; border-radius: var(--radius-control);
  background: transparent; color: var(--color-icon-secondary); cursor: pointer;
  transition: background var(--duration-fast) var(--ease-standard),
              color var(--duration-fast) var(--ease-standard),
              border-color var(--duration-fast) var(--ease-standard),
              box-shadow var(--duration-fast) var(--ease-standard);
}
.atl-iconbtn svg { width: 20px; height: 20px; display: block; }
.atl-iconbtn:focus-visible { outline: none; box-shadow: var(--shadow-focus); }
.atl-iconbtn:disabled { cursor: not-allowed; color: var(--color-icon-disabled); }
.atl-iconbtn--sm { --_s: 32px; } .atl-iconbtn--sm svg { width: 16px; height: 16px; }
.atl-iconbtn--md { --_s: 40px; }
.atl-iconbtn--lg { --_s: 44px; } .atl-iconbtn--lg svg { width: 24px; height: 24px; }
.atl-iconbtn--ghost:hover:not(:disabled) { background: var(--color-action-ghost-bg-hover); color: var(--color-text-brand); }
.atl-iconbtn--solid { background: var(--color-action-primary-bg-default); color: var(--color-action-primary-text-default); }
.atl-iconbtn--solid:hover:not(:disabled) { background: var(--color-action-primary-bg-hover); }
.atl-iconbtn--outline { border-color: var(--color-border-default); color: var(--color-icon-primary); }
.atl-iconbtn--outline:hover:not(:disabled) { background: var(--color-surface-muted); }
`;

/** IconButton — a square, icon-only control with an accessible label. */
function IconButton({
  variant = "ghost",
  size = "md",
  label,
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  __ds_scope.injectStyles("iconbtn", CSS);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: __ds_scope.cx("atl-iconbtn", `atl-iconbtn--${variant}`, `atl-iconbtn--${size}`, className),
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.atl-field__label { font-size: 14px; font-weight: 500; color: var(--color-text-secondary); display: inline-flex; gap: 4px; align-items: center; }
.atl-field__req { color: var(--color-text-danger); }
.atl-field__optional { color: var(--color-text-muted); font-weight: 400; }
.atl-inputwrap {
  display: flex; align-items: center; gap: 8px;
  height: 40px; padding: 0 12px;
  background: var(--color-surface-default);
  border: 1px solid var(--color-input-border-default, var(--color-border-default));
  border-radius: var(--radius-control);
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
}
.atl-inputwrap--sm { height: 32px; padding: 0 10px; }
.atl-inputwrap--lg { height: 44px; padding: 0 14px; }
.atl-inputwrap:focus-within { border-color: var(--color-border-focus); box-shadow: var(--shadow-focus); }
.atl-inputwrap--error { border-color: var(--color-border-danger); }
.atl-inputwrap--error:focus-within { box-shadow: 0 0 0 3px rgba(239,68,68,.28); }
.atl-inputwrap--disabled { background: var(--color-surface-disabled); cursor: not-allowed; }
.atl-inputwrap__adorn { display: inline-flex; flex: none; color: var(--color-icon-muted); }
.atl-inputwrap__adorn svg { width: 18px; height: 18px; display: block; }
.atl-input {
  flex: 1 1 auto; min-width: 0; border: none; outline: none; background: transparent;
  font-family: var(--font-sans); font-size: 14px; color: var(--color-text-primary);
}
.atl-input::placeholder { color: var(--color-input-text-placeholder, var(--color-text-muted)); }
.atl-input:disabled { cursor: not-allowed; color: var(--color-text-disabled); }
.atl-field__help { font-size: 13px; color: var(--color-text-muted); }
.atl-field__help--error { color: var(--color-text-danger); }
`;

/** Input — labelled text field with helper / error text and adornments. */
function Input({
  label,
  size = "md",
  type = "text",
  required = false,
  optional = false,
  error,
  helperText,
  iconLeading = null,
  iconTrailing = null,
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  __ds_scope.injectStyles("input", CSS);
  const autoId = __ds_scope.useId("input");
  const fieldId = id || autoId;
  const describedBy = error ? `${fieldId}-err` : helperText ? `${fieldId}-help` : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-field", className)
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "atl-field__label",
    htmlFor: fieldId
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "atl-field__req",
    "aria-hidden": "true"
  }, "*"), optional && /*#__PURE__*/React.createElement("span", {
    className: "atl-field__optional"
  }, "(optional)")), /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-inputwrap", `atl-inputwrap--${size}`, error && "atl-inputwrap--error", disabled && "atl-inputwrap--disabled")
  }, iconLeading && /*#__PURE__*/React.createElement("span", {
    className: "atl-inputwrap__adorn"
  }, iconLeading), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    className: "atl-input",
    disabled: disabled,
    required: required,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy
  }, rest)), iconTrailing && /*#__PURE__*/React.createElement("span", {
    className: "atl-inputwrap__adorn"
  }, iconTrailing)), error ? /*#__PURE__*/React.createElement("span", {
    id: `${fieldId}-err`,
    className: "atl-field__help atl-field__help--error"
  }, error) : helperText ? /*#__PURE__*/React.createElement("span", {
    id: `${fieldId}-help`,
    className: "atl-field__help"
  }, helperText) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-rb { display: inline-flex; align-items: flex-start; gap: 10px; font-family: var(--font-sans); cursor: pointer; }
.atl-rb--disabled { cursor: not-allowed; }
.atl-rb__input { position: absolute; opacity: 0; width: 0; height: 0; }
.atl-rb__dot {
  flex: none; width: 20px; height: 20px; margin-top: 1px; border-radius: 999px;
  border: 1.5px solid var(--color-border-strong); background: var(--color-surface-default);
  display: inline-flex; align-items: center; justify-content: center;
  transition: border-color var(--duration-fast) var(--ease-standard);
}
.atl-rb__dot::after { content: ""; width: 8px; height: 8px; border-radius: 999px; background: var(--color-action-primary-bg-default); transform: scale(0); transition: transform var(--duration-fast) var(--ease-emphasized); }
.atl-rb__input:checked + .atl-rb__dot { border-color: var(--color-action-primary-bg-default); }
.atl-rb__input:checked + .atl-rb__dot::after { transform: scale(1); }
.atl-rb__input:focus-visible + .atl-rb__dot { box-shadow: var(--shadow-focus); border-color: var(--color-border-focus); }
.atl-rb__input:disabled + .atl-rb__dot { background: var(--color-surface-disabled); border-color: var(--color-border-disabled); }
.atl-rb__body { display: flex; flex-direction: column; gap: 2px; }
.atl-rb__label { font-size: 14px; font-weight: 500; color: var(--color-text-primary); line-height: 1.4; }
.atl-rb--disabled .atl-rb__label { color: var(--color-text-disabled); }
.atl-rb__desc { font-size: 13px; color: var(--color-text-muted); line-height: 1.4; }
`;

/** Radio — single-choice control. Group several with a shared `name`. */
function Radio({
  label,
  description,
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  __ds_scope.injectStyles("radio", CSS);
  const autoId = __ds_scope.useId("rb");
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    className: __ds_scope.cx("atl-rb", disabled && "atl-rb--disabled", className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    className: "atl-rb__input",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "atl-rb__dot"
  }), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "atl-rb__body"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "atl-rb__label"
  }, label), description && /*#__PURE__*/React.createElement("span", {
    className: "atl-rb__desc"
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-sel-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.atl-sel-field__label { font-size: 14px; font-weight: 500; color: var(--color-text-secondary); }
.atl-sel-wrap { position: relative; display: flex; align-items: center; }
.atl-sel {
  appearance: none; -webkit-appearance: none; width: 100%; box-sizing: border-box;
  height: 40px; padding: 0 36px 0 12px; font-family: var(--font-sans); font-size: 14px;
  color: var(--color-text-primary); background: var(--color-surface-default);
  border: 1px solid var(--color-border-default); border-radius: var(--radius-control); cursor: pointer;
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
}
.atl-sel--sm { height: 32px; font-size: 13px; }
.atl-sel--lg { height: 44px; }
.atl-sel:focus-visible { outline: none; border-color: var(--color-border-focus); box-shadow: var(--shadow-focus); }
.atl-sel--error { border-color: var(--color-border-danger); }
.atl-sel:disabled { background: var(--color-surface-disabled); color: var(--color-text-disabled); cursor: not-allowed; }
.atl-sel--placeholder { color: var(--color-text-muted); }
.atl-sel-wrap__chevron { position: absolute; right: 12px; pointer-events: none; color: var(--color-icon-muted); display: inline-flex; }
.atl-sel-field__help { font-size: 13px; color: var(--color-text-muted); }
.atl-sel-field__help--error { color: var(--color-text-danger); }
`;
const Chevron = () => /*#__PURE__*/React.createElement("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "6 9 12 15 18 9"
}));

/** Select — styled native dropdown. Pass `options` or <option> children. */
function Select({
  label,
  size = "md",
  options,
  placeholder,
  error,
  helperText,
  value,
  defaultValue,
  disabled = false,
  id,
  className = "",
  children,
  ...rest
}) {
  __ds_scope.injectStyles("select", CSS);
  const autoId = __ds_scope.useId("sel");
  const fieldId = id || autoId;
  const isPlaceholder = (value ?? defaultValue ?? "") === "";
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-sel-field", className)
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "atl-sel-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "atl-sel-wrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    "aria-invalid": error ? true : undefined,
    className: __ds_scope.cx("atl-sel", `atl-sel--${size}`, error && "atl-sel--error", placeholder && isPlaceholder && "atl-sel--placeholder")
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value,
    disabled: o.disabled
  }, o.label)) : children), /*#__PURE__*/React.createElement("span", {
    className: "atl-sel-wrap__chevron"
  }, /*#__PURE__*/React.createElement(Chevron, null))), error ? /*#__PURE__*/React.createElement("span", {
    className: "atl-sel-field__help atl-sel-field__help--error"
  }, error) : helperText ? /*#__PURE__*/React.createElement("span", {
    className: "atl-sel-field__help"
  }, helperText) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-sw { display: inline-flex; align-items: center; gap: 10px; font-family: var(--font-sans); cursor: pointer; }
.atl-sw--disabled { cursor: not-allowed; }
.atl-sw__input { position: absolute; opacity: 0; width: 0; height: 0; }
.atl-sw__track {
  flex: none; position: relative; width: 40px; height: 24px; border-radius: 999px;
  background: var(--color-border-strong); transition: background var(--duration-normal) var(--ease-standard);
}
.atl-sw__track--sm { width: 32px; height: 18px; }
.atl-sw__track--lg { width: 48px; height: 28px; }
.atl-sw__thumb {
  position: absolute; top: 2px; left: 2px; width: 20px; height: 20px; border-radius: 999px;
  background: #fff; box-shadow: 0 1px 2px rgba(15,23,42,.3);
  transition: transform var(--duration-normal) var(--ease-emphasized);
}
.atl-sw__track--sm .atl-sw__thumb { width: 14px; height: 14px; }
.atl-sw__track--lg .atl-sw__thumb { width: 24px; height: 24px; }
.atl-sw__input:checked + .atl-sw__track { background: var(--color-action-primary-bg-default); }
.atl-sw__input:checked + .atl-sw__track .atl-sw__thumb { transform: translateX(16px); }
.atl-sw__input:checked + .atl-sw__track--sm .atl-sw__thumb { transform: translateX(14px); }
.atl-sw__input:checked + .atl-sw__track--lg .atl-sw__thumb { transform: translateX(20px); }
.atl-sw__input:focus-visible + .atl-sw__track { box-shadow: var(--shadow-focus); }
.atl-sw__input:disabled + .atl-sw__track { opacity: 0.5; }
.atl-sw__body { display: flex; flex-direction: column; gap: 1px; }
.atl-sw__label { font-size: 14px; font-weight: 500; color: var(--color-text-primary); line-height: 1.4; }
.atl-sw--disabled .atl-sw__label { color: var(--color-text-disabled); }
.atl-sw__desc { font-size: 13px; color: var(--color-text-muted); line-height: 1.4; }
`;

/** Switch — binary on/off toggle for instant settings. */
function Switch({
  label,
  description,
  size = "md",
  disabled = false,
  id,
  className = "",
  ...rest
}) {
  __ds_scope.injectStyles("switch", CSS);
  const autoId = __ds_scope.useId("sw");
  const fieldId = id || autoId;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    className: __ds_scope.cx("atl-sw", disabled && "atl-sw--disabled", className)
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    role: "switch",
    className: "atl-sw__input",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx("atl-sw__track", `atl-sw__track--${size}`)
  }, /*#__PURE__*/React.createElement("span", {
    className: "atl-sw__thumb"
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    className: "atl-sw__body"
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "atl-sw__label"
  }, label), description && /*#__PURE__*/React.createElement("span", {
    className: "atl-sw__desc"
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-ta-field { display: flex; flex-direction: column; gap: 6px; font-family: var(--font-sans); }
.atl-ta-field__label { font-size: 14px; font-weight: 500; color: var(--color-text-secondary); }
.atl-ta {
  width: 100%; box-sizing: border-box; resize: vertical; min-height: 88px;
  padding: 10px 12px; font-family: var(--font-sans); font-size: 14px; line-height: 1.55;
  color: var(--color-text-primary); background: var(--color-surface-default);
  border: 1px solid var(--color-border-default); border-radius: var(--radius-control);
  transition: border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard);
}
.atl-ta::placeholder { color: var(--color-text-muted); }
.atl-ta:focus-visible { outline: none; border-color: var(--color-border-focus); box-shadow: var(--shadow-focus); }
.atl-ta--error { border-color: var(--color-border-danger); }
.atl-ta:disabled { background: var(--color-surface-disabled); color: var(--color-text-disabled); cursor: not-allowed; }
.atl-ta-field__foot { display: flex; justify-content: space-between; gap: 12px; }
.atl-ta-field__help { font-size: 13px; color: var(--color-text-muted); }
.atl-ta-field__help--error { color: var(--color-text-danger); }
.atl-ta-field__count { font-size: 13px; color: var(--color-text-muted); margin-left: auto; font-variant-numeric: tabular-nums; }
`;

/** Textarea — multi-line text field with optional character counter. */
function Textarea({
  label,
  error,
  helperText,
  maxLength,
  value,
  defaultValue,
  rows = 4,
  disabled = false,
  id,
  className = "",
  onChange,
  ...rest
}) {
  __ds_scope.injectStyles("textarea", CSS);
  const autoId = __ds_scope.useId("ta");
  const fieldId = id || autoId;
  const [internal, setInternal] = React.useState(defaultValue ?? "");
  const current = value !== undefined ? value : internal;
  const count = typeof current === "string" ? current.length : 0;
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-ta-field", className)
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "atl-ta-field__label",
    htmlFor: fieldId
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fieldId,
    rows: rows,
    maxLength: maxLength,
    value: current,
    disabled: disabled,
    "aria-invalid": error ? true : undefined,
    className: __ds_scope.cx("atl-ta", error && "atl-ta--error"),
    onChange: e => {
      if (value === undefined) setInternal(e.target.value);
      onChange && onChange(e);
    }
  }, rest)), /*#__PURE__*/React.createElement("div", {
    className: "atl-ta-field__foot"
  }, error ? /*#__PURE__*/React.createElement("span", {
    className: "atl-ta-field__help atl-ta-field__help--error"
  }, error) : helperText ? /*#__PURE__*/React.createElement("span", {
    className: "atl-ta-field__help"
  }, helperText) : /*#__PURE__*/React.createElement("span", null), maxLength && /*#__PURE__*/React.createElement("span", {
    className: "atl-ta-field__count"
  }, count, "/", maxLength)));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CSS = `
.atl-bc { display: flex; align-items: center; flex-wrap: wrap; gap: 2px; font-family: var(--font-sans); font-size: 14px; }
.atl-bc__item { display: inline-flex; align-items: center; gap: 5px; color: var(--color-text-muted); text-decoration: none; padding: 3px 6px; border-radius: var(--radius-xs); transition: color var(--duration-fast), background var(--duration-fast); }
.atl-bc__item:hover { color: var(--color-text-secondary); background: var(--color-surface-sunken); }
.atl-bc__item svg { width: 15px; height: 15px; }
.atl-bc__item--current { color: var(--color-text-primary); font-weight: 500; pointer-events: none; }
.atl-bc__sep { color: var(--color-icon-disabled); display: inline-flex; }
.atl-bc__sep svg { width: 16px; height: 16px; }
`;
const Slash = () => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, /*#__PURE__*/React.createElement("polyline", {
  points: "9 18 15 12 9 6"
}));

/** Breadcrumb — hierarchical location trail. `items`: {label,href,icon}. */
function Breadcrumb({
  items = [],
  className = "",
  ...rest
}) {
  __ds_scope.injectStyles("breadcrumb", CSS);
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    className: __ds_scope.cx("atl-bc", className)
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href || "#",
      className: __ds_scope.cx("atl-bc__item", last && "atl-bc__item--current"),
      "aria-current": last ? "page" : undefined
    }, it.icon, it.label), !last && /*#__PURE__*/React.createElement("span", {
      className: "atl-bc__sep",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement(Slash, null)));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const CSS = `
.atl-tabs { font-family: var(--font-sans); }
.atl-tabs__list { display: flex; gap: 4px; position: relative; }
.atl-tabs--line .atl-tabs__list { border-bottom: 1px solid var(--color-border-subtle); gap: 8px; }
.atl-tabs__tab {
  appearance: none; border: none; background: transparent; cursor: pointer; font-family: inherit;
  font-size: 14px; font-weight: 500; color: var(--color-text-muted); display: inline-flex; align-items: center; gap: 7px;
  transition: color var(--duration-fast), background var(--duration-fast);
}
.atl-tabs__tab svg { width: 16px; height: 16px; }
.atl-tabs__tab:disabled { color: var(--color-text-disabled); cursor: not-allowed; }
.atl-tabs__tab:focus-visible { outline: none; box-shadow: var(--shadow-focus); border-radius: var(--radius-sm); }

.atl-tabs--line .atl-tabs__tab { padding: 10px 4px; margin-bottom: -1px; border-bottom: 2px solid transparent; }
.atl-tabs--line .atl-tabs__tab:hover:not(:disabled) { color: var(--color-text-secondary); }
.atl-tabs--line .atl-tabs__tab[aria-selected="true"] { color: var(--color-text-brand); border-bottom-color: var(--color-action-primary-bg-default); }

.atl-tabs--pill .atl-tabs__list { background: var(--color-surface-sunken); padding: 4px; border-radius: var(--radius-md); gap: 2px; display: inline-flex; }
.atl-tabs--pill .atl-tabs__tab { padding: 7px 14px; border-radius: var(--radius-sm); }
.atl-tabs--pill .atl-tabs__tab:hover:not(:disabled) { color: var(--color-text-secondary); }
.atl-tabs--pill .atl-tabs__tab[aria-selected="true"] { color: var(--color-text-primary); background: var(--color-surface-default); box-shadow: var(--shadow-xs); }

.atl-tabs__badge { font-size: 11px; font-weight: 600; padding: 1px 6px; border-radius: 999px; background: var(--color-surface-sunken); color: var(--color-text-muted); }
.atl-tabs__tab[aria-selected="true"] .atl-tabs__badge { background: var(--color-surface-brand); color: var(--color-text-brand); }
.atl-tabs__panel { padding-top: 16px; }
`;

/** Tabs — controlled or uncontrolled. `items`: {value,label,icon,badge,disabled}. */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "line",
  className = "",
  children
}) {
  __ds_scope.injectStyles("tabs", CSS);
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange && onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-tabs", `atl-tabs--${variant}`, className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "atl-tabs__list",
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    type: "button",
    className: "atl-tabs__tab",
    "aria-selected": active === it.value,
    disabled: it.disabled,
    onClick: () => select(it.value)
  }, it.icon, it.label, it.badge != null && /*#__PURE__*/React.createElement("span", {
    className: "atl-tabs__badge"
  }, it.badge)))), children && /*#__PURE__*/React.createElement("div", {
    className: "atl-tabs__panel",
    role: "tabpanel"
  }, typeof children === "function" ? children(active) : children));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlays/Dropdown.jsx
try { (() => {
const CSS = `
.atl-dd { position: relative; display: inline-flex; }
.atl-dd__menu {
  position: absolute; z-index: var(--z-dropdown, 300); min-width: 200px; padding: 6px;
  background: var(--color-surface-overlay, var(--color-surface-default));
  border: 1px solid var(--color-border-subtle); border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg); font-family: var(--font-sans);
  animation: atl-dd-in var(--duration-fast) var(--ease-emphasized); transform-origin: top;
}
@keyframes atl-dd-in { from { opacity: 0; transform: translateY(-4px) scale(0.98); } to { opacity: 1; transform: none; } }
.atl-dd__menu--end { right: 0; } .atl-dd__menu--start { left: 0; }
.atl-dd__menu--top { bottom: calc(100% + 6px); } .atl-dd__menu--bottom { top: calc(100% + 6px); }
.atl-dd__label { font-size: 11px; font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase; color: var(--color-text-muted); padding: 6px 10px 4px; }
.atl-dd__item {
  display: flex; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; text-align: left;
  padding: 8px 10px; border: none; background: transparent; border-radius: var(--radius-sm); cursor: pointer;
  font-family: inherit; font-size: 14px; color: var(--color-text-secondary); transition: background var(--duration-fast), color var(--duration-fast);
}
.atl-dd__item:hover:not(:disabled), .atl-dd__item:focus-visible { background: var(--color-surface-selected); color: var(--color-text-primary); outline: none; }
.atl-dd__item:disabled { color: var(--color-text-disabled); cursor: not-allowed; }
.atl-dd__item--danger { color: var(--color-text-danger); }
.atl-dd__item--danger:hover:not(:disabled) { background: var(--color-status-error-bg); color: var(--color-text-danger); }
.atl-dd__item svg { width: 16px; height: 16px; flex: none; }
.atl-dd__shortcut { margin-left: auto; font-size: 12px; color: var(--color-text-muted); font-variant-numeric: tabular-nums; }
.atl-dd__sep { height: 1px; background: var(--color-border-subtle); margin: 6px 4px; }
`;

/**
 * Dropdown menu. Pass a `trigger` element and `items`
 * ({label,icon,shortcut,danger,disabled,onSelect} | {type:"separator"} | {type:"label",label}).
 */
function Dropdown({
  trigger,
  items = [],
  align = "start",
  side = "bottom",
  className = ""
}) {
  __ds_scope.injectStyles("dropdown", CSS);
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDoc = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return /*#__PURE__*/React.createElement("span", {
    className: __ds_scope.cx("atl-dd", className),
    ref: ref
  }, React.cloneElement(React.Children.only(trigger), {
    onClick: e => {
      trigger.props.onClick && trigger.props.onClick(e);
      setOpen(o => !o);
    },
    "aria-haspopup": "menu",
    "aria-expanded": open
  }), open && /*#__PURE__*/React.createElement("div", {
    className: __ds_scope.cx("atl-dd__menu", `atl-dd__menu--${align}`, `atl-dd__menu--${side}`),
    role: "menu"
  }, items.map((it, i) => {
    if (it.type === "separator") return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "atl-dd__sep",
      role: "separator"
    });
    if (it.type === "label") return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "atl-dd__label"
    }, it.label);
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "menuitem",
      type: "button",
      className: __ds_scope.cx("atl-dd__item", it.danger && "atl-dd__item--danger"),
      disabled: it.disabled,
      onClick: () => {
        it.onSelect && it.onSelect();
        setOpen(false);
      }
    }, it.icon, /*#__PURE__*/React.createElement("span", null, it.label), it.shortcut && /*#__PURE__*/React.createElement("span", {
      className: "atl-dd__shortcut"
    }, it.shortcut));
  })));
}
Object.assign(__ds_scope, { Dropdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlays/Dropdown.jsx", error: String((e && e.message) || e) }); }

// ui_kits/auth/AuthApp.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Atlas Auth — sign-in / sign-up / 2FA flow on a split marketing panel.
(function () {
  const DS = window.AtlasDesignSystem_221c8f;
  const {
    Input,
    Button,
    Checkbox,
    Alert,
    Badge
  } = DS;
  const G = props => /*#__PURE__*/React.createElement("svg", _extends({
    width: "18",
    height: "18",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#4285F4",
    d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#34A853",
    d: "M12 23c2.97 0 5.46-.98 7.28-2.65l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#FBBC05",
    d: "M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.07H2.18a11 11 0 0 0 0 9.87l3.66-2.84z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#EA4335",
    d: "M12 4.75c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.46 1.39 14.97.4 12 .4A11 11 0 0 0 2.18 7.07l3.66 2.84C6.71 7.3 9.14 4.75 12 4.75z"
  }));
  const Mail = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-10 5L2 7"
  }));
  const Lock = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "11",
    width: "18",
    height: "11",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 11V7a5 5 0 0 1 10 0v4"
  }));
  function Field(props) {
    return /*#__PURE__*/React.createElement(Input, props);
  }
  function AuthCard({
    mode,
    setMode,
    onSignIn
  }) {
    if (mode === "2fa") {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: "100%",
          maxWidth: 380
        }
      }, /*#__PURE__*/React.createElement("h1", {
        style: {
          fontSize: 26,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          margin: "0 0 6px",
          color: "var(--color-text-primary)"
        }
      }, "Verify it's you"), /*#__PURE__*/React.createElement("p", {
        style: {
          margin: "0 0 24px",
          color: "var(--color-text-muted)",
          fontSize: 14.5
        }
      }, "Enter the 6-digit code from your authenticator app."), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 8,
          marginBottom: 20
        }
      }, [0, 1, 2, 3, 4, 5].map(i => /*#__PURE__*/React.createElement("input", {
        key: i,
        maxLength: 1,
        inputMode: "numeric",
        defaultValue: i < 3 ? "•" : "",
        style: {
          width: 48,
          height: 56,
          textAlign: "center",
          fontSize: 22,
          fontWeight: 600,
          border: "1px solid var(--color-border-default)",
          borderRadius: 10,
          background: "var(--color-surface-default)",
          color: "var(--color-text-primary)",
          outline: "none"
        }
      }))), /*#__PURE__*/React.createElement(Button, {
        fullWidth: true,
        size: "lg",
        onClick: onSignIn
      }, "Verify & continue"), /*#__PURE__*/React.createElement("button", {
        onClick: () => setMode("signin"),
        style: {
          marginTop: 16,
          background: "none",
          border: "none",
          color: "var(--color-text-link)",
          cursor: "pointer",
          fontSize: 14,
          fontFamily: "var(--font-sans)"
        }
      }, "\u2190 Back to sign in"));
    }
    const signup = mode === "signup";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        maxWidth: 380
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 26,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        margin: "0 0 6px",
        color: "var(--color-text-primary)"
      }
    }, signup ? "Create your account" : "Welcome back"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 24px",
        color: "var(--color-text-muted)",
        fontSize: 14.5
      }
    }, signup ? "Start your 14-day free trial — no card required." : "Sign in to your Atlas workspace."), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      fullWidth: true,
      size: "lg",
      iconLeading: /*#__PURE__*/React.createElement(G, null)
    }, "Continue with Google"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: "18px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--color-border-subtle)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: "var(--color-text-muted)"
      }
    }, "or"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: "var(--color-border-subtle)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, signup && /*#__PURE__*/React.createElement(Field, {
      label: "Full name",
      placeholder: "Ada Lovelace"
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Email",
      type: "email",
      placeholder: "you@company.com",
      iconLeading: /*#__PURE__*/React.createElement(Mail, null)
    }), /*#__PURE__*/React.createElement(Field, {
      label: "Password",
      type: "password",
      placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
      iconLeading: /*#__PURE__*/React.createElement(Lock, null),
      helperText: signup ? "At least 12 characters." : undefined
    }), !signup && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(Checkbox, {
      label: "Remember me",
      defaultChecked: true
    }), /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontSize: 13.5,
        color: "var(--color-text-link)",
        textDecoration: "none"
      }
    }, "Forgot password?")), /*#__PURE__*/React.createElement(Button, {
      fullWidth: true,
      size: "lg",
      onClick: () => setMode("2fa")
    }, signup ? "Create account" : "Sign in")), /*#__PURE__*/React.createElement("p", {
      style: {
        marginTop: 22,
        fontSize: 14,
        color: "var(--color-text-muted)",
        textAlign: "center"
      }
    }, signup ? "Already have an account? " : "New to Atlas? ", /*#__PURE__*/React.createElement("button", {
      onClick: () => setMode(signup ? "signin" : "signup"),
      style: {
        background: "none",
        border: "none",
        color: "var(--color-text-link)",
        cursor: "pointer",
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "var(--font-sans)"
      }
    }, signup ? "Sign in" : "Create one")));
  }
  function AuthApp() {
    const [mode, setMode] = React.useState("signin");
    const [done, setDone] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        height: "100vh",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "1 1 50%",
        display: "flex",
        flexDirection: "column",
        padding: "40px 48px",
        background: "var(--color-surface-default)",
        overflowY: "auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 8,
        background: "var(--color-action-primary-bg-default)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 800,
        fontSize: 16
      }
    }, "A"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 700,
        fontSize: 16,
        letterSpacing: "-0.02em",
        color: "var(--color-text-primary)"
      }
    }, "Atlas")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, done ? /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 380,
        width: "100%"
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "success",
      title: "You're in!"
    }, "Signed in to the Atlas workspace.")) : /*#__PURE__*/React.createElement(AuthCard, {
      mode: mode,
      setMode: setMode,
      onSignIn: () => setDone(true)
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--color-text-muted)"
      }
    }, "\xA9 2026 Atlas, Inc. \xB7 Privacy \xB7 Terms")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "1 1 50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "48px 56px",
        background: "linear-gradient(160deg, var(--color-brand-700), var(--color-brand-900))",
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      solid: true,
      style: {
        alignSelf: "flex-start",
        background: "rgba(255,255,255,.16)",
        color: "#fff"
      }
    }, "Atlas Platform"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 34,
        fontWeight: 700,
        letterSpacing: "-0.025em",
        lineHeight: 1.15,
        margin: "18px 0 14px",
        maxWidth: 460
      }
    }, "One design system. Every surface, shipped faster."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 16,
        lineHeight: 1.6,
        color: "rgba(255,255,255,.82)",
        maxWidth: 440,
        margin: 0
      }
    }, "SaaS, mobile, dashboards and AI products \u2014 built on the same tokens, components and patterns."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 28,
        marginTop: 36
      }
    }, [["263", "Components"], ["574", "Tokens"], ["AA", "Accessible"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: "-0.02em"
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "rgba(255,255,255,.7)"
      }
    }, l))))));
  }
  window.AuthApp = AuthApp;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/auth/AuthApp.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/App.jsx
try { (() => {
// Atlas Dashboard — app shell: routing, theme, "new" dialog, toasts.
(function () {
  const DS = window.AtlasDesignSystem_221c8f;
  const {
    ToastProvider,
    useToast,
    Dialog,
    Button,
    Input,
    Select,
    Card,
    Badge,
    Table
  } = DS;
  const Icon = window.Icon;
  function BillingView() {
    const invoices = [{
      id: "INV-1042",
      date: "Jun 1, 2026",
      amount: 4200,
      status: "Paid"
    }, {
      id: "INV-1041",
      date: "May 1, 2026",
      amount: 4200,
      status: "Paid"
    }, {
      id: "INV-1040",
      date: "Apr 1, 2026",
      amount: 3800,
      status: "Paid"
    }];
    const cols = [{
      key: "id",
      header: "Invoice",
      render: v => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: "var(--color-text-primary)"
        }
      }, v)
    }, {
      key: "date",
      header: "Date"
    }, {
      key: "amount",
      header: "Amount",
      align: "right",
      render: v => "$" + v.toLocaleString()
    }, {
      key: "status",
      header: "Status",
      render: v => /*#__PURE__*/React.createElement(Badge, {
        tone: "success",
        dot: true
      }, v)
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Card, {
      elevation: "raised"
    }, /*#__PURE__*/React.createElement(Card.Header, {
      title: "Current plan",
      subtitle: "Enterprise \xB7 billed monthly",
      action: /*#__PURE__*/React.createElement(Badge, {
        tone: "brand"
      }, "Active")
    }), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 34,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        color: "var(--color-text-primary)"
      }
    }, "$4,200"), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--color-text-muted)"
      }
    }, "/ month \xB7 renews Jul 1"))), /*#__PURE__*/React.createElement(Card.Footer, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary"
    }, "Change plan"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost"
    }, "Cancel"))), /*#__PURE__*/React.createElement(Card, {
      elevation: "raised"
    }, /*#__PURE__*/React.createElement(Card.Header, {
      title: "Invoices"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "4px 16px 16px"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      columns: cols,
      data: invoices,
      hover: true
    }))));
  }
  function NewDialog({
    open,
    onClose
  }) {
    const {
      toast
    } = useToast();
    return /*#__PURE__*/React.createElement(Dialog, {
      open: open,
      onClose: onClose,
      title: "New account",
      description: "Add a customer account to your workspace.",
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: onClose
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        onClick: () => {
          onClose();
          toast({
            tone: "success",
            title: "Account created",
            message: "Northwind Co. was added."
          });
        }
      }, "Create account"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Account name",
      placeholder: "Acme Inc.",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Primary contact",
      type: "email",
      placeholder: "owner@acme.com"
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Plan",
      placeholder: "Select a plan",
      options: [{
        label: "Starter",
        value: "starter"
      }, {
        label: "Pro",
        value: "pro"
      }, {
        label: "Enterprise",
        value: "enterprise"
      }]
    })));
  }
  function Shell() {
    const [active, setActive] = React.useState("dashboard");
    const [dark, setDark] = React.useState(false);
    const [dialog, setDialog] = React.useState(false);
    const {
      toast
    } = useToast();
    React.useEffect(() => {
      document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    }, [dark]);
    const view = {
      dashboard: window.DashboardView,
      analytics: window.DashboardView,
      customers: window.CustomersView,
      settings: window.SettingsView,
      billing: BillingView
    }[active];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        background: "var(--color-background-app)"
      }
    }, /*#__PURE__*/React.createElement(window.Sidebar, {
      active: active,
      onNavigate: setActive
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(window.Topbar, {
      active: active,
      dark: dark,
      onToggleTheme: () => setDark(d => !d),
      onNew: () => setDialog(true),
      onToast: () => toast({
        tone: "info",
        title: "All caught up",
        message: "No new notifications."
      })
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 1080,
        margin: "0 auto"
      }
    }, view ? React.createElement(view) : null))), /*#__PURE__*/React.createElement(NewDialog, {
      open: dialog,
      onClose: () => setDialog(false)
    }));
  }
  function App() {
    return /*#__PURE__*/React.createElement(ToastProvider, {
      position: "bottom-right"
    }, /*#__PURE__*/React.createElement(Shell, null));
  }
  window.DashboardApp = App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/CustomersView.jsx
try { (() => {
// Atlas Dashboard — Customers: searchable, filterable table.
(function () {
  const {
    Card,
    Table,
    Badge,
    Avatar,
    Input,
    Button,
    Tabs,
    Tag,
    IconButton,
    Dropdown
  } = window.AtlasDesignSystem_221c8f;
  const Icon = window.Icon;
  const ALL = [{
    id: 1,
    name: "Northwind Co.",
    owner: "Ada Lovelace",
    plan: "Enterprise",
    status: "Active",
    seats: 240,
    mrr: 4200
  }, {
    id: 2,
    name: "Initech",
    owner: "Grace Hopper",
    plan: "Pro",
    status: "Active",
    seats: 48,
    mrr: 2800
  }, {
    id: 3,
    name: "Umbrella Inc.",
    owner: "Alan Turing",
    plan: "Pro",
    status: "Trial",
    seats: 12,
    mrr: 0
  }, {
    id: 4,
    name: "Hooli",
    owner: "Edsger Dijkstra",
    plan: "Starter",
    status: "Active",
    seats: 9,
    mrr: 900
  }, {
    id: 5,
    name: "Pied Piper",
    owner: "Linus Torvalds",
    plan: "Pro",
    status: "Past due",
    seats: 22,
    mrr: 2800
  }, {
    id: 6,
    name: "Stark Industries",
    owner: "Katherine Johnson",
    plan: "Enterprise",
    status: "Active",
    seats: 510,
    mrr: 8800
  }, {
    id: 7,
    name: "Wayne Enterprises",
    owner: "Margaret Hamilton",
    plan: "Pro",
    status: "Active",
    seats: 60,
    mrr: 3200
  }, {
    id: 8,
    name: "Soylent Corp",
    owner: "Barbara Liskov",
    plan: "Starter",
    status: "Trial",
    seats: 4,
    mrr: 0
  }];
  function CustomersView() {
    const [q, setQ] = React.useState("");
    const [filter, setFilter] = React.useState("all");
    const data = ALL.filter(r => (filter === "all" || r.status.toLowerCase().replace(" ", "") === filter) && (r.name.toLowerCase().includes(q.toLowerCase()) || r.owner.toLowerCase().includes(q.toLowerCase())));
    const cols = [{
      key: "name",
      header: "Account",
      sortable: true,
      render: v => /*#__PURE__*/React.createElement("span", {
        style: {
          fontWeight: 600,
          color: "var(--color-text-primary)"
        }
      }, v)
    }, {
      key: "owner",
      header: "Owner",
      render: v => /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8
        }
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: v,
        size: "xs"
      }), v)
    }, {
      key: "plan",
      header: "Plan",
      render: v => /*#__PURE__*/React.createElement(Tag, null, v)
    }, {
      key: "status",
      header: "Status",
      render: v => {
        const tone = v === "Active" ? "success" : v === "Trial" ? "info" : "danger";
        return /*#__PURE__*/React.createElement(Badge, {
          tone: tone,
          dot: true
        }, v);
      }
    }, {
      key: "seats",
      header: "Seats",
      align: "right",
      sortable: true
    }, {
      key: "mrr",
      header: "MRR",
      align: "right",
      sortable: true,
      render: v => v ? "$" + v.toLocaleString() : "—"
    }, {
      key: "id",
      header: "",
      align: "right",
      render: () => /*#__PURE__*/React.createElement(Dropdown, {
        align: "end",
        trigger: /*#__PURE__*/React.createElement(IconButton, {
          size: "sm",
          variant: "ghost",
          label: "Row actions"
        }, /*#__PURE__*/React.createElement("svg", {
          viewBox: "0 0 24 24",
          width: "18",
          height: "18",
          fill: "currentColor"
        }, /*#__PURE__*/React.createElement("circle", {
          cx: "5",
          cy: "12",
          r: "1.8"
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "12",
          cy: "12",
          r: "1.8"
        }), /*#__PURE__*/React.createElement("circle", {
          cx: "19",
          cy: "12",
          r: "1.8"
        }))),
        items: [{
          label: "View"
        }, {
          label: "Edit"
        }, {
          type: "separator"
        }, {
          label: "Delete",
          danger: true
        }]
      })
    }];
    return /*#__PURE__*/React.createElement(Card, {
      elevation: "raised"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "16px 16px 12px",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 260
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search accounts\u2026",
      iconLeading: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 18
      }),
      value: q,
      onChange: e => setQ(e.target.value)
    })), /*#__PURE__*/React.createElement(Tabs, {
      variant: "pill",
      value: filter,
      onChange: setFilter,
      items: [{
        value: "all",
        label: "All"
      }, {
        value: "active",
        label: "Active"
      }, {
        value: "trial",
        label: "Trial"
      }, {
        value: "pastdue",
        label: "Past due"
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "md",
      iconLeading: /*#__PURE__*/React.createElement(Icon, {
        name: "filter",
        size: 16
      })
    }, "Filters"), /*#__PURE__*/React.createElement(Button, {
      size: "md",
      iconLeading: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 18
      })
    }, "Add account"))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px 16px"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      columns: cols,
      data: data,
      hover: true
    })));
  }
  window.CustomersView = CustomersView;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/CustomersView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/DashboardView.jsx
try { (() => {
// Atlas Dashboard — main overview: KPI tiles, revenue chart, recent table.
(function () {
  const {
    Card,
    Badge,
    Avatar,
    Table,
    Tabs,
    Button
  } = window.AtlasDesignSystem_221c8f;
  const Icon = window.Icon;
  const KPIS = [{
    label: "Monthly recurring revenue",
    value: "$48.2k",
    delta: "+12.4%",
    up: true
  }, {
    label: "Active customers",
    value: "2,318",
    delta: "+4.1%",
    up: true
  }, {
    label: "Net churn",
    value: "1.8%",
    delta: "-0.6%",
    up: true
  }, {
    label: "Avg. NPS",
    value: "62",
    delta: "-3",
    up: false
  }];

  // simple area chart from data
  const DATA = [22, 30, 26, 38, 34, 46, 42, 55, 60, 58, 72, 80];
  function Chart() {
    const w = 640,
      h = 180,
      pad = 8;
    const max = Math.max(...DATA),
      min = Math.min(...DATA);
    const x = i => pad + i * (w - pad * 2) / (DATA.length - 1);
    const y = v => h - pad - (v - min) / (max - min) * (h - pad * 2);
    const line = DATA.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");
    const area = `${line} L${x(DATA.length - 1)} ${h} L${x(0)} ${h} Z`;
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: `0 0 ${w} ${h}`,
      width: "100%",
      height: h,
      preserveAspectRatio: "none",
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "atl-area",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "var(--color-brand-500)",
      stopOpacity: "0.22"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "var(--color-brand-500)",
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("path", {
      d: area,
      fill: "url(#atl-area)"
    }), /*#__PURE__*/React.createElement("path", {
      d: line,
      fill: "none",
      stroke: "var(--color-brand-600)",
      strokeWidth: "2.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  }
  const rows = [{
    id: 1,
    name: "Northwind Co.",
    owner: "Ada Lovelace",
    plan: "Enterprise",
    status: "Active",
    mrr: 4200
  }, {
    id: 2,
    name: "Initech",
    owner: "Grace Hopper",
    plan: "Pro",
    status: "Active",
    mrr: 2800
  }, {
    id: 3,
    name: "Umbrella Inc.",
    owner: "Alan Turing",
    plan: "Pro",
    status: "Trial",
    mrr: 0
  }, {
    id: 4,
    name: "Hooli",
    owner: "Edsger Dijkstra",
    plan: "Starter",
    status: "Active",
    mrr: 900
  }, {
    id: 5,
    name: "Pied Piper",
    owner: "Linus Torvalds",
    plan: "Pro",
    status: "Past due",
    mrr: 2800
  }];
  const cols = [{
    key: "name",
    header: "Account",
    sortable: true,
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 600,
        color: "var(--color-text-primary)"
      }
    }, v)
  }, {
    key: "owner",
    header: "Owner",
    render: v => /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: v,
      size: "xs"
    }), v)
  }, {
    key: "plan",
    header: "Plan"
  }, {
    key: "status",
    header: "Status",
    render: v => {
      const tone = v === "Active" ? "success" : v === "Trial" ? "info" : "danger";
      return /*#__PURE__*/React.createElement(Badge, {
        tone: tone,
        dot: true
      }, v);
    }
  }, {
    key: "mrr",
    header: "MRR",
    align: "right",
    sortable: true,
    render: v => v ? "$" + v.toLocaleString() : "—"
  }];
  function KpiTile({
    k
  }) {
    return /*#__PURE__*/React.createElement(Card, {
      padding: "md",
      elevation: "raised"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--color-text-muted)",
        fontWeight: 500
      }
    }, k.label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        gap: 10,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        letterSpacing: "-0.02em",
        color: "var(--color-text-primary)",
        lineHeight: 1
      }
    }, k.value), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 2,
        fontSize: 12.5,
        fontWeight: 600,
        color: k.up ? "var(--color-text-success)" : "var(--color-text-danger)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: k.up ? "arrowUp" : "arrowDown",
      size: 14
    }), k.delta)));
  }
  function DashboardView() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16
      }
    }, KPIS.map(k => /*#__PURE__*/React.createElement(KpiTile, {
      key: k.label,
      k: k
    }))), /*#__PURE__*/React.createElement(Card, {
      elevation: "raised"
    }, /*#__PURE__*/React.createElement(Card.Header, {
      title: "Revenue",
      subtitle: "Last 12 months",
      action: /*#__PURE__*/React.createElement(Tabs, {
        variant: "pill",
        defaultValue: "12m",
        items: [{
          value: "30d",
          label: "30d"
        }, {
          value: "6m",
          label: "6m"
        }, {
          value: "12m",
          label: "12m"
        }]
      })
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 12px 16px"
      }
    }, /*#__PURE__*/React.createElement(Chart, null))), /*#__PURE__*/React.createElement(Card, {
      elevation: "raised"
    }, /*#__PURE__*/React.createElement(Card.Header, {
      title: "Recent accounts",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        iconLeading: /*#__PURE__*/React.createElement(Icon, {
          name: "download",
          size: 16
        })
      }, "Export")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "4px 16px 16px"
      }
    }, /*#__PURE__*/React.createElement(Table, {
      columns: cols,
      data: rows,
      hover: true
    }))));
  }
  window.DashboardView = DashboardView;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/DashboardView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Icons.jsx
try { (() => {
// Atlas — shared icon set (Lucide-style 24px stroke icons) for the UI kits.
// Attaches an `Icon` component to window so all kit scripts can use it.
(function () {
  const S = paths => props => React.createElement("svg", Object.assign({
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), paths.map((d, i) => React.createElement("path", {
    key: i,
    d
  })));
  const raw = children => props => React.createElement("svg", Object.assign({
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, props), children);
  const ICONS = {
    grid: S(["M3 3h7v7H3z", "M14 3h7v7h-7z", "M14 14h7v7h-7z", "M3 14h7v7H3z"]),
    users: p => raw([React.createElement("path", {
      key: 1,
      d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
    }), React.createElement("circle", {
      key: 2,
      cx: 9,
      cy: 7,
      r: 4
    }), React.createElement("path", {
      key: 3,
      d: "M23 21v-2a4 4 0 0 0-3-3.87"
    }), React.createElement("path", {
      key: 4,
      d: "M16 3.13a4 4 0 0 1 0 7.75"
    })])(p),
    chart: p => raw([React.createElement("line", {
      key: 1,
      x1: 18,
      y1: 20,
      x2: 18,
      y2: 10
    }), React.createElement("line", {
      key: 2,
      x1: 12,
      y1: 20,
      x2: 12,
      y2: 4
    }), React.createElement("line", {
      key: 3,
      x1: 6,
      y1: 20,
      x2: 6,
      y2: 14
    })])(p),
    card: p => raw([React.createElement("rect", {
      key: 1,
      x: 1,
      y: 4,
      width: 22,
      height: 16,
      rx: 2
    }), React.createElement("line", {
      key: 2,
      x1: 1,
      y1: 10,
      x2: 23,
      y2: 10
    })])(p),
    settings: p => raw([React.createElement("circle", {
      key: 1,
      cx: 12,
      cy: 12,
      r: 3
    }), React.createElement("path", {
      key: 2,
      d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
    })])(p),
    search: p => raw([React.createElement("circle", {
      key: 1,
      cx: 11,
      cy: 11,
      r: 8
    }), React.createElement("line", {
      key: 2,
      x1: 21,
      y1: 21,
      x2: 16.65,
      y2: 16.65
    })])(p),
    bell: S(["M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9", "M13.73 21a2 2 0 0 1-3.46 0"]),
    plus: p => raw([React.createElement("line", {
      key: 1,
      x1: 12,
      y1: 5,
      x2: 12,
      y2: 19
    }), React.createElement("line", {
      key: 2,
      x1: 5,
      y1: 12,
      x2: 19,
      y2: 12
    })])(p),
    chevronDown: S(["M6 9l6 6 6-6"]),
    arrowUp: S(["M12 19V5", "M5 12l7-7 7 7"]),
    arrowDown: S(["M12 5v14", "M19 12l-7 7-7-7"]),
    logout: S(["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "M16 17l5-5-5-5", "M21 12H9"]),
    filter: S(["M22 3H2l8 9.46V19l4 2v-8.54L22 3z"]),
    download: S(["M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", "M7 10l5 5 5-5", "M12 15V3"]),
    sparkles: S(["M12 3l1.9 5.8L20 10.7l-6.1 1.9L12 18l-1.9-5.4L4 10.7l6.1-1.9z"]),
    check: S(["M20 6L9 17l-5-5"]),
    creditCard: p => raw([React.createElement("rect", {
      key: 1,
      x: 1,
      y: 4,
      width: 22,
      height: 16,
      rx: 2
    }), React.createElement("line", {
      key: 2,
      x1: 1,
      y1: 10,
      x2: 23,
      y2: 10
    })])(p),
    folder: S(["M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"]),
    moon: S(["M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"]),
    sun: p => raw([React.createElement("circle", {
      key: 1,
      cx: 12,
      cy: 12,
      r: 5
    }), React.createElement("path", {
      key: 2,
      d: "M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
    })])(p)
  };
  function Icon({
    name,
    size = 20,
    ...rest
  }) {
    const C = ICONS[name] || ICONS.grid;
    return React.createElement(C, Object.assign({
      width: size,
      height: size
    }, rest));
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/SettingsView.jsx
try { (() => {
// Atlas Dashboard — Settings: profile, preferences, security.
(function () {
  const {
    Card,
    Input,
    Select,
    Switch,
    Button,
    Avatar,
    Tabs,
    Alert,
    Badge
  } = window.AtlasDesignSystem_221c8f;
  const Icon = window.Icon;
  function Section({
    title,
    desc,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "240px 1fr",
        gap: 28,
        padding: "24px 0",
        borderTop: "1px solid var(--color-border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: "var(--color-text-primary)"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--color-text-muted)",
        marginTop: 4,
        lineHeight: 1.5
      }
    }, desc)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 16,
        maxWidth: 520
      }
    }, children));
  }
  function SettingsView() {
    const [tab, setTab] = React.useState("profile");
    return /*#__PURE__*/React.createElement(Card, {
      elevation: "raised"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "8px 24px 0"
      }
    }, /*#__PURE__*/React.createElement(Tabs, {
      variant: "line",
      value: tab,
      onChange: setTab,
      items: [{
        value: "profile",
        label: "Profile"
      }, {
        value: "preferences",
        label: "Preferences"
      }, {
        value: "security",
        label: "Security"
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "4px 24px 24px"
      }
    }, tab === "profile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, {
      title: "Photo",
      desc: "This will be displayed on your profile."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Ada Lovelace",
      size: "xl"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Upload new"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm"
    }, "Remove"))), /*#__PURE__*/React.createElement(Section, {
      title: "Personal info",
      desc: "Update your name and contact details."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Input, {
      label: "First name",
      defaultValue: "Ada"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Last name",
      defaultValue: "Lovelace"
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      defaultValue: "ada@atlas.io",
      iconLeading: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 16
      })
    }), /*#__PURE__*/React.createElement(Select, {
      label: "Timezone",
      defaultValue: "gmt",
      options: [{
        label: "GMT (London)",
        value: "gmt"
      }, {
        label: "EST (New York)",
        value: "est"
      }, {
        label: "PST (San Francisco)",
        value: "pst"
      }]
    }))), tab === "preferences" && /*#__PURE__*/React.createElement(Section, {
      title: "Notifications",
      desc: "Choose what you want to hear about."
    }, /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true,
      label: "Weekly digest",
      description: "A summary of account activity every Monday."
    }), /*#__PURE__*/React.createElement(Switch, {
      defaultChecked: true,
      label: "Product updates",
      description: "New features and improvements."
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Mentions",
      description: "When a teammate @mentions you."
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Marketing emails",
      description: "Tips, offers and case studies."
    })), tab === "security" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: 20
      }
    }, /*#__PURE__*/React.createElement(Alert, {
      tone: "warning",
      title: "Two-factor authentication is off"
    }, "Protect your account by requiring a code at sign-in.")), /*#__PURE__*/React.createElement(Section, {
      title: "Password",
      desc: "Use a strong, unique password."
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Current password",
      type: "password",
      defaultValue: "hunter22"
    }), /*#__PURE__*/React.createElement(Input, {
      label: "New password",
      type: "password",
      helperText: "At least 12 characters."
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, null, "Update password"))), /*#__PURE__*/React.createElement(Section, {
      title: "Sessions",
      desc: "Devices currently signed in."
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 14px",
        border: "1px solid var(--color-border-subtle)",
        borderRadius: 10
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        fontWeight: 600,
        color: "var(--color-text-primary)"
      }
    }, "MacBook Pro \xB7 London"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--color-text-muted)"
      }
    }, "Chrome \xB7 Active now")), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true
    }, "This device"))))));
  }
  window.SettingsView = SettingsView;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/SettingsView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Sidebar.jsx
try { (() => {
// Atlas Dashboard — left navigation rail.
(function () {
  const {
    Avatar,
    Badge
  } = window.AtlasDesignSystem_221c8f;
  const Icon = window.Icon;
  const NAV = [{
    id: "dashboard",
    label: "Dashboard",
    icon: "grid"
  }, {
    id: "customers",
    label: "Customers",
    icon: "users",
    badge: "12"
  }, {
    id: "analytics",
    label: "Analytics",
    icon: "chart"
  }, {
    id: "billing",
    label: "Billing",
    icon: "creditCard"
  }, {
    id: "settings",
    label: "Settings",
    icon: "settings"
  }];
  function Sidebar({
    active,
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: 248,
        flex: "none",
        display: "flex",
        flexDirection: "column",
        background: "var(--color-surface-default)",
        borderRight: "1px solid var(--color-border-subtle)",
        height: "100%",
        boxSizing: "border-box"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "20px 20px 18px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: 8,
        background: "var(--color-action-primary-bg-default)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 800,
        fontSize: 16,
        letterSpacing: "-0.04em"
      }
    }, "A"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 16,
        letterSpacing: "-0.02em",
        color: "var(--color-text-primary)"
      }
    }, "Atlas"), /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral",
      size: "sm",
      style: {
        marginLeft: "auto"
      }
    }, "Pro")), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        padding: "4px 12px",
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        color: "var(--color-text-muted)",
        padding: "10px 10px 6px"
      }
    }, "Workspace"), NAV.map(n => {
      const on = active === n.id;
      return /*#__PURE__*/React.createElement("button", {
        key: n.id,
        onClick: () => onNavigate(n.id),
        style: {
          display: "flex",
          alignItems: "center",
          gap: 11,
          padding: "9px 10px",
          border: "none",
          cursor: "pointer",
          borderRadius: 8,
          fontFamily: "var(--font-sans)",
          fontSize: 14,
          fontWeight: 500,
          textAlign: "left",
          background: on ? "var(--color-surface-selected)" : "transparent",
          color: on ? "var(--color-text-brand)" : "var(--color-text-secondary)",
          transition: "background 120ms, color 120ms"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: n.icon,
        size: 18
      }), /*#__PURE__*/React.createElement("span", null, n.label), n.badge && /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: "auto",
          fontSize: 11,
          fontWeight: 700,
          color: on ? "var(--color-text-brand)" : "var(--color-text-muted)",
          background: on ? "var(--color-surface-brand)" : "var(--color-surface-sunken)",
          borderRadius: 999,
          padding: "1px 7px"
        }
      }, n.badge));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "0 16px 12px",
        padding: 14,
        borderRadius: 12,
        background: "var(--color-surface-ai)",
        border: "1px solid var(--color-border-subtle)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        color: "var(--color-text-ai)",
        fontSize: 13,
        fontWeight: 600
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "sparkles",
      size: 15
    }), " Atlas AI"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: "var(--color-text-muted)",
        marginTop: 4,
        lineHeight: 1.45
      }
    }, "Summarize accounts and draft replies automatically.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 16px",
        borderTop: "1px solid var(--color-border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: "Ada Lovelace",
      size: "sm",
      status: "online"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: "var(--color-text-primary)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, "Ada Lovelace"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: "var(--color-text-muted)"
      }
    }, "ada@atlas.io"))));
  }
  window.Sidebar = Sidebar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/Topbar.jsx
try { (() => {
// Atlas Dashboard — top bar with title, search, actions.
(function () {
  const {
    Input,
    IconButton,
    Button,
    Dropdown,
    Avatar
  } = window.AtlasDesignSystem_221c8f;
  const Icon = window.Icon;
  const TITLES = {
    dashboard: "Dashboard",
    customers: "Customers",
    analytics: "Analytics",
    billing: "Billing",
    settings: "Settings"
  };
  function Topbar({
    active,
    dark,
    onToggleTheme,
    onNew,
    onToast
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 16,
        padding: "14px 24px",
        borderBottom: "1px solid var(--color-border-subtle)",
        background: "var(--color-surface-default)",
        position: "sticky",
        top: 0,
        zIndex: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 19,
        fontWeight: 600,
        letterSpacing: "-0.02em",
        color: "var(--color-text-primary)"
      }
    }, TITLES[active])), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        width: 280
      }
    }, /*#__PURE__*/React.createElement(Input, {
      placeholder: "Search\u2026",
      iconLeading: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 18
      })
    })), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      label: "Toggle theme",
      onClick: onToggleTheme
    }, /*#__PURE__*/React.createElement(Icon, {
      name: dark ? "sun" : "moon",
      size: 20
    })), /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      label: "Notifications",
      onClick: () => onToast()
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 20
    })), /*#__PURE__*/React.createElement(Button, {
      iconLeading: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 18
      }),
      onClick: onNew
    }, "New"), /*#__PURE__*/React.createElement(Dropdown, {
      align: "end",
      trigger: /*#__PURE__*/React.createElement("button", {
        style: {
          border: "none",
          background: "transparent",
          cursor: "pointer",
          padding: 0,
          borderRadius: 999
        },
        "aria-label": "Account"
      }, /*#__PURE__*/React.createElement(Avatar, {
        name: "Ada Lovelace",
        size: "md"
      })),
      items: [{
        type: "label",
        label: "ada@atlas.io"
      }, {
        label: "Profile"
      }, {
        label: "Workspace settings"
      }, {
        type: "separator"
      }, {
        label: "Sign out",
        danger: true,
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "logout",
          size: 16
        })
      }]
    }));
  }
  window.Topbar = Topbar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/Topbar.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastProvider = __ds_scope.ToastProvider;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dropdown = __ds_scope.Dropdown;

})();
