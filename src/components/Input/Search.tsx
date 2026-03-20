import { memo, useRef } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from './FieldShell';
import type { FC, ChangeEvent, KeyboardEvent } from 'react';
import type { InputSearchProps } from './interface';

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
    onSearch,
    onKeyDown,
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

  const handleSearch = useEventCallback((nextValue?: string) => {
    onSearch?.(nextValue ?? inputRef.current?.value ?? '');
  });

  const handleKeyDown = useEventCallback((event: KeyboardEvent<HTMLInputElement>) => {
    if (!disabled && (searchTrigger === 'enter' || searchTrigger === 'both') && event.key === 'Enter') {
      handleSearch(event.currentTarget.value);
    }
    onKeyDown?.(event);
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
          value={innerValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
        {searchButton && (
          <button
            type="button"
            className={classes('action')}
            disabled={disabled || loading}
            aria-label="search input"
            onClick={() => handleSearch()}
          >
            {loading ? 'Loading' : typeof searchButton === 'boolean' ? <Icons name="search" size={16} /> : searchButton}
          </button>
        )}
        {suffix && <span className={classes('suffix')}>{suffix}</span>}
      </div>
    </FieldShell>
  );
};

export default memo(InputSearch);
