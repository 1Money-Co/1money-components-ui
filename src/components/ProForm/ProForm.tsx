import React, { memo, useEffect, useMemo, useRef, Fragment } from 'react';
import type { FC } from 'react';
import { useLatest, useSafeState, useMemoizedFn, useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Row } from '@/components/Grid';
import { useForm } from './core/hooks/useForm';
import { ProFormContext } from './context';
import { Submitter } from './Submitter';
import { CSS_PREFIX } from './constants';
import { stableSerialize, transformSubmitValues, omitNilValues } from './utils';
import type {
  ProFormProps,
  ProFormContextValue,
  ProFormFormInstance,
  ProFormFieldTransformFn,
} from './interface';

const classes = classnames(CSS_PREFIX);
const formClasses = classnames('form');

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
    size = 'middle',
    labelAlign = 'left',
    disabled = false,
    colon = true,
    requiredMark = true,
    validateTrigger = 'onChange',
    prefixCls: _prefixCls,
    ...rest
  } = props;

  const mode = modeProp ?? (readonly ? 'read' : 'edit');

  const [requestLoading, setRequestLoading] = useSafeState(false);
  const [submitting, setSubmitting] = useSafeState(false);
  const isLoading = loading || requestLoading || submitting;

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

  // ── Form engine (useForm with async validation) ──
  const { formInstance, internals } = useForm({
    initialValues,
    onValuesChange,
    onReset,
    size,
    labelAlign,
    disabled: disabled || isLoading,
    colon,
    requiredMark,
    validateTrigger,
  });

  // ── Async submit with transform pipeline ──
  const wrappedHandleSubmit = useEventCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    setSubmitting(true);
    try {
      const validatedValues = await formInstance.validateFields();
      const pipelined = applyPipeline(validatedValues);
      await onFinishRef.current?.(pipelined);
    } catch (err) {
      const typed = err as Error & {
        values: Record<string, unknown>;
        errors: Record<string, string>;
      };
      onFinishFailed?.({ values: typed.values, errors: typed.errors });
    } finally {
      setSubmitting(false);
    }
  });

  // ── ProForm instance: superset of FormInstance ──
  const proFormFormInstance = useMemo<ProFormFormInstance>(
    () => ({
      ...formInstance,
      getFieldsFormatValue: () => applyPipeline(formInstance.getFieldsValue()),
      validateFieldsReturnFormatValue: async () => {
        try {
          const vals = await formInstance.validateFields();
          return { success: true, values: applyPipeline(vals) };
        } catch {
          return { success: false };
        }
      },
      submitForm: wrappedHandleSubmit,
    }),
    [formInstance, applyPipeline, wrappedHandleSubmit],
  );

  // ── Sync to formRef prop ──
  useEffect(() => {
    if (formRef) {
      formRef.current = proFormFormInstance;
    }
  });

  // ── request / params auto-load ──
  const requestRef = useLatest(request);

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
          formInstance.setFieldsValue(data as Record<string, unknown>);
        }
      } finally {
        setRequestLoading(false);
      }
    };

    if (requestRef.current) {
      fetchData();
    }
  }, [serializedParams, params, requestRef, setRequestLoading, formInstance]);

  // ── Merged context ──
  const contextValue = useMemo<ProFormContextValue>(
    () => ({
      values: internals.values,
      errors: internals.errors,
      touched: internals.touched,
      validating: internals.validating,
      formInstance: proFormFormInstance,
      setFieldValue: internals.setFieldValue,
      setFieldError: internals.setFieldError,
      validateField: internals.validateField,
      validateFieldAsync: internals.validateFieldAsync,
      registerField: internals.registerField,
      unregisterField: internals.unregisterField,
      size,
      labelAlign,
      disabled: disabled || isLoading,
      colon,
      requiredMark,
      validateTrigger,
      // ProForm specifics
      readonly,
      mode,
      grid,
      colProps: colProps ?? { span: 24 },
      registerTransform,
      unregisterTransform,
    }),
    [
      internals,
      proFormFormInstance,
      size,
      labelAlign,
      disabled,
      isLoading,
      colon,
      requiredMark,
      validateTrigger,
      readonly,
      mode,
      grid,
      colProps,
      registerTransform,
      unregisterTransform,
    ],
  );

  const WrapperComponent = grid ? Row : Fragment;
  const wrapperProps = grid ? { ...rowProps } : {};

  const submitterNode =
    submitter !== false && mode !== 'read' ? (
      <Submitter
        {...(typeof submitter === 'object' ? submitter : {})}
        loading={isLoading}
      />
    ) : null;

  return (
    <ProFormContext.Provider value={contextValue}>
      <form
        {...rest}
        className={formClasses(undefined, joinCls(classes(), className))}
        onSubmit={wrappedHandleSubmit}
        onReset={internals.handleReset}
      >
        <WrapperComponent {...wrapperProps}>{children}</WrapperComponent>
        {submitterNode}
      </form>
    </ProFormContext.Provider>
  );
};

ProFormBase.displayName = 'ProForm';

export const ProForm = memo(ProFormBase);

export default ProForm;
