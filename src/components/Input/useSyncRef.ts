import { useRef } from 'react';
import { useEventCallback } from '@1money/hooks';
import type { RefObject } from 'react';

export function useSyncRef<T extends HTMLElement>(
  externalRef?: RefObject<T | null>,
) {
  const internalRef = useRef<T | null>(null);

  const callbackRef = useEventCallback((node: T | null) => {
    internalRef.current = node;
    if (externalRef) {
      (externalRef as { current: T | null }).current = node;
    }
  });

  return [internalRef, callbackRef] as const;
}
