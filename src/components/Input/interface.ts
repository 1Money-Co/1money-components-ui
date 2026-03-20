import type {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
  ReactNode,
  RefObject,
  TextareaHTMLAttributes,
} from 'react';

export type InputSize = 'large' | 'small';
export type InputStatus = 'default' | 'error' | 'warning' | 'success';
export type SearchTrigger = 'enter' | 'button' | 'both';

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
}

export interface InputPasswordProps extends Omit<InputProps, 'type'> {
  visibilityToggle?: boolean;
  visibleIcon?: ReactNode;
  hiddenIcon?: ReactNode;
}

export interface InputSearchProps extends InputProps {
  loading?: boolean;
  searchButton?: ReactNode | boolean;
  searchTrigger?: SearchTrigger;
  onSearch?: (value: string) => void;
}

export interface InputTextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'prefix'>,
    InputBaseProps {
  ref?: RefObject<HTMLTextAreaElement | null>;
  value?: string;
  defaultValue?: string;
  rows?: number;
  autoSize?: boolean | { minRows?: number; maxRows?: number };
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
