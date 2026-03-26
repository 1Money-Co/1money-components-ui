import React, { memo, useEffect } from 'react';
import { useEventCallback } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { useFormContext } from './context';
import { FORM_COMPONENT_NAMES, LABEL_COL_DEFAULT, WRAPPER_COL_DEFAULT } from './constants';
import type { FC } from 'react';
import type { ColProps, FormItemProps } from './interface';

// ---------------------------------------------------------------------------
// Nested path helper for reading dot-separated paths (e.g. "items.0.title")
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

const getColStyle = (col: ColProps, layout: string): React.CSSProperties | undefined => {
  if (layout !== 'horizontal' || !col.span) return undefined;
  const percentage = `${(col.span / 24) * 100}%`;
  return { width: percentage, flex: `0 0 ${percentage}` };
};

const FormItemBase: FC<FormItemProps> = (props) => {
  const {
    children,
    className = '',
    prefixCls = 'form-item',
    label,
    name,
    rules = [],
    required,
    help,
    validateStatus,
    labelCol,
    wrapperCol,
    colon: itemColon,
    hidden = false,
  } = props;

  const formContext = useFormContext();
  const {
    values,
    errors,
    setFieldValue,
    validateField,
    registerField,
    unregisterField,
    layout,
    size,
    labelAlign,
    colon: formColon,
    requiredMark,
    validateTrigger,
    labelCol: formLabelCol = LABEL_COL_DEFAULT,
    wrapperCol: formWrapperCol = WRAPPER_COL_DEFAULT,
  } = formContext;

  const classes = classnames(prefixCls);
  const finalColon = itemColon !== undefined ? itemColon : formColon;
  const finalLabelCol = labelCol || formLabelCol;
  const finalWrapperCol = wrapperCol || formWrapperCol;
  const isRequired = required || rules.some((rule) => rule.required);
  const fieldValue = name
    ? (name.includes('.') ? getNestedValue(values, name) : values[name])
    : undefined;
  const fieldError = name
    ? ((name.includes('.') ? getNestedValue(errors as Record<string, unknown>, name) : errors[name]) as string | undefined)
    : undefined;
  const finalValidateStatus = validateStatus || (fieldError ? 'error' : undefined);

  const handleValidate = useEventCallback((value: unknown) => {
    if (name && rules.length > 0) {
      return validateField(name, rules, value);
    }
    return true;
  });

  const handleFieldChange = useEventCallback((value: unknown) => {
    if (name) {
      setFieldValue(name, value);
      if (validateTrigger === 'onChange') {
        handleValidate(value);
      }
    }
  });

  const handleFieldBlur = useEventCallback(() => {
    if (validateTrigger === 'onBlur') {
      handleValidate(fieldValue);
    }
  });

  useEffect(() => {
    if (name && registerField) {
      registerField(name, rules);
    }
    return () => {
      if (name && unregisterField) {
        unregisterField(name);
      }
    };
  }, [name]); // Only re-register when field name changes

  const renderChildren = () => {
    if (!children) return null;

    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (name) {
        let safeValue = fieldValue;
        const childProps = child.props as Record<string, unknown>;
        const displayName = (child.type as { displayName?: string })?.displayName;

        const isFormComponent =
          FORM_COMPONENT_NAMES.includes(displayName as typeof FORM_COMPONENT_NAMES[number]) ||
          childProps.placeholder !== undefined ||
          childProps.value !== undefined;

        if (isFormComponent) {
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
        }

        const injectedProps: Record<string, unknown> = {
          value: safeValue,
          onChange: (e: unknown, ...args: unknown[]) => {
            const actualValue =
              e && typeof e === 'object' && 'target' in e
                ? (e as React.ChangeEvent<HTMLInputElement>).target.value
                : e;
            handleFieldChange(actualValue);
            if (typeof childProps.onChange === 'function') {
              (childProps.onChange as (...a: unknown[]) => void)(e, ...args);
            }
          },
          onBlur: (...args: unknown[]) => {
            handleFieldBlur();
            if (typeof childProps.onBlur === 'function') {
              (childProps.onBlur as (...a: unknown[]) => void)(...args);
            }
          },
          size: childProps.size || size,
          ...(finalValidateStatus === 'error' && { status: 'error' }),
        };

        return React.cloneElement(child as React.ReactElement, injectedProps);
      }

      return child;
    });
  };

  if (hidden) {
    return null;
  }

  return (
    <div
      className={classes(
        undefined,
        joinCls(
          layout === 'horizontal' && classes('horizontal'),
          layout === 'inline' && classes('inline'),
          size === 'small' && classes('small'),
          className,
        ),
      )}
    >
      {label && (
        <div
          className={classes(
            'label-wrapper',
            joinCls(
              classes(`label-wrapper-${layout}`),
              labelAlign && classes(`label-wrapper-${labelAlign}`),
            ),
          )}
          style={getColStyle(finalLabelCol, layout)}
        >
          <label
            className={classes(
              'label',
              joinCls(
                isRequired && requiredMark && classes('label-required'),
                finalColon && layout !== 'vertical' && classes('label-colon'),
              ),
            )}
          >
            {label}
          </label>
        </div>
      )}

      <div
        className={classes(
          'control',
          joinCls(layout === 'horizontal' && classes('control-horizontal')),
        )}
        style={getColStyle(finalWrapperCol, layout)}
      >
        {renderChildren()}

        {fieldError && <div className={classes('error')}>{fieldError}</div>}

        {!fieldError && help && <div className={classes('help')}>{help}</div>}
      </div>
    </div>
  );
};

FormItemBase.displayName = 'FormItem';

export const FormItem = memo(FormItemBase);

export default FormItem;
