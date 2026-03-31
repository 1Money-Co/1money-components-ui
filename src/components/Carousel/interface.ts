import type { RefObject } from 'react';

export interface CarouselProps {
  ref?: RefObject<HTMLDivElement | null>;
  className?: string;
  /** CSS class prefix for customization */
  prefixCls?: string;
  /** Total number of indicator dots */
  count: number;
  /** Current active dot index (controlled) */
  activeIndex?: number;
  /** Default active dot index (uncontrolled) */
  defaultActiveIndex?: number;
  /** Callback when active dot changes */
  onChange?: (index: number) => void;
}
