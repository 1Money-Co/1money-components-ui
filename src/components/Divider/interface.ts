import type { HTMLAttributes, ReactNode } from 'react';

export type DividerType = 'horizontal' | 'vertical';
export type DividerOrientation = 'left' | 'center' | 'right';
export type DividerVariant = 'solid' | 'dashed' | 'dotted';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** Direction type of the divider */
  type?: DividerType;
  /** Position of the title inside the divider */
  orientation?: DividerOrientation;
  /** Margin between the title and the closest border (px or percentage) */
  orientationMargin?: string | number;
  /** Whether the divider text is displayed in plain style (no bold/special styling) */
  plain?: boolean;
  /** Border style variant */
  variant?: DividerVariant;
  /** Custom class prefix */
  prefixCls?: string;
  /** Inner content rendered between the divider lines */
  children?: ReactNode;
}
