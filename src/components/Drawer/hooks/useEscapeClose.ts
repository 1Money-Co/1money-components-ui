import { useEffect } from 'react';

export const useEscapeClose = (enabled: boolean, onClose: (() => void) | undefined) => {
  useEffect(() => {
    if (!enabled || typeof document === 'undefined') return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;

      event.preventDefault();
      onClose?.();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, onClose]);
};
