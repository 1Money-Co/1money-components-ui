import type { ReactNode, RefObject } from 'react';

export interface CarouselProps {
  ref?: RefObject<HTMLDivElement | null>;
  className?: string;
  /** CSS class prefix for customization */
  prefixCls?: string;
  /** Carousel slide items */
  children?: ReactNode;
  /** Current active slide index (controlled) */
  activeIndex?: number;
  /** Default active slide index (uncontrolled) */
  defaultActiveIndex?: number;
  /** Whether to auto-play slides */
  autoPlay?: boolean;
  /** Auto-play interval in milliseconds */
  autoPlayInterval?: number;
  /** Whether to loop back to start after last slide */
  loop?: boolean;
  /** Whether to show indicator dots */
  showIndicators?: boolean;
  /** Callback when active slide changes */
  onChange?: (index: number) => void;
}
