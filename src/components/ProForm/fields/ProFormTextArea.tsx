import { Input } from '@/components/Input';
import type { InputTextAreaProps } from '@/components/Input';
import { createProFormField } from './createProFormField';
import { renderTextReadonly } from '../utils';

export const ProFormTextArea = createProFormField<InputTextAreaProps>({
  component: Input.TextArea,
  renderReadonly: renderTextReadonly,
});

ProFormTextArea.displayName = 'ProFormTextArea';

export default ProFormTextArea;
