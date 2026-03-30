import { memo, useContext, useEffect } from 'react';
import { useEventCallback } from '@1money/hooks';
import { TypographyBody } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import BaseCheckbox from './BaseCheckbox';
import { CheckboxGroupContext } from './CheckboxGroupContext';
import {
  CHECKBOX_DESCRIPTION_COLOR_DEFAULT,
  CHECKBOX_DESCRIPTION_COLOR_DISABLED,
  CHECKBOX_DESCRIPTION_SIZE,
  CHECKBOX_LABEL_COLOR_DEFAULT,
  CHECKBOX_LABEL_COLOR_DISABLED,
  CHECKBOX_LABEL_SIZE,
} from './constants';
import type { FC } from 'react';
import type { CheckboxChangeEvent, CheckboxProps } from './interface';

export const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    className = '',
    prefixCls = 'checkbox',
    style,
    id,
    name: nameProp,
    value,
    required = false,
    title,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    checked: checkedProp,
    defaultChecked = false,
    indeterminate = false,
    disabled: disabledProp = false,
    label,
    description,
    labelPlacement = 'left',
    onChange,
    ref,
    ...rest
  } = props;

  const groupContext = useContext(CheckboxGroupContext);
  const isInGroup = groupContext !== null && value !== undefined;
  const name = isInGroup ? (nameProp ?? groupContext?.name) : nameProp;
  const checked = isInGroup
    ? groupContext?.value.includes(value as NonNullable<typeof value>)
    : checkedProp;
  const disabled = isInGroup
    ? disabledProp || (groupContext?.disabled ?? false)
    : disabledProp;
  const classes = classnames(prefixCls);
  const inferredAriaLabel = (
    typeof label === 'string' || typeof label === 'number'
      ? String(label)
      : typeof description === 'string' || typeof description === 'number'
        ? String(description)
        : undefined
  );

  useEffect(() => {
    if (!isInGroup || value === undefined) {
      return undefined;
    }

    groupContext?.registerValue(value);

    return () => {
      groupContext?.cancelValue(value);
    };
  }, [groupContext, isInGroup, value]);

  const handleChange = useEventCallback((event: CheckboxChangeEvent) => {
    if (disabled) {
      return;
    }

    onChange?.(event);

    if (isInGroup && value !== undefined) {
      groupContext?.toggleOption({
        label,
        value,
      });
    }
  });

  const checkboxElement = (
    <BaseCheckbox
      {...rest}
      aria-label={ariaLabel ?? inferredAriaLabel}
      aria-labelledby={ariaLabelledBy}
      checked={checked}
      defaultChecked={isInGroup ? false : defaultChecked}
      disabled={disabled}
      id={id}
      indeterminate={indeterminate}
      name={name}
      onChange={handleChange}
      prefixCls={prefixCls}
      required={required}
      title={title}
      value={value}
    />
  );

  const labelColor = disabled ? CHECKBOX_LABEL_COLOR_DISABLED : CHECKBOX_LABEL_COLOR_DEFAULT;
  const descriptionColor = disabled ? CHECKBOX_DESCRIPTION_COLOR_DISABLED : CHECKBOX_DESCRIPTION_COLOR_DEFAULT;

  const labelElement = (label || description) && (
    <span className={classes('content')}>
      {label && <TypographyBody className={classes('label')} size={CHECKBOX_LABEL_SIZE} strong color={labelColor}>{label}</TypographyBody>}
      {description && (
        <TypographyBody className={classes('description')} size={CHECKBOX_DESCRIPTION_SIZE} strong color={descriptionColor}>{description}</TypographyBody>
      )}
    </span>
  );

  return (
    <label
      ref={ref}
      className={classes(
        undefined,
        joinCls(
          disabled && classes('disabled'),
          labelPlacement === 'right' && classes('right'),
          className,
        ),
      )}
      style={style}
    >
      {labelPlacement === 'left' ? (
        <>
          {checkboxElement}
          {labelElement}
        </>
      ) : (
        <>
          {labelElement}
          {checkboxElement}
        </>
      )}
    </label>
  );
};

export default memo(Checkbox);
