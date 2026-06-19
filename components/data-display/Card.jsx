import React from "react";
import { injectStyles, cx } from "../lib/styles.js";

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
export function Card({
  elevation = "raised",
  padding,
  interactive = false,
  as = "div",
  className = "",
  children,
  ...rest
}) {
  injectStyles("card", CSS);
  const Tag = as;
  return (
    <Tag
      className={cx("atl-card", `atl-card--${elevation}`, interactive && "atl-card--interactive", padding && `atl-card__pad--${padding}`, className)}
      tabIndex={interactive ? 0 : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}

Card.Header = function CardHeader({ title, subtitle, action, children, className = "" }) {
  injectStyles("card", CSS);
  return (
    <div className={cx("atl-card__header", className)} style={action ? { flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between" } : undefined}>
      {children || (
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {title && <div className="atl-card__title">{title}</div>}
          {subtitle && <div className="atl-card__subtitle">{subtitle}</div>}
        </div>
      )}
      {action}
    </div>
  );
};

Card.Body = function CardBody({ children, className = "" }) {
  injectStyles("card", CSS);
  return <div className={cx("atl-card__body", className)}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className = "" }) {
  injectStyles("card", CSS);
  return <div className={cx("atl-card__footer", className)}>{children}</div>;
};

Card.Media = function CardMedia({ src, alt = "", height, children, className = "" }) {
  injectStyles("card", CSS);
  return (
    <div className={cx("atl-card__media", className)} style={height ? { height } : undefined}>
      {children || <img src={src} alt={alt} />}
    </div>
  );
};
