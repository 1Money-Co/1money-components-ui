import { memo, useState, cloneElement, isValidElement } from 'react';
import { default as classnames, joinCls } from '@/utils/classnames';
import { useMemoizedFn } from '@1money/hooks';
import { Icons } from '@/components/Icons';
import { Typography } from '@/components/Typography';
import type { FC, MouseEvent, ReactElement, ReactNode, CSSProperties } from 'react';
import type { NavProps, NavItem as NavItemType } from './interface';
import type { IconName } from '@/components/Icons';

const GROUP_ICON_SIZE = 20;
const CHEVRON_SIZE = 20;

const isIconName = (icon: NavItemType['icon']): icon is IconName =>
  typeof icon === 'string';

export const Nav: FC<NavProps> = props => {
  const {
    className = '',
    prefixCls = 'nav',
    items,
    ...rest
  } = props;

  const classes = classnames(prefixCls);

  const isGroupItem = (item: NavItemType): boolean =>
    !!(item.children && item.children.length > 0);

  return (
    <nav className={classes(void 0, className)} {...rest}>
      <div className={classes('content')}>
        {items
          .filter(item => !item.hidden)
          .map((item, index) => (
            <div key={item.key ?? index}>
              {index > 0 && isGroupItem(item) && (
                <div className={classes('divider')} />
              )}
              {isGroupItem(item) ? (
                <NavGroup item={item} prefixCls={prefixCls} />
              ) : (
                <NavChildItem item={item} prefixCls={prefixCls} depth={0} />
              )}
            </div>
          ))}
      </div>
    </nav>
  );
};

// ── Group (top-level item with children) ──

interface NavGroupProps {
  item: NavItemType;
  prefixCls: string;
}

const NavGroup: FC<NavGroupProps> = ({ item, prefixCls }) => {
  const { label, icon, children } = item;
  const classes = classnames(prefixCls);

  const renderIcon = (groupIcon: NavItemType['icon']) => {
    if (!groupIcon) return null;
    if (isIconName(groupIcon)) {
      return <Icons name={groupIcon} size={GROUP_ICON_SIZE} />;
    }
    return groupIcon;
  };

  return (
    <div className={classes('group')}>
      <div className={classes('group-header')}>
        <div className={classes('group-header-content')}>
          {icon && (
            <span className={classes('group-header-icon')}>
              {renderIcon(icon)}
            </span>
          )}
          <Typography.Title size="sm" strong as="div" className={classes('group-header-label')}>
            {label}
          </Typography.Title>
        </div>
      </div>
      {children
        ?.filter(child => !child.hidden)
        .map((child, index) => (
          <NavChildItem key={child.key ?? index} item={child} prefixCls={prefixCls} depth={1} />
        ))}
    </div>
  );
};

// ── Recursive child item ──

interface NavChildItemProps {
  item: NavItemType;
  prefixCls: string;
  depth: number;
}

const NavChildItem: FC<NavChildItemProps> = ({ item, prefixCls, depth }) => {
  const { label, active, disabled, onClick, children, defaultOpen, onOpenChange, link, suffix } = item;
  const classes = classnames(prefixCls);
  const [open, setOpen] = useState(defaultOpen ?? false);

  const hasChildren = children && children.length > 0;
  const visibleChildren = children?.filter(child => !child.hidden);

  const handleClick = useMemoizedFn((e: MouseEvent<HTMLElement>) => {
    if (disabled) return;
    if (hasChildren) {
      const next = !open;
      setOpen(next);
      onOpenChange?.(next);
    }
    onClick?.(e);
  });

  const wrapWithLink = (content: ReactElement, itemLink: NavItemType['link']) => {
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

  const depthStyle = { '--om-nav-indent': depth } as CSSProperties;

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
      style={depthStyle}
      data-depth={depth}
      onClick={handleClick}
      disabled={disabled}
      type="button"
    >
      <div className={classes('item-content')}>
        <Typography.Title size="sm" as="div" className={classes('item-label')}>
          {label}
        </Typography.Title>
        {suffix && <span className={classes('item-suffix')}>{suffix}</span>}
      </div>
      {hasChildren && (
        <span className={classes('item-arrow', joinCls(open && classes('item-arrow-open')))}>
          <Icons name="chevronDown" size={CHEVRON_SIZE} />
        </span>
      )}
    </button>
  );

  return (
    <div className={classes('item-wrapper')}>
      {link && !hasChildren ? wrapWithLink(itemContent, link) : itemContent}

      {hasChildren && (
        <div className={classes('submenu', joinCls(open && classes('submenu-open')))}>
          <div className={classes('submenu-inner')}>
            {visibleChildren?.map((child, index) => (
              <NavChildItem
                key={child.key ?? index}
                item={child}
                prefixCls={prefixCls}
                depth={depth + 1}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Nav);
