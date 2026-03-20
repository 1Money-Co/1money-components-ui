import { memo, useEffect, useRef } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { ChangeEvent, FC } from 'react';
import type { CheckboxProps } from './interface';

export const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    className = '',
    prefixCls = 'checkbox',
    id,
    name,
    value,
    required = false,
    title,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    checked,
    defaultChecked = false,
    indeterminate = false,
    disabled = false,
    label,
    description,
    direction = 'left',
    onChange,
    ref,
  } = props;

  const [innerChecked, setInnerChecked] = useControlledState(
    defaultChecked,
    checked,
  );
  const classes = classnames(prefixCls);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const inferredAriaLabel = (
    typeof label === 'string' || typeof label === 'number'
      ? String(label)
      : typeof description === 'string' || typeof description === 'number'
        ? String(description)
        : undefined
  );

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const nextChecked = event.target.checked;
    setInnerChecked(nextChecked);
    onChange?.(nextChecked);
  });

  const checkboxElement = (
    <span className={classes('box-wrapper')}>
      <input
        ref={inputRef}
        className={classes('input')}
        type="checkbox"
        id={id}
        name={name}
        value={value === undefined ? undefined : String(value)}
        required={required}
        title={title}
        aria-label={ariaLabel ?? inferredAriaLabel}
        aria-labelledby={ariaLabelledBy}
        disabled={disabled}
        checked={innerChecked}
        onChange={handleChange}
      />
      <span
        aria-hidden="true"
        className={classes('box')}
      />
    </span>
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
          innerChecked && classes('checked'),
          indeterminate && classes('indeterminate'),
          disabled && classes('disabled'),
          direction === 'right' && classes('right'),
          className,
        ),
      )}
    >
      {checkboxElement}
      {labelElement}
    </label>
  );
};

export default memo(Checkbox);
