import { memo, useState, useMemo, useEffect, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { useControlledState, useMemoizedFn } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import { Button } from '@/components/Button';
import { ProForm } from '../ProForm';
import { CSS_PREFIX, DEFAULT_TEXT } from '../constants';
import type { QueryFilterProps } from '../interface';
import React from 'react';

const classes = classnames(`${CSS_PREFIX}-query-filter`);

// ---------------------------------------------------------------------------
// URL sync helpers
// ---------------------------------------------------------------------------
function getUrlParams(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params: Record<string, string> = {};
  new URLSearchParams(window.location.search).forEach((v, k) => {
    params[k] = v;
  });
  return params;
}

function setUrlParams(params: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  const sp = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    if (v !== null && v !== undefined && v !== '') {
      sp.set(k, String(v));
    }
  }
  const search = sp.toString();
  const url = search ? `${window.location.pathname}?${search}` : window.location.pathname;
  window.history.replaceState(null, '', url);
}

// ---------------------------------------------------------------------------
// QueryFilter
// ---------------------------------------------------------------------------
const QueryFilterBase: FC<QueryFilterProps> = (props) => {
  const {
    defaultCollapsed = true,
    collapsed: controlledCollapsed,
    onCollapse,
    defaultColsNumber = 3,
    labelWidth,
    split = false,
    searchConfig,
    syncToUrl,
    onFinish,
    onReset,
    children,
    submitter = false,
    initialValues: initialValuesProp,
    ...formProps
  } = props;

  const [collapsed, setCollapsed] = useControlledState(
    defaultCollapsed,
    controlledCollapsed,
  );

  // ── syncToUrl: merge URL params into initial values on mount ──
  const syncInitRef = useRef(false);
  const initialValues = useMemo(() => {
    if (!syncToUrl || syncInitRef.current) return initialValuesProp;
    syncInitRef.current = true;
    const urlParams = getUrlParams();
    if (typeof syncToUrl === 'function') {
      return { ...initialValuesProp, ...syncToUrl(urlParams, 'get') };
    }
    return { ...initialValuesProp, ...urlParams };
  }, []);

  const handleSyncSet = useMemoizedFn((values: Record<string, unknown>) => {
    if (!syncToUrl) return;
    const toWrite = typeof syncToUrl === 'function'
      ? syncToUrl(values, 'set')
      : values;
    setUrlParams(toWrite);
  });

  const handleFinish = useMemoizedFn((values: Record<string, unknown>) => {
    handleSyncSet(values);
    onFinish?.(values);
  });

  const handleReset = useMemoizedFn(() => {
    if (syncToUrl) setUrlParams({});
    onReset?.();
  });

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
      initialValues={initialValues}
      onFinish={handleFinish}
      onReset={handleReset}
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
          <Button type="button" color="secondary" onClick={handleReset}>
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
