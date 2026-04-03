import { memo } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { RadioButton as PrimeRadioButton } from 'primereact/radiobutton';
import { Icons } from '@/components/Icons';
import { useCellSelectorGroupContext } from './CellSelectorGroupContext';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, MouseEvent, KeyboardEvent } from 'react';
import type { CellSelectorProps } from './interface';

export const CellSelector: FC<CellSelectorProps> = (props) => {
  const {
    className = '',
    prefixCls = 'cell-selector',
    checked: checkedProp,
    defaultChecked = false,
    size = 'large',
    direction = 'horizontal',
    label,
    description,
    icon,
    value,
    disabled: disabledProp = false,
    onChange,
    onClick,
    ref,
    ...rest
  } = props;

  const groupContext = useCellSelectorGroupContext();
  const isGrouped = groupContext !== null && value !== undefined;
  const isDisabled = disabledProp || (groupContext?.disabled ?? false);

  const [innerChecked, setInnerChecked] = useControlledState(
    defaultChecked,
    isGrouped ? groupContext.value === value : checkedProp,
  );

  const classes = classnames(prefixCls);

  const handleClick = useEventCallback((e: MouseEvent<HTMLDivElement>) => {
    if (isDisabled) return;
    onClick?.(e);

    if (isGrouped && value !== undefined) {
      groupContext.onChange(value);
    } else {
      const nextChecked = !innerChecked;
      setInnerChecked(nextChecked);
      onChange?.(nextChecked);
    }
  });

  const handleKeyDown = useEventCallback((e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e as unknown as MouseEvent<HTMLDivElement>);
    }
  });

  const showDescription = size === 'large' && description;

  const CHECK_ICON_SIZE = {
    large: 16,
    medium: 14,
    small: 16,
  } as const;

  const renderIndicator = () => {
    if (size === 'small') {
      return (
        <span className={classes('radio-wrapper')}>
          <PrimeRadioButton
            checked={innerChecked}
            disabled={isDisabled}
            className={classes('radio-box')}
            tabIndex={-1}
          />
        </span>
      );
    }

    return (
      <span className={classes('icon-circle')}>
        {innerChecked ? (
          <Icons name="check" size={CHECK_ICON_SIZE[size]} color="#FFFFFF" />
        ) : (
          icon
        )}
      </span>
    );
  };

  return (
    <div
      {...rest}
      ref={ref}
      role="radio"
      aria-checked={innerChecked}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={classes(
        void 0,
        joinCls(
          classes(size),
          classes(direction),
          innerChecked && classes('checked'),
          isDisabled && classes('disabled'),
          className,
        ),
      )}
    >
      {renderIndicator()}
      <span className={classes('content')}>
        {label && <span className={classes('label')}>{label}</span>}
        {showDescription && (
          <span className={classes('description')}>{description}</span>
        )}
      </span>
    </div>
  );
};

export default memo(CellSelector);
