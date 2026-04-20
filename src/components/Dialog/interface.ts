import type {
  CSSProperties,
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from 'react';
import type { ButtonProps } from '@/components/Button';
import type { IconName } from '@/components/Icons';
import type { DialogSize } from './constants';

export type { DialogSize } from './constants';
export type DialogFooterRender = (
  cancelButton: ReactNode,
  okButton: ReactNode,
) => ReactNode;

export interface DialogProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title' | 'onCancel'> {
  prefixCls?: string;
  open?: boolean;
  size?: DialogSize;
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
  footer?: ReactNode | DialogFooterRender | null;
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

export type DialogButtonClickHandler = MouseEventHandler<HTMLButtonElement>;
