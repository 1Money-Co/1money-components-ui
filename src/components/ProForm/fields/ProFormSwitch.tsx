import { Switch } from '@/components/Switch';
import type { SwitchProps } from '@/components/Switch';
import { createProFormField } from './createProFormField';
import { renderBooleanReadonly } from '../utils';

export const ProFormSwitch = createProFormField<SwitchProps>({
  component: Switch,
  valuePropName: 'checked',
  renderReadonly: renderBooleanReadonly,
});

ProFormSwitch.displayName = 'ProFormSwitch';

export default ProFormSwitch;
