import { memo, useId } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { Spinner } from '@/components/Spinner';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from '../FieldShell';
import { useSyncRef } from '../useSyncRef';
import type { FC, ChangeEvent, MouseEvent } from 'react';
import type { InputComponent, InputProps } from '../interface';

import InputAmount from '../Amount';
import InputOTP from '../OTP';
import InputPassword from '../Password';
import InputSearch from '../Search';
import InputTextArea from '../TextArea';
import InputTrade from '../Trade';
import InputMask from '../Mask';

const InputBase: FC<InputProps> = (props) => {
  const {
    mask,
    slotChar,
    unmask,
    autoClear,
    onComplete,
    ...inputProps
  } = props;

  // Delegate to InputMask when mask pattern is provided
  if (mask) {
    return (
      <InputMask
        {...inputProps}
        mask={mask}
        slotChar={slotChar}
        unmask={unmask}
        autoClear={autoClear}
        onComplete={onComplete}
      />
    );
  }

  const {
    className = '',
    prefixCls = 'input',
    size = 'large',
    status = 'default',
    disabled = false,
    loading = false,
    label,
    info,
    feedback,
    feedbackIcon,
    tip,
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
    readOnly = false,
    ...rest
  } = inputProps;

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

  const handleControlClick = useEventCallback((e: MouseEvent<HTMLDivElement>) => {
    if (isDisabled || readOnly) return;
    if (e.target instanceof HTMLInputElement) return;
    inputRef.current?.focus();
  });

  const handleClear = useEventCallback(() => {
    setInnerValue('');
    inputRef.current?.focus();
    onClear?.();
  });

  const isDisabled = disabled || loading;
  const showClearAction = allowClear && !isDisabled && !readOnly && innerValue.length > 0;

  return (
    <FieldShell
      className={className}
      prefixCls={prefixCls}
      size={size}
      status={status}
      disabled={isDisabled}
      loading={loading}
      readOnly={readOnly}
      label={label}
      info={info}
      tip={tip}
      feedback={feedback}
      feedbackIcon={feedbackIcon}
      required={required}
      inputId={inputId}
      onControlWrapperClick={handleControlClick}
    >
      <div className={classes('control', joinCls(isDisabled && classes('control-disabled')))}>
        {prefix && <span className={classes('prefix')}>{prefix}</span>}
        <input
          {...rest}
          ref={syncRef}
          id={inputId}
          className={classes('field')}
          disabled={isDisabled}
          readOnly={readOnly}
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
        {loading && <Spinner style={{ width: 16, height: 16 }} />}
        {suffix && <span className={classes('suffix')}>{suffix}</span>}
      </div>
    </FieldShell>
  );
};

const MemoizedInput = memo(InputBase);
MemoizedInput.displayName = 'Input';

export const Input = Object.assign(MemoizedInput, {
  Password: InputPassword,
  Search: InputSearch,
  TextArea: InputTextArea,
  OTP: InputOTP,
  Trade: InputTrade,
  Amount: InputAmount,
  Mask: InputMask,
}) as InputComponent;

export default Input;
