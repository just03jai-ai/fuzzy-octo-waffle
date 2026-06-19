import * as React from "react";

export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";
export type AvatarStatus = "online" | "away" | "busy" | "offline";

/** Avatar with image, deterministic initials fallback and presence dot. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  /** Used for initials + the deterministic fallback colour + aria-label. */
  name?: string;
  /** @default "md" */
  size?: AvatarSize;
  shape?: "circle" | "square";
  status?: AvatarStatus;
}

export interface AvatarGroupProps {
  /** Max avatars before a +N chip. @default 4 */
  max?: number;
  size?: AvatarSize;
  children?: React.ReactNode;
  className?: string;
}

export declare function Avatar(props: AvatarProps): React.ReactElement;
export declare namespace Avatar {
  function Group(props: AvatarGroupProps): React.ReactElement;
}
