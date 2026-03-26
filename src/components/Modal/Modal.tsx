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
import type { ModalButtonClickHandler, ModalProps, ModalSize } from './interface';

const NAMESPACE = 'om-react-ui';
const MODAL_CLOSE_TIMEOUT = 200;
const DEFAULT_OK_TEXT = 'Confirm';
const DEFAULT_CANCEL_TEXT = 'Cancel';
const DEFAULT_ILLUSTRATION_SIZE = 74;

type ModalActionKind = 'ok' | 'cancel';
type ModalAction = (() => void | Promise<void>) | undefined;

let scrollLockCount = 0;

const getClassName = (prefixCls: string, slot?: string, modifier?: string) => {
  const baseClassName = `${NAMESPACE}-${prefixCls}${slot ? `-${slot}` : ''}`;
  return modifier ? `${baseClassName}-${modifier}` : baseClassName;
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
      if (event.key !== 'Escape') return;
      event.preventDefault();
      void onClose?.();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
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
    return <Icons name={illustration as IconName} size={DEFAULT_ILLUSTRATION_SIZE} />;
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
  type: 'back' | 'close',
  iconNode: ReactNode,
  onClick?: ModalAction,
) => (
  <button
    type="button"
    className={classNames(
      getClassName(prefixCls, 'control'),
      getClassName(prefixCls, 'control', type),
    )}
    aria-label={type === 'close' ? 'Close modal' : 'Go back'}
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

  const isCancel = kind === 'cancel';

  return (
    <Button
      {...buttonProps}
      type="button"
      size="large"
      color={buttonProps?.color ?? (isCancel ? 'grey' : 'primary')}
      className={classNames(
        getClassName(prefixCls, 'action-button'),
        getClassName(prefixCls, 'action-button', kind),
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

  return size === 'large'
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
    prefixCls = 'modal',
    open = false,
    size = 'small',
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
    okText = DEFAULT_OK_TEXT,
    cancelText = DEFAULT_CANCEL_TEXT,
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
      'close',
      closeIcon ?? <Icons name="cross" size={14} />,
      handleCancel,
    )
    : null;
  const backControlNode = showBackIcon
    ? renderControlButton(
      prefixCls,
      'back',
      backIcon ?? <Icons name="arrowLeft" size={24} />,
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
    kind: 'cancel',
    text: cancelText,
    action: onCancel,
    buttonProps: cancelButtonProps,
  });
  const okButton = renderActionButton({
    prefixCls,
    kind: 'ok',
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
          getClassName(prefixCls, 'root'),
          getClassName(prefixCls, 'root', open ? 'open' : 'closed'),
        )}
      >
        <div
          aria-hidden="true"
          className={getClassName(prefixCls, 'overlay')}
          onClick={handleOverlayClick}
        />
        <div
          style={wrapperStyle}
          className={getClassName(prefixCls, 'wrapper')}
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
              fullWidth && getClassName(prefixCls, undefined, 'full-width'),
              hasMedia && getClassName(prefixCls, undefined, 'with-media'),
              className,
            )}
          >
            {closeControlNode}
            {hasMedia && <div className={getClassName(prefixCls, 'media')}>{media}</div>}
            <div className={getClassName(prefixCls, 'inner')}>
              {backControlNode && (
                <div
                  style={headerStyle}
                  className={getClassName(prefixCls, 'header')}
                >
                  {backControlNode}
                </div>
              )}
              <div
                style={bodyStyle}
                className={getClassName(prefixCls, 'body')}
              >
                {(illustrationNode || titleNode || descriptionNode) && (
                  <div className={getClassName(prefixCls, 'summary')}>
                    {illustrationNode && (
                      <div className={getClassName(prefixCls, 'illustration')}>
                        {illustrationNode}
                      </div>
                    )}
                    {(titleNode || descriptionNode) && (
                      <div className={getClassName(prefixCls, 'copy')}>
                        {titleNode && (
                          <div id={titleId} className={getClassName(prefixCls, 'title')}>
                            {titleNode}
                          </div>
                        )}
                        {descriptionNode && (
                          <div
                            id={descriptionId}
                            className={getClassName(prefixCls, 'description')}
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
                    className={getClassName(prefixCls, 'content')}
                  >
                    {childrenNode}
                  </div>
                )}
              </div>
              {footerNode && (
                <div
                  style={footerStyle}
                  className={classNames(
                    getClassName(prefixCls, 'footer'),
                    getClassName(prefixCls, 'footer', size),
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
