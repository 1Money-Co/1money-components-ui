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
  MODAL_ACTION_KIND,
  MODAL_BUTTON_HTML_TYPE,
  MODAL_BUTTON_SIZE,
  MODAL_CLOSE_TIMEOUT,
  MODAL_CONTROL_ICON_SIZE,
  MODAL_CONTROL_LABELS,
  MODAL_CONTROL_TYPE,
  MODAL_DEFAULT_BUTTON_COLORS,
  MODAL_DEFAULT_CANCEL_TEXT,
  MODAL_DEFAULT_ICONS,
  MODAL_DEFAULT_ILLUSTRATION_SIZE,
  MODAL_DEFAULT_OK_TEXT,
  MODAL_DEFAULT_PREFIX,
  MODAL_ESCAPE_KEY,
  MODAL_KEYDOWN_EVENT,
  MODAL_MODIFIER,
  MODAL_NAMESPACE,
  MODAL_OVERFLOW_HIDDEN,
  MODAL_OVERFLOW_RESET,
  MODAL_SIZE,
  MODAL_SLOT,
} from './constants';
import type { ModalActionKind, ModalControlType } from './constants';
import type { ModalButtonClickHandler, ModalProps, ModalSize } from './interface';
type ModalAction = (() => void | Promise<void>) | undefined;

let scrollLockCount = 0;

const getClassName = (prefixCls: string, slot?: string, modifier?: string) => {
  const baseClassName = `${MODAL_NAMESPACE}-${prefixCls}${slot ? `-${slot}` : ''}`;
  return modifier ? `${baseClassName}-${modifier}` : baseClassName;
};

const setBodyOverflow = (value: string) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = value;
};

const lockBodyScroll = () => {
  scrollLockCount += 1;
  setBodyOverflow(MODAL_OVERFLOW_HIDDEN);
};

const unlockBodyScroll = () => {
  scrollLockCount = Math.max(0, scrollLockCount - 1);

  if (scrollLockCount === 0) {
    requestAnimationFrame(() => {
      if (scrollLockCount === 0) {
        setBodyOverflow(MODAL_OVERFLOW_RESET);
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

const useEscapeClose = (enabled: boolean, onClose: ModalAction) => {
  useEffect(() => {
    if (!enabled || typeof document === 'undefined') return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== MODAL_ESCAPE_KEY) return;
      event.preventDefault();
      void onClose?.();
    };

    document.addEventListener(MODAL_KEYDOWN_EVENT, handleKeyDown);

    return () => {
      document.removeEventListener(MODAL_KEYDOWN_EVENT, handleKeyDown);
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
    return <Icons name={illustration as IconName} size={MODAL_DEFAULT_ILLUSTRATION_SIZE} />;
  }

  return isValidElement(illustration) ? illustration : null;
};

const toVoidHandler = (action?: ModalAction) => () => {
  void action?.();
};

const createActionHandler = (
  action?: ModalAction,
  buttonClick?: ButtonProps['onClick'],
): ModalButtonClickHandler => (event) => {
  buttonClick?.(event);

  if (event.defaultPrevented || !action) return;

  void action();
};

const renderControlButton = (
  prefixCls: string,
  type: ModalControlType,
  iconNode: ReactNode,
  onClick?: ModalAction,
) => (
  <button
    type={MODAL_BUTTON_HTML_TYPE}
    className={classNames(
      getClassName(prefixCls, MODAL_SLOT.control),
      getClassName(prefixCls, MODAL_SLOT.control, type),
    )}
    aria-label={MODAL_CONTROL_LABELS[type]}
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
  kind: ModalActionKind;
  text: ReactNode;
  action?: ModalAction;
  buttonProps?: Partial<ButtonProps>;
}) => {
  if (text == null || !action) return null;

  return (
    <Button
      {...buttonProps}
      type={MODAL_BUTTON_HTML_TYPE}
      size={MODAL_BUTTON_SIZE}
      color={buttonProps?.color ?? MODAL_DEFAULT_BUTTON_COLORS[kind]}
      className={classNames(
        getClassName(prefixCls, MODAL_SLOT.actionButton),
        getClassName(prefixCls, MODAL_SLOT.actionButton, kind),
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
  footer: ModalProps['footer'];
  size: ModalSize;
  cancelButton: ReactNode;
  okButton: ReactNode;
}) => {
  if (footer === null) return null;
  if (typeof footer === 'function') return footer(cancelButton, okButton);
  if (footer !== undefined) return footer;
  if (!cancelButton && !okButton) return null;

  return size === MODAL_SIZE.large
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

const ModalBase = forwardRef<HTMLDivElement, ModalProps>((props, ref) => {
  const {
    className,
    style,
    prefixCls = MODAL_DEFAULT_PREFIX,
    open = false,
    size = MODAL_SIZE.small,
    maskClosable = true,
    showCloseIcon = true,
    showBackIcon = false,
    fullWidth = false,
    title,
    description,
    children,
    illustration,
    media,
    closeIcon,
    backIcon,
    footer,
    onOk,
    onCancel,
    onBack,
    okText = MODAL_DEFAULT_OK_TEXT,
    cancelText = MODAL_DEFAULT_CANCEL_TEXT,
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
  const mounted = usePresence(open, MODAL_CLOSE_TIMEOUT);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

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
      MODAL_CONTROL_TYPE.close,
      closeIcon ?? (
        <Icons
          name={MODAL_DEFAULT_ICONS[MODAL_CONTROL_TYPE.close]}
          size={MODAL_CONTROL_ICON_SIZE}
        />
      ),
      handleCancel,
    )
    : null;
  const backControlNode = showBackIcon
    ? renderControlButton(
      prefixCls,
      MODAL_CONTROL_TYPE.back,
      backIcon ?? (
        <Icons
          name={MODAL_DEFAULT_ICONS[MODAL_CONTROL_TYPE.back]}
          size={MODAL_CONTROL_ICON_SIZE}
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
  const descriptionNode = renderTypographyNode(description, (value) => (
    <TypographyBody size="md" as="p" strong color="default-secondary">
      {value}
    </TypographyBody>
  ));
  const childrenNode = renderTypographyNode(children, (value) => (
    <TypographyBody size="md" as="p" strong color="default-secondary">
      {value}
    </TypographyBody>
  ));
  const cancelButton = renderActionButton({
    prefixCls,
    kind: MODAL_ACTION_KIND.cancel,
    text: cancelText,
    action: onCancel,
    buttonProps: cancelButtonProps,
  });
  const okButton = renderActionButton({
    prefixCls,
    kind: MODAL_ACTION_KIND.ok,
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
          getClassName(prefixCls, MODAL_SLOT.root),
          getClassName(
            prefixCls,
            MODAL_SLOT.root,
            open ? MODAL_MODIFIER.open : MODAL_MODIFIER.closed,
          ),
        )}
      >
        <div
          aria-hidden="true"
          className={getClassName(prefixCls, MODAL_SLOT.overlay)}
          onClick={handleOverlayClick}
        />
        <div
          style={wrapperStyle}
          className={getClassName(prefixCls, MODAL_SLOT.wrapper)}
        >
          <div
            {...rest}
            ref={handleSetDialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? titleId : undefined}
            aria-describedby={description ? descriptionId : undefined}
            tabIndex={-1}
            style={style}
            className={classNames(
              getClassName(prefixCls),
              getClassName(prefixCls, undefined, size),
              fullWidth && getClassName(prefixCls, undefined, MODAL_MODIFIER.fullWidth),
              hasMedia && getClassName(prefixCls, undefined, MODAL_MODIFIER.withMedia),
              className,
            )}
          >
            {closeControlNode}
            {hasMedia && <div className={getClassName(prefixCls, MODAL_SLOT.media)}>{media}</div>}
            <div className={getClassName(prefixCls, MODAL_SLOT.inner)}>
              {backControlNode && (
                <div
                  style={headerStyle}
                  className={getClassName(prefixCls, MODAL_SLOT.header)}
                >
                  {backControlNode}
                </div>
              )}
              <div
                style={bodyStyle}
                className={getClassName(prefixCls, MODAL_SLOT.body)}
              >
                {(illustrationNode || titleNode || descriptionNode) && (
                  <div className={getClassName(prefixCls, MODAL_SLOT.summary)}>
                    {illustrationNode && (
                      <div className={getClassName(prefixCls, MODAL_SLOT.illustration)}>
                        {illustrationNode}
                      </div>
                    )}
                    {(titleNode || descriptionNode) && (
                      <div className={getClassName(prefixCls, MODAL_SLOT.copy)}>
                        {titleNode && (
                          <div id={titleId} className={getClassName(prefixCls, MODAL_SLOT.title)}>
                            {titleNode}
                          </div>
                        )}
                        {descriptionNode && (
                          <div
                            id={descriptionId}
                            className={getClassName(prefixCls, MODAL_SLOT.description)}
                          >
                            {descriptionNode}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                {childrenNode && (
                  <div
                    style={contentStyle}
                    className={getClassName(prefixCls, MODAL_SLOT.content)}
                  >
                    {childrenNode}
                  </div>
                )}
              </div>
              {footerNode && (
                <div
                  style={footerStyle}
                  className={classNames(
                    getClassName(prefixCls, MODAL_SLOT.footer),
                    getClassName(prefixCls, MODAL_SLOT.footer, size),
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

ModalBase.displayName = 'Modal';

export const Modal = memo(ModalBase);

Modal.displayName = 'Modal';

export default Modal;
