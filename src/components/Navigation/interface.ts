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
  /** Header content — defaults to built-in 1Money logo; pass null to hide */
  header?: ReactNode;
  /** Click handler for the default logo */
  onLogoClick?: (e: MouseEvent<HTMLElement>) => void;
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

// ── Nav Component ──

export interface NavItem {
  /** Unique key for the item */
  key?: string | number;
  /** Display label */
  label: ReactNode;
  /** Icon — accepts IconName string or ReactNode */
  icon?: ReactNode;
  /** Suffix content rendered after the label */
  suffix?: ReactNode;
  /** Link component wrapper or URL string */
  link?: string | ReactElement;
  /** Whether this item is currently active */
  active?: boolean;
  /** Whether this item is disabled */
  disabled?: boolean;
  /** Whether this item is hidden */
  hidden?: boolean;
  /** Nested child items — enables recursive multi-level nesting */
  children?: NavItem[];
  /** Whether children are expanded by default */
  defaultOpen?: boolean;
  /** Callback when expand state changes */
  onOpenChange?: (open: boolean) => void;
  /** Click handler */
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

export interface NavProps {
  /** Ref to the root element */
  ref?: RefObject<HTMLElement | null>;
  /** CSS class prefix */
  prefixCls?: string;
  /** Additional CSS classes for the root <nav> element */
  className?: string;
  /** Additional CSS classes for the inner content wrapper */
  bodyCls?: string;
  /** Navigation items — top-level items with children render as groups */
  items: NavItem[];
}

// ── NavigationStepper Component ──

export type NavigationStepperStepStatus = 'todo' | 'active' | 'done' | 'done-active';

export interface NavigationStepperStep {
  /** Unique key for the step */
  key: string;
  /** Display label */
  label: ReactNode;
  /** Step status — drives styling and trailing icon */
  status: NavigationStepperStepStatus;
  /** Whether the step is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: (step: NavigationStepperStep) => void;
}

export interface NavigationStepperProps {
  /** Root element id */
  id?: string;
  /** Additional CSS classes for the root <aside> element */
  className?: string;
  /** CSS class prefix */
  prefixCls?: string;
  /** Additional CSS classes for the logo button */
  logoCls?: string;
  /** Additional CSS classes for the header container */
  headerCls?: string;
  /** Additional CSS classes for the steps list */
  bodyCls?: string;
  /** Additional CSS classes for the footer */
  footerCls?: string;
  /** Click handler for the logo button */
  onLogoClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** Step items rendered in order */
  steps: NavigationStepperStep[];
  /** Optional footer content (e.g. auto-saved timestamp) */
  footer?: ReactNode;
}
