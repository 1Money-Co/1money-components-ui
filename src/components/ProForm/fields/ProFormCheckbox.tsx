import { Checkbox } from '@/components/Checkbox';
import type { CheckboxProps } from '@/components/Checkbox';
import { createProFormField } from './createProFormField';
import { renderBooleanReadonly } from '../utils';

export const ProFormCheckbox = createProFormField<CheckboxProps>({
  component: Checkbox,
  valuePropName: 'checked',
  renderReadonly: renderBooleanReadonly,
});

ProFormCheckbox.displayName = 'ProFormCheckbox';

export default ProFormCheckbox;
