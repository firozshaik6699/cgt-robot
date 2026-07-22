import { useEffect } from 'react';

/**
 * Locks body scroll when `locked` is true; restores it on false or unmount.
 */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (locked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [locked]);
}
