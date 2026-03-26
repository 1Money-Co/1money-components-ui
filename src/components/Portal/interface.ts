import type { ReactNode } from 'react';

export type PortalContainer = Element | (() => Element | null) | null;

export interface PortalProps {
  children?: ReactNode;
  container?: PortalContainer;
  disablePortal?: boolean;
}
