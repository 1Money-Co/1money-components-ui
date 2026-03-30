import React, { forwardRef, memo } from 'react';
import { useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { default as classnames, joinCls } from '@/utils/classnames';
import { usePagination } from './usePagination';
import {
  PAGINATION_COMPONENT_NAME,
  PAGINATION_CONTROL_ICON,
  PAGINATION_CONTROL_ICON_COLOR,
  PAGINATION_CONTROL_ICON_SIZE,
  PAGINATION_CONTROL_TEXT,
  PAGINATION_DEFAULT_CURRENT,
  PAGINATION_DEFAULT_PREFIX,
  PAGINATION_ELLIPSIS_TEXT,
  PAGINATION_ITEM_TYPE,
  PAGINATION_SLOT,
} from './constants';
import type { PaginationControlItem, PaginationPageItem, PaginationProps } from './interface';

const getButtonAriaLabel = (item: PaginationPageItem | PaginationControlItem) => {
  if (item.type === PAGINATION_ITEM_TYPE.page) {
    return item.current ? `Page ${item.page}, current page` : `Go to page ${item.page}`;
  }

  return item.type === PAGINATION_ITEM_TYPE.previous ? 'Previous page' : 'Next page';
};

const PaginationBase = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  const {
    className = '',
    prefixCls = PAGINATION_DEFAULT_PREFIX,
    total,
    pageSize,
    current,
    defaultCurrent = PAGINATION_DEFAULT_CURRENT,
    disabled = false,
    boundaryCount,
    middlePageCount,
    onChange,
    'aria-label': ariaLabel = PAGINATION_COMPONENT_NAME,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const { items, goTo, total: resolvedTotal } = usePagination({
    total,
    pageSize,
    current,
    defaultCurrent,
    disabled,
    boundaryCount,
    middlePageCount,
    onChange,
  });

  const handleListClick = useEventCallback((e: React.MouseEvent<HTMLUListElement>) => {
    const button = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-page]');

    if (button?.dataset.page) {
      goTo(Number(button.dataset.page));
    }
  });

  if (resolvedTotal === 0) {
    return null;
  }

  return (
    <nav
      {...rest}
      ref={ref}
      aria-label={ariaLabel}
      className={classes(
        undefined,
        joinCls(
          disabled && classes(PAGINATION_SLOT.disabled),
          className,
        ),
      )}
    >
      <ul className={classes(PAGINATION_SLOT.list)} onClick={handleListClick}>
        {items.map(item => {
          if (item.type === PAGINATION_ITEM_TYPE.ellipsis) {
            return (
              <li
                key={item.key}
                className={classes(PAGINATION_SLOT.item, classes(PAGINATION_SLOT.itemEllipsis))}
                aria-hidden="true"
              >
                <span className={classes(PAGINATION_SLOT.ellipsis)}>
                  {PAGINATION_ELLIPSIS_TEXT}
                </span>
              </li>
            );
          }

          const isPage = item.type === PAGINATION_ITEM_TYPE.page;
          const isControl = !isPage;
          const isPrevious = item.type === PAGINATION_ITEM_TYPE.previous;
          const iconName = isControl
            ? PAGINATION_CONTROL_ICON[item.type as keyof typeof PAGINATION_CONTROL_ICON]
            : undefined;

          return (
            <li key={item.key} className={classes(PAGINATION_SLOT.item)}>
              <button
                type="button"
                className={classes(
                  PAGINATION_SLOT.button,
                  joinCls(
                    isPage ? classes(PAGINATION_SLOT.buttonPage) : classes(PAGINATION_SLOT.buttonControl),
                    isPage && item.current && classes(PAGINATION_SLOT.buttonCurrent),
                    item.disabled && classes(PAGINATION_SLOT.buttonDisabled),
                  ),
                )}
                disabled={item.disabled}
                aria-label={getButtonAriaLabel(item)}
                aria-current={isPage && item.current ? 'page' : undefined}
                data-page={item.page}
              >
                {isControl && isPrevious && (
                  <span className={classes(PAGINATION_SLOT.icon)}>
                    <Icons
                      name={iconName!}
                      size={PAGINATION_CONTROL_ICON_SIZE}
                      color={PAGINATION_CONTROL_ICON_COLOR}
                    />
                  </span>
                )}
                <span>
                  {isPage ? item.page : PAGINATION_CONTROL_TEXT[item.type as keyof typeof PAGINATION_CONTROL_TEXT]}
                </span>
                {isControl && !isPrevious && (
                  <span className={classes(PAGINATION_SLOT.icon)}>
                    <Icons
                      name={iconName!}
                      size={PAGINATION_CONTROL_ICON_SIZE}
                      color={PAGINATION_CONTROL_ICON_COLOR}
                    />
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

PaginationBase.displayName = PAGINATION_COMPONENT_NAME;

export const Pagination = memo(PaginationBase);

export default Pagination;
