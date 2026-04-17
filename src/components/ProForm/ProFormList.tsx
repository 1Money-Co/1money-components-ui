import { memo, useEffect, useMemo, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { useMemoizedFn, useSafeState } from '@1money/hooks';
import { default as classnames } from '@/utils/classnames';
import { Button } from '@/components/Button';
import { TypographyLabel, TypographyBody } from '@/components/Typography';
import { FormListContext, useFormListContext, useProFormContext } from './context';
import { CSS_PREFIX, DEFAULT_TEXT, PROFORM_LIST_LABEL_SIZE, PROFORM_LIST_LABEL_COLOR } from './constants';
import { extractButtonProps, getNestedValue } from './utils';
import type { ProFormListProps, ProFormListAction } from './interface';

const classes = classnames(`${CSS_PREFIX}-list`);

let listKeyCounter = 0;
const generateKey = (): string => `list_${++listKeyCounter}`;

const ProFormListBase: FC<ProFormListProps> = (props) => {
  const {
    name: rawName,
    label,
    min,
    max,
    required,
    requiredMessage = 'This list cannot be empty',
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

  // ── Nested list: prepend parent list name ──
  const parentCtx = useFormListContext();
  const fullName = parentCtx.listName ? `${parentCtx.listName}.${rawName}` : rawName;

  const { values, setFieldValue } = useProFormContext();
  const initialApplied = useRef(false);
  const keysRef = useRef<string[]>([]);
  const [listError, setListError] = useSafeState<string | null>(null);

  const list = useMemo(() => {
    const raw = fullName.includes('.')
      ? getNestedValue(values, fullName)
      : values[fullName];
    return Array.isArray(raw) ? (raw as Record<string, unknown>[]) : [];
  }, [values, fullName]);

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
    setFieldValue(fullName, [...initialValue]);
    keysRef.current = initialValue.map(() => generateKey());
  }, [list.length, initialValue, fullName, setFieldValue]);

  // Clear error when list becomes non-empty
  useEffect(() => {
    if (required && list.length > 0 && listError) {
      setListError(null);
    }
  }, [list.length, required, listError, setListError]);

  const canAdd = max == null || list.length < max;
  const canRemove = min == null || list.length > min;

  const validateList = useMemoizedFn((): boolean => {
    if (!required) return true;
    if (list.length === 0) {
      setListError(requiredMessage);
      return false;
    }
    setListError(null);
    return true;
  });

  const add = useMemoizedFn((defaultValue?: Record<string, unknown>, index?: number) => {
    if (!canAdd) return;
    const value = defaultValue ?? {};
    const newList = [...list];
    const newKeys = [...keysRef.current];
    const insertIndex = typeof index === 'number' ? index : newList.length;

    newList.splice(insertIndex, 0, value);
    newKeys.splice(insertIndex, 0, generateKey());

    keysRef.current = newKeys;
    setFieldValue(fullName, newList);
    onAfterAdd?.(value, insertIndex);
  });

  const removeAt = useMemoizedFn((index: number) => {
    if (!canRemove) return;
    const newList = [...list];
    const newKeys = [...keysRef.current];

    newList.splice(index, 1);
    newKeys.splice(index, 1);

    keysRef.current = newKeys;
    setFieldValue(fullName, newList);
    onAfterRemove?.(index);

    // Validate after remove
    if (required && newList.length === 0) {
      setListError(requiredMessage);
    }
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
    setFieldValue(fullName, newList);
  });

  const getList = useMemoizedFn(() => list);

  const action = useMemo<ProFormListAction>(
    () => ({ add, remove: removeAt, move, copy, getList }),
    [add, removeAt, move, copy, getList],
  );

  const mappedFields = useMemo(
    () =>
      list.map((_item, index) => ({
        name: `${fullName}.${index}`,
        key: keysRef.current[index] || `fallback_${index}`,
      })),
    [list, fullName],
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

  const formListContextValue = useMemo(() => ({ listName: fullName }), [fullName]);

  return (
    <FormListContext.Provider value={formListContextValue}>
      <div className={classes()}>
        {label && <TypographyLabel className={classes('label')} size={PROFORM_LIST_LABEL_SIZE} color={PROFORM_LIST_LABEL_COLOR}>{label}</TypographyLabel>}
        {creatorPosition === 'top' && creatorButton}
        <div className={classes('content')}>{listDom}</div>
        <div className={classes('actions')}>{actionRows}</div>
        {creatorPosition === 'bottom' && creatorButton}
        {listError && <TypographyBody as="div" size="sm" color="danger">{listError}</TypographyBody>}
      </div>
    </FormListContext.Provider>
  );
};

ProFormListBase.displayName = 'ProFormList';

export const ProFormList = memo(ProFormListBase);

export default ProFormList;
