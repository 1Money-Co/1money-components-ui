import { memo, useMemo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { RadioGroupProvider } from './RadioGroupContext';
import { Radio } from './Radio';
import type { FC } from 'react';
import type { RadioGroupProps } from './interface';

const GROUP_PREFIX = 'radio-group';

export const RadioGroup: FC<RadioGroupProps> = (props) => {
  const {
    className = '',
    prefixCls = GROUP_PREFIX,
    value,
    defaultValue,
    name,
    disabled = false,
    layout = 'vertical',
    direction = 'left',
    gap,
    options,
    children,
    onChange,
    ref,
  } = props;

  const [innerValue, setInnerValue] = useControlledState<
    string | number | undefined
  >(defaultValue, value);

  const classes = classnames(prefixCls);

  const handleChange = useEventCallback((val: string | number) => {
    setInnerValue(val);
    onChange?.(val);
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
        value={opt.value}
        label={opt.label}
        description={opt.description}
        disabled={opt.disabled}
      />
    ));

  const gapStyle = gap !== undefined ? { gap } : undefined;

  return (
    <RadioGroupProvider value={contextValue}>
      <div
        ref={ref}
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
