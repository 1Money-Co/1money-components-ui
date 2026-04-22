import type { TypographyBodySize, TypographyColor, TypographyLabelSize } from '@/components/Typography';

export const FORM_SIZES = ['large', 'middle', 'small'] as const;
export const FORM_LAYOUTS = ['vertical'] as const;
export const LABEL_ALIGNS = ['left', 'right'] as const;
export const VALIDATE_STATUSES = ['success', 'warning', 'error', 'validating'] as const;
export const VALIDATE_TRIGGERS = ['onChange', 'onBlur'] as const;

export type FormSize = (typeof FORM_SIZES)[number];
export type FormLayout = (typeof FORM_LAYOUTS)[number];
export type LabelAlign = (typeof LABEL_ALIGNS)[number];
export type ValidateStatus = (typeof VALIDATE_STATUSES)[number];
export type ValidateTrigger = (typeof VALIDATE_TRIGGERS)[number];

export const FORM_ITEM_SPACING: Record<FormSize, string> = {
  large: '300',
  middle: '300',
  small: '200',
};

export const FORM_LABEL_SIZE: TypographyLabelSize = 'lg';
export const FORM_LABEL_COLOR: TypographyColor = 'default';
export const FORM_ERROR_SIZE: TypographyBodySize = 'md';
export const FORM_ERROR_COLOR: TypographyColor = 'danger';
export const FORM_DESCRIPTION_SIZE: TypographyBodySize = 'md';
export const FORM_DESCRIPTION_COLOR: TypographyColor = 'default-tertiary';
export const FORM_FEEDBACK_SIZE: TypographyBodySize = 'sm';
export const FORM_FEEDBACK_COLOR: TypographyColor = 'default-tertiary';

export const FORM_COMPONENT_NAMES = [
  'Input',
  'InputNumber',
  'Select',
  'BaseSelect',
  'DatePicker',
  'TimePicker',
  'Checkbox',
  'Radio',
  'Switch',
  'TextArea',
] as const;
