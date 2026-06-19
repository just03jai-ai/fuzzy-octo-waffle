import React from "react";
import { injectStyles, cx, useId } from "../lib/styles.js";

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
export function Tooltip({
  content,
  side = "top",
  delay = 200,
  className = "",
  children,
}) {
  injectStyles("tooltip", CSS);
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef(null);
  const id = useId("tip");
  const show = () => { clearTimeout(timer.current); timer.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };
  return (
    <span
      className={cx("atl-tip-wrap", className)}
      data-open={open}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {React.cloneElement(React.Children.only(children), { "aria-describedby": open ? id : undefined })}
      <span role="tooltip" id={id} className={cx("atl-tip", `atl-tip--${side}`)}>
        {content}
        <span className="atl-tip__arrow" />
      </span>
    </span>
  );
}
