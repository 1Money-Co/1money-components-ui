import { memo, useRef } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from './FieldShell';
import InputOTP from './OTP';
import InputPassword from './Password';
import InputSearch from './Search';
import InputTextArea from './TextArea';
import type { FC, ChangeEvent } from 'react';
import type { InputComponent, InputProps } from './interface';

const InputBase: FC<InputProps> = (props) => {
  const {
    className = '',
    prefixCls = 'input',
    size = 'large',
    status = 'default',
    disabled = false,
    label,
    info,
    description,
    feedback,
    required,
    allowClear = false,
    prefix,
    suffix,
    value,
    defaultValue = '',
    onChange,
    ref,
    ...rest
  } = props;

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

  const handleClear = useEventCallback(() => {
    const nextValue = '';
    setInnerValue(nextValue);

    if (inputRef.current) {
      inputRef.current.focus();
    }

    onChange?.(
      nextValue,
      {
        target: inputRef.current,
        currentTarget: inputRef.current,
      } as ChangeEvent<HTMLInputElement>,
    );
  });

  const showClearAction = allowClear && !disabled && innerValue.length > 0;

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
          value={innerValue}
          onChange={handleChange}
        />
        {showClearAction && (
          <button
            type="button"
            className={classes('action')}
            aria-label="clear input"
            onClick={handleClear}
          >
            <Icons name="cross" size={16} />
          </button>
        )}
        {suffix && <span className={classes('suffix')}>{suffix}</span>}
      </div>
    </FieldShell>
  );
};

const MemoizedInput = memo(InputBase);

export const Input = Object.assign(MemoizedInput, {
  Password: InputPassword,
  Search: InputSearch,
  TextArea: InputTextArea,
  OTP: InputOTP,
}) as InputComponent;

export default Input;
