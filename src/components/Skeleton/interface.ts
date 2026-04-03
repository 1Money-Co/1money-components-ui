import type { CSSProperties, HTMLAttributes, RefObject } from 'react';

export interface SkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /** Ref to the root element */
  ref?: RefObject<HTMLDivElement | null>;

  /** CSS class prefix */
  prefixCls?: string;

  /** Shape of the skeleton */
  shape?: 'rectangle' | 'circle';

  /** Shorthand to set both width and height to the same value */
  size?: CSSProperties['width'];

  /** Animation type. Use 'none' to disable */
  animation?: 'wave' | 'none';

  /** Width of the skeleton. Ignored when size is set */
  width?: CSSProperties['width'];

  /** Height of the skeleton. Ignored when size is set */
  height?: CSSProperties['height'];

  /** Border radius override */
  borderRadius?: CSSProperties['borderRadius'];
}
