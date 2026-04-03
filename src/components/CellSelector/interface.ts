import type { HTMLAttributes, ReactNode, RefObject } from 'react';

export interface CellSelectorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  ref?: RefObject<HTMLDivElement | null>;
  prefixCls?: string;
  /** Whether this cell selector is checked */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Size variant */
  size?: 'large' | 'medium' | 'small';
  /** Layout direction of the cell content */
  direction?: 'horizontal' | 'vertical';
  /** Label text */
  label?: ReactNode;
  /** Description text (visible in large size only) */
  description?: ReactNode;
  /** Icon slot rendered in the icon circle (not shown when checked in horizontal mode) */
  icon?: ReactNode;
  /** Value that identifies this cell selector within a CellSelectorGroup */
  value?: string | number;
  /** Whether the cell selector is disabled */
  disabled?: boolean;
  /** Callback when checked state changes */
  onChange?: (checked: boolean) => void;
}

export interface CellSelectorGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  ref?: RefObject<HTMLDivElement | null>;
  prefixCls?: string;
  /** Currently selected value (controlled) */
  value?: string | number;
  /** Default selected value (uncontrolled) */
  defaultValue?: string | number;
  /** Layout direction of the group */
  layout?: 'vertical' | 'horizontal';
  /** Whether all selectors in the group are disabled */
  disabled?: boolean;
  /** Child CellSelector components */
  children?: ReactNode;
  /** Callback when the selected value changes */
  onChange?: (value: string | number) => void;
}
