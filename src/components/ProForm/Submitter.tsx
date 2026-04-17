import { memo, useMemo } from 'react';
import type { FC, ReactElement } from 'react';
import { useMemoizedFn } from '@1money/hooks';
import { default as classnames } from '@/utils/classnames';
import { useFormInstance } from './context';
import { Button } from '@/components/Button';
import { CSS_PREFIX, DEFAULT_TEXT } from './constants';
import type { SubmitterProps } from './interface';

export interface SubmitterInternalProps extends SubmitterProps {
  loading?: boolean;
}

const classes = classnames(`${CSS_PREFIX}-submitter`);

const SubmitterBase: FC<SubmitterInternalProps> = (props) => {
  const {
    submitText = DEFAULT_TEXT.submit,
    resetText = DEFAULT_TEXT.reset,
    render,
    onSubmit,
    onReset,
    submitButtonProps,
    resetButtonProps,
    loading = false,
  } = props;

  const form = useFormInstance();

  const handleSubmit = useMemoizedFn(() => {
    onSubmit?.();
    form.submit();
  });

  const handleReset = useMemoizedFn(() => {
    onReset?.();
    form.resetFields();
  });

  const resetButton = useMemo(
    () => (
      <Button
        key="reset"
        type="button"
        color="secondary"
        {...resetButtonProps}
        onClick={handleReset}
      >
        {resetText}
      </Button>
    ),
    [resetText, resetButtonProps, handleReset],
  );

  const submitButton = useMemo(
    () => (
      <Button
        key="submit"
        type="submit"
        color="primary"
        loading={loading}
        {...submitButtonProps}
      >
        {submitText}
      </Button>
    ),
    [submitText, submitButtonProps, loading],
  );

  const dom: ReactElement[] = [resetButton, submitButton] as ReactElement[];

  if (render) {
    return (
      <div className={classes()}>
        {render({ form, submit: handleSubmit, reset: handleReset }, dom)}
      </div>
    );
  }

  return (
    <div className={classes()}>
      {resetButton}
      {submitButton}
    </div>
  );
};

SubmitterBase.displayName = 'Submitter';

export const Submitter = memo(SubmitterBase);

export default Submitter;
