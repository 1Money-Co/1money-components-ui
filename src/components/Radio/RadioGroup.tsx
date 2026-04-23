import { memo, useMemo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import {
  RADIO_DEFAULT_ALIGNMENT,
  RADIO_DEFAULT_LAYOUT,
  RADIO_DEFAULT_SIZE,
  RADIO_DEFAULT_VARIANT,
  RADIO_GROUP_PREFIX_CLS,
  RADIO_VARIANT_CELL,
} from './constants';
import { RadioGroupProvider } from './RadioGroupContext';
import { Radio } from './Radio';
import type { FC } from 'react';
import type {
  RadioChangeEvent,
  RadioGroupProps,
  RadioValueType,
} from './interface';

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    ref,
    className = '',
    prefixCls = RADIO_GROUP_PREFIX_CLS,
    id,
    value,
    defaultValue,
    name,
    disabled = false,
    layout,
    direction,
    variant = RADIO_DEFAULT_VARIANT,
    size = RADIO_DEFAULT_SIZE,
    alignment,
    labelPlacement,
    gap,
    options,
    children,
    title,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    onChange,
  } = props;

  const [innerValue, setInnerValue] = useControlledState<
    RadioValueType | undefined
  >(defaultValue, value);

  const classes = classnames(prefixCls);
  const resolvedDirection = direction ?? layout ?? RADIO_DEFAULT_LAYOUT;
  const resolvedAlignment = alignment ?? RADIO_DEFAULT_ALIGNMENT;

  const handleChange = useEventCallback((event: RadioChangeEvent) => {
    if (disabled) return;

    const nextValue = event.target.value;

    if (nextValue === undefined || Object.is(nextValue, innerValue)) {
      return;
    }

    setInnerValue(nextValue);
    onChange?.(event);
  });

  const contextValue = useMemo(
    () => ({
      value: innerValue,
      onChange: handleChange,
      disabled,
      name,
      variant,
      size,
      alignment: resolvedAlignment,
      labelPlacement,
    }),
    [innerValue, handleChange, disabled, name, variant, size, resolvedAlignment, labelPlacement],
  );

  const content =
    children ??
    options?.map((opt) => (
      <Radio
        key={String(opt.value)}
        id={opt.id}
        value={opt.value}
        label={opt.label}
        description={opt.description}
        variant={opt.variant}
        size={opt.size}
        alignment={opt.alignment}
        labelPlacement={opt.labelPlacement}
        icon={opt.icon}
        tag={opt.tag}
        disabled={opt.disabled}
        required={opt.required}
        title={opt.title}
      />
    ));

  const gapStyle = gap !== undefined ? { gap } : undefined;

  return (
    <RadioGroupProvider value={contextValue}>
      <div
        ref={ref}
        id={id}
        title={title}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        className={classes(
          void 0,
          joinCls(classes(resolvedDirection), variant === RADIO_VARIANT_CELL && classes('cell'), className),
        )}
        role="radiogroup"
        style={gapStyle}
      >
        {content}
      </div>
    </RadioGroupProvider>
  );
};

RadioGroup.displayName = 'RadioGroup';

export default memo(RadioGroup);
