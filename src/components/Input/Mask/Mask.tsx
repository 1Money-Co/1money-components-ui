import { memo, useId, useRef } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from '../FieldShell';
import { useSyncRef } from '../useSyncRef';
import type { FC, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';
import type { InputMaskProps } from '../interface';

/** Mask token matchers: 9 = digit, a = letter, * = alphanumeric */
const MASK_TOKEN: Record<string, RegExp> = {
  '9': /\d/,
  'a': /[a-zA-Z]/,
  '*': /[a-zA-Z0-9]/,
};

const isMaskToken = (char: string): boolean => char in MASK_TOKEN;

/** Apply mask to raw value, returning the formatted string */
const applyMask = (raw: string, mask: string, slotChar: string): string => {
  let result = '';
  let rawIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    const maskChar = mask[i];

    if (isMaskToken(maskChar)) {
      if (rawIndex < raw.length) {
        const re = MASK_TOKEN[maskChar];
        // Skip invalid characters in raw
        while (rawIndex < raw.length && !re.test(raw[rawIndex])) {
          rawIndex++;
        }
        if (rawIndex < raw.length) {
          result += raw[rawIndex];
          rawIndex++;
        } else {
          result += slotChar;
        }
      } else {
        result += slotChar;
      }
    } else {
      result += maskChar;
    }
  }

  return result;
};

/** Extract raw value (only user-typed characters, no literals or slot chars) */
const extractRaw = (formatted: string, mask: string, slotChar: string): string => {
  let raw = '';
  for (let i = 0; i < mask.length && i < formatted.length; i++) {
    if (isMaskToken(mask[i]) && formatted[i] !== slotChar) {
      raw += formatted[i];
    }
  }
  return raw;
};

/** Count how many mask tokens exist in the mask pattern */
const countTokenSlots = (mask: string): number => {
  let count = 0;
  for (let i = 0; i < mask.length; i++) {
    if (isMaskToken(mask[i])) count++;
  }
  return count;
};

/** Find the cursor position for the next available mask token slot */
const findNextSlot = (mask: string, formatted: string, slotChar: string, fromIndex: number): number => {
  for (let i = fromIndex; i < mask.length; i++) {
    if (isMaskToken(mask[i]) && (i >= formatted.length || formatted[i] === slotChar)) {
      return i;
    }
  }
  return fromIndex;
};

/** Find the position of the first slot char in formatted value */
const findFirstSlot = (formatted: string, slotChar: string): number => {
  const idx = formatted.indexOf(slotChar);
  return idx === -1 ? formatted.length : idx;
};

export const InputMask: FC<InputMaskProps> = (props) => {
  const {
    className = '',
    prefixCls = 'input',
    size = 'large',
    status = 'default',
    disabled = false,
    loading = false,
    mask,
    slotChar = '_',
    unmask = false,
    autoClear = false,
    label,
    info,
    feedback,
    feedbackIcon,
    required,
    prefix,
    suffix,
    value,
    defaultValue = '',
    onChange,
    onComplete,
    onFocus,
    onBlur,
    onKeyDown,
    ref,
    id: externalId,
    ...rest
  } = props;

  const autoId = useId();
  const inputId = externalId ?? autoId;
  const classes = classnames(prefixCls);
  const [inputRef, syncRef] = useSyncRef<HTMLInputElement>(ref);
  const isComposing = useRef(false);
  const totalSlots = countTokenSlots(mask);

  // Internal state always stores the formatted value
  const formatValue = (val: string) => applyMask(val, mask, slotChar);
  const initialFormatted = defaultValue ? formatValue(defaultValue) : '';
  const controlledFormatted = value !== undefined ? formatValue(value) : undefined;

  const [innerValue, setInnerValue] = useControlledState(initialFormatted, controlledFormatted);

  const isDisabled = disabled || loading;
  const ariaRequired = required ? 'true' : 'false';
  const ariaInvalid = status === 'error' ? 'true' : 'false';

  const emitChange = useEventCallback((formatted: string, event: ChangeEvent<HTMLInputElement>) => {
    const raw = extractRaw(formatted, mask, slotChar);
    onChange?.(unmask ? raw : formatted, event);
    if (raw.length === totalSlots) {
      onComplete?.(unmask ? raw : formatted);
    }
  });

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (isComposing.current) return;

    const input = event.target;
    const cursorPos = input.selectionStart ?? 0;
    const inputValue = input.value;

    // Extract only valid characters from the raw input
    const raw = extractRaw(inputValue, mask, slotChar)
      + inputValue.slice(cursorPos > 0 ? cursorPos - 1 : 0, cursorPos).replace(/[^\da-zA-Z]/g, '');

    // Re-extract from the full input to get clean raw
    let cleanRaw = '';
    for (let i = 0; i < inputValue.length; i++) {
      const ch = inputValue[i];
      if (/[\da-zA-Z]/.test(ch)) cleanRaw += ch;
    }

    const formatted = applyMask(cleanRaw, mask, slotChar);
    setInnerValue(formatted);
    emitChange(formatted, event);

    // Position cursor after the last filled slot
    requestAnimationFrame(() => {
      const nextPos = findFirstSlot(formatted, slotChar);
      input.setSelectionRange(nextPos, nextPos);
    });
  });

  const handleKeyDown = useEventCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const input = inputRef.current;
    if (!input) return;

    if (event.key === 'Backspace') {
      event.preventDefault();
      const pos = input.selectionStart ?? 0;
      const selEnd = input.selectionEnd ?? 0;

      if (pos === 0 && selEnd === 0) return;

      const currentRaw = extractRaw(innerValue, mask, slotChar);

      if (pos !== selEnd) {
        // Selection: remove all raw chars in the selected range
        let newRaw = '';
        let rawIdx = 0;
        for (let i = 0; i < mask.length && rawIdx < currentRaw.length; i++) {
          if (isMaskToken(mask[i])) {
            if (i < pos || i >= selEnd) {
              newRaw += currentRaw[rawIdx];
            }
            rawIdx++;
          }
        }
        const formatted = applyMask(newRaw, mask, slotChar);
        setInnerValue(formatted);
        emitChange(formatted, { target: input } as ChangeEvent<HTMLInputElement>);
        requestAnimationFrame(() => {
          const nextPos = findNextSlot(mask, formatted, slotChar, pos);
          input.setSelectionRange(nextPos, nextPos);
        });
      } else {
        // Single backspace: find prev token position and remove it
        let targetPos = pos - 1;
        while (targetPos >= 0 && !isMaskToken(mask[targetPos])) {
          targetPos--;
        }
        if (targetPos < 0) return;

        let newRaw = '';
        let rawIdx = 0;
        for (let i = 0; i < mask.length; i++) {
          if (isMaskToken(mask[i])) {
            if (i !== targetPos && rawIdx < currentRaw.length) {
              newRaw += currentRaw[rawIdx];
            }
            rawIdx++;
          }
        }
        const formatted = applyMask(newRaw, mask, slotChar);
        setInnerValue(formatted);
        emitChange(formatted, { target: input } as ChangeEvent<HTMLInputElement>);
        requestAnimationFrame(() => {
          input.setSelectionRange(targetPos, targetPos);
        });
      }
    }

    if (event.key === 'Delete') {
      event.preventDefault();
      const pos = input.selectionStart ?? 0;

      let targetPos = pos;
      while (targetPos < mask.length && !isMaskToken(mask[targetPos])) {
        targetPos++;
      }
      if (targetPos >= mask.length) return;

      const currentRaw = extractRaw(innerValue, mask, slotChar);
      let newRaw = '';
      let rawIdx = 0;
      for (let i = 0; i < mask.length; i++) {
        if (isMaskToken(mask[i])) {
          if (i !== targetPos && rawIdx < currentRaw.length) {
            newRaw += currentRaw[rawIdx];
          }
          rawIdx++;
        }
      }
      const formatted = applyMask(newRaw, mask, slotChar);
      setInnerValue(formatted);
      emitChange(formatted, { target: input } as ChangeEvent<HTMLInputElement>);
      requestAnimationFrame(() => {
        input.setSelectionRange(pos, pos);
      });
    }

    onKeyDown?.(event);
  });

  const handleFocus = useEventCallback((event: FocusEvent<HTMLInputElement>) => {
    // On focus, if empty show the mask placeholder
    if (!innerValue || extractRaw(innerValue, mask, slotChar).length === 0) {
      const formatted = applyMask('', mask, slotChar);
      setInnerValue(formatted);
    }
    requestAnimationFrame(() => {
      const input = inputRef.current;
      if (input) {
        const pos = findFirstSlot(input.value, slotChar);
        input.setSelectionRange(pos, pos);
      }
    });
    onFocus?.(event);
  });

  const handleBlur = useEventCallback((event: FocusEvent<HTMLInputElement>) => {
    const raw = extractRaw(innerValue, mask, slotChar);
    if (autoClear && raw.length > 0 && raw.length < totalSlots) {
      const empty = applyMask('', mask, slotChar);
      setInnerValue(empty);
      emitChange(empty, { target: event.target } as ChangeEvent<HTMLInputElement>);
    }
    // If completely empty, clear the formatted mask
    if (raw.length === 0) {
      setInnerValue('');
    }
    onBlur?.(event);
  });

  return (
    <FieldShell
      className={className}
      prefixCls={prefixCls}
      size={size}
      status={status}
      disabled={isDisabled}
      label={label}
      info={info}
      feedback={feedback}
      feedbackIcon={feedbackIcon}
      required={required}
      inputId={inputId}
    >
      <div className={classes('control', joinCls(isDisabled && classes('control-disabled')))}>
        {prefix && <span className={classes('prefix')}>{prefix}</span>}
        <input
          {...rest}
          ref={syncRef}
          id={inputId}
          className={classes('field')}
          disabled={isDisabled}
          value={innerValue}
          placeholder={rest.placeholder ?? applyMask('', mask, slotChar)}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onCompositionStart={() => { isComposing.current = true; }}
          onCompositionEnd={(e) => {
            isComposing.current = false;
            handleChange(e as unknown as ChangeEvent<HTMLInputElement>);
          }}
          aria-required={ariaRequired}
          aria-invalid={ariaInvalid}
        />
        {suffix && <span className={classes('suffix')}>{suffix}</span>}
      </div>
    </FieldShell>
  );
};

export default memo(InputMask);
