import { Children, cloneElement, isValidElement, memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import CheckboxBase from '../Checkbox/Checkbox';
import type { CheckboxProps, CheckboxValueType } from '../Checkbox';
import type { FC, ReactElement } from 'react';
import type { CheckboxGroupOption, CheckboxGroupProps } from './interface';

const isOptionObject = (
  option: CheckboxGroupOption | CheckboxValueType,
): option is CheckboxGroupOption =>
  typeof option === 'object' && option !== null && 'value' in option;

const normalizeOption = (
  option: CheckboxGroupOption | CheckboxValueType,
): CheckboxGroupOption => {
  if (isOptionObject(option)) {
    return option;
  }

  return {
    label: String(option),
    value: option,
  };
};

const includesValue = (
  values: CheckboxValueType[],
  target: CheckboxValueType,
) => values.some((value) => value === target);

const orderValues = (
  values: CheckboxValueType[],
  order: CheckboxValueType[],
) => {
  const ordered = order.filter((item) => includesValue(values, item));
  const rest = values.filter((item) => !includesValue(order, item));

  return [...ordered, ...rest];
};

const toggleValue = (
  values: CheckboxValueType[],
  target: CheckboxValueType,
  nextChecked: boolean,
  order: CheckboxValueType[],
) => {
  const nextValues = nextChecked
    ? includesValue(values, target)
      ? values
      : [...values, target]
    : values.filter((value) => value !== target);

  return orderValues(nextValues, order);
};

export const CheckboxGroup: FC<CheckboxGroupProps> = (props) => {
  const {
    ref,
    className = '',
    prefixCls = 'checkbox-group',
    name,
    disabled = false,
    options,
    value,
    defaultValue = [],
    onChange,
    children,
    orientation = 'horizontal',
    title,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
  } = props;

  const classes = classnames(prefixCls);
  const normalizedOptions = options?.map(normalizeOption);
  const childElements = Children.toArray(children).filter((child) =>
    isValidElement<CheckboxProps>(child),
  ) as ReactElement<CheckboxProps>[];
  const childOrder = childElements
    .map((child) => child.props.value)
    .filter((childValue): childValue is CheckboxValueType => childValue !== undefined);
  const optionOrder = normalizedOptions?.map((option) => option.value) ?? [];
  const valueOrder = normalizedOptions ? optionOrder : childOrder;
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);

  const handleValueChange = useEventCallback(
    (optionValue: CheckboxValueType, nextChecked: boolean) => {
      if (disabled) return;

      const nextValue = toggleValue(
        innerValue,
        optionValue,
        nextChecked,
        valueOrder,
      );

      setInnerValue(nextValue);
      onChange?.(nextValue);
    },
  );

  const renderedOptions = normalizedOptions?.map((option, index) => (
    <CheckboxBase
      key={`${String(option.value)}-${index}`}
      id={option.id}
      name={name}
      value={option.value}
      title={option.title}
      className={option.className}
      checked={includesValue(innerValue, option.value)}
      disabled={disabled || option.disabled}
      label={option.label}
      description={option.description}
      direction={option.direction}
      indeterminate={option.indeterminate}
      onChange={(nextChecked) => handleValueChange(option.value, nextChecked)}
    />
  ));

  const renderedChildren = normalizedOptions
    ? null
    : Children.map(children, (child) => {
        if (!isValidElement<CheckboxProps>(child)) {
          return child;
        }

        const childValue = child.props.value;

        if (childValue === undefined) {
          return child;
        }

        const childOnChange = child.props.onChange;

        return cloneElement(child, {
          name: child.props.name ?? name,
          checked: includesValue(innerValue, childValue),
          disabled: disabled || child.props.disabled,
          onChange: (nextChecked: boolean) => {
            childOnChange?.(nextChecked);
            handleValueChange(childValue, nextChecked);
          },
        });
      });

  return (
    <div
      ref={ref}
      role="group"
      title={title}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={classes(
        void 0,
        joinCls(classes(orientation), disabled && classes('disabled'), className),
      )}
    >
      {renderedOptions ?? renderedChildren}
    </div>
  );
};

export default memo(CheckboxGroup);
