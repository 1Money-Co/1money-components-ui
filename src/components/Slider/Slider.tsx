import { memo, useRef } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { TypographyBody } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { ChangeEvent, FC } from 'react';
import type { SliderProps } from './interface';

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;
const DEFAULT_STEP = 1;

export const Slider: FC<SliderProps> = props => {
  const {
    className = '',
    prefixCls = 'slider',
    id,
    name,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    value,
    defaultValue,
    min = DEFAULT_MIN,
    max = DEFAULT_MAX,
    step = DEFAULT_STEP,
    disabled = false,
    label,
    description,
    showLabel = true,
    showDescription = true,
    valuePrefix = '',
    formatValue,
    onChange,
    onChangeEnd,
    ref,
  } = props;

  const [innerValue, setInnerValue] = useControlledState(
    defaultValue ?? min,
    value,
  );

  const isInteractedRef = useRef(value !== undefined || defaultValue !== undefined);

  const classes = classnames(prefixCls);

  const percentage = max > min ? ((innerValue - min) / (max - min)) * 100 : 0;

  const displayValue = formatValue
    ? formatValue(innerValue, min, max)
    : isInteractedRef.current || innerValue !== min
      ? `${valuePrefix}${innerValue}`
      : `${valuePrefix}${min}-${max}`;

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const nextValue = Number(event.target.value);
    isInteractedRef.current = true;
    setInnerValue(nextValue);
    onChange?.(nextValue);
  });

  const handleChangeEnd = useEventCallback(() => {
    if (disabled) return;
    onChangeEnd?.(innerValue);
  });

  return (
    <div
      ref={ref}
      className={classes(
        undefined,
        joinCls(
          disabled && classes('disabled'),
          className,
        ),
      )}
    >
      {showLabel && label && (
        <div className={classes('label-row')}>
          <TypographyBody size="lg" className={classes('label')}>{label}</TypographyBody>
          <TypographyBody size="md" className={classes('output')}>{displayValue}</TypographyBody>
        </div>
      )}

      <div className={classes('track-wrapper')}>
        <input
          className={classes('input')}
          type="range"
          id={id}
          name={name}
          aria-label={ariaLabel ?? (typeof label === 'string' ? label : undefined)}
          aria-labelledby={ariaLabelledBy}
          min={min}
          max={max}
          step={step}
          value={innerValue}
          disabled={disabled}
          onChange={handleChange}
          onMouseUp={handleChangeEnd}
          onTouchEnd={handleChangeEnd}
        />
        <div className={classes('track')}>
          <div
            className={classes('fill')}
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div
          className={classes('knob')}
          style={{ left: `${percentage}%` }}
        />
        {disabled && (
          <div className={classes('knob-end')} />
        )}
      </div>

      {showDescription && description && (
        <TypographyBody size="lg" className={classes('description')}>{description}</TypographyBody>
      )}
    </div>
  );
};

export default memo(Slider);
