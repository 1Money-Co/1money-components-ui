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
import { stableSerialize } from './utils';
import type { ProFormProps, ProFormFormInstance } from './interface';

const classes = classnames(CSS_PREFIX);

const ProFormBase: FC<ProFormProps> = (props) => {
  const {
    children,
    className,
    submitter,
    readonly = false,
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
    size,
    labelAlign,
    disabled,
    colon,
    requiredMark,
    validateTrigger,
    ...rest
  } = props;

  const [requestLoading, setRequestLoading] = useSafeState(false);
  const isLoading = loading || requestLoading;

  const {
    contextValue: formContextValue,
    formInstance,
    handleSubmit,
    handleReset,
  } = useFormCore({
    initialValues,
    onFinish,
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

  // ProFormContext value
  const proFormContextValue = useMemo(
    () => ({ readonly, grid, colProps }),
    [readonly, grid, colProps],
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
    submitter !== false ? (
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
        onFinish={onFinish}
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
