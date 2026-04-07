import { Calendar } from '@/components/Calendar';
import type { CalendarProps } from '@/components/Calendar';
import { createProFormField } from './createProFormField';

function renderDateReadonly(value: unknown): string {
  if (value === null || value === undefined) return '-';

  if (value instanceof Date) {
    return value.toLocaleDateString();
  }

  if (Array.isArray(value)) {
    return value
      .filter((v): v is Date => v instanceof Date)
      .map((d) => d.toLocaleDateString())
      .join(' ~ ');
  }

  return String(value);
}

export const ProFormDatePicker = createProFormField<CalendarProps>({
  component: Calendar,
  renderReadonly: renderDateReadonly,
});

ProFormDatePicker.displayName = 'ProFormDatePicker';

export default ProFormDatePicker;
