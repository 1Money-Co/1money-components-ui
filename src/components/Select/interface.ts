import type { CSSProperties, FocusEvent, HTMLAttributes, ReactNode, RefObject } from 'react';

export const SELECT_SIZES = ['large', 'small'] as const;
export const SELECT_STATUSES = ['default', 'error', 'warning', 'success'] as const;
export const SELECT_VARIANTS = ['fill', 'stroke', 'frameless'] as const;

export type SelectSize = (typeof SELECT_SIZES)[number];
export type SelectStatus = (typeof SELECT_STATUSES)[number];
export type SelectVariant = (typeof SELECT_VARIANTS)[number];
export type SelectOptionValue = string | number;
export type SelectSingleValue = SelectOptionValue | null | undefined;
export type SelectMultipleValue = SelectOptionValue[];
export type SelectValue = SelectSingleValue | SelectMultipleValue;

export interface SelectOption {
  label: ReactNode;
  value: SelectOptionValue;
  disabled?: boolean;
  description?: ReactNode;
}

export interface SelectRenderOptionMeta {
  active: boolean;
  disabled: boolean;
  index: number;
  multiple: boolean;
  open: boolean;
  selected: boolean;
}

export interface SelectRenderValueMeta {
  disabled: boolean;
  multiple: boolean;
  open: boolean;
  placeholder: boolean;
  selectedOptions: SelectOption[];
}

export interface SelectProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'defaultValue' | 'onBlur' | 'onChange' | 'prefix'> {
  ref?: RefObject<HTMLButtonElement | null>;
  className?: string;
  prefixCls?: string;
  style?: CSSProperties;
  id?: string;
  name?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
  placeholder?: ReactNode;
  options?: SelectOption[];
  value?: SelectValue;
  defaultValue?: SelectValue;
  size?: SelectSize | 'middle';
  status?: SelectStatus;
  variant?: SelectVariant;
  disabled?: boolean;
  multiple?: boolean;
  label?: ReactNode;
  info?: ReactNode;
  description?: ReactNode;
  feedback?: ReactNode;
  required?: boolean;
  prefix?: ReactNode;
  emptyContent?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  listMaxHeight?: number;
  onChange?: (value: SelectValue, option?: SelectOption | SelectOption[]) => void;
  onOpenChange?: (open: boolean) => void;
  onBlur?: (event?: FocusEvent<HTMLElement>) => void;
  renderOption?: (option: SelectOption, meta: SelectRenderOptionMeta) => ReactNode;
  renderValue?: (
    option: SelectOption | SelectOption[] | null,
    meta: SelectRenderValueMeta,
  ) => ReactNode;
}
