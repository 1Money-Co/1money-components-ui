import type {
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
} from 'react';
import type { IconName } from '@/components/Icons';

export type RadioValueType = string | number;
export type RadioVariant = 'default' | 'cell';
export type RadioSize = 'large' | 'medium' | 'small';
export type RadioOrientation = 'horizontal' | 'vertical';
export type RadioAlignment = 'left' | 'center' | 'right';
export type RadioGroupDirection = 'vertical' | 'horizontal';

export interface RadioChangeTarget {
  checked: boolean;
  disabled: boolean;
  id?: string;
  name?: string;
  type: 'radio';
  value?: RadioValueType;
}

export interface RadioChangeEvent {
  nativeEvent: Event;
  preventDefault: () => void;
  stopPropagation: () => void;
  target: RadioChangeTarget;
}

type NativeRadioInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | 'children'
  | 'checked'
  | 'className'
  | 'defaultChecked'
  | 'onChange'
  | 'size'
  | 'style'
  | 'type'
  | 'value'
>;

export interface RadioProps extends NativeRadioInputProps {
  ref?: RefObject<HTMLLabelElement | null>;
  className?: string;
  prefixCls?: string;
  style?: CSSProperties;
  /** Value that identifies this radio within a RadioGroup */
  value?: RadioValueType;
  /** Whether the radio is checked (controlled, standalone usage) */
  checked?: boolean;
  /** Default checked state (uncontrolled, standalone usage) */
  defaultChecked?: boolean;
  /** Label text displayed next to the radio */
  label?: ReactNode;
  /** Description text displayed below the label */
  description?: ReactNode;
  /** Visual variant of the radio */
  variant?: RadioVariant;
  /** Visual size used by the cell variant */
  size?: RadioSize;
  /** Alignment used by the radio. Default supports `left` / `right`; cell supports `left` / `center`. */
  alignment?: RadioAlignment;
  /** Optional icon rendered by the cell variant */
  icon?: IconName | ReactNode;
  /** Optional tag label rendered by the cell variant */
  tag?: string;
  /** Callback when checked state changes */
  onChange?: (event: RadioChangeEvent) => void;
}

export interface RadioOptionItem {
  /** Value that identifies this option */
  value: RadioValueType;
  /** HTML id attribute for the underlying radio input */
  id?: string;
  /** Label text displayed next to the radio */
  label?: ReactNode;
  /** Description text displayed below the label */
  description?: ReactNode;
  /** Visual variant of the radio */
  variant?: RadioVariant;
  /** Visual size used by the cell variant */
  size?: RadioSize;
  /** Alignment used by the radio. Default supports `left` / `right`; cell supports `left` / `center`. */
  alignment?: RadioAlignment;
  /** Optional icon rendered by the cell variant */
  icon?: IconName | ReactNode;
  /** Optional tag label rendered by the cell variant */
  tag?: string;
  /** Whether this specific option is disabled */
  disabled?: boolean;
  /** Whether this specific option is required */
  required?: boolean;
  /** Title attribute for the underlying radio input */
  title?: string;
}

export interface RadioGroupProps {
  ref?: RefObject<HTMLDivElement | null>;
  prefixCls?: string;
  className?: string;
  /** Currently selected value (controlled) */
  value?: RadioValueType;
  /** Default selected value (uncontrolled) */
  defaultValue?: RadioValueType;
  /** HTML id attribute for the root radiogroup container */
  id?: string;
  /** HTML name attribute for native radio grouping */
  name?: string;
  /** Disables all radios in the group */
  disabled?: boolean;
  /** @deprecated Use `direction` to control the group direction. */
  layout?: RadioGroupDirection;
  /** Direction of the group */
  direction?: RadioGroupDirection;
  /** Visual variant inherited by child radios */
  variant?: RadioVariant;
  /** Visual size inherited by child radios */
  size?: RadioSize;
  /** Alignment inherited by child radios. Default supports `left` / `right`; cell supports `left` / `center`. */
  alignment?: RadioAlignment;
  /** Gap between radio items — accepts spacing token key or CSS value */
  gap?: number | string;
  /** Title attribute for the root radiogroup container */
  title?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  /** Quick-render mode: array of radio options */
  options?: RadioOptionItem[];
  /** Custom Radio children (takes precedence over options) */
  children?: ReactNode;
  /** Callback when the selected value changes */
  onChange?: (event: RadioChangeEvent) => void;
}
