import { forwardRef, memo, useImperativeHandle } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import { FormContext } from './context';
import { useFormCore } from './hooks/useFormCore';
import './style';
import type { FormInstance, FormProps } from './interface';

const FormBase = forwardRef<FormInstance, FormProps>((props, ref) => {
  const {
    children,
    className = '',
    prefixCls = 'form',
    initialValues,
    onFinish,
    onFinishFailed,
    onValuesChange,
    onReset,
    size = 'middle',
    layout = 'vertical',
    labelAlign = 'left',
    labelCol = {},
    wrapperCol = {},
    disabled = false,
    colon = true,
    requiredMark = true,
    validateTrigger = 'onChange',
    ...rest
  } = props;

  const classes = classnames(prefixCls);

  const { contextValue, formInstance, handleSubmit, handleReset } = useFormCore({
    initialValues,
    onFinish,
    onFinishFailed,
    onValuesChange,
    onReset,
    size,
    layout,
    labelAlign,
    labelCol,
    wrapperCol,
    disabled,
    colon,
    requiredMark,
    validateTrigger,
  });

  useImperativeHandle(ref, () => formInstance as unknown as FormInstance);

  return (
    <FormContext.Provider value={contextValue}>
      <form
        {...rest}
        className={classes(
          undefined,
          joinCls(layout === 'inline' && classes('inline'), className),
        )}
        onSubmit={handleSubmit}
        onReset={handleReset}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
});

FormBase.displayName = 'Form';

export const Form = memo(FormBase);

export default Form;
