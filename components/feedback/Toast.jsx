import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

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
  success: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  danger: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>,
  info: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>,
  warning: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>,
};
const X = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);

/** Single toast surface (controlled). Most apps use ToastProvider + useToast. */
export function Toast({ tone = "info", title, message, onClose, leaving = false, className = "" }) {
  injectStyles("toast", CSS);
  return (
    <div className={cx("atl-toast", `atl-toast--${tone}`, leaving && "atl-toast--leaving", className)} role="status">
      {ICONS[tone] && <span className="atl-toast__icon">{ICONS[tone]}</span>}
      <div className="atl-toast__body">
        {title && <div className="atl-toast__title">{title}</div>}
        {message && <div className="atl-toast__msg">{message}</div>}
      </div>
      {onClose && <button type="button" className="atl-toast__close" aria-label="Dismiss" onClick={onClose}><X /></button>}
    </div>
  );
}

const ToastCtx = React.createContext(null);

/** Wrap your app; call useToast() to push toasts. */
export function ToastProvider({ position = "bottom-right", duration = 4000, children }) {
  injectStyles("toast", CSS);
  const [toasts, setToasts] = React.useState([]);
  const remove = React.useCallback((id) => {
    setToasts((t) => t.map((x) => x.id === id ? { ...x, leaving: true } : x));
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 160);
  }, []);
  const toast = React.useCallback((opts) => {
    const id = Math.random().toString(36).slice(2);
    setToasts((t) => [...t, { id, ...opts }]);
    if (opts.duration !== 0) setTimeout(() => remove(id), opts.duration || duration);
    return id;
  }, [duration, remove]);
  return (
    <ToastCtx.Provider value={{ toast, dismiss: remove }}>
      {children}
      <div className={`atl-toaster atl-toaster--${position}`}>
        {toasts.map((t) => <Toast key={t.id} {...t} onClose={() => remove(t.id)} />)}
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = React.useContext(ToastCtx);
  if (!ctx) return { toast: () => {}, dismiss: () => {} };
  return ctx;
}
