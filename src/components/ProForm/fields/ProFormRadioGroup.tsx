import { RadioGroup } from '@/components/Radio';
import type { RadioGroupProps } from '@/components/Radio';
import { createProFormField } from './createProFormField';
import { renderTextReadonly } from '../utils';

export const ProFormRadioGroup = createProFormField<RadioGroupProps>({
  component: RadioGroup,
  renderReadonly: renderTextReadonly,
});

ProFormRadioGroup.displayName = 'ProFormRadioGroup';

export default ProFormRadioGroup;
