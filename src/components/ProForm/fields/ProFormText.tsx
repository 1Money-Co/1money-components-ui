import { Input } from '@/components/Input';
import type { InputProps } from '@/components/Input';
import { createProFormField } from './createProFormField';
import { renderTextReadonly } from '../utils';

export const ProFormText = createProFormField<InputProps>({
  component: Input,
  renderReadonly: renderTextReadonly,
});

ProFormText.displayName = 'ProFormText';

export default ProFormText;
