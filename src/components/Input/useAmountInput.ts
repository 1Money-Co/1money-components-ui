import { useMemo, useRef, useState } from 'react';
import { useEventCallback, useLatest, useLayoutEffect } from '@1money/hooks';
import { useSyncRef } from './useSyncRef';
import {
  CHAR_DOT,
  CHAR_MINUS,
  DECIMAL_POINT_OFFSET,
  absValue,
  calcValueInRange,
  formatThousands,
  isNumericType,
  normalizeValue,
  parseRawInput,
  stripCommas,
  stripMinus,
  truncateFractionDigits,
} from './Amount/helper';
import type { ChangeEvent, RefObject } from 'react';

export interface UseAmountInputOptions {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string, event: ChangeEvent<HTMLInputElement>) => void;
  min?: number | bigint;
  max?: number | bigint;
  maxFractionDigits?: number | bigint;
  negative?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  ref?: RefObject<HTMLInputElement | null>;
}

export interface UseAmountInputResult {
  inputRef: RefObject<HTMLInputElement | null>;
  syncRef: (node: HTMLInputElement | null) => void;
  /** Display value with thousands separators — bind to `<input value>` */
  formattedValue: string;
  /** `true` when the internal value is neither null nor empty */
  hasValue: boolean;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSelect: () => void;
  /** Clear the value and notify via onChange (caller should manage focus) */
  clear: () => void;
}

/**
 * Encapsulates the numeric input pipeline shared by InputAmount and InputTrade.
 *
 * Handles:
 * - Thousands-separator formatting (display only; internal value stays raw)
 * - parse / normalize / fraction-digit truncation / min-max clamping
 * - Controlled & uncontrolled modes through the same pipeline
 * - Caret position preservation across formatted re-renders
 */
export function useAmountInput(options: UseAmountInputOptions): UseAmountInputResult {
  const {
    value,
    defaultValue,
    onChange,
    min,
    max,
    maxFractionDigits,
    negative,
    disabled,
    readOnly,
    ref,
  } = options;

  const [inputRef, syncRef] = useSyncRef<HTMLInputElement>(ref);

  const isUncontrolled = typeof value === 'undefined';
  const [innerValue, setInnerValue] = useState<string | null>(
    defaultValue != null && defaultValue !== '' ? String(defaultValue) : null,
  );

  const caretPosRef = useRef(0);
  const ignoreSelectRef = useRef(false);
  const onChangeRef = useLatest(onChange);

  const formattedValue = useMemo(
    () => formatThousands(innerValue ?? '', negative),
    [innerValue, negative],
  );

  const stateRef = useLatest({
    innerValue,
    formattedValue,
    min,
    max,
    negative,
    maxFractionDigits,
  });

  const calcCaretPos = useEventCallback((
    val: string,
    offset: number = 0,
    currPos?: number,
  ) => {
    const input = inputRef.current;
    if (!input) return;

    const { innerValue: prev, negative, formattedValue } = stateRef.current;
    const formattedNewVal = formatThousands(val, negative);
    const originOffset = val.length - (prev?.length ?? 0);
    let position = currPos ?? input.selectionEnd ?? 0;

    // Map formatted position back to raw position
    position = stripCommas(formattedValue.slice(0, Math.max(position, 0))).length;

    // Map raw position forward to formatted position
    const posVal = val.slice(0, position + originOffset);
    formattedNewVal.split('').reduce<string[]>((acc, char, ind) => {
      if (char === ',') return acc;
      acc.push(char);
      if (acc.join('') === posVal) position = ind + 1;
      return acc;
    }, []);

    caretPosRef.current = position + offset;
  });

  const commitValue = useEventCallback((
    val: string,
    hasDecimalPoint: boolean,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    if (isUncontrolled) {
      setInnerValue(val === '' ? null : val);
      calcCaretPos(val, hasDecimalPoint ? DECIMAL_POINT_OFFSET : 0, Math.max(caretPosRef.current, 0));
      ignoreSelectRef.current = true;
    }
    onChangeRef.current?.(val, event);
  });

  const handleChange = useEventCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;

    const { innerValue, formattedValue, min, max, negative, maxFractionDigits } = stateRef.current;
    const parsed = parseRawInput(event.target.value ?? '', negative);
    if (!parsed) return;

    let { val } = parsed;
    const { hasDecimalPoint, isStandaloneMinus } = parsed;

    if (val === innerValue && !hasDecimalPoint) return;

    // Enforce fraction digit limit
    if (isNumericType(maxFractionDigits)) {
      const { int, truncated, overflow } = truncateFractionDigits(val, Number(maxFractionDigits));
      if (overflow) {
        const [oldInt] = formattedValue.split(CHAR_DOT);
        if (stripCommas(oldInt) === int) return;
        val = truncated;
      }
    }

    // Clamp to min/max range
    if (isNumericType(min) || isNumericType(max)) {
      val = calcValueInRange(val, min, max);
    }

    // Normalize the final value
    if (val !== '') {
      val = isStandaloneMinus ? CHAR_MINUS : normalizeValue(val, hasDecimalPoint, negative);
    }

    commitValue(val, hasDecimalPoint, event);
  });

  const handleSelect = useEventCallback(() => {
    if (ignoreSelectRef.current) {
      ignoreSelectRef.current = false;
      return;
    }
    const currPos = inputRef.current?.selectionEnd;
    if (typeof currPos === 'number') caretPosRef.current = currPos;
  });

  // Keep caret at the expected position after formatted re-render
  useLayoutEffect(() => {
    const input = inputRef.current;
    if (!input || document.activeElement !== input) return;
    const pos = caretPosRef.current;
    input.setSelectionRange(pos, pos);
  }, [formattedValue]);

  // Sync external controlled value (or defaultValue) through the same pipeline
  useLayoutEffect(() => {
    let val: string | number | bigint | null = isUncontrolled ? innerValue : (value ?? null);
    let hasDecimalPoint = false;
    let isStandaloneMinus = false;

    if (typeof val === 'string') {
      if (val === '') {
        val = null;
      } else {
        const parsed = parseRawInput(val, negative);
        if (!parsed) return;
        val = parsed.val;
        hasDecimalPoint = parsed.hasDecimalPoint;
        isStandaloneMinus = parsed.isStandaloneMinus;
        if (!negative) val = stripMinus(val);
      }
    } else if (val !== null && !isNumericType(val)) {
      return;
    }

    if (!negative && isNumericType(val)) {
      val = absValue(val);
    }

    if (
      (typeof val === 'string' || typeof val === 'number') &&
      isNumericType(maxFractionDigits)
    ) {
      const { truncated, overflow } = truncateFractionDigits(`${val}`, Number(maxFractionDigits));
      if (overflow) {
        if (isUncontrolled) {
          setInnerValue(truncated);
        } else {
          onChangeRef.current?.(
            truncated ?? '',
            { target: inputRef.current } as unknown as ChangeEvent<HTMLInputElement>,
          );
        }
        return;
      }
    }

    if (isNumericType(val) || typeof val === 'string') {
      val = calcValueInRange(`${val}`, min, max);
    }

    if (val === '' || val == null) {
      setInnerValue(null);
    } else {
      const normalized = isStandaloneMinus
        ? CHAR_MINUS
        : normalizeValue(`${val}`, hasDecimalPoint, negative);
      setInnerValue(normalized);
    }

    calcCaretPos(
      (val ?? '').toString(),
      hasDecimalPoint ? DECIMAL_POINT_OFFSET : 0,
      Math.max(caretPosRef.current, 0),
    );
    ignoreSelectRef.current = true;
  }, [value, maxFractionDigits, min, max, negative]);

  const clear = useEventCallback(() => {
    if (isUncontrolled) setInnerValue(null);
    onChangeRef.current?.(
      '',
      { target: inputRef.current } as unknown as ChangeEvent<HTMLInputElement>,
    );
  });

  const hasValue = innerValue != null && innerValue !== '';

  return {
    inputRef,
    syncRef,
    formattedValue,
    hasValue,
    handleChange,
    handleSelect,
    clear,
  };
}
