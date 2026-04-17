import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { Col } from '@/components/Grid';
import { FormItem } from './core';
import { useProFormContext } from './context';
import { DEFAULT_COL_SPAN } from './constants';
import { valueEnumToOptions } from './utils';
import type { ProFormItemProps, ProFormValueType } from './interface';

const EMPTY_TEXT_DEFAULT = '-';

// ---------------------------------------------------------------------------
// Read-mode rendering for each supported valueType
// ---------------------------------------------------------------------------
function renderByValueType(
  valueType: ProFormValueType | undefined,
  value: unknown,
  props: Pick<ProFormItemProps, 'valueEnum'>,
): ReactNode {
  if (value === null || value === undefined || value === '') return null;

  switch (valueType) {
    case 'password':
      return '*'.repeat(String(value).length);
    case 'switch':
      return value ? 'On' : 'Off';
    case 'digit': {
      const num = Number(value);
      if (Number.isNaN(num)) return String(value);
      return num.toLocaleString();
    }
    case 'select':
    case 'radio':
    case 'tag': {
      if (!props.valueEnum) return String(value);
      const options = valueEnumToOptions(props.valueEnum);
      const match = options.find((o) => String(o.value) === String(value));
      return match ? match.label : String(value);
    }
    case 'date':
    case 'dateTime':
    case 'text':
    default:
      return String(value);
  }
}

// ---------------------------------------------------------------------------
// ReadonlyChild — rendered inside FormItem when mode === 'read'
// ---------------------------------------------------------------------------
interface ReadonlyChildProps {
  name?: string;
  valueType?: ProFormValueType;
  valueEnum?: ProFormItemProps['valueEnum'];
  convertValue?: ProFormItemProps['convertValue'];
  readonlyRender?: ProFormItemProps['readonlyRender'];
  emptyText: ReactNode;
}

const ReadonlyChildBase: FC<ReadonlyChildProps> = ({
  name,
  valueType,
  valueEnum,
  convertValue,
  readonlyRender,
  emptyText,
}) => {
  const { values } = useProFormContext();
  const raw = name ? values[name] : undefined;
  const value = convertValue && name ? convertValue(raw, name) : raw;

  if (readonlyRender) {
    const node = readonlyRender(value, values);
    return <span>{node ?? emptyText}</span>;
  }

  if (value === null || value === undefined || value === '') {
    return <span>{emptyText}</span>;
  }

  const rendered = renderByValueType(valueType, value, { valueEnum });
  return <span>{rendered ?? emptyText}</span>;
};

ReadonlyChildBase.displayName = 'ProFormItemReadonly';
const ReadonlyChild = memo(ReadonlyChildBase);

// ---------------------------------------------------------------------------
// ConvertValueChild — applies convertValue to the displayed value in edit mode
// ---------------------------------------------------------------------------
interface ConvertValueChildProps {
  name: string;
  convertValue: ProFormItemProps['convertValue'];
  children: React.ReactElement;
}

const ConvertValueChildBase: FC<ConvertValueChildProps> = ({ name, convertValue, children }) => {
  const { values } = useProFormContext();
  const raw = values[name];
  const converted = convertValue ? convertValue(raw, name) : raw;
  return React.cloneElement(children, { value: converted } as Record<string, unknown>);
};

ConvertValueChildBase.displayName = 'ProFormItemConvertValue';
const ConvertValueChild = memo(ConvertValueChildBase);

// ---------------------------------------------------------------------------
// ProFormItem
// ---------------------------------------------------------------------------
const ProFormItemBase: FC<ProFormItemProps> = (props) => {
  const {
    children,
    name,
    label,
    rules,
    required,
    help,
    validateStatus,
    colon,
    hidden,
    className,
    prefixCls,
    transform,
    convertValue,
    valueType,
    readonlyRender,
    colProps,
    mode: modeProp,
    emptyText = EMPTY_TEXT_DEFAULT,
    valueEnum,
  } = props;

  const ctx = useProFormContext();
  const mergedMode = modeProp ?? ctx.mode;
  const isReadonly = mergedMode === 'read';

  // Register / unregister transform
  useEffect(() => {
    if (!name || !transform) return;
    ctx.registerTransform(name, transform);
    return () => {
      ctx.unregisterTransform(name);
    };
  }, [name, transform, ctx.registerTransform, ctx.unregisterTransform]);

  if (hidden) return null;

  let content: ReactNode;

  if (isReadonly) {
    content = (
      <FormItem
        label={label}
        name={name}
        rules={rules}
        required={required}
        help={help}
        validateStatus={validateStatus}
        colon={colon}
        className={className}
        prefixCls={prefixCls}
      >
        <ReadonlyChild
          name={name}
          valueType={valueType}
          valueEnum={valueEnum}
          convertValue={convertValue}
          readonlyRender={readonlyRender}
          emptyText={emptyText}
        />
      </FormItem>
    );
  } else {
    let childElement: ReactNode = children;

    if (convertValue && name && React.isValidElement(children)) {
      childElement = (
        <ConvertValueChild name={name} convertValue={convertValue}>
          {children as React.ReactElement}
        </ConvertValueChild>
      );
    }

    content = (
      <FormItem
        label={label}
        name={name}
        rules={rules}
        required={required}
        help={help}
        validateStatus={validateStatus}
        colon={colon}
        className={className}
        prefixCls={prefixCls}
      >
        {childElement}
      </FormItem>
    );
  }

  // Wrap in Col if grid mode is active
  if (ctx.grid) {
    const merged = { ...ctx.colProps, ...colProps };
    const { span = DEFAULT_COL_SPAN, sm, md, lg } = merged;
    return <Col span={span} sm={sm} md={md} lg={lg}>{content}</Col>;
  }

  return <>{content}</>;
};

ProFormItemBase.displayName = 'ProFormItem';

export const ProFormItem = memo(ProFormItemBase);

export default ProFormItem;
