import { memo, useMemo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import CheckboxBase from '../Checkbox/Checkbox';
import { CheckboxGroupContext } from './context';
import type { CheckboxValueType } from '../Checkbox';
import type { FC } from 'react';
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
  const optionOrder = normalizedOptions?.map((option) => option.value) ?? [];
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);

  const handleValueChange = useEventCallback(
    (optionValue: CheckboxValueType, nextChecked: boolean) => {
      if (disabled) return;

      const nextValue = toggleValue(
        innerValue,
        optionValue,
        nextChecked,
        optionOrder,
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
      labelPlacement={option.labelPlacement}
      indeterminate={option.indeterminate}
      onChange={(nextChecked) => handleValueChange(option.value, nextChecked)}
    />
  ));

  const contextValue = useMemo(
    () => ({
      name,
      disabled,
      isChecked: (val: CheckboxValueType) => includesValue(innerValue, val),
      onChange: handleValueChange,
    }),
    [name, disabled, innerValue, handleValueChange],
  );

  return (
    <CheckboxGroupContext.Provider value={contextValue}>
      <div
        ref={ref}
        role="group"
        title={title}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={classes(
          undefined,
          joinCls(classes(orientation), disabled && classes('disabled'), className),
        )}
      >
        {renderedOptions ?? children}
      </div>
    </CheckboxGroupContext.Provider>
  );
};

export default memo(CheckboxGroup);
