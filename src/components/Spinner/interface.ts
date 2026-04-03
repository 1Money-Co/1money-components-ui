import type { HTMLAttributes } from 'react';

export const SPINNER_TYPES = ['default', 'brand', 'brand-bg'] as const;

export type SpinnerType = (typeof SPINNER_TYPES)[number];

export interface SpinnerProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  prefixCls?: string;
  /** Spinner variant type */
  type?: SpinnerType;
  /** Size in pixels */
  size?: number;
  /** Title text shown below the logo (brand / brand-bg) */
  title?: string;
  /** Body text shown below the title (brand / brand-bg) */
  body?: string;
}
