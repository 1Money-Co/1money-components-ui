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
  description?: ReactNode;
  feedback?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  allowClear?: boolean;
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'size' | 'onChange'>,
    InputBaseProps {
  ref?: RefObject<HTMLInputElement | null>;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
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

export interface InputComponent extends FC<InputProps> {
  Password: FC<InputPasswordProps>;
  Search: FC<InputSearchProps>;
  TextArea: FC<InputTextAreaProps>;
  OTP: FC<InputOTPProps>;
}
