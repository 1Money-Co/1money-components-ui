import { memo } from 'react';
import type { FC } from 'react';
import { default as classnames } from '@/utils/classnames';
import { Dialog } from '@/components/Dialog';
import { ProForm } from '../ProForm';
import { CSS_PREFIX } from '../constants';
import { useOverlayForm } from './useOverlayForm';
import type { DialogFormProps } from '../interface';

const classes = classnames(`${CSS_PREFIX}-dialog-form`);

const DialogFormBase: FC<DialogFormProps> = (props) => {
  const {
    open,
    onOpenChange,
    trigger,
    title,
    width,
    submitTimeout,
    autoClose = true,
    dialogProps,
    onFinish,
    submitter,
    children,
    // destroyOnClose is accepted for API compat but not used —
    // Dialog's own usePresence already unmounts the entire DOM tree
    // (including form content) after the close animation finishes.
    destroyOnClose: _destroyOnClose,
    ...formProps
  } = props;

  const {
    mergedOpen,
    triggerNode,
    handleFinish,
    handleHide,
  } = useOverlayForm(
    { open, onOpenChange, trigger, autoClose, submitTimeout },
    onFinish,
  );

  return (
    <>
      {triggerNode}
      <Dialog
        {...dialogProps}
        open={mergedOpen}
        title={title}
        onCancel={handleHide}
        footer={null}
        {...(width !== undefined ? { rootStyle: { ...dialogProps?.rootStyle, width } } : {})}
      >
        <div className={classes()}>
          <ProForm
            {...formProps}
            onFinish={handleFinish}
            submitter={submitter !== undefined ? submitter : {
              resetButtonProps: { onClick: handleHide },
              resetText: dialogProps?.cancelText ?? 'Cancel',
            }}
          >
            {children}
          </ProForm>
        </div>
      </Dialog>
    </>
  );
};

DialogFormBase.displayName = 'DialogForm';

export const DialogForm = memo(DialogFormBase);

export default DialogForm;
