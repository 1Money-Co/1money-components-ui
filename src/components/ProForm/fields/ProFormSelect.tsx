import { Select } from '@/components/Select';
import type { SelectOption, SelectProps } from '@/components/Select';
import { createProFormField } from './createProFormField';

function toReadonlyText(value: unknown): string {
  if (typeof value === 'string' || typeof value === 'number') {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map(toReadonlyText).filter(Boolean).join(', ');
  }

  return '';
}

function renderReadonlyValue(value: unknown, props?: Partial<SelectProps>) {
  const options = props?.options ?? [];

  if (Array.isArray(value)) {
    const labels = value
      .map((item) => options.find((option: SelectOption) => option.value === item)?.label ?? item)
      .map(toReadonlyText)
      .filter((item) => item !== null && item !== undefined && item !== '');

    return labels.length > 0 ? labels.join(', ') : '-';
  }

  if (value === null || value === undefined || value === '') {
    return '-';
  }

  return toReadonlyText(
    options.find((option: SelectOption) => option.value === value)?.label ?? value,
  ) || '-';
}

export const ProFormSelect = createProFormField<SelectProps>({
  component: Select,
  renderReadonly: renderReadonlyValue,
});

ProFormSelect.displayName = 'ProFormSelect';

export default ProFormSelect;
