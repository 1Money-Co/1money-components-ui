import { memo, useId, useRef } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames } from '@/utils/classnames';
import { FieldShell } from '../FieldShell';
import { OTP_DEFAULT_LENGTH } from '../constants';
import { useSyncRef } from '../useSyncRef';
import type { ClipboardEvent, FC, KeyboardEvent, ChangeEvent } from 'react';
import type { InputOTPProps } from '../interface';

const DIGIT_PATTERN = /^\d$/;

export const InputOTP: FC<InputOTPProps> = (props) => {
  const {
    className = '',
    prefixCls = 'input',
    size = 'large',
    status = 'default',
    disabled = false,
    label,
    info,
    feedback,
    feedbackIcon,
    tip,
    required,
    value,
    defaultValue = '',
    length = OTP_DEFAULT_LENGTH,
    autoFocus = false,
    mask = false,
    formatter,
    onChange,
    onComplete,
    ref,
  } = props;

  const autoId = useId();
  const classes = classnames(prefixCls);
  const [containerRef, syncContainerRef] = useSyncRef<HTMLDivElement>(ref);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);
  const normalizedValue = innerValue.slice(0, length);
  const chars = Array.from({ length }, (_, index) => normalizedValue[index] ?? '');

  const focusCell = useEventCallback((index: number) => {
    const target = inputRefs.current[index];
    if (!target) return;
    target.focus();
    target.select();
  });

  const commitValue = useEventCallback((nextValue: string, focusIndex?: number) => {
    const formattedValue = (formatter ? formatter(nextValue) : nextValue).slice(0, length);
    setInnerValue(formattedValue);
    onChange?.(formattedValue);

    if (formattedValue.length === length) {
      onComplete?.(formattedValue);
    }

    if (focusIndex !== undefined) {
      focusCell(Math.max(0, Math.min(length - 1, focusIndex)));
    }
  });

  const handleInputChange = useEventCallback((index: number, event: ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const char = event.target.value.slice(-1);
    if (char && !DIGIT_PATTERN.test(char)) return;

    const nextChars = [...chars];
    nextChars[index] = char;
    commitValue(nextChars.join(''), char ? index + 1 : index);
  });

  const handleInputKeyDown = useEventCallback((index: number, event: KeyboardEvent<HTMLInputElement>) => {
    if (disabled || event.key !== 'Backspace') return;

    event.preventDefault();

    const nextChars = [...chars];

    if (nextChars[index]) {
      nextChars[index] = '';
      commitValue(nextChars.join(''), index);
      return;
    }

    if (index > 0) {
      nextChars[index - 1] = '';
      commitValue(nextChars.join(''), index - 1);
    }
  });

  const handleInputPaste = useEventCallback((index: number, event: ClipboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    event.preventDefault();

    const pasted = event.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, length - index);
    const nextChars = [...chars];

    pasted.split('').forEach((char, offset) => {
      nextChars[index + offset] = char;
    });

    commitValue(nextChars.join(''), Math.min(length - 1, index + pasted.length));
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
      tip={tip}
      feedback={feedback}
      feedbackIcon={feedbackIcon}
      required={required}
      inputId={autoId}
    >
      <div ref={syncContainerRef} className={classes('otp')}>
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(node) => {
              inputRefs.current[index] = node;
            }}
            className={classes('otp-cell')}
            disabled={disabled}
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            aria-label={`OTP digit ${index + 1}`}
            autoFocus={autoFocus && index === 0}
            type={mask ? 'password' : 'text'}
            value={chars[index]}
            onChange={(event) => handleInputChange(index, event)}
            onKeyDown={(event) => handleInputKeyDown(index, event)}
            onPaste={(event) => handleInputPaste(index, event)}
          />
        ))}
      </div>
    </FieldShell>
  );
};

InputOTP.displayName = 'InputOTP';

const MemoizedInputOTP = memo(InputOTP);
MemoizedInputOTP.displayName = 'InputOTP';

export default MemoizedInputOTP;
