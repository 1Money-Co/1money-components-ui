import { memo, useId } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from '../FieldShell';
import { useSyncRef } from '../useSyncRef';
import type { FC, ChangeEvent } from 'react';
import type { InputAmountProps } from '../interface';
import type { InputSize } from '../constants';
import './style';

const CLEAR_ICON_SIZE: Record<InputSize, number> = { large: 16, small: 14 };
const CHEVRON_SIZE: Record<InputSize, number> = { large: 20, small: 16 };
const CURRENCY_ICON_SIZE: Record<InputSize, number> = { large: 24, small: 20 };

export const InputAmount: FC<InputAmountProps> = (props) => {
  const {
    className = '',
    prefixCls = 'input',
    size = 'large',
    status = 'default',
    disabled = false,
    label,
    info,
    errorMsg,
    required,
    allowClear = false,
    prefix,
    suffix,
    actionLabel,
    onAction,
    currencyIcon,
    currencyLabel,
    onCurrencyClick,
    value,
    defaultValue = '',
    onChange,
    onClear,
    placeholder = '0',
    ref,
    id: externalId,
    ...rest
  } = props;

  const autoId = useId();
  const inputId = externalId ?? autoId;
  const classes = classnames(prefixCls);
  const [inputRef, syncRef] = useSyncRef<HTMLInputElement>(ref);
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);

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

  const handleAction = useEventCallback(() => {
    if (disabled) return;
    onAction?.();
  });

  const handleCurrencyClick = useEventCallback(() => {
    if (disabled) return;
    onCurrencyClick?.();
  });

  const showClearAction = allowClear && !disabled && innerValue.length > 0;
  const clearIconSize = CLEAR_ICON_SIZE[size];
  const chevronSize = CHEVRON_SIZE[size];
  const currencyIconSize = CURRENCY_ICON_SIZE[size];

  const hasCurrency = currencyIcon || currencyLabel;
  const hasBuiltinSuffix = actionLabel || hasCurrency;

  return (
    <FieldShell
      className={className}
      prefixCls={prefixCls}
      size={size}
      status={status}
      disabled={disabled}
      label={label}
      info={info}
      errorMsg={errorMsg}
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
          placeholder={placeholder}
          inputMode="decimal"
          aria-required={required ? 'true' : 'false'}
          aria-invalid={status === 'error' ? 'true' : 'false'}
        />
        {showClearAction && (
          <button
            type="button"
            className={classes('action')}
            aria-label="clear input"
            onClick={handleClear}
          >
            <Icons name="cross" size={clearIconSize} />
          </button>
        )}
        {suffix
          ? <span className={classes('suffix')}>{suffix}</span>
          : hasBuiltinSuffix && (
            <span className={classes('suffix')}>
              {actionLabel && (
                <button
                  type="button"
                  className={classes('amount-action')}
                  disabled={disabled}
                  onClick={handleAction}
                >
                  {actionLabel}
                </button>
              )}
              {actionLabel && hasCurrency && (
                <span className={classes('amount-divider')} />
              )}
              {hasCurrency && (
                <button
                  type="button"
                  className={classes('amount-currency')}
                  disabled={disabled}
                  onClick={handleCurrencyClick}
                >
                  {currencyIcon && (
                    <span
                      className={classes('amount-currency-icon')}
                      style={{ width: currencyIconSize, height: currencyIconSize }}
                    >
                      {currencyIcon}
                    </span>
                  )}
                  {currencyLabel && (
                    <span className={classes('amount-currency-label')}>{currencyLabel}</span>
                  )}
                  {onCurrencyClick && (
                    <Icons name="chevronDown" size={chevronSize} />
                  )}
                </button>
              )}
            </span>
          )
        }
      </div>
    </FieldShell>
  );
};

export default memo(InputAmount);
