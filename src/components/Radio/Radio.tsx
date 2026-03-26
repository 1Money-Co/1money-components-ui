import { memo } from 'react';
import { useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import BaseRadio from './BaseRadio';
import { useRadioGroupContext } from './RadioGroupContext';
import type { FC } from 'react';
import type { RadioChangeEvent, RadioProps } from './interface';

export const Radio: FC<RadioProps> = (props) => {
  const {
    className = '',
    prefixCls = 'radio',
    style,
    id,
    name: nameProp,
    required = false,
    title,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    value,
    checked,
    defaultChecked = false,
    disabled = false,
    label,
    description,
    direction: directionProp,
    onChange,
    ref,
    ...rest
  } = props;

  const groupContext = useRadioGroupContext();
  const isSelectableInGroup = groupContext !== null && value !== undefined;
  const isDisabled = disabled || (isSelectableInGroup ? (groupContext?.disabled ?? false) : false);
  const direction = directionProp ?? groupContext?.direction ?? 'left';
  const name = isSelectableInGroup ? (nameProp ?? groupContext?.name) : nameProp;
  const inferredAriaLabel = (
    typeof label === 'string' || typeof label === 'number'
      ? String(label)
      : typeof description === 'string' || typeof description === 'number'
        ? String(description)
        : undefined
  );

  const classes = classnames(prefixCls);

  const handleChange = useEventCallback((event: RadioChangeEvent) => {
    if (isDisabled) return;

    onChange?.(event);

    if (isSelectableInGroup) {
      groupContext?.onChange(event);
    }
  });

  const radioElement = (
    <BaseRadio
      {...rest}
      aria-label={ariaLabel ?? inferredAriaLabel}
      aria-labelledby={ariaLabelledBy}
      checked={isSelectableInGroup ? groupContext?.value === value : checked}
      defaultChecked={defaultChecked}
      disabled={isDisabled}
      id={id}
      name={name}
      onChange={handleChange}
      prefixCls={prefixCls}
      required={required}
      title={title}
      value={value}
    />
  );

  const labelElement = (label || description) && (
    <span className={classes('content')}>
      {label && <span className={classes('label')}>{label}</span>}
      {description && (
        <span className={classes('description')}>{description}</span>
      )}
    </span>
  );

  return (
    <label
      ref={ref}
      className={classes(
        void 0,
        joinCls(
          isDisabled && classes('disabled'),
          direction === 'right' && classes('right'),
          className,
        ),
      )}
      style={style}
    >
      {direction === 'left' ? (
        <>
          {radioElement}
          {labelElement}
        </>
      ) : (
        <>
          {labelElement}
          {radioElement}
        </>
      )}
    </label>
  );
};

export default memo(Radio);
