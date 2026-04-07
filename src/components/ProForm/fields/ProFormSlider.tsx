import { Slider } from '@/components/Slider';
import type { SliderProps } from '@/components/Slider';
import { createProFormField } from './createProFormField';
import { renderNumericReadonly } from '../utils';

export const ProFormSlider = createProFormField<SliderProps>({
  component: Slider,
  renderReadonly: renderNumericReadonly,
});

ProFormSlider.displayName = 'ProFormSlider';

export default ProFormSlider;
