import { memo, useRef } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from './FieldShell';
import type { FC, ChangeEvent } from 'react';
import type { InputTextAreaProps } from './interface';

export const InputTextArea: FC<InputTextAreaProps> = (props) => {
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
    prefix: _prefix,
    suffix: _suffix,
    allowClear: _allowClear,
    rows = 4,
    autoSize: _autoSize,
    showCount = false,
    maxLength,
    value,
    defaultValue = '',
    onChange,
    ref,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);

  const syncRef = useEventCallback((node: HTMLTextAreaElement | null) => {
    textAreaRef.current = node;
    if (ref) {
      (ref as { current: HTMLTextAreaElement | null }).current = node;
    }
  });

  const handleChange = useEventCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue = maxLength
      ? event.target.value.slice(0, maxLength)
      : event.target.value;
    setInnerValue(nextValue);
    onChange?.(nextValue, event);
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
      <div className={classes('textarea-wrapper', joinCls(disabled && classes('control-disabled')))}>
        <textarea
          {...rest}
          ref={syncRef}
          className={classes('textarea')}
          disabled={disabled}
          rows={rows}
          value={innerValue}
          onChange={handleChange}
        />
        {showCount && (
          <div className={classes('count')}>
            {maxLength ? `${innerValue.length} / ${maxLength}` : `${innerValue.length}`}
          </div>
        )}
      </div>
    </FieldShell>
  );
};

export default memo(InputTextArea);
