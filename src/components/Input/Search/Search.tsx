import { memo, useId } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { Spinner } from '@/components/Spinner';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from '../FieldShell';
import { useSyncRef } from '../useSyncRef';
import type { FC, ChangeEvent, KeyboardEvent } from 'react';
import type { InputSearchProps } from '../interface';
import type { InputSize } from '../constants';

const SEARCH_ICON_SIZE: Record<InputSize, number> = { large: 20, small: 16 };

export const InputSearch: FC<InputSearchProps> = (props) => {
  const {
    className = '',
    prefixCls = 'input',
    size = 'large',
    status = 'default',
    disabled = false,
    loading = false,
    searchButton = true,
    searchTrigger = 'both',
    allowClear = false,
    label,
    info,
    feedback,
    feedbackIcon,
    tip,
    required,
    prefix,
    suffix,
    value,
    defaultValue = '',
    onChange,
    onSearch,
    onClear,
    onKeyDown,
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

  const handleSearch = useEventCallback((nextValue?: string) => {
    onSearch?.(nextValue ?? inputRef.current?.value ?? '');
  });

  const handleKeyDown = useEventCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (!disabled && (searchTrigger === 'enter' || searchTrigger === 'both') && event.key === 'Enter') {
      handleSearch(event.currentTarget.value);
    }
    onKeyDown?.(event);
  });

  const handleClear = useEventCallback(() => {
    setInnerValue('');
    inputRef.current?.focus();
    onClear?.();
  });

  const showClearAction = allowClear && !disabled && innerValue.length > 0;
  const iconSize = SEARCH_ICON_SIZE[size];

  const searchIcon = loading
    ? <Spinner style={{ width: iconSize, height: iconSize }} />
    : searchButton && (typeof searchButton === 'boolean' ? <Icons name="search" size={iconSize} /> : searchButton);

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
      inputId={inputId}
    >
      <div className={classes('control', joinCls(disabled && classes('control-disabled')))}>
        {searchIcon && <span className={classes('prefix')}>{searchIcon}</span>}
        {prefix && <span className={classes('prefix')}>{prefix}</span>}
        <input
          {...rest}
          ref={syncRef}
          id={inputId}
          className={classes('field')}
          disabled={disabled}
          value={innerValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {showClearAction && (
          <button
            type="button"
            className={classes('action')}
            aria-label="clear search"
            onClick={handleClear}
          >
            <Icons name="cross" size={iconSize} />
          </button>
        )}
        {suffix && <span className={classes('suffix')}>{suffix}</span>}
      </div>
    </FieldShell>
  );
};

export default memo(InputSearch);
