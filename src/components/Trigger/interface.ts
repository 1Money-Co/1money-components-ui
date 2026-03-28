import type { CSSProperties, ReactElement, ReactNode, RefObject } from 'react';
import type { Placement } from '@floating-ui/react';

export type TriggerAction = 'click' | 'hover' | 'focus';

export interface TriggerContentContext {
  close: () => void;
  open: boolean;
}

export type TriggerContent =
  | ReactNode
  | ((context: TriggerContentContext) => ReactNode);

export type TriggerRole = 'dialog' | 'tooltip' | 'menu' | 'alertdialog' | 'listbox';

export interface TriggerProps {
  /** Popup content: ReactNode or render function receiving { close, open } */
  content: TriggerContent;
  /** Trigger mode — single action or array of actions */
  trigger?: TriggerAction | TriggerAction[];
  /** Floating placement direction */
  placement?: Placement;
  /** Controlled: open state */
  open?: boolean;
  /** Controlled: open state change callback */
  onOpenChange?: (open: boolean) => void;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Show arrow pointing to trigger */
  showArrow?: boolean;
  /** Gap between panel and trigger (px) */
  offset?: number;
  /** Render in portal */
  portal?: boolean;
  /** Close on outside click / ESC */
  dismissible?: boolean;
  /** Hover delay (ms), supports separate open/close */
  hoverDelay?: number | { open?: number; close?: number };
  /** Custom class for floating panel */
  overlayClassName?: string;
  /** Custom style for floating panel */
  overlayStyle?: CSSProperties;
  /** Trigger element (single React element) */
  children: ReactElement;
  /** Disabled state */
  disabled?: boolean;
  /** Called when panel opens */
  onOpen?: () => void;
  /** Called when panel closes */
  onClose?: () => void;
  /** Accessibility role for the floating panel */
  role?: TriggerRole;
  /** External ref forwarded to the trigger element */
  ref?: RefObject<HTMLElement | null>;
}
