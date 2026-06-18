// Atlas — shared style injector.
// Components reference design tokens via CSS custom properties; for stateful
// styling (hover/focus/active/disabled) we inject a scoped <style> block once
// per component id. Import React only elsewhere; this is the single shared util.

const injected = new Set();

export function injectStyles(id, css) {
  if (typeof document === "undefined") return;
  if (injected.has(id)) return;
  injected.add(id);
  const el = document.createElement("style");
  el.setAttribute("data-atlas", id);
  el.textContent = css;
  document.head.appendChild(el);
}

let _uid = 0;
export function useId(prefix = "atl") {
  const React = window.React;
  const ref = React.useRef(null);
  if (ref.current === null) ref.current = `${prefix}-${++_uid}`;
  return ref.current;
}

export function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}
