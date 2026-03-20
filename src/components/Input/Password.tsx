import { memo, useRef, useState } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from './FieldShell';
import type { FC, ChangeEvent } from 'react';
import type { InputPasswordProps } from './interface';

export const InputPassword: FC<InputPasswordProps> = (props) => {
  const {
    className = '',
    prefixCls = 'input',
    size = 'large',
    status = 'default',
    disabled = false,
    visibilityToggle = true,
    visibleIcon = <Icons name="eyeClose" size={16} />,
    hiddenIcon = <Icons name="eyeOn" size={16} />,
    label,
    info,
    description,
    feedback,
    required,
    prefix,
    suffix,
    value,
    defaultValue = '',
    onChange,
    ref,
    ...rest
  } = props;

  const [visible, setVisible] = useState(false);
  const classes = classnames(prefixCls);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);

  const syncRef = useEventCallback((node: HTMLInputElement | null) => {
    inputRef.current = node;
    if (ref) {
      (ref as { current: HTMLInputElement | null }).current = node;
    }
  });

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setInnerValue(nextValue);
    onChange?.(nextValue, event);
  });

  const handleToggle = useEventCallback(() => {
    if (disabled) return;
    setVisible(current => !current);
  });

  return (
    <FieldShell
      className={className}
      prefixCls={prefixCls}
      size={size}
      status={status}
      disabled={disabled}
      label={label}
      info={info}
      description={description}
      feedback={feedback}
      required={required}
    >
      <div className={classes('control', joinCls(disabled && classes('control-disabled')))}>
        {prefix && <span className={classes('prefix')}>{prefix}</span>}
        <input
          {...rest}
          ref={syncRef}
          className={classes('field')}
          disabled={disabled}
          type={visible ? 'text' : 'password'}
          value={innerValue}
          onChange={handleChange}
        />
        {visibilityToggle && (
          <button
            type="button"
            className={classes('action')}
            disabled={disabled}
            aria-label="toggle password visibility"
            onClick={handleToggle}
          >
            {visible ? visibleIcon : hiddenIcon}
          </button>
        )}
        {suffix && <span className={classes('suffix')}>{suffix}</span>}
      </div>
    </FieldShell>
  );
};

export default memo(InputPassword);
