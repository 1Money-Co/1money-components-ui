import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';

export type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left';

export interface DrawerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> {
  prefixCls?: string;

  /**
   * Controls the open state of the drawer
   * @defaultValue false
   */
  open?: boolean;

  /**
   * Position where the drawer slides out from
   * @defaultValue 'right'
   */
  placement?: DrawerPlacement;

  /**
   * Width of the drawer when placement is 'left' or 'right'
   * @defaultValue 373
   */
  width?: string | number;

  /**
   * Height of the drawer when placement is 'top' or 'bottom'
   * @defaultValue 373
   */
  height?: string | number;

  /**
   * Title content displayed in the drawer header
   */
  title?: ReactNode;

  /**
   * Footer content displayed at the bottom of the drawer
   */
  footer?: ReactNode;

  /**
   * Whether clicking the mask can close the drawer
   * @defaultValue true
   */
  maskClosable?: boolean;

  /**
   * Whether to show the close icon in the header
   * @defaultValue true
   */
  showCloseIcon?: boolean;

  /**
   * Custom close icon element
   */
  closeIcon?: ReactNode;

  /**
   * Main content of the drawer
   */
  children?: ReactNode;

  /**
   * Callback function triggered when the drawer is closed
   */
  onClose?: () => void;

  /** Custom styles for the root container */
  rootStyle?: CSSProperties;

  /** Custom styles for the drawer wrapper */
  wrapperStyle?: CSSProperties;

  /** Custom styles for the header section */
  headerStyle?: CSSProperties;

  /** Custom styles for the body section */
  bodyStyle?: CSSProperties;

  /** Custom styles for the footer section */
  footerStyle?: CSSProperties;
}
