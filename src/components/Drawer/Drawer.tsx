import { useEventCallback } from '@1money/hooks';
import { forwardRef, memo, useRef } from 'react';
import { Icons } from '@/components/Icons';
import { Portal } from '@/components/Portal';
import { TypographyTitle } from '@/components/Typography';
import classnames, { joinCls } from '@/utils/classnames';
import { useComposeRef } from '@/utils/ref';
import type { CSSProperties, ReactNode } from 'react';
import './style';
import {
  DRAWER_DEFAULTS,
  DRAWER_HORIZONTAL_PLACEMENTS,
  DRAWER_TITLE_COLOR,
  DRAWER_TITLE_SIZE,
} from './constants';
import { useBodyScrollLock, useDialogFocus, useDrawerTransition, useEscapeClose } from './hooks';
import type { DrawerProps } from './interface';

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
  onClick: (() => void) | undefined;
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
    placement = DRAWER_DEFAULTS.placement,
    width = DRAWER_DEFAULTS.width,
    height = DRAWER_DEFAULTS.height,
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
  const { mounted, open: isVisible } = useDrawerTransition(open, DRAWER_DEFAULTS.closeTimeoutMs);
  const hasHeader = title != null || showCloseIcon || showBackIcon;
  const isHorizontal = DRAWER_HORIZONTAL_PLACEMENTS.has(placement);
  const drawerLabel = typeof title === 'string' ? title : undefined;
  const panelStyle: CSSProperties = {
    [isHorizontal ? 'width' : 'height']: isHorizontal ? width : height,
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
                  icon: backIcon ?? <Icons name="arrowLeft" size={DRAWER_DEFAULTS.controlIconSize} />,
                  onClick: handleBack,
                })}
                {title != null && <TypographyTitle className={classes('title')} size={DRAWER_TITLE_SIZE} strong color={DRAWER_TITLE_COLOR}>{title}</TypographyTitle>}
              </div>
              {showCloseIcon && renderControlButton({
                classes,
                type: 'close',
                label: 'Close drawer',
                icon: closeIcon ?? <Icons name="cross" size={DRAWER_DEFAULTS.controlIconSize} />,
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
