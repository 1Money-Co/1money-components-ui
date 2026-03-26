import { memo, useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import { FormItem, useFormContext } from '@/components/Form';
import { Col } from '@/components/Grid';
import { useProFormContext } from '../context';
import { resolveWidth } from '../utils';
import { DEFAULT_COL_SPAN } from '../constants';
import type { CreateProFormFieldConfig, ProFormFieldProps } from '../interface';

// ---------------------------------------------------------------------------
// ReadonlyField — reads value from FormContext and renders it
// ---------------------------------------------------------------------------
interface ReadonlyFieldProps {
  name?: string;
  renderReadonly?: (value: unknown) => ReactNode;
}

const ReadonlyFieldBase: FC<ReadonlyFieldProps> = ({ name, renderReadonly }) => {
  const { values } = useFormContext();
  const value = name ? values[name] : undefined;

  const rendered = renderReadonly ? renderReadonly(value) : (value != null && value !== '' ? String(value) : '-');

  return <span>{rendered}</span>;
};

ReadonlyFieldBase.displayName = 'ReadonlyField';

const ReadonlyField = memo(ReadonlyFieldBase);

// ---------------------------------------------------------------------------
// createProFormField — factory that produces a ProForm-aware field component
// ---------------------------------------------------------------------------
export function createProFormField<FieldProps extends object>(
  config: CreateProFormFieldConfig<FieldProps>,
): FC<ProFormFieldProps<FieldProps>> {
  const {
    component: Component,
    // valuePropName is intentionally unused here — FormItem already handles
    // value injection via cloneElement for all form-aware components
    mapProps,
    renderReadonly,
  } = config;

  const ProFormFieldComponent: FC<ProFormFieldProps<FieldProps>> = (props) => {
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
      hidden,
      colProps,
      fieldProps,
      placeholder,
      disabled,
      width,
      ...rest
    } = props;

    const ctx = useProFormContext();
    const mergedReadonly = readonly ?? ctx?.readonly;

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

    if (mergedReadonly) {
      child = <ReadonlyField name={name} renderReadonly={renderReadonly} />;
    } else {
      // Map extra props if a mapper is provided
      const mapped = mapProps ? mapProps(rest as Record<string, unknown>) : {};

      // Resolve width to a pixel value
      const widthStyle = width !== undefined ? { width: resolveWidth(width) } : undefined;

      // Merge all component props
      const fieldStyle = (fieldProps as Record<string, unknown>)?.style as Record<string, unknown> | undefined;
      const mergedStyle = widthStyle
        ? { ...(fieldStyle || {}), ...widthStyle }
        : fieldStyle;

      const componentProps = {
        ...mapped,
        ...(fieldProps || {}),
        ...(placeholder !== undefined ? { placeholder } : {}),
        ...(disabled !== undefined ? { disabled } : {}),
        ...(mergedStyle ? { style: mergedStyle } : {}),
      } as FieldProps;

      child = <Component {...componentProps} />;
    }

    // Wrap in FormItem
    const node = <FormItem {...formItemProps}>{child}</FormItem>;

    // Wrap in Col if grid mode is active
    if (ctx?.grid) {
      const span = colProps?.span ?? ctx?.colProps?.span ?? DEFAULT_COL_SPAN;
      return <Col span={span}>{node}</Col>;
    }

    return node;
  };

  // memo + displayName will be set externally by each concrete field
  const MemoizedField = memo(ProFormFieldComponent);
  return MemoizedField;
}

export default createProFormField;
