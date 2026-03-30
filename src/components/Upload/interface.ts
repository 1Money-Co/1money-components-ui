import type { ReactNode, RefObject } from 'react';

export interface UploadProps {
  /** CSS class prefix */
  prefixCls?: string;
  /** Additional CSS class */
  className?: string;
  /** Ref to the wrapper element */
  ref?: RefObject<HTMLDivElement | null>;
  /** Label text displayed above the upload */
  label?: ReactNode;
  /** Description text below the label */
  description?: ReactNode;
  /** Feedback/error message displayed below the file list */
  feedback?: ReactNode;
  /** Whether the upload is disabled */
  disabled?: boolean;
  /** Accept file types (e.g. '.pdf,.png,image/*') */
  accept?: string;
  /** Allow multiple file selection */
  multiple?: boolean;
  /** Button label text */
  buttonLabel?: string;
  /** Callback when files are selected */
  onSelect?: (files: FileList | null) => void;
}

export interface UploadFileBarProps {
  /** Name of the uploaded file */
  fileName: string;
  /** File status: 0 = success, 1 = error */
  status?: 0 | 1;
  /** Error or helper message */
  message?: string;
  /** Additional CSS class */
  className?: string;
  /** CSS class prefix */
  prefixCls?: string;
  /** Callback when remove icon is clicked */
  onClickRemove?: () => void;
  /** Ref to the wrapper element */
  ref?: RefObject<HTMLDivElement | null>;
}
