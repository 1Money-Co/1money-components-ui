import { useEventCallback } from '@1money/hooks';
import { forwardRef, memo, useEffect, useRef, useState } from 'react';
import { Icons } from '@/components/Icons';
import { Portal } from '@/components/Portal';
import { TypographyTitle } from '@/components/Typography';
import classnames, { joinCls } from '@/utils/classnames';
import { useComposeRef } from '@/utils/ref';
import type { CSSProperties, ReactNode, RefObject } from 'react';
import './style';
import {
  CLOSE_TIMEOUT_MS,
  CONTROL_ICON_SIZE,
  DEFAULT_HEIGHT,
  DEFAULT_PLACEMENT,
  DEFAULT_WIDTH,
  DRAWER_PHASES,
  DRAWER_TITLE_COLOR,
  DRAWER_TITLE_SIZE,
} from './constants';
import type { DrawerProps } from './interface';

type DrawerPhase = (typeof DRAWER_PHASES)[keyof typeof DRAWER_PHASES];
type DrawerAction = (() => void) | undefined;

let scrollLockCount = 0;

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

  if (scrollLockCount !== 0) return;

  window.requestAnimationFrame(() => {
    if (scrollLockCount === 0) {
      setBodyOverflow('');
    }
  });
};

const clearTimer = (timerRef: RefObject<number | null>) => {
  if (timerRef.current === null) return;

  window.clearTimeout(timerRef.current);
  timerRef.current = null;
};

const clearFrame = (frameRef: RefObject<number | null>) => {
  if (frameRef.current === null) return;

  window.cancelAnimationFrame(frameRef.current);
  frameRef.current = null;
};

const useBodyScrollLock = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return undefined;

    lockBodyScroll();

    return () => {
      unlockBodyScroll();
    };
  }, [locked]);
};

const useDrawerTransition = (open: boolean, closeDelay: number) => {
  const [phase, setPhase] = useState<DrawerPhase>(
    open ? DRAWER_PHASES.open : DRAWER_PHASES.closed,
  );
  const closeTimerRef = useRef<number | null>(null);
  const openFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      clearTimer(closeTimerRef);
      clearFrame(openFrameRef);
    };
  }, []);

  useEffect(() => {
    if (open) {
      clearTimer(closeTimerRef);

      if (phase === DRAWER_PHASES.open || phase === DRAWER_PHASES.opening) return;

      setPhase(DRAWER_PHASES.opening);
      return;
    }

    if (phase === DRAWER_PHASES.closed || phase === DRAWER_PHASES.closing) return;

    clearFrame(openFrameRef);
    setPhase(DRAWER_PHASES.closing);
    closeTimerRef.current = window.setTimeout(() => {
      setPhase(DRAWER_PHASES.closed);
      closeTimerRef.current = null;
    }, closeDelay);
  }, [closeDelay, open, phase]);

  useEffect(() => {
    if (phase !== DRAWER_PHASES.opening) return undefined;

    openFrameRef.current = window.requestAnimationFrame(() => {
      setPhase(DRAWER_PHASES.open);
      openFrameRef.current = null;
    });

    return () => {
      clearFrame(openFrameRef);
    };
  }, [phase]);

  return {
    mounted: phase !== DRAWER_PHASES.closed,
    open: phase === DRAWER_PHASES.open,
  };
};

const useDialogFocus = (
  active: boolean,
  dialogRef: RefObject<HTMLDivElement | null>,
) => {
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!active || typeof document === 'undefined') return undefined;

    previousActiveElementRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const frame = window.requestAnimationFrame(() => {
      dialogRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [active, dialogRef]);

  useEffect(() => {
    if (active) return;

    previousActiveElementRef.current?.focus?.();
    previousActiveElementRef.current = null;
  }, [active]);
};

const useEscapeClose = (enabled: boolean, onClose: DrawerAction) => {
  useEffect(() => {
    if (!enabled || typeof document === 'undefined') return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      event.preventDefault();
      onClose?.();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, onClose]);
};

const renderControlButton = ({
  classes,
  type,
  label,
  icon,
  onClick,
}: {
  classes: ReturnType<typeof classnames>;
  type: 'back' | 'close';
  label: string;
  icon: ReactNode;
  onClick: DrawerAction;
}) => (
  <button
    type="button"
    className={joinCls(classes('control'), classes(`control-${type}`))}
    aria-label={label}
    onClick={onClick}
  >
    {icon}
  </button>
);

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
    showBackIcon = false,
    closeIcon,
    backIcon,
    children,
    onClose,
    onBack,
    rootStyle,
    wrapperStyle,
    headerStyle,
    bodyStyle,
    footerStyle,
    ...rest
  } = props;
  const classes = classnames(prefixCls);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const mergedRef = useComposeRef(ref, drawerRef);
  const { mounted, open: isVisible } = useDrawerTransition(open, CLOSE_TIMEOUT_MS);
  const hasHeader = title != null || showCloseIcon || showBackIcon;
  const isHorizontal = placement === 'left' || placement === 'right';
  const drawerLabel = typeof title === 'string' ? title : undefined;
  const panelStyle: CSSProperties = {
    width: isHorizontal ? width : undefined,
    height: !isHorizontal ? height : undefined,
    ...wrapperStyle,
    ...style,
  };

  const handleClose = useEventCallback(() => {
    onClose?.();
  });
  const handleBack = useEventCallback(() => {
    onBack?.();
  });
  const handleOverlayClick = useEventCallback(() => {
    if (!maskClosable) return;

    handleClose();
  });

  useBodyScrollLock(mounted && open);
  useDialogFocus(mounted && open, drawerRef);
  useEscapeClose(mounted && open, handleClose);

  if (!mounted) return null;

  return (
    <Portal>
      <div
        style={rootStyle}
        className={joinCls(
          classes('root'),
          isVisible ? classes('root-open') : classes('root-closed'),
        )}
      >
        <div
          aria-hidden="true"
          className={classes('overlay')}
          onClick={handleOverlayClick}
        />
        <div
          {...rest}
          ref={mergedRef}
          role="dialog"
          aria-modal="true"
          aria-label={drawerLabel}
          tabIndex={-1}
          style={panelStyle}
          className={joinCls(classes(), classes(placement), className)}
        >
          {hasHeader && (
            <div style={headerStyle} className={classes('header')}>
              <div className={classes('header-main')}>
                {showBackIcon && renderControlButton({
                  classes,
                  type: 'back',
                  label: 'Go back',
                  icon: backIcon ?? <Icons name="arrowLeft" size={CONTROL_ICON_SIZE} />,
                  onClick: handleBack,
                })}
                {title != null && <TypographyTitle className={classes('title')} size={DRAWER_TITLE_SIZE} strong color={DRAWER_TITLE_COLOR}>{title}</TypographyTitle>}
              </div>
              {showCloseIcon && renderControlButton({
                classes,
                type: 'close',
                label: 'Close drawer',
                icon: closeIcon ?? <Icons name="cross" size={CONTROL_ICON_SIZE} />,
                onClick: handleClose,
              })}
            </div>
          )}

          <div style={bodyStyle} className={classes('body')}>
            {children}
          </div>

          {footer != null && (
            <div style={footerStyle} className={classes('footer')}>
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
