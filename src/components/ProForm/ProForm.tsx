import { memo, useEffect, useMemo, useRef, Fragment } from 'react';
import type { FC } from 'react';
import { useLatest, useSafeState, useMemoizedFn } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Form } from '@/components/Form';
import { useFormInstance } from '@/components/Form/context';
import { Row } from '@/components/Grid';
import { ProFormContext } from './context';
import { Submitter } from './Submitter';
import { CSS_PREFIX } from './constants';
import { stableSerialize, transformSubmitValues, omitNilValues } from './utils';
import type { ProFormProps, ProFormFormInstance, ProFormFieldTransformFn } from './interface';

const classes = classnames(CSS_PREFIX);

// ---------------------------------------------------------------------------
// Inner component — rendered INSIDE <Form>, can use useFormInstance()
// ---------------------------------------------------------------------------
interface ProFormInnerProps extends ProFormProps {
  isLoading: boolean;
  applyPipeline: (values: Record<string, unknown>) => Record<string, unknown>;
  registerTransform: (name: string, fn: ProFormFieldTransformFn) => void;
  unregisterTransform: (name: string) => void;
}

const ProFormInner: FC<ProFormInnerProps> = (props) => {
  const {
    children,
    submitter,
    mode = 'edit',
    readonly = false,
    grid = false,
    colProps,
    rowProps,
    formRef,
    isLoading,
    applyPipeline,
    registerTransform,
    unregisterTransform,
  } = props;

  const resolvedMode = mode ?? (readonly ? 'read' : 'edit');
  const form = useFormInstance();

  // Build ProFormFormInstance by extending the real form instance with format methods
  const proFormFormInstance = useMemo<ProFormFormInstance>(() => ({
    submit: form.submit,
    resetFields: form.resetFields,
    getFieldValue: form.getFieldValue,
    getFieldsValue: form.getFieldsValue,
    setFieldsValue: form.setFieldsValue,
    setFieldValue: form.setFieldValue,
    validateFields: form.validateFields,
    getFieldsFormatValue: () => applyPipeline(form.getFieldsValue()),
    validateFieldsReturnFormatValue: () => {
      const isValid = form.validateFields();
      if (!isValid) return { success: false };
      return { success: true, values: applyPipeline(form.getFieldsValue()) };
    },
  }), [form, applyPipeline]);

  useEffect(() => {
    if (formRef) {
      formRef.current = proFormFormInstance;
    }
  });

  const proFormContextValue = useMemo(
    () => ({ readonly, mode: resolvedMode, grid, colProps, registerTransform, unregisterTransform, formInstance: proFormFormInstance }),
    [readonly, resolvedMode, grid, colProps, registerTransform, unregisterTransform, proFormFormInstance],
  );

  const WrapperComponent = grid ? Row : Fragment;
  const wrapperProps = grid ? { ...rowProps } : {};

  const submitterNode =
    submitter !== false && resolvedMode !== 'read' ? (
      <Submitter
        {...(typeof submitter === 'object' ? submitter : {})}
        loading={isLoading}
      />
    ) : null;

  return (
    <ProFormContext.Provider value={proFormContextValue}>
      <WrapperComponent {...wrapperProps}>
        {children}
      </WrapperComponent>
      {submitterNode}
    </ProFormContext.Provider>
  );
};

// ---------------------------------------------------------------------------
// Outer component — renders <Form> and sets up transforms / request
// ---------------------------------------------------------------------------
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
    omitNil = true,
    size,
    labelAlign,
    disabled,
    colon,
    requiredMark,
    validateTrigger,
    ...rest
  } = props;

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

  const applyPipeline = useMemoizedFn((values: Record<string, unknown>) => {
    let result = transformSubmitValues(values, transformKeyRef.current);
    if (omitNil) result = omitNilValues(result);
    return result;
  });

  const handleFinish = useMemoizedFn((values: Record<string, unknown>) => {
    onFinishRef.current?.(applyPipeline(values));
  });

  // ── Request / params ──
  const requestRef = useLatest(request);
  const formInstanceRef = useRef<{ setFieldsValue: (v: Record<string, unknown>) => void } | null>(null);

  const serializedParams = useMemo(
    () => stableSerialize(params),
    [params],
  );

  useEffect(() => {
    const fetchData = async () => {
      const requestFn = requestRef.current;
      if (!requestFn) return;

      setRequestLoading(true);
      try {
        const data = await requestFn(params);
        if (data && typeof data === 'object') {
          formInstanceRef.current?.setFieldsValue(data as Record<string, unknown>);
        }
      } finally {
        setRequestLoading(false);
      }
    };

    if (requestRef.current) {
      fetchData();
    }
  }, [serializedParams]);

  return (
    <Form
      {...rest}
      ref={(instance) => {
        // Capture the form ref for request data loading
        if (instance) {
          formInstanceRef.current = instance;
        }
      }}
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
      <ProFormInner
        {...props}
        mode={mode}
        isLoading={isLoading}
        applyPipeline={applyPipeline}
        registerTransform={registerTransform}
        unregisterTransform={unregisterTransform}
      />
    </Form>
  );
};

ProFormBase.displayName = 'ProForm';

export const ProForm = memo(ProFormBase);

export default ProForm;
