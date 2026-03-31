import type { NamedExoticComponent } from 'react';
import CheckboxBase from './Checkbox';
import CheckboxGroup from './CheckboxGroup';
import type { CheckboxGroupProps, CheckboxProps } from './interface';

export interface CheckboxComponent extends NamedExoticComponent<CheckboxProps> {
  Group: NamedExoticComponent<CheckboxGroupProps>;
}

export const Checkbox = Object.assign(CheckboxBase, {
  Group: CheckboxGroup,
}) as CheckboxComponent;

export { CheckboxGroup } from './CheckboxGroup';

export default Checkbox;

export * from './interface';
export * from './constants';
