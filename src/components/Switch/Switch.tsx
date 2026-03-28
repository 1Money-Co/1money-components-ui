import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { TypographyBody } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { ChangeEvent, FC } from 'react';
import type { SwitchProps } from './interface';

export const Switch: FC<SwitchProps> = props => {
  const {
    className = '',
    prefixCls = 'switch',
    id,
    name,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    checked,
    defaultChecked = false,
    disabled = false,
    label,
    description,
    labelPlacement = 'left',
    onChange,
    ref,
    ...rest
  } = props;

  const [innerChecked, setInnerChecked] = useControlledState(
    defaultChecked,
    checked,
  );

  const classes = classnames(prefixCls);
  const labelColor = disabled ? 'disabled' : 'default';
  const descriptionColor = disabled ? 'disabled' : 'default-tertiary';

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
      {label && <TypographyBody size="lg" color={labelColor}>{label}</TypographyBody>}
      {description && <TypographyBody size="md" color={descriptionColor}>{description}</TypographyBody>}
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
          labelPlacement === 'right' && classes('right'),
          className,
        ),
      )}
    >
      {switchElement}
      {labelElement}
    </label>
  );
};

export default memo(Switch);
