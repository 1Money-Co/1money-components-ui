import type { HTMLAttributes, ReactNode } from 'react';

export interface TabItem {
  /** Unique identifier for the tab */
  key: string;
  /** Tab header label */
  label: ReactNode;
  /** Optional badge number displayed next to the label */
  badge?: number;
  /** Whether the tab is disabled */
  disabled?: boolean;
  /** Tab panel content */
  children?: ReactNode;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** CSS class prefix for customization */
  prefixCls?: string;
  /** Active tab key (controlled mode) */
  activeKey?: string;
  /** Default active tab key (uncontrolled mode) */
  defaultActiveKey?: string;
  /** Tab items configuration */
  items: TabItem[];
  /** Callback when active tab changes */
  onChange?: (key: string) => void;
}
