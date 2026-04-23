import { memo, useMemo, useState } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import CheckboxBase from './Checkbox';
import { CheckboxGroupContext } from './CheckboxGroupContext';
import type { FC } from 'react';
import type {
  CheckboxGroupOption,
  CheckboxGroupProps,
  CheckboxValueType,
} from './interface';

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
) => values.some((value) => Object.is(value, target));

const orderValuesByRegistration = (
  values: CheckboxValueType[],
  registeredValues: CheckboxValueType[],
) => {
  const ordered = registeredValues.filter((item) => includesValue(values, item));
  const rest = values.filter((item) => !includesValue(registeredValues, item));

  return [...ordered, ...rest];
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
    direction = 'horizontal',
    title,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
  } = props;

  const classes = classnames(prefixCls);
  const normalizedOptions = useMemo(
    () => options?.map(normalizeOption) ?? [],
    [options],
  );
  const [innerValue, setInnerValue] = useControlledState<CheckboxValueType[]>(
    defaultValue,
    value,
  );
  const [registeredValues, setRegisteredValues] = useState<CheckboxValueType[]>(
    [],
  );

  const cancelValue = useEventCallback((optionValue: CheckboxValueType) => {
    setRegisteredValues((prevValues) =>
      prevValues.filter((valueItem) => !Object.is(valueItem, optionValue)),
    );
  });

  const registerValue = useEventCallback((optionValue: CheckboxValueType) => {
    setRegisteredValues((prevValues) => {
      if (includesValue(prevValues, optionValue)) {
        return prevValues;
      }

      return [...prevValues, optionValue];
    });
  });

  const toggleOption = useEventCallback(
    (option: { value: CheckboxValueType }) => {
      if (disabled) {
        return;
      }

      const optionIndex = innerValue.findIndex((valueItem) =>
        Object.is(valueItem, option.value),
      );
      const nextValue = [...innerValue];

      if (optionIndex === -1) {
        nextValue.push(option.value);
      } else {
        nextValue.splice(optionIndex, 1);
      }

      const orderedValue = orderValuesByRegistration(nextValue, registeredValues);

      setInnerValue(orderedValue);
      onChange?.(orderedValue);
    },
  );

  const renderedOptions = normalizedOptions.map((option, index) => (
    <CheckboxBase
      key={`${String(option.value)}-${index}`}
      className={option.className}
      description={option.description}
      disabled={option.disabled}
      id={option.id}
      indeterminate={option.indeterminate}
      label={option.label}
      labelPlacement={option.labelPlacement}
      onChange={option.onChange}
      required={option.required}
      title={option.title}
      value={option.value}
    />
  ));

  const contextValue = useMemo(
    () => ({
      name,
      disabled,
      value: innerValue,
      cancelValue,
      registerValue,
      toggleOption,
    }),
    [name, disabled, innerValue, cancelValue, registerValue, toggleOption],
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
          joinCls(
            classes(direction),
            disabled && classes('disabled'),
            className,
          ),
        )}
      >
        {children ?? renderedOptions}
      </div>
    </CheckboxGroupContext.Provider>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';

export default memo(CheckboxGroup);
