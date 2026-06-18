import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

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

const SIZES = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64 };
const DOT = { xs: 7, sm: 9, md: 11, lg: 13, xl: 16 };
const PALETTE = ["#2563EB", "#16A34A", "#7C3AED", "#EA580C", "#0891B2", "#DB2777"];

function initialsOf(name = "") {
  const p = name.trim().split(/\s+/);
  return ((p[0]?.[0] || "") + (p[1]?.[0] || "")).toUpperCase() || "?";
}
function colorFor(name = "") {
  let h = 0; for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return PALETTE[h % PALETTE.length];
}

/** Avatar — image, initials fallback, presence dot. Use Avatar.Group to stack. */
export function Avatar({
  src,
  name = "",
  size = "md",
  shape = "circle",
  status,
  className = "",
  style,
  ...rest
}) {
  injectStyles("avatar", CSS);
  const px = SIZES[size] || size;
  const dot = DOT[size] || 11;
  return (
    <span
      className={cx("atl-avatar", shape === "square" && "atl-avatar--square", className)}
      style={{ width: px, height: px, fontSize: px * 0.4, background: src ? undefined : colorFor(name), ...style }}
      role="img"
      aria-label={name || undefined}
      {...rest}
    >
      {src ? <img src={src} alt={name} /> : initialsOf(name)}
      {status && <span className={`atl-avatar__status atl-avatar__status--${status}`} style={{ width: dot, height: dot }} />}
    </span>
  );
}

Avatar.Group = function AvatarGroup({ max = 4, size = "md", children, className = "" }) {
  injectStyles("avatar", CSS);
  const items = React.Children.toArray(children);
  const shown = items.slice(0, max);
  const extra = items.length - shown.length;
  const px = SIZES[size] || size;
  return (
    <span className={cx("atl-avatar-group", className)}>
      {shown}
      {extra > 0 && (
        <span className="atl-avatar atl-avatar-group__more" style={{ width: px, height: px, fontSize: px * 0.36 }}>+{extra}</span>
      )}
    </span>
  );
};
