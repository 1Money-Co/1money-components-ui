import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { Tag } from '@/components/Tag';
import { default as classnames, joinCls } from '@/utils/classnames';
import BaseRadio, { createRadioChangeEvent } from './BaseRadio';
import {
  RADIO_CELL_CHECK_ICON,
  RADIO_CELL_ICON_COLOR,
  RADIO_CELL_ICON_SIZE_MAP,
  RADIO_CELL_INDICATOR_ICON_COLOR,
  RADIO_DEFAULT_DIRECTION,
  RADIO_DEFAULT_ORIENTATION,
  RADIO_DEFAULT_SIZE,
  RADIO_DEFAULT_VARIANT,
  RADIO_DIRECTION_LEFT,
  RADIO_DIRECTION_RIGHT,
  RADIO_INPUT_TYPE,
  RADIO_ORIENTATION_HORIZONTAL,
  RADIO_ORIENTATION_VERTICAL,
  RADIO_PREFIX_CLS,
  RADIO_SIZE_MEDIUM,
  RADIO_SIZE_SMALL,
  RADIO_TAG_SIZE,
  RADIO_VARIANT_CELL,
} from './constants';
import { useRadioGroupContext } from './RadioGroupContext';
import type { ChangeEvent, FC } from 'react';
import type { IconName } from '@/components/Icons';
import type { RadioChangeEvent, RadioProps } from './interface';

export const Radio: FC<RadioProps> = (props) => {
  const {
    className = '',
    prefixCls = RADIO_PREFIX_CLS,
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
    variant: variantProp,
    size: sizeProp,
    orientation: orientationProp,
    icon,
    tag,
    direction: directionProp,
    onChange,
    ref,
    ...rest
  } = props;

  const groupContext = useRadioGroupContext();
  const isSelectableInGroup = groupContext !== null && value !== undefined;
  const isDisabled = disabled || (isSelectableInGroup ? (groupContext?.disabled ?? false) : false);
  const variant = variantProp ?? groupContext?.variant ?? RADIO_DEFAULT_VARIANT;
  const size = sizeProp ?? groupContext?.size ?? RADIO_DEFAULT_SIZE;
  const orientation = orientationProp ?? groupContext?.orientation ?? RADIO_DEFAULT_ORIENTATION;
  const direction = directionProp ?? groupContext?.direction ?? RADIO_DEFAULT_DIRECTION;
  const name = isSelectableInGroup ? (nameProp ?? groupContext?.name) : nameProp;
  const inferredAriaLabel = (
    typeof label === 'string' || typeof label === 'number'
      ? String(label)
      : typeof description === 'string' || typeof description === 'number'
        ? String(description)
        : undefined
  );

  const classes = classnames(prefixCls);
  const [innerChecked, setInnerChecked] = useControlledState(defaultChecked, checked);
  const isControlled = checked !== undefined;
  const isChecked = isSelectableInGroup ? groupContext?.value === value : !!innerChecked;
  const iconSize = RADIO_CELL_ICON_SIZE_MAP[orientation][size];
  const useIndicatorBadge = (
    (orientation === RADIO_ORIENTATION_HORIZONTAL && size !== RADIO_SIZE_SMALL)
    || (orientation === RADIO_ORIENTATION_VERTICAL && size === RADIO_SIZE_MEDIUM && isChecked)
  );

  const emitChange = useEventCallback((event: RadioChangeEvent) => {
    if (isDisabled) return;

    if (!isSelectableInGroup && !isControlled) {
      setInnerChecked(event.target.checked);
    }

    onChange?.(event);

    if (isSelectableInGroup) {
      groupContext?.onChange(event);
    }
  });

  const handleInputChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    emitChange(createRadioChangeEvent(event, event.target.checked, {
      disabled: isDisabled,
      id,
      name,
      value,
    }));
  });

  const radioElement = (
    <BaseRadio
      {...rest}
      aria-label={ariaLabel ?? inferredAriaLabel}
      aria-labelledby={ariaLabelledBy}
      checked={isChecked}
      disabled={isDisabled}
      id={id}
      name={name}
      onChange={handleInputChange}
      prefixCls={prefixCls}
      required={required}
      title={title}
      value={value}
    />
  );

  const labelElement = (label || description || tag) && (
    <span className={classes('content')}>
      {label && <span className={classes('label')}>{label}</span>}
      {description && (
        <span className={classes('description')}>{description}</span>
      )}
      {tag && (
        <span className={classes('tag')}>
          <Tag label={tag} size={RADIO_TAG_SIZE} />
        </span>
      )}
    </span>
  );

  const cellVisualIcon: IconName | undefined = (
    orientation === RADIO_ORIENTATION_HORIZONTAL
      ? (isChecked ? RADIO_CELL_CHECK_ICON : icon)
      : icon
  );

  const cellIndicator = (
    <>
      {orientation === RADIO_ORIENTATION_HORIZONTAL && size === RADIO_SIZE_SMALL ? (
        <span className={classes('cell-radio')}>
          <span className={classes('cell-radio-dot')} />
        </span>
      ) : (
        cellVisualIcon && useIndicatorBadge ? (
          <span className={classes(
            'cell-indicator',
            joinCls(
              orientation === RADIO_ORIENTATION_VERTICAL && size === RADIO_SIZE_MEDIUM && classes('cell-indicator-compact'),
            ),
          )}>
            <Icons
              name={cellVisualIcon}
              size={iconSize}
              color={isChecked
                ? RADIO_CELL_INDICATOR_ICON_COLOR
                : RADIO_CELL_ICON_COLOR}
            />
          </span>
        ) : (
          cellVisualIcon && (
            <span className={classes('cell-icon')}>
              <Icons
                name={cellVisualIcon}
                size={iconSize}
                color={RADIO_CELL_ICON_COLOR}
              />
            </span>
          )
        )
      )}
    </>
  );

  if (variant === RADIO_VARIANT_CELL) {
    return (
      <label
        ref={ref}
        className={classes(
          void 0,
          joinCls(
            classes('cell'),
            classes(`cell-${size}`),
            classes(`cell-${orientation}`),
            isDisabled && classes('disabled'),
            className,
          ),
        )}
        style={style}
      >
        <input
          {...rest}
          aria-label={ariaLabel ?? inferredAriaLabel}
          aria-labelledby={ariaLabelledBy}
          checked={!!isChecked}
          className={classes('cell-input')}
          disabled={isDisabled}
          id={id}
          name={name}
          onChange={handleInputChange}
          required={required}
          title={title}
          type={RADIO_INPUT_TYPE}
          value={value}
        />
        <span className={classes('cell-panel')}>
          {cellIndicator}
          {labelElement}
        </span>
      </label>
    );
  }

  return (
    <label
      ref={ref}
      className={classes(
        void 0,
        joinCls(
          isDisabled && classes('disabled'),
          direction === RADIO_DIRECTION_RIGHT && classes('right'),
          className,
        ),
      )}
      style={style}
    >
      {direction === RADIO_DIRECTION_LEFT ? (
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
