import type {
  CSSProperties,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';
import type { ButtonProps } from '@/components/Button';
import type { IconName } from '@/components/Icons';
import type { ModalSize } from './constants';

export type { ModalSize } from './constants';
export type ModalFooterRender = (
  cancelButton: ReactNode,
  okButton: ReactNode,
) => ReactNode;

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title' | 'onCancel'> {
  prefixCls?: string;
  open?: boolean;
  size?: ModalSize;
  maskClosable?: boolean;
  showCloseIcon?: boolean;
  showBackIcon?: boolean;
  fullWidth?: boolean;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  illustration?: ReactNode | IconName;
  media?: ReactNode;
  closeIcon?: ReactNode;
  backIcon?: ReactNode;
  footer?: ReactNode | ModalFooterRender | null;
  onOk?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
  onBack?: () => void;
  okText?: ReactNode;
  cancelText?: ReactNode;
  rootStyle?: CSSProperties;
  wrapperStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  headerStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  footerStyle?: CSSProperties;
  cancelButtonProps?: Partial<ButtonProps>;
  okButtonProps?: Partial<ButtonProps>;
}

export type ModalButtonClickHandler = MouseEventHandler<HTMLButtonElement>;
