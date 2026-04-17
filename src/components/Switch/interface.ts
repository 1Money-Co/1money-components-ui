import type { ReactNode, RefObject } from 'react';
import type { SwitchLabelPlacement } from './constants';

export interface SwitchProps {
  ref?: RefObject<HTMLLabelElement | null>;
  className?: string;
  /** CSS class prefix for customization */
  prefixCls?: string;
  id?: string;
  name?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  /** Whether the switch is checked (controlled) */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Label text displayed next to the switch */
  label?: ReactNode;
  /** Description text displayed below the label */
  description?: ReactNode;
  /** Placement of the label relative to the switch */
  labelPlacement?: SwitchLabelPlacement;
  /** Callback when checked state changes */
  onChange?: (checked: boolean) => void;
}
