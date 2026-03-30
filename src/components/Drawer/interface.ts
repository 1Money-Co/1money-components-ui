import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import { DRAWER_PLACEMENTS } from './constants';

export type DrawerPlacement = (typeof DRAWER_PLACEMENTS)[number];

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
   * @defaultValue 360
   */
  width?: string | number;

  /**
   * Height of the drawer when placement is 'top' or 'bottom'
   * @defaultValue 360
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
   * Whether to show the back icon in the header
   * @defaultValue false
   */
  showBackIcon?: boolean;

  /**
   * Custom close icon element
   */
  closeIcon?: ReactNode;

  /**
   * Custom back icon element
   */
  backIcon?: ReactNode;

  /**
   * Main content of the drawer
   */
  children?: ReactNode;

  /**
   * Callback function triggered when the drawer is closed
   */
  onClose?: () => void;

  /**
   * Callback function triggered when the back icon is clicked
   */
  onBack?: () => void;

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
