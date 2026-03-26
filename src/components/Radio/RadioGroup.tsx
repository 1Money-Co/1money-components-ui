import { memo, useMemo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { RadioGroupProvider } from './RadioGroupContext';
import { Radio } from './Radio';
import type { FC } from 'react';
import type {
  RadioChangeEvent,
  RadioGroupProps,
  RadioValueType,
} from './interface';

const GROUP_PREFIX = 'radio-group';

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    ref,
    className = '',
    prefixCls = GROUP_PREFIX,
    id,
    value,
    defaultValue,
    name,
    disabled = false,
    layout = 'vertical',
    direction = 'left',
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
      direction,
    }),
    [innerValue, handleChange, disabled, name, direction],
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
          joinCls(classes(layout), className),
        )}
        role="radiogroup"
        style={gapStyle}
      >
        {content}
      </div>
    </RadioGroupProvider>
  );
};

export default memo(RadioGroup);
