import { memo } from 'react';
import { useEventCallback } from '@1money/hooks';
import { Button } from '@/components/Button';
import { Icons } from '@/components/Icons';
import Trigger from '@/components/Trigger';
import { default as classnames, joinCls } from '@/utils/classnames';
import type { FC, MouseEvent } from 'react';
import type { ButtonProps } from '@/components/Button';
import type { PopconfirmActionContext, PopconfirmProps } from './interface';
import './style';
import {
  POPCONFIRM_ACTION_BUTTON_DEFAULTS,
  POPCONFIRM_ACTION_KIND,
  POPCONFIRM_DEFAULT_CANCEL_TEXT,
  POPCONFIRM_DEFAULT_CONFIRM_TEXT,
  POPCONFIRM_DEFAULT_ICON,
  POPCONFIRM_DEFAULT_OFFSET,
  POPCONFIRM_DEFAULT_PLACEMENT,
  POPCONFIRM_DEFAULT_PREFIX,
  POPCONFIRM_DEFAULT_TRIGGER,
  POPCONFIRM_ICON_SIZE,
  POPCONFIRM_ROLE,
  POPCONFIRM_SLOT,
  type PopconfirmActionKind,
} from './constants';

interface PopconfirmActionConfig {
  buttonProps?: Omit<ButtonProps, 'children'>;
  callback?: PopconfirmProps['onCancel'];
  kind: PopconfirmActionKind;
  label: PopconfirmProps['cancelText'];
  shouldClose: boolean;
}

export const Popconfirm: FC<PopconfirmProps> = (props) => {
  const {
    children,
    className = '',
    prefixCls = POPCONFIRM_DEFAULT_PREFIX,
    title,
    body,
    icon = POPCONFIRM_DEFAULT_ICON,
    showIcon = true,
    showArrow = true,
    cancelText = POPCONFIRM_DEFAULT_CANCEL_TEXT,
    confirmText = POPCONFIRM_DEFAULT_CONFIRM_TEXT,
    cancelButtonProps,
    confirmButtonProps,
    closeOnCancel = true,
    closeOnConfirm = true,
    onCancel,
    onConfirm,
    trigger = POPCONFIRM_DEFAULT_TRIGGER,
    placement = POPCONFIRM_DEFAULT_PLACEMENT,
    offset = POPCONFIRM_DEFAULT_OFFSET,
    overlayClassName,
    overlayStyle,
    ...rest
  } = props;

  const classes = classnames(prefixCls);
  const actions: PopconfirmActionConfig[] = [
    {
      kind: POPCONFIRM_ACTION_KIND.cancel,
      label: cancelText,
      buttonProps: cancelButtonProps,
      callback: onCancel,
      shouldClose: closeOnCancel,
    },
    {
      kind: POPCONFIRM_ACTION_KIND.confirm,
      label: confirmText,
      buttonProps: confirmButtonProps,
      callback: onConfirm,
      shouldClose: closeOnConfirm,
    },
  ];

  const handleAction = useEventCallback((
    event: MouseEvent<HTMLButtonElement>,
    context: PopconfirmActionContext,
    callback: PopconfirmProps['onCancel'],
    buttonHandler: ButtonProps['onClick'] | undefined,
    shouldClose: boolean,
  ) => {
    buttonHandler?.(event);
    callback?.(event, context);

    if (shouldClose && !event.defaultPrevented) {
      context.close();
    }
  });

  return (
    <Trigger
      {...rest}
      trigger={trigger}
      placement={placement}
      offset={offset}
      role={POPCONFIRM_ROLE}
      showArrow={false}
      overlayClassName={joinCls(classes(POPCONFIRM_SLOT.overlay), overlayClassName)}
      overlayStyle={overlayStyle}
      content={({ close, open }) => {
        const actionContext: PopconfirmActionContext = { close, open };

        return (
          <div
            className={classes(
              undefined,
              joinCls(
                !showArrow && classes(POPCONFIRM_SLOT.noArrow),
                className,
              ),
            )}
          >
            {(showIcon || title || body) && (
              <div className={classes(POPCONFIRM_SLOT.header)}>
                {showIcon && (
                  <span className={classes(POPCONFIRM_SLOT.icon)}>
                    <Icons name={icon} size={POPCONFIRM_ICON_SIZE} />
                  </span>
                )}
                <div className={classes(POPCONFIRM_SLOT.content)}>
                  {title && <div className={classes(POPCONFIRM_SLOT.title)}>{title}</div>}
                  {body && <div className={classes(POPCONFIRM_SLOT.body)}>{body}</div>}
                </div>
              </div>
            )}
            <div className={classes(POPCONFIRM_SLOT.actions)}>
              {actions.map(({ kind, label, buttonProps, callback, shouldClose }) => (
                <Button
                  key={kind}
                  {...POPCONFIRM_ACTION_BUTTON_DEFAULTS[kind]}
                  {...buttonProps}
                  onClick={(event) => {
                    handleAction(
                      event,
                      actionContext,
                      callback,
                      buttonProps?.onClick,
                      shouldClose,
                    );
                  }}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        );
      }}
    >
      {children}
    </Trigger>
  );
};

export default memo(Popconfirm);
