import { memo } from 'react';
import type { FC } from 'react';
import { default as classnames } from '@/utils/classnames';
import { Modal } from '@/components/Modal';
import { ProForm } from '../ProForm';
import { CSS_PREFIX } from '../constants';
import { useOverlayForm } from './useOverlayForm';
import type { ModalFormProps } from '../interface';

const classes = classnames(`${CSS_PREFIX}-modal-form`);

const ModalFormBase: FC<ModalFormProps> = (props) => {
  const {
    open,
    onOpenChange,
    trigger,
    title,
    width,
    submitTimeout,
    autoClose = true,
    destroyOnClose = true,
    modalProps,
    onFinish,
    submitter,
    children,
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

  const shouldRender = !destroyOnClose || mergedOpen;

  return (
    <>
      {triggerNode}
      <Modal
        {...modalProps}
        open={mergedOpen}
        title={title}
        onCancel={handleHide}
        footer={null}
        {...(width !== undefined ? { rootStyle: { ...modalProps?.rootStyle, width } } : {})}
      >
        {shouldRender && (
          <div className={classes()}>
            <ProForm
              {...formProps}
              onFinish={handleFinish}
              submitter={submitter !== undefined ? submitter : {
                resetButtonProps: { onClick: handleHide },
                resetText: modalProps?.cancelText ?? 'Cancel',
              }}
            >
              {children}
            </ProForm>
          </div>
        )}
      </Modal>
    </>
  );
};

ModalFormBase.displayName = 'ModalForm';

export const ModalForm = memo(ModalFormBase);

export default ModalForm;
