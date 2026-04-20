import { memo, useEffect, useMemo, useRef, Fragment } from 'react';
import type { FC } from 'react';
import { useLatest, useSafeState, useMemoizedFn } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Row } from '@/components/Grid';
import { useFormCore } from './core/hooks/useFormCore';
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

  // ── Core form engine ──
  const {
    coreContextShape,
    formInstance: coreInstance,
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

  // ── ProForm instance: superset of FormCoreInstance ──
  const proFormFormInstance = useMemo<ProFormFormInstance>(
    () => ({
      ...coreInstance,
      getFieldsFormatValue: () => applyPipeline(coreInstance.getFieldsValue()),
      validateFieldsReturnFormatValue: () => {
        const isValid = coreInstance.validateFields();
        if (!isValid) return { success: false };
        return { success: true, values: applyPipeline(coreInstance.getFieldsValue()) };
      },
    }),
    [coreInstance, applyPipeline],
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
          coreInstance.setFieldsValue(data as Record<string, unknown>);
        }
      } finally {
        setRequestLoading(false);
      }
    };

    if (requestRef.current) {
      fetchData();
    }
  }, [serializedParams, params, requestRef, setRequestLoading, coreInstance]);

  // ── Merged context ──
  const contextValue = useMemo<ProFormContextValue>(
    () => ({
      ...coreContextShape,
      formInstance: proFormFormInstance,
      readonly,
      mode,
      grid,
      colProps: colProps ?? { span: 24 },
      registerTransform,
      unregisterTransform,
    }),
    [
      coreContextShape,
      proFormFormInstance,
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
        onSubmit={handleSubmit}
        onReset={handleReset}
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
