import { useState, useMemo } from 'react';
import type { FormEvent } from 'react';
import { useEventCallback, useMemoizedFn } from '@1money/hooks';
import type {
  Rule,
  FormContextValue,
  UseFormCoreConfig,
  UseFormCoreReturn,
} from '../interface';

// ---------------------------------------------------------------------------
// Nested path helpers (dot-notation support, e.g. "items.0.title")
// ---------------------------------------------------------------------------
function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

function setNestedValue(
  obj: Record<string, unknown>,
  path: string,
  value: unknown,
): Record<string, unknown> {
  const keys = path.split('.');
  if (keys.length === 1) return { ...obj, [path]: value };

  const result = { ...obj };
  let current: Record<string, unknown> = result;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const nextKey = keys[i + 1];
    const isNextArray = /^\d+$/.test(nextKey);
    if (current[key] === undefined || current[key] === null) {
      current[key] = isNextArray ? [] : {};
    }
    if (Array.isArray(current[key])) {
      current[key] = [...(current[key] as unknown[])];
    } else {
      current[key] = { ...(current[key] as Record<string, unknown>) };
    }
    current = current[key] as Record<string, unknown>;
  }
  current[keys[keys.length - 1]] = value;
  return result;
}

function resolveValue(values: Record<string, unknown>, name: string): unknown {
  return name.includes('.') ? getNestedValue(values, name) : values[name];
}

export const useFormCore = (config: UseFormCoreConfig = {}): UseFormCoreReturn => {
  const {
    initialValues = {},
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
  } = config;

  const [values, setValues] = useState<Record<string, unknown>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [fieldRules, setFieldRules] = useState<Record<string, Rule[]>>({});

  const setFieldValue = useMemoizedFn((name: string, value: unknown) => {
    setValues((prev) => {
      const newValues = name.includes('.')
        ? setNestedValue(prev, name, value)
        : { ...prev, [name]: value };
      onValuesChange?.({ [name]: value }, newValues);
      return newValues;
    });

    if (value !== '' && value !== null && value !== undefined) {
      setErrors((prev) => {
        if (!prev[name]) return prev;
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  });

  const setFieldError = useMemoizedFn((name: string, error: string | null) => {
    setErrors((prev) => {
      if (error === null) {
        if (!prev[name]) return prev;
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      }
      return { ...prev, [name]: error };
    });
  });

  const registerField = useMemoizedFn((name: string, rules: Rule[]) => {
    setFieldRules((prev) => ({ ...prev, [name]: rules }));
  });

  const getFieldRules = useMemoizedFn((name: string): Rule[] | undefined => {
    return fieldRules[name];
  });

  const unregisterField = useMemoizedFn((name: string) => {
    setFieldRules((prev) => {
      const newRules = { ...prev };
      delete newRules[name];
      return newRules;
    });
  });

  const validateField = useMemoizedFn(
    (name: string, rules: Rule[] = [], providedValue?: unknown): boolean => {
      const value = providedValue !== undefined ? providedValue : resolveValue(values, name);

      for (const rule of rules) {
        if (
          rule.required &&
          (value === undefined || value === null || value === '')
        ) {
          const error = rule.message || `${name} is required`;
          setFieldError(name, error);
          return false;
        }

        if (rule.min && typeof value === 'string' && value.length < rule.min) {
          const error =
            rule.message || `${name} must be at least ${rule.min} characters`;
          setFieldError(name, error);
          return false;
        }

        if (rule.max && typeof value === 'string' && value.length > rule.max) {
          const error =
            rule.message || `${name} must be no more than ${rule.max} characters`;
          setFieldError(name, error);
          return false;
        }

        if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
          const error = rule.message || `${name} format is invalid`;
          setFieldError(name, error);
          return false;
        }

        if (rule.validator && typeof rule.validator === 'function') {
          try {
            const result = rule.validator(value, values as Record<string, unknown>);
            if (result !== true && typeof result !== 'object') {
              setFieldError(
                name,
                typeof result === 'string' ? result : 'Validation failed',
              );
              return false;
            }
          } catch (err) {
            const message = err instanceof Error ? err.message : 'Validation error';
            setFieldError(name, message);
            return false;
          }
        }
      }

      // Clear error if validation passes
      if (errors[name]) {
        setFieldError(name, null);
      }

      return true;
    },
  );

  const validateFields = useMemoizedFn(
    (fieldsRulesToValidate: Record<string, Rule[]> = fieldRules): boolean => {
      let isValid = true;

      Object.keys(fieldsRulesToValidate).forEach((name) => {
        const rules = fieldsRulesToValidate[name];
        if (!validateField(name, rules)) {
          isValid = false;
        }
      });

      return isValid;
    },
  );

  const handleSubmitInternal = useMemoizedFn(() => {
    let hasErrors = false;
    const newErrors: Record<string, string> = {};

    Object.keys(fieldRules).forEach((fieldName) => {
      const rules = fieldRules[fieldName];
      const value = resolveValue(values, fieldName);

      for (const rule of rules) {
        if (
          rule.required &&
          (value === undefined || value === null || value === '')
        ) {
          newErrors[fieldName] = rule.message || `${fieldName} is required`;
          hasErrors = true;
          break;
        }

        if (rule.min && typeof value === 'string' && value.length < rule.min) {
          newErrors[fieldName] =
            rule.message || `${fieldName} must be at least ${rule.min} characters`;
          hasErrors = true;
          break;
        }

        if (rule.max && typeof value === 'string' && value.length > rule.max) {
          newErrors[fieldName] =
            rule.message ||
            `${fieldName} must be no more than ${rule.max} characters`;
          hasErrors = true;
          break;
        }

        if (
          rule.pattern &&
          typeof value === 'string' &&
          !rule.pattern.test(value)
        ) {
          newErrors[fieldName] = rule.message || `${fieldName} format is invalid`;
          hasErrors = true;
          break;
        }

        if (rule.validator && typeof rule.validator === 'function') {
          try {
            const result = rule.validator(value, values as Record<string, unknown>);
            if (result !== true && typeof result !== 'object') {
              newErrors[fieldName] =
                typeof result === 'string' ? result : 'Validation failed';
              hasErrors = true;
              break;
            }
          } catch (err) {
            newErrors[fieldName] =
              err instanceof Error ? err.message : 'Validation error';
            hasErrors = true;
            break;
          }
        }
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      onFinish?.(values);
      return { success: true, values };
    } else {
      onFinishFailed?.({ values, errors: newErrors });
      return { success: false, errors: newErrors };
    }
  });

  const handleSubmit = useEventCallback((e?: FormEvent) => {
    e?.preventDefault();
    return handleSubmitInternal();
  });

  const resetFields = useMemoizedFn(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    onReset?.();
  });

  const handleReset = useEventCallback((e?: FormEvent) => {
    e?.preventDefault();
    resetFields();
  });

  const getFieldValue = useMemoizedFn((name: string): unknown => {
    return resolveValue(values, name);
  });

  const getFieldsValue = useMemoizedFn((): Record<string, unknown> => {
    return values;
  });

  const setFieldsValue = useMemoizedFn((newValues: Record<string, unknown>) => {
    setValues((prev) => {
      const updatedValues = { ...prev, ...newValues };
      onValuesChange?.(newValues, updatedValues);
      return updatedValues;
    });
  });

  const formInstance = useMemo(
    () => ({
      submit: handleSubmitInternal,
      resetFields,
      getFieldValue,
      getFieldsValue,
      setFieldsValue,
      setFieldValue,
      validateFields,
    }),
    [
      handleSubmitInternal,
      resetFields,
      getFieldValue,
      getFieldsValue,
      setFieldsValue,
      setFieldValue,
      validateFields,
    ],
  );

  const contextValue: FormContextValue = useMemo(
    () => ({
      values,
      errors,
      touched,
      setFieldValue,
      setFieldError,
      validateField,
      registerField,
      unregisterField,
      size,
      layout,
      labelAlign,
      labelCol,
      wrapperCol,
      disabled,
      colon,
      requiredMark,
      validateTrigger,
    }),
    [
      values,
      errors,
      touched,
      setFieldValue,
      setFieldError,
      validateField,
      registerField,
      unregisterField,
      size,
      layout,
      labelAlign,
      labelCol,
      wrapperCol,
      disabled,
      colon,
      requiredMark,
      validateTrigger,
    ],
  );

  return {
    values,
    errors,
    touched,
    fieldRules,
    getFieldRules,
    setFieldValue,
    setFieldError,
    setFieldsValue,
    getFieldValue,
    getFieldsValue,
    validateField,
    validateFields,
    registerField,
    unregisterField,
    handleSubmit,
    handleReset,
    resetFields,
    formInstance,
    contextValue,
  };
};

export default useFormCore;
