import React, { useState, useMemo, useCallback, useEffect, memo, Fragment } from 'react';
import { useEventCallback, useMemoizedFn, useSafeState } from '@1money/hooks';
import { useFormCore } from './useFormCore';
import type {
  Rule,
  FormInstance,
  UseFormOptions,
  FieldOptions,
  FieldProps,
  FieldComponentProps,
} from '../interface';

export const useForm = (
  initialValues: Record<string, unknown> = {},
  options: UseFormOptions = {},
): [FormInstance] => {
  const { onValuesChange, validateTrigger = 'onChange' } = options;

  const formCore = useFormCore({
    initialValues,
    onValuesChange,
    validateTrigger,
  });

  const [validating, setValidating] = useSafeState<Record<string, boolean>>({});
  const [extraTouched, setExtraTouched] = useState<Record<string, boolean>>({});

  const allTouched = useMemo(
    () => ({ ...formCore.touched, ...extraTouched }),
    [formCore.touched, extraTouched],
  );

  const validateFieldAsync = useMemoizedFn(
    async (
      name: string,
      value: unknown,
      rules: Rule[],
    ): Promise<{ isValid: boolean; error: string | null }> => {
      if (!rules || rules.length === 0) return { isValid: true, error: null };

      setValidating((prev) => ({ ...prev, [name]: true }));

      try {
        const basicValid = formCore.validateField(name, rules, value);
        if (!basicValid) {
          return { isValid: false, error: formCore.errors[name] || null };
        }

        for (const rule of rules) {
          if (rule.validator && typeof rule.validator === 'function') {
            try {
              const result = await Promise.resolve(
                rule.validator(value, formCore.values as Record<string, unknown>),
              );
              if (result !== true && result !== undefined) {
                const error =
                  typeof result === 'string' ? result : 'Validation failed';
                formCore.setFieldError(name, error);
                return { isValid: false, error };
              }
            } catch (err) {
              const errorMessage =
                err instanceof Error ? err.message : 'Validation error';
              formCore.setFieldError(name, errorMessage);
              return { isValid: false, error: errorMessage };
            }
          }

          if (rule.enum && Array.isArray(rule.enum) && value) {
            if (!rule.enum.includes(value)) {
              const error =
                rule.message ||
                `${name} must be one of ${rule.enum.join(', ')}`;
              formCore.setFieldError(name, error);
              return { isValid: false, error };
            }
          }

          if (
            rule.type === 'number' &&
            value !== undefined &&
            value !== null &&
            value !== ''
          ) {
            if (typeof value !== 'number' || isNaN(value)) {
              const error = rule.message || `${name} must be a number`;
              formCore.setFieldError(name, error);
              return { isValid: false, error };
            }
          }

          if (rule.type === 'email' && value) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(String(value))) {
              const error = rule.message || `${name} must be a valid email`;
              formCore.setFieldError(name, error);
              return { isValid: false, error };
            }
          }

          if (rule.type === 'url' && value) {
            try {
              new URL(String(value));
            } catch {
              const error = rule.message || `${name} must be a valid URL`;
              formCore.setFieldError(name, error);
              return { isValid: false, error };
            }
          }
        }

        if (formCore.errors[name]) {
          formCore.setFieldError(name, null);
        }
        return { isValid: true, error: null };
      } finally {
        setValidating((prev) => {
          const newValidating = { ...prev };
          delete newValidating[name];
          return newValidating;
        });
      }
    },
  );

  const handleFieldBlur = useEventCallback(async (name: string) => {
    setExtraTouched((prev) => ({ ...prev, [name]: true }));

    const rules = formCore.fieldRules[name];
    if (rules && validateTrigger === 'onBlur') {
      await validateFieldAsync(name, formCore.values[name], rules);
    }
  });

  const validateFieldsAsync = useMemoizedFn(
    async (nameList?: string[]): Promise<Record<string, unknown>> => {
      const fieldsToValidate = nameList || Object.keys(formCore.fieldRules);
      let hasError = false;
      const fieldErrors: Record<string, string> = {};

      const validationPromises = fieldsToValidate.map(async (name) => {
        const rules = formCore.fieldRules[name];
        if (rules) {
          const { isValid, error } = await validateFieldAsync(
            name,
            formCore.values[name],
            rules,
          );
          if (!isValid && error) {
            hasError = true;
            fieldErrors[name] = error;
          }
        }
      });

      await Promise.all(validationPromises);

      if (hasError) {
        const error = new Error('Validation failed') as Error & {
          values: Record<string, unknown>;
          errors: Record<string, string>;
        };
        error.values = formCore.values;
        error.errors = fieldErrors;
        throw error;
      }

      if (nameList) {
        return nameList.reduce<Record<string, unknown>>((acc, name) => {
          acc[name] = formCore.values[name];
          return acc;
        }, {});
      }

      return formCore.values;
    },
  );

  const defineField = useCallback(
    (name: string, fieldOptions: FieldOptions = {}): React.FC<FieldComponentProps> => {
      const { rules = [] } = fieldOptions;

      const FieldComponent: React.FC<FieldComponentProps> = memo(
        ({ children, render, ...props }) => {
          const fieldValue = formCore.values[name] ?? '';
          const fieldError = formCore.errors[name];
          const fieldTouched = allTouched[name];
          const fieldValidating = validating[name];

          useEffect(() => {
            const existingRules = formCore.getFieldRules(name);
            if (!existingRules && rules.length > 0) {
              formCore.registerField(name, rules);
            }
            return () => {
              formCore.unregisterField(name);
            };
          }, []); // Only register on mount

          const handleFieldChange = useEventCallback((value: unknown) => {
            formCore.setFieldValue(name, value);
            if (validateTrigger === 'onChange') {
              formCore.validateField(name, rules, value);
            }
          });

          const handleBlur = useEventCallback(() => {
            handleFieldBlur(name);
          });

          const fieldProps: FieldProps = {
            name,
            value: fieldValue,
            error: fieldError,
            touched: fieldTouched,
            validating: fieldValidating,
            onChange: handleFieldChange,
            onBlur: handleBlur,
            ...props,
          };

          const handleMergeChange = (e: unknown) => {
            const value =
              e && typeof e === 'object' && 'target' in e
                ? (e as React.ChangeEvent<HTMLInputElement>).target.value
                : e;
            handleFieldChange(value);
            if (
              React.isValidElement(children) &&
              (children.props as Record<string, unknown>)?.onChange
            ) {
              ((children.props as Record<string, unknown>).onChange as (v: unknown) => void)(value);
            }
          };

          const handleMergeBlur = () => {
            handleBlur();
            if (
              React.isValidElement(children) &&
              (children.props as Record<string, unknown>)?.onBlur
            ) {
              ((children.props as Record<string, unknown>).onBlur as () => void)();
            }
          };

          if (render && typeof render === 'function') {
            return render(fieldProps);
          }

          if (typeof children === 'function') {
            return (children as (props: FieldProps) => React.ReactNode)(fieldProps) as React.ReactElement;
          }

          if (React.isValidElement(children)) {
            const mergedProps = {
              ...fieldProps,
              onChange: handleMergeChange,
              onBlur: handleMergeBlur,
            };
            return React.cloneElement(children as React.ReactElement, mergedProps);
          }

          if (Array.isArray(children)) {
            return React.createElement(
              Fragment,
              null,
              ...children.map((child, index) => {
                if (React.isValidElement(child)) {
                  const mergedProps = {
                    ...fieldProps,
                    key: child.key || index,
                    onChange: handleMergeChange,
                    onBlur: handleMergeBlur,
                  };
                  return React.cloneElement(child as React.ReactElement, mergedProps);
                }
                return child;
              }),
            );
          }

          return null;
        },
      );

      FieldComponent.displayName = `Field(${name})`;

      return FieldComponent;
    },
    [
      formCore,
      allTouched,
      validating,
      validateTrigger,
      handleFieldBlur,
    ],
  );

  const formInstance: FormInstance = useMemo(
    () => ({
      ...formCore.formInstance,

      validateFields: validateFieldsAsync,
      setFieldValue: formCore.setFieldValue,

      getFieldError: (name: string) => formCore.errors[name],
      getFieldsError: (nameList?: string[]) => {
        if (!nameList) return formCore.errors;
        const result: Record<string, string> = {};
        nameList.forEach((name) => {
          if (formCore.errors[name]) {
            result[name] = formCore.errors[name];
          }
        });
        return result;
      },
      isFieldTouched: (name: string) => allTouched[name] || false,
      isFieldsTouched: (nameList?: string[], allFieldsTouched = false) => {
        if (!nameList) {
          return Object.keys(allTouched).some((key) => allTouched[key]);
        }
        if (allFieldsTouched) {
          return nameList.every((name) => allTouched[name]);
        }
        return nameList.some((name) => allTouched[name]);
      },
      isFieldValidating: (name: string) => validating[name] || false,
      setFieldError: formCore.setFieldError,
      setFieldsError: (fieldsError: Record<string, string>) => {
        Object.entries(fieldsError).forEach(([name, error]) => {
          formCore.setFieldError(name, error);
        });
      },
      setFieldTouched: (name: string, isTouched = true) => {
        setExtraTouched((prev) => ({ ...prev, [name]: isTouched }));
      },
      setFieldsTouched: (fieldsTouch: Record<string, boolean>) => {
        setExtraTouched((prev) => ({ ...prev, ...fieldsTouch }));
      },
      resetFields: (fields?: string[]) => {
        if (!fields) {
          formCore.resetFields();
          setExtraTouched({});
          setValidating({});
        } else {
          const resetValues: Record<string, unknown> = {};
          fields.forEach((field) => {
            resetValues[field] = initialValues[field];
          });
          formCore.setFieldsValue(resetValues);

          setExtraTouched((prev) => {
            const newTouched = { ...prev };
            fields.forEach((field) => {
              delete newTouched[field];
            });
            return newTouched;
          });

          setValidating((prev) => {
            const newValidating = { ...prev };
            fields.forEach((field) => {
              delete newValidating[field];
            });
            return newValidating;
          });

          fields.forEach((field) => {
            formCore.setFieldError(field, null);
          });
        }
      },
      submit: async (
        callback?: (values: Record<string, unknown>) => void | Promise<void>,
      ) => {
        try {
          const validatedValues = await validateFieldsAsync();
          if (callback) {
            await callback(validatedValues);
          }
          return validatedValues;
        } catch {
          return undefined;
        }
      },
      defineField,
      registerField: formCore.registerField,
      unregisterField: formCore.unregisterField,
    }),
    [
      formCore,
      allTouched,
      validating,
      validateFieldsAsync,
      defineField,
      initialValues,
      setValidating,
    ],
  );

  return [formInstance];
};

export default useForm;
