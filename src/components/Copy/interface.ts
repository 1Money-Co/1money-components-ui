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

  /** Accessible label for the copy button (default: 'Copy') */
  'aria-label'?: string;

  /** Additional CSS class names */
  className?: string;

  /** CSS class name prefix */
  prefixCls?: string;

  /** Callback fired when copy succeeds */
  onSuccess?: (value: string) => void;

  /** Callback fired when copy fails */
  onError?: (value: string) => void;
}

export interface ClipboardProps {
  /** The text content to display and copy to clipboard */
  content: string;

  /** Optional label rendered above the content card */
  label?: string;

  /** Additional CSS class names for the root element */
  className?: string;

  /** Additional CSS class names for the label */
  labelCls?: string;

  /** CSS class name prefix (default: 'clipboard') */
  prefixCls?: string;

  /** Callback fired when the copy operation succeeds */
  onSuccess?: (value: string) => void;

  /** Callback fired when the copy operation fails */
  onError?: (value: string) => void;
}
