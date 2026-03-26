import { Input } from '@/components/Input';
import type { InputPasswordProps } from '@/components/Input';
import { createProFormField } from './createProFormField';

export const ProFormPassword = createProFormField<InputPasswordProps>({
  component: Input.Password,
  renderReadonly: () => '******',
});

ProFormPassword.displayName = 'ProFormPassword';

export default ProFormPassword;
