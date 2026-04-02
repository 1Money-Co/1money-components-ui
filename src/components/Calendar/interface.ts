import type { ReactNode, CSSProperties, RefObject } from 'react';
import type { Nullable } from 'primereact/ts-helpers';
import type {
  CalendarProps as PrimeCalendarProps,
  CalendarSelectionMode,
} from 'primereact/calendar';

export interface CalendarProps
  extends PrimeCalendarProps<CalendarSelectionMode> {
  /** CSS class prefix */
  prefixCls?: string;
  /** Additional class for the wrapper element */
  wrapperCls?: string;
  /** Additional class for the label element */
  labelCls?: string;
  /** Additional class for the message element */
  messageCls?: string;
  /** Label text displayed above the calendar input */
  label?: ReactNode;
  /** Helper/error message displayed below the calendar input */
  message?: ReactNode;
  /** Whether the field is required (shows asterisk after label) */
  required?: boolean;
  /** Whether the field is in a success state */
  success?: boolean;
  /** Size variant */
  size?: 'large' | 'small';
  /** Default value for uncontrolled mode */
  defaultValue?: Nullable<Date | (Date | null)[] | Date[]>;
  /** Custom width for the calendar content area */
  contentWidth?: CSSProperties['width'];
  /** Ref to the root wrapper element */
  ref?: RefObject<HTMLDivElement | null>;
}
