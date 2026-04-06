import { memo, useEffect, useMemo, useRef, Fragment } from 'react';
import type { FC, FormEvent } from 'react';
import { useLatest, useSafeState, useMemoizedFn } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Form } from '@/components/Form';
import { Row } from '@/components/Grid';
import { useFormCore } from '@/components/Form/hooks/useFormCore';
import { ProFormContext } from './context';
import { Submitter } from './Submitter';
import { CSS_PREFIX } from './constants';
import { stableSerialize, transformSubmitValues } from './utils';
import type { ProFormProps, ProFormFormInstance, ProFormFieldTransformFn } from './interface';

const classes = classnames(CSS_PREFIX);

const ProFormBase: FC<ProFormProps> = (props) => {
  const {
    children,
    className,
    submitter,
    readonly = false,
    mode: modeProp,
    grid = false,
    colProps,
    rowProps,
    loading = false,
    request,
    params,
    initialValues,
    onFinish,
    onFinishFailed,
    onValuesChange,
    onReset,
    formRef,
    size,
    labelAlign,
    disabled,
    colon,
    requiredMark,
    validateTrigger,
    ...rest
  } = props;

  // Derive mode: explicit mode prop > readonly compat > default 'edit'
  const mode = modeProp ?? (readonly ? 'read' : 'edit');

  const [requestLoading, setRequestLoading] = useSafeState(false);
  const isLoading = loading || requestLoading;

  // ── Transform registry ──
  const transformKeyRef = useRef<Record<string, ProFormFieldTransformFn>>({});

  const registerTransform = useMemoizedFn((name: string, fn: ProFormFieldTransformFn) => {
    transformKeyRef.current[name] = fn;
  });

  const unregisterTransform = useMemoizedFn((name: string) => {
    delete transformKeyRef.current[name];
  });

  const onFinishRef = useLatest(onFinish);

  // Intercept onFinish to apply transforms before calling the original callback
  const handleFinish = useMemoizedFn((values: Record<string, unknown>) => {
    const transformed = transformSubmitValues(values, transformKeyRef.current);
    onFinishRef.current?.(transformed);
  });

  const {
    contextValue: formContextValue,
    formInstance,
    handleSubmit,
    handleReset,
  } = useFormCore({
    initialValues,
    onFinish: handleFinish,
    onFinishFailed,
    onValuesChange,
    onReset,
    size,
    labelAlign,
    disabled: disabled || isLoading,
    colon,
    requiredMark,
    validateTrigger,
  });

  const requestRef = useLatest(request);

  // Stable serialization of params for comparison
  const serializedParams = useMemo(
    () => stableSerialize(params),
    [params],
  );

  // Fetch data when request + params change
  const mountedRef = useRef(false);
  useEffect(() => {
    const fetchData = async () => {
      const requestFn = requestRef.current;
      if (!requestFn) return;

      setRequestLoading(true);
      try {
        const data = await requestFn(params);
        if (data && typeof data === 'object') {
          formInstance.setFieldsValue(data);
        }
      } finally {
        setRequestLoading(false);
      }
    };

    // Always fetch on mount if request is provided; also re-fetch when params change
    if (requestRef.current) {
      fetchData();
    }
    mountedRef.current = true;
  }, [serializedParams]); // Re-fetch when params change

  // ── Enhanced form instance exposed via formRef and context ──
  const getFieldsFormatValue = useMemoizedFn(() => {
    const raw = formInstance.getFieldsValue();
    return transformSubmitValues(raw, transformKeyRef.current);
  });

  const validateFieldsReturnFormatValue = useMemoizedFn(() => {
    const isValid = formInstance.validateFields();
    if (!isValid) {
      return { success: false };
    }
    const raw = formInstance.getFieldsValue();
    return { success: true, values: transformSubmitValues(raw, transformKeyRef.current) };
  });

  const enhancedFormInstance = useMemo<ProFormFormInstance>(
    () => ({
      ...formInstance,
      getFieldsFormatValue,
      validateFieldsReturnFormatValue,
    }),
    [formInstance, getFieldsFormatValue, validateFieldsReturnFormatValue],
  );

  useEffect(() => {
    if (formRef) {
      formRef.current = enhancedFormInstance;
    }
  });

  // ProFormContext value
  const proFormContextValue = useMemo(
    () => ({ readonly, mode, grid, colProps, registerTransform, unregisterTransform, formInstance: enhancedFormInstance }),
    [readonly, mode, grid, colProps, registerTransform, unregisterTransform, enhancedFormInstance],
  );

  const handleFormSubmit = useMemoizedFn((e?: FormEvent) => {
    e?.preventDefault();
    handleSubmit(e);
  });

  const handleFormReset = useMemoizedFn((e?: FormEvent) => {
    e?.preventDefault();
    handleReset(e);
  });

  const WrapperComponent = grid ? Row : Fragment;
  const wrapperProps = grid ? { ...rowProps } : {};

  const submitterNode =
    submitter !== false && mode !== 'read' ? (
      <Submitter
        {...(typeof submitter === 'object' ? submitter : {})}
        form={formInstance as ProFormFormInstance}
        loading={isLoading}
      />
    ) : null;

  return (
    <ProFormContext.Provider value={proFormContextValue}>
      <Form
        {...rest}
        className={joinCls(classes(), className)}
        initialValues={initialValues}
        onFinish={handleFinish}
        onFinishFailed={onFinishFailed}
        onValuesChange={onValuesChange}
        onReset={onReset}
        size={size}
        labelAlign={labelAlign}
        disabled={disabled || isLoading}
        colon={colon}
        requiredMark={requiredMark}
        validateTrigger={validateTrigger}
      >
        <WrapperComponent {...wrapperProps}>
          {children}
        </WrapperComponent>
        {submitterNode}
      </Form>
    </ProFormContext.Provider>
  );
};

ProFormBase.displayName = 'ProForm';

export const ProForm = memo(ProFormBase);

export default ProForm;
