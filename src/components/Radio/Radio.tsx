import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { Tag } from '@/components/Tag';
import { default as classnames, joinCls } from '@/utils/classnames';
import BaseRadio, { createRadioChangeEvent } from './BaseRadio';
import { useRadioGroupContext } from './RadioGroupContext';
import type { ChangeEvent, FC } from 'react';
import type { IconName } from '@/components/Icons';
import type {
  RadioChangeEvent,
  RadioOrientation,
  RadioProps,
  RadioSize,
} from './interface';

const CELL_ICON_SIZE_MAP: Record<RadioOrientation, Record<RadioSize, number>> = {
  horizontal: {
    large: 16,
    medium: 16,
    small: 12,
  },
  vertical: {
    large: 24,
    medium: 20,
    small: 16,
  },
};

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
  const variant = variantProp ?? groupContext?.variant ?? 'default';
  const size = sizeProp ?? groupContext?.size ?? 'large';
  const orientation = orientationProp ?? groupContext?.orientation ?? 'horizontal';
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
  const [innerChecked, setInnerChecked] = useControlledState(defaultChecked, checked);
  const isControlled = checked !== undefined;
  const isChecked = isSelectableInGroup ? groupContext?.value === value : !!innerChecked;
  const iconSize = CELL_ICON_SIZE_MAP[orientation][size];
  const useIndicatorBadge = (
    (orientation === 'horizontal' && size !== 'small')
    || (orientation === 'vertical' && size === 'medium' && isChecked)
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
          <Tag label={tag} size="small" />
        </span>
      )}
    </span>
  );

  const cellVisualIcon: IconName | undefined = (
    orientation === 'horizontal'
      ? (isChecked ? 'check' : icon)
      : icon
  );

  const cellIndicator = (
    <>
      {orientation === 'horizontal' && size === 'small' ? (
        <span className={classes('cell-radio')}>
          <span className={classes('cell-radio-dot')} />
        </span>
      ) : (
        cellVisualIcon && useIndicatorBadge ? (
          <span className={classes(
            'cell-indicator',
            joinCls(
              orientation === 'vertical' && size === 'medium' && classes('cell-indicator-compact'),
            ),
          )}>
            <Icons
              name={cellVisualIcon}
              size={iconSize}
              color={isChecked
                ? 'var(--om-radio-cell-indicator-icon)'
                : 'var(--om-radio-cell-icon)'}
            />
          </span>
        ) : (
          cellVisualIcon && (
            <span className={classes('cell-icon')}>
              <Icons
                name={cellVisualIcon}
                size={iconSize}
                color="var(--om-radio-cell-icon)"
              />
            </span>
          )
        )
      )}
    </>
  );

  if (variant === 'cell') {
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
          type="radio"
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
