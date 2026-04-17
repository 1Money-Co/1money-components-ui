import React, { memo } from 'react';
import type { FC } from 'react';
import { FormItem } from '../core';
import { useProFormContext } from '../context';
import { default as classnames } from '@/utils/classnames';
import { CSS_PREFIX } from '../constants';
import type { ProFormFieldSetProps } from '../interface';

const classes = classnames(`${CSS_PREFIX}-fieldset`);

const ProFormFieldSetBase: FC<ProFormFieldSetProps> = (props) => {
  const {
    name,
    label,
    rules,
    required,
    help,
    gap = 8,
    style,
    children,
  } = props;

  const { values, setFieldValue } = useProFormContext();
  const value = name ? (Array.isArray(values[name]) ? (values[name] as unknown[]) : []) : [];

  let itemIndex = -1;
  const list = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    itemIndex += 1;
    const index = itemIndex;

    return React.cloneElement(child as React.ReactElement<Record<string, unknown>>, {
      value: value[index],
      onChange: (val: unknown) => {
        if (!name) return;
        const newValue = [...value];
        newValue[index] = val && typeof val === 'object' && 'target' in (val as object)
          ? (val as React.ChangeEvent<HTMLInputElement>).target.value
          : val;
        setFieldValue(name, newValue);
      },
    });
  });

  const content = (
    <div className={classes()} style={{ display: 'flex', gap, alignItems: 'flex-start', ...style }}>
      {list}
    </div>
  );

  if (name) {
    return (
      <FormItem label={label} name={name} rules={rules} required={required} help={help}>
        {content}
      </FormItem>
    );
  }

  return content;
};

ProFormFieldSetBase.displayName = 'ProFormFieldSet';

export const ProFormFieldSet = memo(ProFormFieldSetBase);

export default ProFormFieldSet;
