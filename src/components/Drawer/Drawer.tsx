import { useEventCallback } from '@1money/hooks';
import classNames from 'classnames';
import {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { Icons } from '@/components/Icons';
import { Portal } from '@/components/Portal';
import type { CSSProperties, Ref } from 'react';
import type { DrawerPlacement, DrawerProps } from './interface';

const NAMESPACE = 'om-react-ui';
const DRAWER_CLOSE_TIMEOUT = 300;
const CLOSE_ICON_SIZE = 14;
const DEFAULT_WIDTH = 373;
const DEFAULT_HEIGHT = 373;
const DEFAULT_PLACEMENT: DrawerPlacement = 'right';

let scrollLockCount = 0;

const getClassName = (prefixCls: string, slot?: string, modifier?: string) => {
  const base = `${NAMESPACE}-${prefixCls}${slot ? `-${slot}` : ''}`;
  return modifier ? `${base}-${modifier}` : base;
};

const setBodyOverflow = (value: string) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = value;
};

const lockBodyScroll = () => {
  scrollLockCount += 1;
  setBodyOverflow('hidden');
};

const unlockBodyScroll = () => {
  scrollLockCount = Math.max(0, scrollLockCount - 1);

  if (scrollLockCount === 0) {
    requestAnimationFrame(() => {
      if (scrollLockCount === 0) {
        setBodyOverflow('');
      }
    });
  }
};

const useBodyScrollLock = (locked: boolean) => {
  const isLockedRef = useRef(false);

  useEffect(() => {
    if (!locked || isLockedRef.current) return undefined;

    isLockedRef.current = true;
    lockBodyScroll();

    return () => {
      if (!isLockedRef.current) return;
      isLockedRef.current = false;
      unlockBodyScroll();
    };
  }, [locked]);
};

const assignRef = <T extends HTMLElement>(ref: Ref<T> | undefined, node: T | null) => {
  if (!ref) return;

  if (typeof ref === 'function') {
    ref(node);
    return;
  }

  (ref as { current: T | null }).current = node;
};


const DrawerBase = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const {
    className,
    style,
    prefixCls = 'drawer',
    open = false,
    placement = DEFAULT_PLACEMENT,
    width = DEFAULT_WIDTH,
    height = DEFAULT_HEIGHT,
    title,
    footer,
    maskClosable = true,
    showCloseIcon = true,
    closeIcon,
    children,
    onClose,
    rootStyle,
    wrapperStyle,
    headerStyle,
    bodyStyle,
    footerStyle,
    ...rest
  } = props;

  const [mounted, setMounted] = useState(false);
  const [animating, setAnimating] = useState(false);
  const closeTimerRef = useRef<number | null>(null);
  const openRafRef = useRef<number | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);
  const openRef = useRef(open);
  openRef.current = open;

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) window.clearTimeout(closeTimerRef.current);
      if (openRafRef.current !== null) cancelAnimationFrame(openRafRef.current);
    };
  }, []);

  // Step 1: open → mount the DOM; close → start exit animation → unmount
  useEffect(() => {
    if (open) {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      setMounted(true);
    } else if (mounted) {
      if (openRafRef.current !== null) {
        cancelAnimationFrame(openRafRef.current);
        openRafRef.current = null;
      }
      setAnimating(false);
      closeTimerRef.current = window.setTimeout(() => {
        setMounted(false);
        closeTimerRef.current = null;
      }, DRAWER_CLOSE_TIMEOUT);
    }
  }, [open]);

  // Step 2: after mount, force a reflow so the browser computes the
  // closed-state transform from SCSS, then flip to the open state.
  // useLayoutEffect runs synchronously after DOM commit (before paint),
  // so the forced reflow guarantees the initial styles are computed.
  // The rAF then schedules the class flip for the very next frame.
  useLayoutEffect(() => {
    if (!mounted || !openRef.current) return;

    // Force style recalculation — the browser must see the closed-state
    // transform before we add the open class, otherwise no transition.
    void drawerRef.current?.getBoundingClientRect();

    openRafRef.current = requestAnimationFrame(() => {
      setAnimating(true);
      openRafRef.current = null;
    });
  }, [mounted]);

  useBodyScrollLock(mounted && open);

  // Focus management
  useEffect(() => {
    if (!mounted || !open || typeof document === 'undefined') return undefined;

    previousActiveElementRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const focusDrawer = window.requestAnimationFrame(() => {
      drawerRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusDrawer);
    };
  }, [mounted, open]);

  useEffect(() => {
    if (open) return;

    previousActiveElementRef.current?.focus?.();
    previousActiveElementRef.current = null;
  }, [open]);

  const handleSetRef = useCallback(
    (node: HTMLDivElement | null) => {
      drawerRef.current = node;
      assignRef(ref, node);
    },
    [ref],
  );

  const handleClose = useEventCallback(() => {
    void onClose?.();
  });

  // Escape key
  useEffect(() => {
    if (!mounted || !open || typeof document === 'undefined') return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      event.preventDefault();
      handleClose();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, mounted, open]);

  const handleOverlayClick = useEventCallback(() => {
    if (!maskClosable) return;
    handleClose();
  });

  if (!mounted) return null;

  // Only dynamic values that depend on props need inline styles.
  // The closed-state transform is handled in SCSS via placement classes
  // using 100% (the element's own dimension), so no JS calculation needed.
  const isHorizontal = placement === 'left' || placement === 'right';
  const panelDynamicStyle: CSSProperties = {
    width: isHorizontal ? width : undefined,
    height: !isHorizontal ? height : undefined,
    ...style,
    ...wrapperStyle,
  };

  const hasHeader = title != null || showCloseIcon;

  return (
    <Portal>
      <div
        style={rootStyle}
        className={classNames(
          getClassName(prefixCls, 'root'),
          getClassName(prefixCls, 'root', animating ? 'open' : 'closed'),
        )}
      >
        {/* Overlay mask */}
        <div
          aria-hidden="true"
          className={getClassName(prefixCls, 'overlay')}
          onClick={handleOverlayClick}
        />

        {/* Drawer panel */}
        <div
          {...rest}
          ref={handleSetRef}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
          style={panelDynamicStyle}
          className={classNames(
            getClassName(prefixCls),
            getClassName(prefixCls, undefined, placement),
            className,
          )}
        >
          {/* Header */}
          {hasHeader && (
            <div
              style={headerStyle}
              className={getClassName(prefixCls, 'header')}
            >
              {title != null ? (
                <div className={getClassName(prefixCls, 'title')}>
                  {title}
                </div>
              ) : (
                <div />
              )}
              {showCloseIcon && (
                <button
                  type="button"
                  className={classNames(
                    getClassName(prefixCls, 'control'),
                    getClassName(prefixCls, 'control', 'close'),
                  )}
                  aria-label="Close drawer"
                  onClick={handleClose}
                >
                  {closeIcon ?? <Icons name="cross" size={CLOSE_ICON_SIZE} />}
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div
            style={bodyStyle}
            className={getClassName(prefixCls, 'body')}
          >
            {children}
          </div>

          {/* Footer */}
          {footer != null && (
            <div
              style={footerStyle}
              className={getClassName(prefixCls, 'footer')}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
});

DrawerBase.displayName = 'Drawer';

export const Drawer = memo(DrawerBase);

Drawer.displayName = 'Drawer';

export default Drawer;
