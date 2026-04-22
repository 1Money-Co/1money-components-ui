import { memo, useEffect, useRef, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import { ProFormItem } from '../ProFormItem';
import { ProFormDependency } from '../ProFormDependency';
import { useFieldRequest } from '../hooks/useFieldRequest';
import { resolveWidth, valueEnumToOptions } from '../utils';
import type { ValidateStatus } from '../core/interface';
import type { CreateProFormFieldConfig, ProFormFieldProps } from '../interface';

// ---------------------------------------------------------------------------
// createProFormField — factory that produces a ProForm-aware field component
// ---------------------------------------------------------------------------
export function createProFormField<FieldProps extends object>(
  config: CreateProFormFieldConfig<FieldProps>,
): FC<ProFormFieldProps<FieldProps>> {
  const {
    component: Component,
    mapProps,
    renderReadonly,
  } = config;

  // Inner component — handles mode, request, valueEnum, debounce, render
  const InnerField: FC<ProFormFieldProps<FieldProps> & { dependenciesValues?: Record<string, unknown> }> = (props) => {
    const {
      name,
      label,
      description,
      rules,
      required,
      feedback,
      validateStatus,
      colon,
      readonly,
      mode: modeProp,
      hidden,
      colProps,
      fieldProps,
      placeholder,
      disabled,
      width,
      transform,
      convertValue,
      // Field-level features
      dependencies: _deps,
      request,
      params,
      valueEnum,
      debounceTime,
      dependenciesValues,
      ...rest
    } = props as ProFormFieldProps<FieldProps> & { dependenciesValues?: Record<string, unknown> };

    // Mode resolution: explicit mode > legacy readonly > ctx.mode (ProFormItem)
    const resolvedMode =
      modeProp ??
      (readonly !== undefined ? (readonly ? 'read' : 'edit') : undefined);

    // ── Field-level request ──
    const mergedRequestParams = dependenciesValues
      ? { ...params, ...dependenciesValues }
      : params;
    const [requestLoading, requestOptions] = useFieldRequest(request, mergedRequestParams);

    // ── Debounce onChange ──
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const originalOnChangeRef = useRef<((...args: unknown[]) => void) | undefined>(undefined);

    const debouncedOnChange = useCallback(
      (...args: unknown[]) => {
        if (!debounceTime || debounceTime <= 0) {
          originalOnChangeRef.current?.(...args);
          return;
        }
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
          originalOnChangeRef.current?.(...args);
        }, debounceTime);
      },
      [debounceTime],
    );

    useEffect(() => {
      return () => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
      };
    }, []);

    // Build the field child
    const mapped = mapProps ? mapProps(rest as Record<string, unknown>) : {};
    const widthStyle = width !== undefined ? { width: resolveWidth(width) } : undefined;
    const fieldStyle = (fieldProps as Record<string, unknown>)?.style as Record<string, unknown> | undefined;
    const mergedStyle = widthStyle
      ? { ...(fieldStyle || {}), ...widthStyle }
      : fieldStyle;

    // Merge valueEnum + request options into fieldProps.options
    let mergedOptions = (fieldProps as Record<string, unknown>)?.options as unknown[] | undefined;
    if (valueEnum) {
      mergedOptions = valueEnumToOptions(valueEnum);
    }
    if (requestOptions.length > 0) {
      mergedOptions = requestOptions;
    }

    const componentProps = {
      ...mapped,
      ...(fieldProps || {}),
      ...(mergedOptions !== undefined ? { options: mergedOptions } : {}),
      ...(requestLoading ? { loading: true } : {}),
      ...(placeholder !== undefined ? { placeholder } : {}),
      ...(disabled !== undefined ? { disabled } : {}),
      ...(mergedStyle ? { style: mergedStyle } : {}),
    } as FieldProps;

    // Wire debounce — capture the user's onChange before ProFormItem injects its own
    if (debounceTime && debounceTime > 0) {
      const fp = componentProps as Record<string, unknown>;
      originalOnChangeRef.current = fp.onChange as ((...args: unknown[]) => void) | undefined;
      fp.onChange = debouncedOnChange;
    }

    return (
      <ProFormItem
        name={name}
        label={label}
        description={description}
        rules={rules}
        required={required}
        feedback={feedback}
        validateStatus={validateStatus as ValidateStatus | undefined}
        colon={colon}
        hidden={hidden}
        mode={resolvedMode}
        colProps={colProps}
        transform={transform}
        convertValue={convertValue}
        readonlyRender={renderReadonly ? (value) => renderReadonly(value) : undefined}
      >
        <Component {...componentProps} />
      </ProFormItem>
    );
  };

  // Outer component — handles auto-wrapping with ProFormDependency
  const ProFormFieldComponent: FC<ProFormFieldProps<FieldProps>> = (props) => {
    const { dependencies } = props;

    if (dependencies && dependencies.length > 0) {
      return (
        <ProFormDependency name={dependencies}>
          {(depValues) => (
            <InnerField {...props} dependenciesValues={depValues} />
          )}
        </ProFormDependency>
      );
    }

    return <InnerField {...props} />;
  };

  const MemoizedField = memo(ProFormFieldComponent);
  return MemoizedField;
}

export default createProFormField;
