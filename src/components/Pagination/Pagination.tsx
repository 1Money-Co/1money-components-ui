import React, { forwardRef, memo } from 'react';
import { useEventCallback } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { TypographyBody } from '@/components/Typography';
import { default as classnames, joinCls } from '@/utils/classnames';
import './style';
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
  PAGINATION_TEXT_COLOR,
  PAGINATION_TEXT_SIZE,
} from './constants';
import type { PaginationControlItem, PaginationPageItem, PaginationProps } from './interface';

const getButtonAriaLabel = (item: PaginationPageItem | PaginationControlItem) => {
  if (item.type === PAGINATION_ITEM_TYPE.page) {
    return item.current ? `Page ${item.page}, current page` : `Go to page ${item.page}`;
  }

  return item.type === PAGINATION_ITEM_TYPE.previous ? 'Previous page' : 'Next page';
};

const getItemTextColor = (item: PaginationPageItem | PaginationControlItem) => {
  if (item.type !== PAGINATION_ITEM_TYPE.page && item.disabled) {
    return PAGINATION_TEXT_COLOR.disabled;
  }

  if (item.type === PAGINATION_ITEM_TYPE.page && item.current) {
    return PAGINATION_TEXT_COLOR.current;
  }

  return PAGINATION_TEXT_COLOR.default;
};

const PaginationBase = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  const {
    className = '',
    prefixCls = PAGINATION_DEFAULT_PREFIX,
    total,
    pageSize,
    current,
    defaultCurrent = PAGINATION_DEFAULT_CURRENT,
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
    boundaryCount,
    middlePageCount,
    onChange,
  });

  const handleListClick = useEventCallback((e: React.MouseEvent<HTMLUListElement>) => {
    const button = (e.target as HTMLElement).closest<HTMLButtonElement>('button[data-page]');

    const page = Number(button?.dataset.page);

    if (page && !Number.isNaN(page)) {
      goTo(page);
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
      className={classes(undefined, className)}
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
                <TypographyBody
                  className={classes(PAGINATION_SLOT.ellipsis)}
                  size={PAGINATION_TEXT_SIZE}
                  strong
                  color={PAGINATION_TEXT_COLOR.default}
                >
                  {PAGINATION_ELLIPSIS_TEXT}
                </TypographyBody>
              </li>
            );
          }

          const isPage = item.type === PAGINATION_ITEM_TYPE.page;
          const isControl = !isPage;
          const isPrevious = item.type === PAGINATION_ITEM_TYPE.previous;
          const isDisabled = isControl && item.disabled;
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
                    isDisabled && classes(PAGINATION_SLOT.buttonDisabled),
                  ),
                )}
                aria-label={getButtonAriaLabel(item)}
                aria-current={isPage && item.current ? 'page' : undefined}
                disabled={isDisabled || undefined}
                data-page={isDisabled ? undefined : item.page}
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
                <TypographyBody size={PAGINATION_TEXT_SIZE} strong color={getItemTextColor(item)}>
                  {isPage ? item.page : PAGINATION_CONTROL_TEXT[item.type as keyof typeof PAGINATION_CONTROL_TEXT]}
                </TypographyBody>
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
