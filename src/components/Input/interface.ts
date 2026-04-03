import type {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
  TextareaHTMLAttributes,
} from 'react';
import type { InputSize, InputStatus, SearchTrigger } from './constants';

export type { InputSize, InputStatus, SearchTrigger };

export interface InputBaseProps {
  className?: string;
  prefixCls?: string;
  size?: InputSize;
  status?: InputStatus;
  label?: ReactNode;
  info?: ReactNode;
  errorMsg?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
  loading?: boolean;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size' | 'onChange'>,
    InputBaseProps {
  ref?: RefObject<HTMLInputElement | null>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;

  /** When provided, Input behaves as a mask input. Pattern: 9 = digit, a = letter, * = alphanumeric */
  mask?: string;
  /** Placeholder character for unfilled mask positions */
  slotChar?: string;
  /** When true, onChange returns the raw value without mask characters */
  unmask?: boolean;
  /** When true, clears incomplete mask input on blur */
  autoClear?: boolean;
  /** Callback when all mask positions are filled */
  onComplete?: (value: string) => void;
}

export interface InputPasswordProps extends Omit<InputProps, 'type' | 'allowClear'> {
  visibilityToggle?: boolean;
  /** Icon displayed when password is visible (to hide it) */
  showIcon?: ReactNode;
  /** Icon displayed when password is hidden (to show it) */
  hideIcon?: ReactNode;
}

export interface InputSearchProps extends InputProps {
  loading?: boolean;
  searchButton?: ReactNode | boolean;
  searchTrigger?: SearchTrigger;
  onSearch?: (value: string) => void;
}

export interface InputTextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'prefix'>,
    Omit<InputBaseProps, 'allowClear' | 'prefix' | 'suffix'> {
  ref?: RefObject<HTMLTextAreaElement | null>;
  value?: string;
  defaultValue?: string;
  rows?: number;
  showCount?: boolean;
  maxLength?: number;
  onChange?: (value: string, event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface InputOTPProps extends Omit<InputBaseProps, 'allowClear' | 'prefix' | 'suffix'> {
  ref?: RefObject<HTMLDivElement | null>;
  value?: string;
  defaultValue?: string;
  length?: number;
  autoFocus?: boolean;
  mask?: boolean;
  formatter?: (value: string) => string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
}

export interface InputTradeProps {
  className?: string;
  prefixCls?: string;
  status?: InputStatus;
  disabled?: boolean;
  ref?: RefObject<HTMLInputElement | null>;
  value?: string;
  defaultValue?: string;
  /** Currency symbol displayed before the value, e.g. "$" */
  currencySymbol?: string;
  /** Currency unit displayed after the value, e.g. "USD" */
  currencyUnit?: string;
  /** Exchange info displayed in the subline, e.g. "0 USDT" */
  exchangeText?: ReactNode;
  /** Error or helper message displayed below the subline */
  errorMsg?: ReactNode;
  /** Whether to show the Max button */
  showMax?: boolean;
  /** Callback when Max button is clicked */
  onMax?: () => void;
  /** Callback when swap icon is clicked */
  onSwap?: () => void;
  /** Callback when value changes */
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export interface InputAmountProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size' | 'onChange'>,
    Omit<InputBaseProps, 'allowClear'> {
  ref?: RefObject<HTMLInputElement | null>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  allowClear?: boolean;

  /** Action button label (e.g. "Use Max"), rendered before the divider */
  actionLabel?: ReactNode;
  /** Callback when the action button is clicked */
  onAction?: () => void;

  /** Currency icon (e.g. <img src="..." />) shown in the currency selector */
  currencyIcon?: ReactNode;
  /** Currency label text (e.g. "USDC") */
  currencyLabel?: string;
  /** Callback when the currency selector is clicked */
  onCurrencyClick?: () => void;
}

export interface InputMaskProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size' | 'onChange'>,
    Omit<InputBaseProps, 'allowClear'> {
  ref?: RefObject<HTMLInputElement | null>;
  value?: string;
  defaultValue?: string;
  /** Mask pattern: 9 = digit, a = letter, * = alphanumeric */
  mask: string;
  /** Placeholder character for unfilled positions */
  slotChar?: string;
  /** When true, onChange returns the raw value without mask characters */
  unmask?: boolean;
  /** When true, clears incomplete input on blur */
  autoClear?: boolean;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  onComplete?: (value: string) => void;
}

export interface InputComponent extends FC<InputProps> {
  Password: FC<InputPasswordProps>;
  Search: FC<InputSearchProps>;
  TextArea: FC<InputTextAreaProps>;
  OTP: FC<InputOTPProps>;
  Trade: FC<InputTradeProps>;
  Amount: FC<InputAmountProps>;
  Mask: FC<InputMaskProps>;
}
