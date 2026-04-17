import { memo, useEffect, useRef, useCallback } from 'react';
import type { FC, ReactNode } from 'react';
import { FormItem } from '../core';
import { Col } from '@/components/Grid';
import { useProFormContext } from '../context';
import { ProFormDependency } from '../ProFormDependency';
import { useFieldRequest } from '../hooks/useFieldRequest';
import { resolveWidth, valueEnumToOptions } from '../utils';
import { DEFAULT_COL_SPAN } from '../constants';
import type { CreateProFormFieldConfig, ProFormFieldProps } from '../interface';

// ---------------------------------------------------------------------------
// ReadonlyField — reads value from ProFormContext and renders it
// ---------------------------------------------------------------------------
interface ReadonlyFieldProps {
  name?: string;
  renderReadonly?: (value: unknown) => ReactNode;
}

const ReadonlyFieldBase: FC<ReadonlyFieldProps> = ({ name, renderReadonly }) => {
  const { values } = useProFormContext();
  const value = name ? values[name] : undefined;

  const rendered = renderReadonly ? renderReadonly(value) : (value != null && value !== '' ? String(value) : '-');

  return <span>{rendered}</span>;
};

ReadonlyFieldBase.displayName = 'ReadonlyField';

const ReadonlyField = memo(ReadonlyFieldBase);

// ---------------------------------------------------------------------------
// ConvertValueWrapper — intercepts form value and applies convertValue before
// passing it to the actual field component via a controlled value prop
// ---------------------------------------------------------------------------
interface ConvertValueWrapperProps<FP> {
  name: string;
  convertValue: (value: unknown, name: string) => unknown;
  component: FC<FP>;
  componentProps: FP;
}

function ConvertValueWrapperBase<FP extends object>({
  name,
  convertValue,
  component: Comp,
  componentProps,
}: ConvertValueWrapperProps<FP>) {
  const { values } = useProFormContext();
  const rawValue = values[name];
  const converted = convertValue(rawValue, name);

  return <Comp {...componentProps} value={converted} />;
}

ConvertValueWrapperBase.displayName = 'ConvertValueWrapper';

const ConvertValueWrapper = memo(ConvertValueWrapperBase) as typeof ConvertValueWrapperBase;

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

  // Inner component — handles mode, transform, request, valueEnum, debounce, render
  const InnerField: FC<ProFormFieldProps<FieldProps> & { dependenciesValues?: Record<string, unknown> }> = (props) => {
    const {
      name,
      label,
      rules,
      required,
      help,
      validateStatus,
      labelCol,
      wrapperCol,
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

    const ctx = useProFormContext();

    // Mode resolution
    const mergedMode = modeProp ?? (readonly !== undefined ? (readonly ? 'read' : 'edit') : undefined) ?? ctx?.mode ?? (ctx?.readonly ? 'read' : 'edit');
    const isReadonly = mergedMode === 'read';

    // ── Register / unregister transform ──
    useEffect(() => {
      if (!name || !transform) return;
      ctx.registerTransform?.(name, transform);
      return () => {
        ctx.unregisterTransform?.(name);
      };
    }, [name, transform, ctx.registerTransform, ctx.unregisterTransform]);

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

    if (hidden) return null;

    // Build FormItem props
    const formItemProps = {
      label,
      name,
      rules,
      required,
      help,
      validateStatus: validateStatus as 'error' | 'warning' | 'success' | 'validating' | undefined,
      labelCol,
      wrapperCol,
      colon,
    };

    // Build the child component
    let child: ReactNode;

    if (isReadonly) {
      child = <ReadonlyField name={name} renderReadonly={renderReadonly} />;
    } else {
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

      // Wire debounce — capture the original onChange from fieldProps before FormItem injects it
      if (debounceTime && debounceTime > 0) {
        const fp = componentProps as Record<string, unknown>;
        originalOnChangeRef.current = fp.onChange as ((...args: unknown[]) => void) | undefined;
        fp.onChange = debouncedOnChange;
      }

      child = convertValue && name
        ? <ConvertValueWrapper name={name} convertValue={convertValue} component={Component} componentProps={componentProps} />
        : <Component {...componentProps} />;
    }

    // Wrap in FormItem
    const node = <FormItem {...formItemProps}>{child}</FormItem>;

    // Wrap in Col if grid mode is active
    if (ctx?.grid) {
      const merged = { ...ctx?.colProps, ...colProps };
      const { span = DEFAULT_COL_SPAN, sm, md, lg } = merged;
      return <Col span={span} sm={sm} md={md} lg={lg}>{node}</Col>;
    }

    return node;
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
