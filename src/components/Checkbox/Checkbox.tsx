import { memo } from 'react';
import {
  Checkbox as PrimeCheckbox,
  type CheckboxChangeEvent,
} from 'primereact/checkbox';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC } from 'react';
import type { CheckboxProps } from './interface';

const CheckIconSvg = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.5099 6.40005L10.12 19.7129L2.55029 12.2976L3.94985 10.8689L9.99122 16.787L19.9902 5.09985L21.5099 6.40005Z"
    />
  </svg>
);

const MinusIconSvg = (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 13L3 13V11L21 11V13Z"
    />
  </svg>
);

export const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    className = '',
    prefixCls = 'checkbox-beta',
    checked,
    defaultChecked = false,
    indeterminate = false,
    disabled = false,
    label,
    description,
    direction = 'left',
    onChange,
    ref,
    ...rest
  } = props;

  const [innerChecked, setInnerChecked] = useControlledState(
    defaultChecked,
    checked,
  );

  const classes = classnames(prefixCls);

  const handleChange = useEventCallback((e: CheckboxChangeEvent) => {
    if (disabled) return;
    const nextChecked = !!e.checked;
    setInnerChecked(nextChecked);
    onChange?.(nextChecked);
  });

  const checkboxIcon = indeterminate ? MinusIconSvg : CheckIconSvg;

  const checkboxElement = (
    <div className={classes('box-wrapper')}>
      <PrimeCheckbox
        {...rest}
        disabled={disabled}
        checked={indeterminate || innerChecked}
        onChange={handleChange}
        icon={checkboxIcon}
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
          indeterminate && classes('indeterminate'),
          direction === 'right' && classes('right'),
          className,
        ),
      )}
    >
      {direction === 'left' ? (
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
