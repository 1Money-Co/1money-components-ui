import { memo, useState, forwardRef, useImperativeHandle, cloneElement, isValidElement } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import { useControlledState, useEventCallback, useMemoizedFn, useLatest } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { Typography } from '@/components/Typography';
import { Trigger } from '@/components/Trigger';
import type { FC, MouseEvent, ReactElement, ReactNode } from 'react';
import type { NavigationProps, NavigationItem, NavigationHandlers } from './interface';
import type { IconName } from '@/components/Icons';

const ICON_SIZE = 16;
const CHEVRON_SIZE = 16;
const COLLAPSE_ICON_SIZE = 16;

const isIconName = (icon: NavigationItem['icon']): icon is IconName =>
  typeof icon === 'string';

export const Navigation = forwardRef<NavigationHandlers, NavigationProps>((props, ref) => {
  const {
    className = '',
    prefixCls = 'navigation',
    items,
    collapsed: controlledCollapsed,
    defaultCollapsed = false,
    collapsible = false,
    onCollapse,
    header,
    selector,
    children,
    ...rest
  } = props;

  const classes = classnames(prefixCls);

  const [collapsed, setCollapsed] = useControlledState(defaultCollapsed, controlledCollapsed);
  const collapsedRef = useLatest(collapsed);

  const handleCollapse = useEventCallback((value: boolean) => {
    setCollapsed(value);
    onCollapse?.(value);
  });

  useImperativeHandle(ref, () => ({
    toggle: () => handleCollapse(!collapsedRef.current),
    collapse: handleCollapse,
  }), [handleCollapse]);

  const handleToggleCollapse = useEventCallback(() => {
    handleCollapse(!collapsed);
  });

  return (
    <nav
      className={classes(void 0, joinCls(collapsed && classes('collapsed'), className))}
      {...rest}
    >
      {header && <div className={classes('header')}>{header}</div>}

      {selector && <div className={classes('selector')}>{selector}</div>}

      <div className={classes('nav')}>
        <div className={classes('menu')}>
          {items.filter(item => !item.hidden).map((item, index) => (
            <NavigationMenuItem
              key={item.key ?? index}
              item={item}
              prefixCls={prefixCls}
              collapsed={collapsed}
            />
          ))}
        </div>

        {collapsible && (
          <button
            className={classes('collapse-toggle')}
            onClick={handleToggleCollapse}
            type="button"
          >
            <Icons name={collapsed ? 'extend' : 'collapse'} size={COLLAPSE_ICON_SIZE} />
          </button>
        )}
      </div>

      {children && <div className={classes('footer')}>{children}</div>}
    </nav>
  );
});

Navigation.displayName = 'Navigation';

interface NavigationMenuItemProps {
  item: NavigationItem;
  prefixCls: string;
  collapsed: boolean;
}

const NavigationMenuItem: FC<NavigationMenuItemProps> = ({ item, prefixCls, collapsed }) => {
  const { label, icon, suffix, link, active, disabled, onClick, children, defaultOpen, onOpenChange } = item;
  const classes = classnames(prefixCls);
  const [open, setOpen] = useState(defaultOpen ?? false);

  const handleClick = useMemoizedFn((e: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    if (children?.length) {
      const next = !open;
      setOpen(next);
      onOpenChange?.(next);
    }
    onClick?.(e);
  });

  const hasChildren = children && children.length > 0;
  const visibleChildren = children?.filter(child => !child.hidden);
  const childActive = hasChildren && children.some(child => child.active);

  const renderIcon = (itemIcon: NavigationItem['icon']) => {
    if (!itemIcon) return null;
    if (isIconName(itemIcon)) {
      return <Icons name={itemIcon} size={ICON_SIZE} />;
    }
    return itemIcon;
  };

  const wrapWithLink = (content: ReactElement, itemLink: NavigationItem['link']) => {
    if (!itemLink) return content;
    if (typeof itemLink === 'string') {
      return <a href={itemLink} className={classes('item-link')}>{content}</a>;
    }
    if (isValidElement(itemLink)) {
      return cloneElement(itemLink as ReactElement<{ children?: ReactNode }>, {
        children: content,
      });
    }
    return content;
  };

  if (collapsed) {
    const collapsedContent = (
      <button
        className={classes(
          'collapsed-item',
          joinCls(
            (active || childActive) && classes('collapsed-item-active'),
            disabled && classes('collapsed-item-disabled'),
          ),
        )}
        onClick={hasChildren ? undefined : handleClick}
        disabled={disabled}
        type="button"
      >
        {icon && (
          <span className={classes('collapsed-item-icon')}>
            {renderIcon(icon)}
          </span>
        )}
        <Typography.Label size="xs" as="span" className={classes('collapsed-item-label')}>
          {label}
        </Typography.Label>
      </button>
    );

    if (hasChildren && visibleChildren?.length) {
      return (
        <Trigger
          trigger="click"
          placement="right"
          offset={4}
          overlayClassName={classes('collapsed-submenu-panel')}
          content={({ close }) => (
            <div className={classes('collapsed-submenu')}>
              {visibleChildren.map((child, index) => {
                const childContent = (
                  <button
                    key={child.key ?? index}
                    className={classes(
                      'collapsed-submenu-item',
                      joinCls(
                        child.active && classes('collapsed-submenu-item-active'),
                        child.disabled && classes('collapsed-submenu-item-disabled'),
                      ),
                    )}
                    onClick={(e) => {
                      if (!child.disabled) {
                        child.onClick?.(e);
                        close();
                      }
                    }}
                    disabled={child.disabled}
                    type="button"
                  >
                    {child.icon && (
                      <span className={classes('item-icon')}>
                        {renderIcon(child.icon)}
                      </span>
                    )}
                    <Typography.Title size="sm" as="span" className={classes('item-label')}>
                      {child.label}
                    </Typography.Title>
                    {child.suffix && <span className={classes('item-suffix')}>{child.suffix}</span>}
                  </button>
                );
                return (
                  <div key={child.key ?? index}>
                    {index > 0 && <div className={classes('collapsed-submenu-divider')} />}
                    {child.link ? wrapWithLink(childContent, child.link) : childContent}
                  </div>
                );
              })}
            </div>
          )}
        >
          {collapsedContent}
        </Trigger>
      );
    }

    return link ? wrapWithLink(collapsedContent, link) : collapsedContent;
  }

  return (
    <div className={classes('item-wrapper')}>
      {(() => {
        const itemContent = (
          <button
            className={classes(
              'item',
              joinCls(
                hasChildren && classes('item-expandable'),
                active && classes('item-active'),
                disabled && classes('item-disabled'),
              ),
            )}
            onClick={handleClick}
            disabled={disabled}
            type="button"
          >
            <div className={classes('item-content')}>
              {icon && (
                <span className={classes('item-icon')}>
                  {renderIcon(icon)}
                </span>
              )}
              <Typography.Title size="sm" as="span" className={classes('item-label')}>
                {label}
              </Typography.Title>
              {suffix && <span className={classes('item-suffix')}>{suffix}</span>}
            </div>
            {hasChildren && (
              <span className={classes('item-arrow')}>
                <Icons name={open ? 'chevronUp' : 'chevronDown'} size={CHEVRON_SIZE} />
              </span>
            )}
          </button>
        );

        return link && !hasChildren ? wrapWithLink(itemContent, link) : itemContent;
      })()}

      {hasChildren && open && (
        <div className={classes('submenu')}>
          {visibleChildren?.map((child, index) => {
            const childContent = (
              <button
                key={child.key ?? index}
                className={classes(
                  'submenu-item',
                  joinCls(
                    child.active && classes('submenu-item-active'),
                    child.disabled && classes('submenu-item-disabled'),
                  ),
                )}
                onClick={(e) => {
                  if (!child.disabled) child.onClick?.(e);
                }}
                disabled={child.disabled}
                type="button"
              >
                <div className={classes('item-content')}>
                  {child.icon && (
                    <span className={classes('item-icon')}>
                      {renderIcon(child.icon)}
                    </span>
                  )}
                  <Typography.Title size="sm" as="span" className={classes('item-label')}>
                    {child.label}
                  </Typography.Title>
                  {child.suffix && <span className={classes('item-suffix')}>{child.suffix}</span>}
                </div>
              </button>
            );

            return child.link ? wrapWithLink(childContent, child.link) : childContent;
          })}
        </div>
      )}
    </div>
  );
};

export default memo(Navigation);
