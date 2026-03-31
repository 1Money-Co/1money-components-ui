import { memo, useId } from 'react';
import { useControlledState, useEventCallback } from '@1money/hooks';
import { TypographyBody } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FieldShell } from './FieldShell';
import { useSyncRef } from './useSyncRef';
import { INPUT_COUNT_COLOR, INPUT_COUNT_SIZE } from './constants';
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
    rows = 4,
    showCount = false,
    maxLength,
    value,
    defaultValue = '',
    onChange,
    ref,
    id: externalId,
    ...rest
  } = props;

  const autoId = useId();
  const inputId = externalId ?? autoId;
  const classes = classnames(prefixCls);
  const [, syncRef] = useSyncRef<HTMLTextAreaElement>(ref);
  const [innerValue, setInnerValue] = useControlledState(defaultValue, value);

  const handleChange = useEventCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const nextValue = event.target.value;
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
      inputId={inputId}
    >
      <div className={classes('textarea-wrapper', joinCls(disabled && classes('control-disabled')))}>
        <textarea
          {...rest}
          ref={syncRef}
          id={inputId}
          className={classes('textarea')}
          disabled={disabled}
          rows={rows}
          maxLength={maxLength}
          value={innerValue}
          onChange={handleChange}
        />
        {showCount && (
          <TypographyBody as="div" className={classes('count')} size={INPUT_COUNT_SIZE} color={INPUT_COUNT_COLOR}>
            {maxLength ? `${innerValue.length} / ${maxLength}` : `${innerValue.length}`}
          </TypographyBody>
        )}
      </div>
    </FieldShell>
  );
};

export default memo(InputTextArea);
