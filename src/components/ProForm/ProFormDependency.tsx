import React, { memo, useMemo } from 'react';
import type { FC } from 'react';
import { useProFormContext, useFormListContext } from './context';
import { getNestedValue } from './utils';
import type { ProFormDependencyProps, ProFormFormInstance } from './interface';

const ProFormDependencyBase: FC<ProFormDependencyProps> = ({
  name,
  ignoreFormListField,
  children,
}) => {
  const { values, formInstance } = useProFormContext();
  const formListCtx = useFormListContext();

  // Resolve the actual paths to watch, considering FormList scope
  const resolvedPaths = useMemo(() => {
    const shouldPrefix =
      !ignoreFormListField && formListCtx.listName !== undefined;

    return name.map((fieldName) =>
      shouldPrefix ? `${formListCtx.listName}.${fieldName}` : fieldName,
    );
  }, [name, ignoreFormListField, formListCtx.listName]);

  const watchedValues = useMemo(() => {
    const result: Record<string, unknown> = {};
    for (let i = 0; i < name.length; i++) {
      const originalName = name[i];
      const resolvedPath = resolvedPaths[i];
      // Use the original name as key so children get clean keys
      result[originalName] = resolvedPath.includes('.')
        ? getNestedValue(values, resolvedPath)
        : values[resolvedPath];
    }
    return result;
  }, [name, resolvedPaths, values]);

  // Fallback form instance for standalone usage (outside ProForm)
  const fallbackInstance = useMemo<ProFormFormInstance>(
    () => ({
      submit: async () => undefined,
      resetFields: () => {},
      getFieldValue: (n: string) =>
        n.includes('.') ? getNestedValue(values, n) : values[n],
      getFieldsValue: () => values,
      setFieldsValue: () => {},
      setFieldValue: () => {},
      validateFields: async () => values,
      getFieldError: () => undefined,
      getFieldsError: () => ({}),
      isFieldTouched: () => false,
      isFieldsTouched: () => false,
      isFieldValidating: () => false,
      setFieldError: () => {},
      setFieldsError: () => {},
      setFieldTouched: () => {},
      setFieldsTouched: () => {},
      defineField: () => (() => null) as React.FC,
      registerField: () => {},
      unregisterField: () => {},
      getFieldsFormatValue: () => values,
      validateFieldsReturnFormatValue: async () => ({ success: false }),
      submitForm: async () => {},
    }),
    [values],
  );

  return <>{children(watchedValues, formInstance ?? fallbackInstance)}</>;
};

ProFormDependencyBase.displayName = 'ProFormDependency';

export const ProFormDependency = memo(ProFormDependencyBase);

export default ProFormDependency;
