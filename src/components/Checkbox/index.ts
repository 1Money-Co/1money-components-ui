import type { NamedExoticComponent } from 'react';
import CheckboxBase from './Checkbox';
import CheckboxGroup from '../CheckboxGroup';
import type { CheckboxGroupProps } from '../CheckboxGroup';
import type { CheckboxProps } from './interface';

export interface CheckboxComponent extends NamedExoticComponent<CheckboxProps> {
  Group: NamedExoticComponent<CheckboxGroupProps>;
}

export const Checkbox = Object.assign(CheckboxBase, {
  Group: CheckboxGroup,
}) as CheckboxComponent;

export { CheckboxGroup } from '../CheckboxGroup';

export default Checkbox;

export * from './interface';
export type { CheckboxGroupProps, CheckboxGroupOption } from '../CheckboxGroup';
