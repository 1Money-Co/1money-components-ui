import type { HTMLAttributes } from 'react';

export const SPINNER_TYPES = ['default', 'brand', 'brand-bg'] as const;

export type SpinnerType = (typeof SPINNER_TYPES)[number];

export interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  prefixCls?: string;
  /** Spinner variant type */
  type?: SpinnerType;
  /** Size in pixels */
  size?: number;
  /** Stroke width of the spinner circle (default variant only) */
  strokeWidth?: number | string;
  /** Stroke color of the spinner circle (default variant only). Has no effect on brand / brand-bg variants */
  color?: string;
  /** Title text shown below the logo (brand / brand-bg) */
  title?: string;
  /** Body text shown below the title (brand / brand-bg) */
  body?: string;
}
