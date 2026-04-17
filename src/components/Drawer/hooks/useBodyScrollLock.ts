import { useEffect } from 'react';

let scrollLockCount = 0;

const setBodyOverflow = (value: string) => {
  if (typeof document === 'undefined') return;
  document.body.style.overflow = value;
};

const lockBodyScroll = () => {
  scrollLockCount += 1;
  setBodyOverflow('hidden');
};

const unlockBodyScroll = () => {
  scrollLockCount = Math.max(0, scrollLockCount - 1);

  if (scrollLockCount !== 0) return;

  window.requestAnimationFrame(() => {
    if (scrollLockCount === 0) {
      setBodyOverflow('');
    }
  });
};

export const useBodyScrollLock = (locked: boolean) => {
  useEffect(() => {
    if (!locked) return undefined;

    lockBodyScroll();

    return () => {
      unlockBodyScroll();
    };
  }, [locked]);
};
