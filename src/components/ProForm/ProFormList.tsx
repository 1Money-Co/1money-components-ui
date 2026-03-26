import { memo, useEffect, useMemo, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { useMemoizedFn } from '@1money/hooks';
import { default as classnames } from '@/utils/classnames';
import { Button } from '@/components/Button';
import { useFormContext } from '@/components/Form';
import { CSS_PREFIX, DEFAULT_TEXT } from './constants';
import { extractButtonProps } from './utils';
import type { ProFormListProps, ProFormListAction } from './interface';

const classes = classnames(`${CSS_PREFIX}-list`);

let listKeyCounter = 0;
const generateKey = (): string => `list_${++listKeyCounter}`;

const ProFormListBase: FC<ProFormListProps> = (props) => {
  const {
    name,
    label,
    min,
    max,
    initialValue,
    copyIconProps,
    deleteIconProps,
    creatorButtonProps,
    itemRender,
    actionRender,
    children,
    onAfterAdd,
    onAfterRemove,
  } = props;

  const { values, setFieldValue } = useFormContext();
  const initialApplied = useRef(false);
  const keysRef = useRef<string[]>([]);

  const list = useMemo(() => {
    const raw = values[name];
    return Array.isArray(raw) ? (raw as Record<string, unknown>[]) : [];
  }, [values, name]);

  // Sync keys with list length
  while (keysRef.current.length < list.length) {
    keysRef.current.push(generateKey());
  }
  if (keysRef.current.length > list.length) {
    keysRef.current = keysRef.current.slice(0, list.length);
  }

  // Apply initial value once
  useEffect(() => {
    if (initialApplied.current) return;
    if (list.length !== 0) return;
    if (!Array.isArray(initialValue) || initialValue.length === 0) return;
    initialApplied.current = true;
    setFieldValue(name, [...initialValue]);
    keysRef.current = initialValue.map(() => generateKey());
  }, [list.length, initialValue, name, setFieldValue]);

  const canAdd = max == null || list.length < max;
  const canRemove = min == null || list.length > min;

  const add = useMemoizedFn((defaultValue?: Record<string, unknown>, index?: number) => {
    if (!canAdd) return;
    const value = defaultValue ?? {};
    const newList = [...list];
    const newKeys = [...keysRef.current];
    const insertIndex = typeof index === 'number' ? index : newList.length;

    newList.splice(insertIndex, 0, value);
    newKeys.splice(insertIndex, 0, generateKey());

    keysRef.current = newKeys;
    setFieldValue(name, newList);
    onAfterAdd?.(value, insertIndex);
  });

  const removeAt = useMemoizedFn((index: number) => {
    if (!canRemove) return;
    const newList = [...list];
    const newKeys = [...keysRef.current];

    newList.splice(index, 1);
    newKeys.splice(index, 1);

    keysRef.current = newKeys;
    setFieldValue(name, newList);
    onAfterRemove?.(index);
  });

  const copy = useMemoizedFn((index: number) => {
    if (!canAdd) return;
    const value = list[index] ? { ...list[index] } : {};
    add(value, index + 1);
  });

  const move = useMemoizedFn((from: number, to: number) => {
    if (from === to) return;
    if (from < 0 || from >= list.length || to < 0 || to >= list.length) return;

    const newList = [...list];
    const newKeys = [...keysRef.current];
    const [movedItem] = newList.splice(from, 1);
    const [movedKey] = newKeys.splice(from, 1);

    newList.splice(to, 0, movedItem);
    newKeys.splice(to, 0, movedKey);

    keysRef.current = newKeys;
    setFieldValue(name, newList);
  });

  const getList = useMemoizedFn(() => list);

  const action = useMemo<ProFormListAction>(
    () => ({ add, remove: removeAt, move, copy, getList }),
    [add, removeAt, move, copy, getList],
  );

  const mappedFields = useMemo(
    () =>
      list.map((_item, index) => ({
        name: `${name}.${index}`,
        key: keysRef.current[index] || `fallback_${index}`,
      })),
    [list, name],
  );

  // Render children
  const listDom = typeof children === 'function'
    ? children(mappedFields, action)
    : children;

  // Action buttons per row
  const actionRows = useMemo(() => {
    return list.map((record, index) => {
      const copyBtnProps = extractButtonProps(copyIconProps);
      const deleteBtnProps = extractButtonProps(deleteIconProps);

      const defaultDom = {
        copy: copyIconProps !== false ? (
          <Button
            key={`copy-${index}`}
            type="button"
            color="secondary"
            size="small"
            {...copyBtnProps.rest}
            onClick={() => copy(index)}
            disabled={!canAdd || copyBtnProps.disabled}
          >
            {DEFAULT_TEXT.copy}
          </Button>
        ) : null,
        delete: deleteIconProps !== false ? (
          <Button
            key={`delete-${index}`}
            type="button"
            color="secondary"
            size="small"
            {...deleteBtnProps.rest}
            onClick={() => removeAt(index)}
            disabled={!canRemove || deleteBtnProps.disabled}
          >
            {DEFAULT_TEXT.delete}
          </Button>
        ) : null,
      };

      const renderedActions = actionRender
        ? actionRender({ index, record }, action, defaultDom)
        : [defaultDom.copy, defaultDom.delete].filter(Boolean);

      const rowNode = (
        <div key={keysRef.current[index] || index} className={classes('row-actions')}>
          {renderedActions as ReactNode}
        </div>
      );

      if (itemRender) {
        return itemRender({ listDom: rowNode, action });
      }

      return rowNode;
    });
  }, [list, copyIconProps, deleteIconProps, canAdd, canRemove, copy, removeAt, action, actionRender, itemRender]);

  // Creator button
  const hasCreator = creatorButtonProps !== false;
  const creatorConfig = hasCreator && typeof creatorButtonProps === 'object' ? creatorButtonProps : {};
  const creatorPosition = (creatorConfig as Record<string, unknown>)?.position ?? 'bottom';
  const creatorText = (creatorConfig as Record<string, unknown>)?.text ?? DEFAULT_TEXT.add;

  const creatorButton = hasCreator ? (
    <Button
      type="button"
      color="secondary"
      onClick={() => {
        if (creatorPosition === 'top') {
          add({}, 0);
        } else {
          add();
        }
      }}
      disabled={!canAdd}
    >
      {creatorText as ReactNode}
    </Button>
  ) : null;

  return (
    <div className={classes()}>
      {label && <div className={classes('label')}>{label}</div>}
      {creatorPosition === 'top' && creatorButton}
      <div className={classes('content')}>{listDom}</div>
      <div className={classes('actions')}>{actionRows}</div>
      {creatorPosition === 'bottom' && creatorButton}
    </div>
  );
};

ProFormListBase.displayName = 'ProFormList';

export const ProFormList = memo(ProFormListBase);

export default ProFormList;
