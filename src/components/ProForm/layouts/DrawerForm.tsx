import { memo } from 'react';
import type { FC } from 'react';
import { default as classnames } from '@/utils/classnames';
import { Drawer } from '@/components/Drawer';
import { ProForm } from '../ProForm';
import { CSS_PREFIX } from '../constants';
import { useOverlayForm } from './useOverlayForm';
import type { DrawerFormProps } from '../interface';

const classes = classnames(`${CSS_PREFIX}-drawer-form`);

const DrawerFormBase: FC<DrawerFormProps> = (props) => {
  const {
    open,
    onOpenChange,
    trigger,
    title,
    width = 480,
    placement = 'right',
    submitTimeout,
    autoClose = true,
    drawerProps,
    onFinish,
    submitter,
    children,
    // destroyOnClose is accepted for API compat but not used —
    // Drawer's own useDrawerTransition already unmounts the entire
    // DOM tree (including form content) after the close animation.
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
      <Drawer
        {...drawerProps}
        open={mergedOpen}
        title={title}
        placement={placement}
        width={width}
        onClose={handleHide}
        footer={null}
      >
        <div className={classes()}>
          <ProForm
            {...formProps}
            onFinish={handleFinish}
            submitter={submitter !== undefined ? submitter : {
              resetButtonProps: { onClick: handleHide },
              resetText: 'Cancel',
            }}
          >
            {children}
          </ProForm>
        </div>
      </Drawer>
    </>
  );
};

DrawerFormBase.displayName = 'DrawerForm';

export const DrawerForm = memo(DrawerFormBase);

export default DrawerForm;
