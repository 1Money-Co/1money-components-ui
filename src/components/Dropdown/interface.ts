import type { TriggerContentContext, TriggerProps } from '@/components/Trigger/interface';

export type DropdownContentContext = TriggerContentContext;

export type DropdownContent = TriggerProps['content'];

export type DropdownTrigger = 'click' | 'hover';

export interface DropdownProps extends Omit<TriggerProps, 'trigger'> {
  /** Trigger mode */
  trigger?: DropdownTrigger;
}
