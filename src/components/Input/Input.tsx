import { memo, useId } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from './FieldShell';
import { useSyncRef } from './useSyncRef';
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
    onClear,
    ref,
    id: externalId,
    ...rest
  } = props;

  const autoId = useId();
  const inputId = externalId ?? autoId;
  const classes = classnames(prefixCls);
  const [inputRef, syncRef] = useSyncRef<HTMLInputElement>(ref);
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);
  const ariaRequired = required ? 'true' : 'false';
  const ariaInvalid = status === 'error' ? 'true' : 'false';

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    const nextValue = event.target.value;
    setInnerValue(nextValue);
    onChange?.(nextValue, event);
  });

  const handleClear = useEventCallback(() => {
    setInnerValue('');
    inputRef.current?.focus();
    onClear?.();
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
      inputId={inputId}
    >
      <div className={classes('control', joinCls(disabled && classes('control-disabled')))}>
        {prefix && <span className={classes('prefix')}>{prefix}</span>}
        <input
          {...rest}
          ref={syncRef}
          id={inputId}
          className={classes('field')}
          disabled={disabled}
          value={innerValue}
          onChange={handleChange}
          aria-required={ariaRequired}
          aria-invalid={ariaInvalid}
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
