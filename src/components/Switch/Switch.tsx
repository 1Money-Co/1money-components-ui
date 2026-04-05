import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { TypographyBody } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import './style';
import {
  SWITCH_PREFIX_CLS,
  SWITCH_DEFAULT_LABEL_PLACEMENT,
  SWITCH_LABEL_PLACEMENT_RIGHT,
  SWITCH_LABEL_COLOR_DEFAULT,
  SWITCH_LABEL_COLOR_DISABLED,
  SWITCH_DESCRIPTION_COLOR_DEFAULT,
  SWITCH_DESCRIPTION_COLOR_DISABLED,
  SWITCH_LABEL_SIZE,
  SWITCH_DESCRIPTION_SIZE,
} from './constants';
import type { ChangeEvent, FC } from 'react';
import type { SwitchProps } from './interface';

export const Switch: FC<SwitchProps> = props => {
  const {
    className = '',
    prefixCls = SWITCH_PREFIX_CLS,
    id,
    name,
    checked,
    defaultChecked = false,
    disabled = false,
    label,
    description,
    labelPlacement = SWITCH_DEFAULT_LABEL_PLACEMENT,
    onChange,
    ref,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    ...rest
  } = props;

  const [innerChecked, setInnerChecked] = useControlledState(
    defaultChecked,
    checked,
  );

  const classes = classnames(prefixCls);
  const labelColor = disabled ? SWITCH_LABEL_COLOR_DISABLED : SWITCH_LABEL_COLOR_DEFAULT;
  const descriptionColor = disabled ? SWITCH_DESCRIPTION_COLOR_DISABLED : SWITCH_DESCRIPTION_COLOR_DEFAULT;

  const inferredAriaLabel =
    typeof label === 'string' || typeof label === 'number'
      ? String(label)
      : typeof description === 'string' || typeof description === 'number'
        ? String(description)
        : undefined;

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const nextChecked = event.target.checked;
    setInnerChecked(nextChecked);
    onChange?.(nextChecked);
  });

  const switchElement = (
    <span className={classes('track-wrapper')}>
      <input
        {...rest}
        className={classes('input')}
        type="checkbox"
        role="switch"
        id={id}
        name={name}
        aria-label={ariaLabel ?? inferredAriaLabel}
        aria-labelledby={ariaLabelledBy}
        disabled={disabled}
        checked={innerChecked}
        onChange={handleChange}
      />
      <span aria-hidden="true" className={classes('track')}>
        <span className={classes('thumb')} />
      </span>
    </span>
  );

  const labelElement = (label || description) && (
    <span className={classes('content')}>
      {label && <TypographyBody size={SWITCH_LABEL_SIZE} color={labelColor}>{label}</TypographyBody>}
      {description && <TypographyBody className={classes('description')} size={SWITCH_DESCRIPTION_SIZE} color={descriptionColor}>{description}</TypographyBody>}
    </span>
  );

  return (
    <label
      ref={ref}
      className={classes(
        undefined,
        joinCls(
          innerChecked && classes('checked'),
          disabled && classes('disabled'),
          labelPlacement === SWITCH_LABEL_PLACEMENT_RIGHT && classes(SWITCH_LABEL_PLACEMENT_RIGHT),
          className,
        ),
      )}
    >
      {labelElement}
      {switchElement}
    </label>
  );
};

export default memo(Switch);
