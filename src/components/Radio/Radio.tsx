import { memo } from 'react';
import {
  RadioButton as PrimeRadioButton,
  type RadioButtonChangeEvent,
} from 'primereact/radiobutton';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { useRadioGroupContext } from './RadioGroupContext';
import type { FC } from 'react';
import type { RadioProps } from './interface';

export const Radio: FC<RadioProps> = (props) => {
  const {
    className = '',
    prefixCls = 'radio-beta',
    value,
    checked,
    defaultChecked = false,
    disabled = false,
    label,
    description,
    direction: directionProp,
    onChange,
    name: nameProp,
    ref,
    ...rest
  } = props;

  const groupContext = useRadioGroupContext();

  // When inside a RadioGroup, derive state from context
  const isGrouped = groupContext !== null;
  const isDisabled = disabled || (groupContext?.disabled ?? false);
  const direction = directionProp ?? groupContext?.direction ?? 'left';
  const name = nameProp ?? groupContext?.name;

  const [innerChecked, setInnerChecked] = useControlledState(
    defaultChecked,
    isGrouped ? groupContext.value === value : checked,
  );

  const classes = classnames(prefixCls);

  const handleChange = useEventCallback((e: RadioButtonChangeEvent) => {
    if (isDisabled) return;

    if (isGrouped && value !== undefined) {
      groupContext.onChange(value);
    } else {
      const nextChecked = !!e.checked;
      setInnerChecked(nextChecked);
      onChange?.(nextChecked);
    }
  });

  const radioElement = (
    <div className={classes('box-wrapper')}>
      <PrimeRadioButton
        {...rest}
        name={name}
        disabled={isDisabled}
        checked={innerChecked}
        onChange={handleChange}
        className={classes('box')}
      />
    </div>
  );

  const labelElement = (label || description) && (
    <div className={classes('content')}>
      {label && <span className={classes('label')}>{label}</span>}
      {description && (
        <span className={classes('description')}>{description}</span>
      )}
    </div>
  );

  return (
    <label
      ref={ref}
      className={classes(
        void 0,
        joinCls(
          direction === 'right' && classes('right'),
          className,
        ),
      )}
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
