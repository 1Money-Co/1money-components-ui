import React, { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useEventCallback } from '@1money/hooks';
import { useProFormContext } from '../context';
import { FORM_COMPONENT_NAMES } from './constants';
import type { FormSize, LabelAlign, Rule, ValidateStatus } from './interface';

function getNestedValue(obj: Record<string, unknown>, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export interface UseFormItemOptions {
  name?: string;
  rules?: Rule[];
  required?: boolean;
  validateStatus?: ValidateStatus;
}

export interface UseFormItemReturn {
  fieldValue: unknown;
  fieldError: string | undefined;
  validateStatus: ValidateStatus | undefined;
  isRequired: boolean;
  size: FormSize;
  labelAlign: LabelAlign;
  requiredMark: boolean;
  /** Clone a form-component child injecting value/onChange/onBlur/status/size. Non-form children pass through unchanged. */
  injectField: (child: ReactNode) => ReactNode;
}

export function useFormItem(options: UseFormItemOptions): UseFormItemReturn {
  const { name, rules = [], required, validateStatus } = options;
  const ctx = useProFormContext();
  const {
    values,
    errors,
    setFieldValue,
    validateField,
    registerField,
    unregisterField,
    size,
    labelAlign,
    requiredMark,
    validateTrigger,
  } = ctx;

  const isRequired = Boolean(required || rules.some((rule) => rule.required));
  const fieldValue = name
    ? (name.includes('.') ? getNestedValue(values, name) : values[name])
    : undefined;
  const fieldError = name
    ? ((name.includes('.')
        ? getNestedValue(errors as Record<string, unknown>, name)
        : errors[name]) as string | undefined)
    : undefined;
  const finalStatus = validateStatus || (fieldError ? 'error' : undefined);

  const runValidate = useEventCallback((value: unknown) => {
    if (name && rules.length > 0) return validateField(name, rules, value);
    return true;
  });

  const handleChange = useEventCallback((value: unknown) => {
    if (name) {
      setFieldValue(name, value);
      if (validateTrigger === 'onChange') runValidate(value);
    }
  });

  const handleBlur = useEventCallback(() => {
    if (validateTrigger === 'onBlur') runValidate(fieldValue);
  });

  useEffect(() => {
    if (name && registerField) registerField(name, rules);
    return () => {
      if (name && unregisterField) unregisterField(name);
    };
  }, [name]);

  const injectField = (child: ReactNode): ReactNode => {
    if (!name || !React.isValidElement(child)) return child;

    const childProps = child.props as Record<string, unknown>;
    const displayName = (child.type as { displayName?: string })?.displayName;

    const isFormComponent =
      FORM_COMPONENT_NAMES.includes(displayName as typeof FORM_COMPONENT_NAMES[number]) ||
      childProps.placeholder !== undefined ||
      childProps.value !== undefined;

    if (!isFormComponent) return child;

    let safeValue = fieldValue;
    if (safeValue === null || safeValue === undefined) {
      if (
        ['Input', 'TextArea', 'InputNumber'].includes(displayName || '') ||
        childProps.placeholder !== undefined
      ) {
        safeValue = '';
      } else if (['Checkbox', 'Switch'].includes(displayName || '')) {
        safeValue = false;
      }
    } else if (
      ['Input', 'TextArea'].includes(displayName || '') &&
      typeof safeValue !== 'string' &&
      typeof safeValue !== 'number'
    ) {
      safeValue = '';
    }

    const injectedProps: Record<string, unknown> = {
      value: safeValue,
      onChange: (e: unknown, ...args: unknown[]) => {
        const actualValue =
          e && typeof e === 'object' && 'target' in e
            ? (e as React.ChangeEvent<HTMLInputElement>).target.value
            : e;
        handleChange(actualValue);
        if (typeof childProps.onChange === 'function') {
          (childProps.onChange as (...a: unknown[]) => void)(e, ...args);
        }
      },
      onBlur: (...args: unknown[]) => {
        handleBlur();
        if (typeof childProps.onBlur === 'function') {
          (childProps.onBlur as (...a: unknown[]) => void)(...args);
        }
      },
      size: childProps.size || size,
      ...(finalStatus === 'error' && { status: 'error' }),
    };

    return React.cloneElement(child, injectedProps);
  };

  return {
    fieldValue,
    fieldError,
    validateStatus: finalStatus,
    isRequired,
    size,
    labelAlign,
    requiredMark,
    injectField,
  };
}
