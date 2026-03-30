import type { MouseEvent, ReactNode } from 'react';
import type { ButtonProps } from '@/components/Button';
import type { IconName } from '@/components/Icons';
import type { TriggerContentContext, TriggerProps } from '@/components/Trigger/interface';

export type PopconfirmPlacement = TriggerProps['placement'];

export type PopconfirmTrigger = TriggerProps['trigger'];

export interface PopconfirmActionContext extends TriggerContentContext {}

export interface PopconfirmProps
  extends Omit<TriggerProps, 'content' | 'role' | 'showArrow'> {
  /** Class name applied to the Popconfirm card. */
  className?: string;
  /** Class name prefix used to generate internal BEM-style classes. */
  prefixCls?: string;
  /** Primary heading displayed at the top of the floating card. */
  title?: ReactNode;
  /** Secondary description displayed below the title. */
  body?: ReactNode;
  /** Icon shown alongside the title and body content. */
  icon?: IconName;
  /** Whether to render the leading icon. */
  showIcon?: boolean;
  /** Whether to render the custom beak arrow. */
  showArrow?: boolean;
  /** Secondary action label. */
  cancelText?: ReactNode;
  /** Primary action label. */
  confirmText?: ReactNode;
  /** Additional props merged onto the secondary action button. */
  cancelButtonProps?: Omit<ButtonProps, 'children'>;
  /** Additional props merged onto the primary action button. */
  confirmButtonProps?: Omit<ButtonProps, 'children'>;
  /** Whether the panel should close automatically after the secondary action. */
  closeOnCancel?: boolean;
  /** Whether the panel should close automatically after the primary action. */
  closeOnConfirm?: boolean;
  /** Called when the secondary action is pressed. Use `event.preventDefault()` to keep it open. */
  onCancel?: (
    event: MouseEvent<HTMLButtonElement>,
    context: PopconfirmActionContext,
  ) => void;
  /** Called when the primary action is pressed. Use `event.preventDefault()` to keep it open. */
  onConfirm?: (
    event: MouseEvent<HTMLButtonElement>,
    context: PopconfirmActionContext,
  ) => void;
}
