import React, { memo, useEffect } from 'react';
import { useEventCallback } from '@1money/hooks';
import { TypographyBody, TypographyLabel } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import { useFormContext } from './context';
import {
  FORM_COMPONENT_NAMES,
  FORM_ERROR_COLOR,
  FORM_ERROR_SIZE,
  FORM_HELP_COLOR,
  FORM_HELP_SIZE,
  FORM_LABEL_COLOR,
  FORM_LABEL_SIZE,
} from './constants';
import type { FC } from 'react';
import type { FormItemProps } from './interface';

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
    size,
    labelAlign,
    colon: formColon,
    requiredMark,
    validateTrigger,
  } = formContext;

  const classes = classnames(prefixCls);
  const finalColon = itemColon !== undefined ? itemColon : formColon;
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
              joinCls(
                isRequired && requiredMark && classes('label-required'),
              ),
            )}
          >
            {label}
          </TypographyLabel>
        </div>
      )}

      <div className={classes('control')}>
        {renderChildren()}

        {fieldError && <TypographyBody as="div" className={classes('error')} size={FORM_ERROR_SIZE} color={FORM_ERROR_COLOR}>{fieldError}</TypographyBody>}

        {!fieldError && help && <TypographyBody as="div" className={classes('help')} size={FORM_HELP_SIZE} color={FORM_HELP_COLOR}>{help}</TypographyBody>}
      </div>
    </div>
  );
};

FormItemBase.displayName = 'FormItem';

export const FormItem = memo(FormItemBase);

export default FormItem;
