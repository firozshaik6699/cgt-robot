import { useEffect } from 'react';
import { acquireBodyScrollLock } from '@/lib/storage';

/**
 * Reference-counted body scroll lock. Multiple overlays (Preloader, Mobile Drawer,
 * ContactModal) can lock/unlock independently without clobbering each other.
 */
export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const release = acquireBodyScrollLock();
    return release;
  }, [locked]);
}
