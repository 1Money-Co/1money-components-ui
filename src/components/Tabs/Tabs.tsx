import { memo, useCallback, useRef, useState } from 'react';
import { useControlledState, useEventCallback, useLayoutEffect } from '@1money/hooks';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { CSSProperties, FC } from 'react';
import type { TabItem, TabsProps } from './interface';
import './style';

interface IndicatorStyle {
  width: number;
  transform: string;
}

export const Tabs: FC<TabsProps> = props => {
  const {
    className = '',
    prefixCls = 'tabs',
    activeKey,
    defaultActiveKey,
    items,
    animated = true,
    fullWidth = false,
    onChange,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [indicatorStyle, setIndicatorStyle] = useState<IndicatorStyle | null>(null);

  const [currentKey, setCurrentKey] = useControlledState(
    defaultActiveKey ?? items[0]?.key ?? '',
    activeKey,
  );

  const updateIndicator = useCallback(() => {
    const header = headerRef.current;
    const activeTab = tabRefs.current.get(currentKey);
    if (!header || !activeTab) return;

    const headerRect = header.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();

    setIndicatorStyle({
      width: tabRect.width,
      transform: `translateX(${tabRect.left - headerRect.left + header.scrollLeft}px)`,
    });
  }, [currentKey]);

  useLayoutEffect(mount => {
    updateIndicator();
  }, [currentKey, items, updateIndicator]);

  const handleTabClick = useEventCallback((item: TabItem) => {
    if (item.disabled) return;
    setCurrentKey(item.key);
    onChange?.(item.key);
  });

  const setTabRef = useCallback((key: string, el: HTMLButtonElement | null) => {
    if (el) {
      tabRefs.current.set(key, el);
    } else {
      tabRefs.current.delete(key);
    }
  }, []);

  const activeItem = items.find(item => item.key === currentKey);

  return (
    <div {...rest} className={classes(undefined, className)}>
      <div className={classes('header', fullWidth && classes('header-full-width'))} ref={headerRef} role="tablist">
        {items.map(item => (
          <button
            key={item.key}
            ref={el => setTabRef(item.key, el)}
            role="tab"
            type="button"
            aria-selected={item.key === currentKey}
            aria-disabled={item.disabled}
            tabIndex={item.key === currentKey ? 0 : -1}
            className={classes(
              'tab',
              joinCls(
                item.key === currentKey && classes('tab-active'),
                item.disabled && classes('tab-disabled'),
              ),
            )}
            onClick={() => handleTabClick(item)}
          >
            <span className={classes('tab-label')}>{item.label}</span>
            {item.badge !== undefined && (
              <span className={classes('tab-badge')}>{item.badge}</span>
            )}
          </button>
        ))}
        {indicatorStyle && (
          <span
            className={classes('indicator')}
            style={{
              ...indicatorStyle,
              ...(!animated && { transition: 'none' }),
            } as CSSProperties}
          />
        )}
      </div>
      {activeItem?.children !== undefined && (
        <div
          className={classes('panel')}
          role="tabpanel"
          aria-labelledby={currentKey}
        >
          {activeItem.children}
        </div>
      )}
    </div>
  );
};

export default memo(Tabs);
