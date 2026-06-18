import * as React from "react";

export type CardElevation = "flat" | "raised" | "elevated";

/**
 * Surface container. Compose with the Card.Header / Card.Body / Card.Footer /
 * Card.Media subcomponents, or pass arbitrary children with a `padding` prop.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Shadow level. @default "raised" */
  elevation?: CardElevation;
  /** Uniform padding when not using subcomponents. */
  padding?: "sm" | "md" | "lg";
  /** Adds hover lift + focus ring; renders as a focusable surface. */
  interactive?: boolean;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

export interface CardHeaderProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  /** Trailing element (e.g. an IconButton menu). */
  action?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}
export interface CardMediaProps {
  src?: string;
  alt?: string;
  height?: number | string;
  children?: React.ReactNode;
  className?: string;
}

export declare function Card(props: CardProps): React.ReactElement;
export declare namespace Card {
  function Header(props: CardHeaderProps): React.ReactElement;
  function Body(props: { children?: React.ReactNode; className?: string }): React.ReactElement;
  function Footer(props: { children?: React.ReactNode; className?: string }): React.ReactElement;
  function Media(props: CardMediaProps): React.ReactElement;
}
