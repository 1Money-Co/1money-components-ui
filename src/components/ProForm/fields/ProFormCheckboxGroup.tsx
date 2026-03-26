import { CheckboxGroup } from '@/components/Checkbox';
import type { CheckboxGroupProps } from '@/components/Checkbox';
import { createProFormField } from './createProFormField';
import { renderTextReadonly } from '../utils';

export const ProFormCheckboxGroup = createProFormField<CheckboxGroupProps>({
  component: CheckboxGroup,
  renderReadonly: (value) =>
    renderTextReadonly(Array.isArray(value) ? value.join(', ') : value),
});

ProFormCheckboxGroup.displayName = 'ProFormCheckboxGroup';

export default ProFormCheckboxGroup;
