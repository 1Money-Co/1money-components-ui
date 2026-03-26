import type { HTMLAttributes, ReactNode } from 'react';

export interface AccordionItem {
  /** Unique identifier for the accordion item */
  key: string;
  /** Header title content */
  title: ReactNode;
  /** Panel content revealed when expanded */
  children: ReactNode;
  /** Whether the item is disabled */
  disabled?: boolean;
}

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** CSS class prefix for customization */
  prefixCls?: string;
  /** Accordion items configuration */
  items: AccordionItem[];
  /** Active (expanded) item keys (controlled mode) */
  activeKeys?: string[];
  /** Default active item keys (uncontrolled mode) */
  defaultActiveKeys?: string[];
  /** Whether multiple items can be expanded simultaneously */
  multiple?: boolean;
  /** Visual style variant */
  variant?: 'fill' | 'stroke';
  /** Size variant */
  size?: 'large' | 'small';
  /** Callback when active items change */
  onChange?: (activeKeys: string[]) => void;
}
