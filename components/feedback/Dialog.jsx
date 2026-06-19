import React from "react";
import { injectStyles, cx, useId } from "../lib/styles.js";

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

const X = () => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>);

/** Dialog — modal surface with scrim, escape / backdrop close and focus trap-lite. */
export function Dialog({
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
  children,
}) {
  injectStyles("dialog", CSS);
  const titleId = useId("dlg-t");
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose && onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current && ref.current.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className={cx("atl-dialog__scrim", align === "top" && "atl-dialog__scrim--top")} onMouseDown={(e) => { if (closeOnBackdrop && e.target === e.currentTarget) onClose && onClose(); }}>
      <div ref={ref} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby={title ? titleId : undefined} className={cx("atl-dialog", `atl-dialog--${size}`, className)}>
        {(title || showClose) && (
          <div className="atl-dialog__header">
            <div className="atl-dialog__titles">
              {title && <div id={titleId} className="atl-dialog__title">{title}</div>}
              {description && <div className="atl-dialog__desc">{description}</div>}
            </div>
            {showClose && <button type="button" className="atl-dialog__close" aria-label="Close" onClick={onClose}><X /></button>}
          </div>
        )}
        {children && <div className="atl-dialog__body">{children}</div>}
        {footer && <div className="atl-dialog__footer">{footer}</div>}
      </div>
    </div>
  );
}
