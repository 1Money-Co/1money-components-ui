import { memo, useState, useMemo } from 'react';
import type { FC, ReactNode } from 'react';
import { useControlledState, useMemoizedFn } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Button } from '@/components/Button';
import { ProForm } from '../ProForm';
import { CSS_PREFIX, DEFAULT_TEXT } from '../constants';
import type { QueryFilterProps } from '../interface';
import React from 'react';

const classes = classnames(`${CSS_PREFIX}-query-filter`);

const QueryFilterBase: FC<QueryFilterProps> = (props) => {
  const {
    defaultCollapsed = true,
    collapsed: controlledCollapsed,
    onCollapse,
    defaultColsNumber = 3,
    labelWidth,
    split = false,
    searchConfig,
    onFinish,
    onReset,
    children,
    submitter = false,
    ...formProps
  } = props;

  const [collapsed, setCollapsed] = useControlledState(
    defaultCollapsed,
    controlledCollapsed,
  );

  const handleCollapse = useMemoizedFn(() => {
    const next = !collapsed;
    setCollapsed(next);
    onCollapse?.(next);
  });

  // Count children and split visible/hidden
  const childArray = useMemo(() => {
    const arr: ReactNode[] = [];
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        arr.push(child);
      }
    });
    return arr;
  }, [children]);

  const visibleChildren = collapsed
    ? childArray.slice(0, defaultColsNumber)
    : childArray;

  const hasMore = childArray.length > defaultColsNumber;

  const searchText = searchConfig?.searchText ?? DEFAULT_TEXT.search;
  const resetText = searchConfig?.resetText ?? DEFAULT_TEXT.reset;

  const labelStyle = labelWidth !== undefined && labelWidth !== 'auto'
    ? { width: labelWidth } as React.CSSProperties
    : undefined;

  return (
    <ProForm
      {...formProps}
      layout="inline"
      onFinish={onFinish}
      onReset={onReset}
      submitter={false}
    >
      <div className={classes()}>
        {visibleChildren.map((child, index) => (
          <React.Fragment key={index}>
            {split && index > 0 && <div className={classes('split')} />}
            {labelStyle ? (
              <div style={labelStyle}>{child}</div>
            ) : (
              child
            )}
          </React.Fragment>
        ))}

        <div className={classes('actions')}>
          <Button type="submit" color="primary">
            {searchText}
          </Button>
          <Button type="button" color="secondary" onClick={() => onReset?.()}>
            {resetText}
          </Button>
          {hasMore && (
            <Button type="button" variant="text" onClick={handleCollapse}>
              {collapsed ? DEFAULT_TEXT.expand : DEFAULT_TEXT.collapse}
            </Button>
          )}
        </div>
      </div>
    </ProForm>
  );
};

QueryFilterBase.displayName = 'QueryFilter';

export const QueryFilter = memo(QueryFilterBase);

export default QueryFilter;
