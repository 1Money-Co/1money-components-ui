import { useEventCallback } from '@1money/hooks';
import classNames from 'classnames';
import {
  forwardRef,
  isValidElement,
  memo,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react';
import { Button } from '@/components/Button';
import { Icons } from '@/components/Icons';
import { Portal } from '@/components/Portal';
import { TypographyBody, TypographyHeadline } from '@/components/Typography';
import { fillRef } from '@/utils/ref';
import type { ReactNode, RefObject } from 'react';
import type { ButtonProps } from '@/components/Button';
import type { IconName } from '@/components/Icons';
import {
  DIALOG_ACTION_KIND,
  DIALOG_CONTROL_LABELS,
  DIALOG_CONTROL_TYPE,
  DIALOG_DEFAULT_BUTTON_COLORS,
  DIALOG_DEFAULT_ICONS,
  DIALOG_DEFAULT_PREFIX,
  DIALOG_DEFAULTS,
  DIALOG_MODIFIER,
  DIALOG_NAMESPACE,
  DIALOG_SIZE,
  DIALOG_SLOT,
} from './constants';
import type { DialogActionKind, DialogControlType } from './constants';
import type { DialogButtonClickHandler, DialogProps, DialogSize } from './interface';
import './style';
type DialogAction = (() => void | Promise<void>) | undefined;

let scrollLockCount = 0;

const getClassName = (prefixCls: string, slot?: string, modifier?: string) => {
  const baseClassName = `${DIALOG_NAMESPACE}-${prefixCls}${slot ? `-${slot}` : ''}`;
  return modifier ? `${baseClassName}-${modifier}` : baseClassName;
};

const setBodyOverflow = (value: string) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = value;
};

const lockBodyScroll = () => {
  scrollLockCount += 1;
  setBodyOverflow(DIALOG_DEFAULTS.overflowHidden);
};

const unlockBodyScroll = () => {
  scrollLockCount = Math.max(0, scrollLockCount - 1);

  if (scrollLockCount === 0) {
    requestAnimationFrame(() => {
      if (scrollLockCount === 0) {
        setBodyOverflow(DIALOG_DEFAULTS.overflowReset);
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

const usePresence = (open: boolean, delay: number) => {
  const [mounted, setMounted] = useState(open);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (open) {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }

      setMounted(true);
      return;
    }

    if (!mounted) return;

    closeTimerRef.current = window.setTimeout(() => {
      setMounted(false);
      closeTimerRef.current = null;
    }, delay);
  }, [delay, mounted, open]);

  return mounted;
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

const useEscapeClose = (enabled: boolean, onClose: DialogAction) => {
  useEffect(() => {
    if (!enabled || typeof document === 'undefined') return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== DIALOG_DEFAULTS.escapeKey) return;
      event.preventDefault();
      void onClose?.();
    };

    document.addEventListener(DIALOG_DEFAULTS.keydownEvent, handleKeyDown);

    return () => {
      document.removeEventListener(DIALOG_DEFAULTS.keydownEvent, handleKeyDown);
    };
  }, [enabled, onClose]);
};

const renderTypographyNode = (
  node: ReactNode,
  renderText: (value: string | number) => ReactNode,
) => {
  if (node == null || typeof node === 'boolean') return null;

  if (typeof node === 'string' || typeof node === 'number') {
    return renderText(node);
  }

  return node;
};

const renderIllustrationNode = (illustration?: ReactNode | IconName) => {
  if (!illustration) return null;

  if (typeof illustration === 'string') {
    return <Icons name={illustration as IconName} size={DIALOG_DEFAULTS.illustrationSize} />;
  }

  return isValidElement(illustration) ? illustration : null;
};

const toVoidHandler = (action?: DialogAction) => () => {
  void action?.();
};

const createActionHandler = (
  action?: DialogAction,
  buttonClick?: ButtonProps['onClick'],
): DialogButtonClickHandler => (event) => {
  buttonClick?.(event);

  if (event.defaultPrevented || !action) return;

  void action();
};

const renderControlButton = (
  prefixCls: string,
  type: DialogControlType,
  iconNode: ReactNode,
  onClick?: DialogAction,
) => (
  <button
    type={DIALOG_DEFAULTS.buttonHtmlType}
    className={classNames(
      getClassName(prefixCls, DIALOG_SLOT.control),
      getClassName(prefixCls, DIALOG_SLOT.control, type),
    )}
    aria-label={DIALOG_CONTROL_LABELS[type]}
    onClick={toVoidHandler(onClick)}
  >
    {iconNode}
  </button>
);

const renderActionButton = ({
  prefixCls,
  kind,
  text,
  action,
  buttonProps,
}: {
  prefixCls: string;
  kind: DialogActionKind;
  text: ReactNode;
  action?: DialogAction;
  buttonProps?: Partial<ButtonProps>;
}) => {
  if (text == null || !action) return null;

  return (
    <Button
      {...buttonProps}
      type={DIALOG_DEFAULTS.buttonHtmlType}
      size={DIALOG_DEFAULTS.buttonSize}
      color={buttonProps?.color ?? DIALOG_DEFAULT_BUTTON_COLORS[kind]}
      className={classNames(
        getClassName(prefixCls, DIALOG_SLOT.actionButton),
        getClassName(prefixCls, DIALOG_SLOT.actionButton, kind),
        buttonProps?.className,
      )}
      style={buttonProps?.style}
      onClick={createActionHandler(action, buttonProps?.onClick)}
    >
      {text}
    </Button>
  );
};

const resolveFooterNode = ({
  footer,
  size,
  cancelButton,
  okButton,
}: {
  footer: DialogProps['footer'];
  size: DialogSize;
  cancelButton: ReactNode;
  okButton: ReactNode;
}) => {
  if (footer === null) return null;
  if (typeof footer === 'function') return footer(cancelButton, okButton);
  if (footer !== undefined) return footer;
  if (!cancelButton && !okButton) return null;

  return size === DIALOG_SIZE.large
    ? (
      <>
        {cancelButton}
        {okButton}
      </>
    )
    : (
      <>
        {okButton}
        {cancelButton}
      </>
    );
};

const DialogBase = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  const {
    className,
    style,
    prefixCls = DIALOG_DEFAULT_PREFIX,
    open = false,
    size = DIALOG_SIZE.small,
    maskClosable = true,
    showCloseIcon = true,
    showBackIcon = false,
    fullWidth = false,
    title,
    children,
    illustration,
    media,
    closeIcon,
    backIcon,
    footer,
    onOk,
    onCancel,
    onBack,
    okText = DIALOG_DEFAULTS.okText,
    cancelText = DIALOG_DEFAULTS.cancelText,
    rootStyle,
    wrapperStyle,
    bodyStyle,
    headerStyle,
    contentStyle,
    footerStyle,
    cancelButtonProps,
    okButtonProps,
    ...rest
  } = props;
  const mounted = usePresence(open, DIALOG_DEFAULTS.closeTimeoutMs);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();

  const handleSetDialogRef = useCallback((node: HTMLDivElement | null) => {
    dialogRef.current = node;
    fillRef(ref, node);
  }, [ref]);

  const handleCancel = useEventCallback(() => {
    void onCancel?.();
  });
  const handleOk = useEventCallback(() => {
    void onOk?.();
  });
  const handleBack = useEventCallback(() => {
    void onBack?.();
  });
  const handleOverlayClick = useEventCallback(() => {
    if (!maskClosable) return;
    handleCancel();
  });

  useBodyScrollLock(mounted && open);
  useDialogFocus(mounted && open, dialogRef);
  useEscapeClose(mounted && open, handleCancel);

  const hasMedia = media != null;
  const closeControlNode = showCloseIcon
    ? renderControlButton(
      prefixCls,
      DIALOG_CONTROL_TYPE.close,
      closeIcon ?? (
        <Icons
          name={DIALOG_DEFAULT_ICONS[DIALOG_CONTROL_TYPE.close]}
          size={DIALOG_DEFAULTS.controlIconSize}
        />
      ),
      handleCancel,
    )
    : null;
  const backControlNode = showBackIcon
    ? renderControlButton(
      prefixCls,
      DIALOG_CONTROL_TYPE.back,
      backIcon ?? (
        <Icons
          name={DIALOG_DEFAULT_ICONS[DIALOG_CONTROL_TYPE.back]}
          size={DIALOG_DEFAULTS.controlIconSize}
        />
      ),
      handleBack,
    )
    : null;
  const illustrationNode = renderIllustrationNode(illustration);
  const titleNode = renderTypographyNode(title, (value) => (
    <TypographyHeadline size="md" as="h2" color="default">
      {value}
    </TypographyHeadline>
  ));
  const childrenNode = renderTypographyNode(children, (value) => (
    <TypographyBody size="md" as="p" strong color="default-secondary">
      {value}
    </TypographyBody>
  ));
  const cancelButton = renderActionButton({
    prefixCls,
    kind: DIALOG_ACTION_KIND.cancel,
    text: cancelText,
    action: onCancel,
    buttonProps: cancelButtonProps,
  });
  const okButton = renderActionButton({
    prefixCls,
    kind: DIALOG_ACTION_KIND.ok,
    text: okText,
    action: onOk,
    buttonProps: okButtonProps,
  });
  const footerNode = resolveFooterNode({
    footer,
    size,
    cancelButton,
    okButton,
  });

  if (!mounted) return null;

  return (
    <Portal>
      <div
        style={rootStyle}
        className={classNames(
          getClassName(prefixCls, DIALOG_SLOT.root),
          getClassName(
            prefixCls,
            DIALOG_SLOT.root,
            open ? DIALOG_MODIFIER.open : DIALOG_MODIFIER.closed,
          ),
        )}
      >
        <div
          aria-hidden="true"
          className={getClassName(prefixCls, DIALOG_SLOT.overlay)}
          onClick={handleOverlayClick}
        />
        <div
          style={wrapperStyle}
          className={getClassName(prefixCls, DIALOG_SLOT.wrapper)}
        >
          <div
            {...rest}
            ref={handleSetDialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            tabIndex={-1}
            style={style}
            className={classNames(
              getClassName(prefixCls),
              getClassName(prefixCls, undefined, size),
              fullWidth && getClassName(prefixCls, undefined, DIALOG_MODIFIER.fullWidth),
              hasMedia && getClassName(prefixCls, undefined, DIALOG_MODIFIER.withMedia),
              className,
            )}
          >
            {closeControlNode}
            {hasMedia && <div className={getClassName(prefixCls, DIALOG_SLOT.media)}>{media}</div>}
            <div className={getClassName(prefixCls, DIALOG_SLOT.inner)}>
              {backControlNode && (
                <div
                  style={headerStyle}
                  className={getClassName(prefixCls, DIALOG_SLOT.header)}
                >
                  {backControlNode}
                </div>
              )}
              <div
                style={bodyStyle}
                className={getClassName(prefixCls, DIALOG_SLOT.body)}
              >
                {illustrationNode && (
                  <div className={getClassName(prefixCls, DIALOG_SLOT.illustration)}>
                    {illustrationNode}
                  </div>
                )}
                {titleNode && (
                  <div id={titleId} className={getClassName(prefixCls, DIALOG_SLOT.title)}>
                    {titleNode}
                  </div>
                )}
                {childrenNode && (
                  <div
                    style={contentStyle}
                    className={getClassName(prefixCls, DIALOG_SLOT.content)}
                  >
                    {childrenNode}
                  </div>
                )}
              </div>
              {footerNode && (
                <div
                  style={footerStyle}
                  className={classNames(
                    getClassName(prefixCls, DIALOG_SLOT.footer),
                    getClassName(prefixCls, DIALOG_SLOT.footer, size),
                  )}
                >
                  {footerNode}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
});

DialogBase.displayName = 'Dialog';

export const Dialog = memo(DialogBase);

Dialog.displayName = 'Dialog';

export default Dialog;
