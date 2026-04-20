import React, { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { Col } from '@/components/Grid';
import { TypographyBody, TypographyLabel } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import { useFormItem } from './core/useFormItem';
import {
  FORM_ERROR_COLOR,
  FORM_ERROR_SIZE,
  FORM_HELP_COLOR,
  FORM_HELP_SIZE,
  FORM_LABEL_COLOR,
  FORM_LABEL_SIZE,
} from './core/constants';
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
// ReadonlyChild — rendered in the control area when mode === 'read'
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
// ConvertValueChild — overrides the `value` prop with convertValue(raw) while
// leaving onChange/onBlur from the outer injection intact.
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
    className = '',
    prefixCls = 'form-item',
    hidden,
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

  const {
    fieldError,
    isRequired,
    size,
    labelAlign,
    requiredMark,
    injectField,
  } = useFormItem({ name, rules, required, validateStatus });

  // Register / unregister transform
  useEffect(() => {
    if (!name || !transform) return;
    ctx.registerTransform(name, transform);
    return () => {
      ctx.unregisterTransform(name);
    };
  }, [name, transform, ctx.registerTransform, ctx.unregisterTransform]);

  if (hidden) return null;

  let controlChild: ReactNode;
  if (isReadonly) {
    controlChild = (
      <ReadonlyChild
        name={name}
        valueType={valueType}
        valueEnum={valueEnum}
        convertValue={convertValue}
        readonlyRender={readonlyRender}
        emptyText={emptyText}
      />
    );
  } else {
    // Inject first so the real field receives value/onChange/onBlur,
    // then optionally wrap in ConvertValueChild to override the displayed value.
    const injected = injectField(children);
    if (convertValue && name && React.isValidElement(injected)) {
      controlChild = (
        <ConvertValueChild name={name} convertValue={convertValue}>
          {injected as React.ReactElement}
        </ConvertValueChild>
      );
    } else {
      controlChild = injected;
    }
  }

  const classes = classnames(prefixCls);

  const shell = (
    <div
      className={classes(
        undefined,
        joinCls(size === 'small' && classes('small'), className),
      )}
    >
      {label && (
        <div
          className={classes(
            'label-wrapper',
            joinCls(
              classes('label-wrapper-vertical'),
              labelAlign && classes(`label-wrapper-${labelAlign}`),
            ),
          )}
        >
          <TypographyLabel
            as="label"
            size={FORM_LABEL_SIZE}
            color={FORM_LABEL_COLOR}
            className={classes(
              'label',
              joinCls(isRequired && requiredMark && classes('label-required')),
            )}
          >
            {label}
          </TypographyLabel>
        </div>
      )}

      <div className={classes('control')}>
        {controlChild}

        {fieldError && (
          <TypographyBody
            as="div"
            className={classes('error')}
            size={FORM_ERROR_SIZE}
            color={FORM_ERROR_COLOR}
          >
            {fieldError}
          </TypographyBody>
        )}

        {!fieldError && help && (
          <TypographyBody
            as="div"
            className={classes('help')}
            size={FORM_HELP_SIZE}
            color={FORM_HELP_COLOR}
          >
            {help}
          </TypographyBody>
        )}
      </div>
    </div>
  );

  if (ctx.grid) {
    const merged = { ...ctx.colProps, ...colProps };
    const { span = DEFAULT_COL_SPAN, sm, md, lg } = merged;
    return <Col span={span} sm={sm} md={md} lg={lg}>{shell}</Col>;
  }

  return shell;
};

ProFormItemBase.displayName = 'ProFormItem';

export const ProFormItem = memo(ProFormItemBase);

export default ProFormItem;
