import { type ReactElement, useEffect, useState } from 'react';
import { MemoizedNotification } from './Notification';
import { default as classnames, joinCls } from '@/utils/classnames';
import './style';
import type {
  NotificationKey,
  NotificationOpenConfig,
  NotificationPlacement,
  NotificationStaticApi,
  NotificationStaticConfig,
  NotificationStatus,
} from './interface';
import { NOTIFICATION_PLACEMENTS } from './interface';

interface NotificationRecord extends Omit<NotificationOpenConfig, 'key' | 'placement' | 'duration'> {
  key: NotificationKey;
  placement: NotificationPlacement;
  duration: number;
  closing: boolean;
}

interface NotificationRenderer {
  render: (element: ReactElement) => void;
  unmount: () => void;
}

interface NotificationViewportProps {
  items: NotificationRecord[];
  onClose: (key: NotificationKey) => void;
}

interface NotificationMotionItemProps {
  item: NotificationRecord;
  collapseOnExit: boolean;
  onClose: (key: NotificationKey) => void;
}

type LegacyReactDOMModule = typeof import('react-dom') & {
  render?: (element: ReactElement, container: Element | DocumentFragment) => void;
  unmountComponentAtNode?: (container: Element | DocumentFragment) => boolean;
};

const NOTIFICATION_ROOT_ID = 'om-react-ui-notification-root';
const DEFAULT_NOTIFICATION_PLACEMENT: NotificationPlacement = 'topRight';
const DEFAULT_NOTIFICATION_DURATION = 4.5;
const DEFAULT_NOTIFICATION_MAX_COUNT = Number.POSITIVE_INFINITY;
const NOTIFICATION_MOTION_DURATION = 240;
const DEFAULT_NOTIFICATION_CONFIG: Required<NotificationStaticConfig> = {
  placement: DEFAULT_NOTIFICATION_PLACEMENT,
  duration: DEFAULT_NOTIFICATION_DURATION,
  maxCount: DEFAULT_NOTIFICATION_MAX_COUNT,
};

const canUseDOM = () => typeof window !== 'undefined' && typeof document !== 'undefined';

const normalizeDuration = (value: number, fallback: number) => {
  if (value <= 0) return 0;

  return Number.isFinite(value) ? value : fallback;
};

const normalizeMaxCount = (value: number) => {
  if (!Number.isFinite(value) || value <= 0) {
    return DEFAULT_NOTIFICATION_MAX_COUNT;
  }

  return Math.floor(value);
};

const groupNotificationsByPlacement = (items: NotificationRecord[]) => {
  const groupedItems = {} as Record<NotificationPlacement, NotificationRecord[]>;

  NOTIFICATION_PLACEMENTS.forEach(placement => {
    groupedItems[placement] = [];
  });

  items.forEach(item => {
    groupedItems[item.placement].push(item);
  });

  return groupedItems;
};

const getNotificationRoot = () => {
  const existingRoot = document.getElementById(NOTIFICATION_ROOT_ID);
  if (existingRoot instanceof HTMLDivElement) {
    return existingRoot;
  }

  const root = document.createElement('div');
  root.id = NOTIFICATION_ROOT_ID;
  document.body.appendChild(root);
  return root;
};

const createNotificationRenderer = async (
  container: HTMLDivElement,
): Promise<NotificationRenderer | null> => {
  try {
    const reactDomClient = await import('react-dom/client');
    const root = reactDomClient.createRoot(container);

    return {
      render: element => {
        root.render(element);
      },
      unmount: () => {
        root.unmount();
      },
    };
  } catch {
    // Fallback for React < 18 where react-dom/client is unavailable
    const reactDom = await import('react-dom') as LegacyReactDOMModule;

    if (
      typeof reactDom.render !== 'function' ||
      typeof reactDom.unmountComponentAtNode !== 'function'
    ) {
      return null;
    }

    return {
      render: element => {
        reactDom.render?.(element, container);
      },
      unmount: () => {
        reactDom.unmountComponentAtNode?.(container);
      },
    };
  }
};

const NotificationMotionItem = ({ item, collapseOnExit, onClose }: NotificationMotionItemProps) => {
  const classes = classnames('notification');
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (item.closing || typeof window === 'undefined') return undefined;

    const frame = window.requestAnimationFrame(() => {
      setEntered(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [item.closing, item.key]);

  const { key, duration, placement, closing, ...notificationProps } = item;
  const motionClassName = closing
    ? joinCls(
      classes('item-exit'),
      collapseOnExit ? classes('item-exit-collapse') : '',
    )
    : entered
      ? classes('item-active')
      : classes('item-enter');

  return (
    <div className={joinCls(classes('item'), motionClassName)}>
      <div className={classes('item-inner')}>
        <MemoizedNotification
          {...notificationProps}
          onClose={() => {
            onClose(key);
          }}
        />
      </div>
    </div>
  );
};

const NotificationViewport = ({ items, onClose }: NotificationViewportProps) => {
  const classes = classnames('notification');
  const itemsByPlacement = groupNotificationsByPlacement(items);

  return (
    <div className={classes('viewport')} aria-live="polite" aria-atomic="false">
      {NOTIFICATION_PLACEMENTS.map(placement => {
        const placementItems = itemsByPlacement[placement];

        if (!placementItems.length) return null;

        const activeCount = placementItems.filter(i => !i.closing).length;

        return (
          <div
            key={placement}
            className={joinCls(
              classes('stack'),
              classes(`stack-${placement}`),
            )}
          >
            {placementItems.map(item => (
              <NotificationMotionItem
                key={String(item.key)}
                item={item}
                collapseOnExit={item.closing && activeCount > 0}
                onClose={onClose}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

class NotificationManager {
  private container: HTMLDivElement | null = null;

  private renderer: NotificationRenderer | null = null;

  private rendererPromise: Promise<NotificationRenderer | null> | null = null;

  private items: NotificationRecord[] = [];

  private timers = new Map<NotificationKey, number>();

  private removalTimers = new Map<NotificationKey, number>();

  private keySeed = 0;

  private configState: Required<NotificationStaticConfig> = DEFAULT_NOTIFICATION_CONFIG;

  public open = (config: NotificationOpenConfig): NotificationKey => {
    const key = config.key ?? this.createKey();

    if (!canUseDOM()) {
      return key;
    }

    const currentItem = this.items.find(item => item.key === key);
    const nextItem = this.createRecord(key, config, currentItem);

    if (!currentItem) {
      this.items = [...this.items, nextItem];
    } else if (currentItem.placement === nextItem.placement) {
      this.items = this.items.map(item => (item.key === key ? nextItem : item));
    } else {
      this.items = [...this.items.filter(item => item.key !== key), nextItem];
    }

    this.clearRemovalTimer(key);
    this.startTimer(nextItem);
    this.trimOverflow();
    this.render();

    return key;
  };

  public destroy: NotificationStaticApi['destroy'] = key => {
    if (key === undefined) {
      this.beginClose(this.items.map(item => item.key));
      this.render();
      return;
    }

    this.beginClose([key]);
    this.render();
  };

  public config: NotificationStaticApi['config'] = config => {
    this.configState = {
      placement: config.placement ?? this.configState.placement,
      duration: normalizeDuration(config.duration ?? this.configState.duration, this.configState.duration),
      maxCount: normalizeMaxCount(config.maxCount ?? this.configState.maxCount),
    };

    this.trimOverflow();
    this.render();
  };

  private createKey() {
    this.keySeed += 1;
    return `notification-${this.keySeed}`;
  }

  private createRecord(
    key: NotificationKey,
    config: NotificationOpenConfig,
    currentItem?: NotificationRecord,
  ): NotificationRecord {
    const mergedConfig = { ...currentItem, ...config };

    return {
      ...mergedConfig,
      key,
      placement: config.placement ?? currentItem?.placement ?? this.configState.placement,
      duration: normalizeDuration(
        config.duration ?? currentItem?.duration ?? this.configState.duration,
        this.configState.duration,
      ),
      closing: false,
    };
  }

  private startTimer(item: NotificationRecord) {
    this.clearTimer(item.key);

    if (item.duration <= 0) return;

    const timeoutId = window.setTimeout(() => {
      this.beginClose([item.key]);
      this.render();
    }, item.duration * 1000);

    this.timers.set(item.key, timeoutId);
  }

  private clearTimer(key: NotificationKey) {
    const timeoutId = this.timers.get(key);

    if (timeoutId === undefined) return;

    window.clearTimeout(timeoutId);
    this.timers.delete(key);
  }

  private trimOverflow() {
    if (!Number.isFinite(this.configState.maxCount)) return;

    const overflowKeys = NOTIFICATION_PLACEMENTS.flatMap(placement => {
      const placementItems = this.items.filter(item => item.placement === placement && !item.closing);
      const overflowCount = placementItems.length - this.configState.maxCount;

      if (overflowCount <= 0) return [];

      return placementItems.slice(0, overflowCount).map(item => item.key);
    });

    if (!overflowKeys.length) return;

    this.beginClose(overflowKeys);
  }

  private clearRemovalTimer(key: NotificationKey) {
    const timeoutId = this.removalTimers.get(key);

    if (timeoutId === undefined) return;

    window.clearTimeout(timeoutId);
    this.removalTimers.delete(key);
  }

  private beginClose(keys: NotificationKey[]) {
    if (!keys.length) return;

    const keySet = new Set(keys);
    const closingKeys: NotificationKey[] = [];

    this.items = this.items.map(item => {
      if (!keySet.has(item.key) || item.closing) {
        return item;
      }

      this.clearTimer(item.key);
      closingKeys.push(item.key);

      return {
        ...item,
        closing: true,
      };
    });

    closingKeys.forEach(key => {
      this.clearRemovalTimer(key);

      const timeoutId = window.setTimeout(() => {
        this.finalizeRemove(key);
      }, NOTIFICATION_MOTION_DURATION);

      this.removalTimers.set(key, timeoutId);
    });
  }

  private finalizeRemove(key: NotificationKey) {
    this.clearRemovalTimer(key);

    const removedItems = this.items.filter(item => item.key === key);

    if (!removedItems.length) return;

    this.items = this.items.filter(item => item.key !== key);

    removedItems.forEach(item => {
      item.onClose?.();
    });

    this.render();
  }

  private async ensureRenderer() {
    if (!canUseDOM()) return null;
    if (this.renderer) return this.renderer;
    if (this.rendererPromise) return this.rendererPromise;

    this.container = getNotificationRoot();
    this.rendererPromise = createNotificationRenderer(this.container)
      .then(renderer => {
        this.renderer = renderer;
        this.rendererPromise = null;

        if (!renderer) {
          this.removeContainer();
        }

        return renderer;
      })
      .catch(() => {
        this.rendererPromise = null;
        this.removeContainer();
        return null;
      });

    return this.rendererPromise;
  }

  private removeContainer() {
    this.container?.remove();
    this.container = null;
  }

  private teardown() {
    this.timers.forEach(id => window.clearTimeout(id));
    this.timers.clear();
    this.removalTimers.forEach(id => window.clearTimeout(id));
    this.removalTimers.clear();
    this.renderer?.unmount();
    this.renderer = null;
    this.removeContainer();
  }

  private handleClose = (key: NotificationKey) => {
    this.beginClose([key]);
    this.render();
  };

  private renderNode() {
    return (
      <NotificationViewport
        items={this.items}
        onClose={this.handleClose}
      />
    );
  }

  private render() {
    if (!canUseDOM()) return;

    if (!this.items.length) {
      this.teardown();
      return;
    }

    if (this.renderer) {
      this.renderer.render(this.renderNode());
      return;
    }

    void this.ensureRenderer().then(renderer => {
      if (!renderer) return;

      if (!this.items.length) {
        this.teardown();
        return;
      }

      renderer.render(this.renderNode());
    });
  }
}

const notificationManager = new NotificationManager();
const openNotificationWithStatus =
  (status: NotificationStatus) =>
    (config: Omit<NotificationOpenConfig, 'status'>): NotificationKey =>
      notificationManager.open({ ...config, status });

export const notification: NotificationStaticApi = {
  open: config => notificationManager.open(config),
  info: openNotificationWithStatus('info'),
  success: openNotificationWithStatus('success'),
  warning: openNotificationWithStatus('warning'),
  error: openNotificationWithStatus('error'),
  destroy: key => notificationManager.destroy(key),
  config: config => notificationManager.config(config),
};

export default notification;
