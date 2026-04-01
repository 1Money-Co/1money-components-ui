export interface CopyProps {
  /** The text content to copy to clipboard */
  value: string;

  /** Icon size in pixels (default: 20) */
  iconSize?: number;

  /** Icon color */
  color?: string;

  /** Icon color when copy succeeds (default: semantic positive color) */
  successColor?: string;

  /** Whether to show the background container around the icon (default: true) */
  contained?: boolean;

  /** Additional CSS class names */
  className?: string;

  /** CSS class name prefix */
  prefixCls?: string;

  /** Callback fired when copy succeeds */
  onSuccess?: (value: string) => void;

  /** Callback fired when copy fails */
  onError?: (value: string) => void;
}
