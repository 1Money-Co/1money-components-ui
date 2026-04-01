import type { ReactNode, ReactElement, MouseEvent, RefObject } from 'react';

export interface NavigationItem {
  /** Unique key for the item */
  key?: string | number;
  /** Display label */
  label: ReactNode;
  /** Icon — accepts IconName string or ReactNode */
  icon?: ReactNode;
  /** Suffix content rendered after the label (e.g., tag/badge) */
  suffix?: ReactNode;
  /** Link component wrapper (e.g., Next.js Link) or URL string */
  link?: string | ReactElement;
  /** Whether this item is currently active */
  active?: boolean;
  /** Whether this item is disabled */
  disabled?: boolean;
  /** Whether this item is hidden */
  hidden?: boolean;
  /** Click handler */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  /** Sub-menu items (Level 2) */
  children?: Omit<NavigationItem, 'children' | 'defaultOpen' | 'onOpenChange'>[];
  /** Whether sub-menu is open by default */
  defaultOpen?: boolean;
  /** Callback when sub-menu open state changes */
  onOpenChange?: (open: boolean) => void;
}

export interface NavigationProps {
  /** Ref to the root element */
  ref?: RefObject<HTMLElement | null>;
  /** CSS class prefix */
  prefixCls?: string;
  /** Additional CSS classes */
  className?: string;
  /** Navigation menu items */
  items: NavigationItem[];
  /** Whether the navigation is collapsed */
  collapsed?: boolean;
  /** Default collapsed state (uncontrolled) */
  defaultCollapsed?: boolean;
  /** Whether collapse toggle is shown */
  collapsible?: boolean;
  /** Callback when collapsed state changes */
  onCollapse?: (collapsed: boolean) => void;
  /** Header content (e.g., logo) */
  header?: ReactNode;
  /** Company selector slot (below header) */
  selector?: ReactNode;
  /** Children rendered at bottom (e.g., settings, profile) */
  children?: ReactNode;
}

export interface NavigationHandlers {
  /** Toggle collapsed state */
  toggle: () => void;
  /** Set collapsed state directly */
  collapse: (collapsed: boolean) => void;
}
