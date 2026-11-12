/**
 * Safe sessionStorage helpers guarded against Safari Private Mode / QuotaExceededError,
 * plus a reference-counted body scroll lock manager preventing multi-overlay race conditions.
 */

export function getSessionItem<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const raw = window.sessionStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function setSessionItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage quota or strict privacy mode restrictions
  }
}

export function removeSessionItem(key: string): void {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.removeItem(key);
  } catch {
    // Safe no-op
  }
}

let activeScrollLocks = 0;

export function acquireBodyScrollLock(): () => void {
  if (typeof document === 'undefined') return () => {};
  activeScrollLocks += 1;
  if (activeScrollLocks === 1) {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  }

  let released = false;
  return () => {
    if (released || typeof document === 'undefined') return;
    released = true;
    activeScrollLocks = Math.max(0, activeScrollLocks - 1);
    if (activeScrollLocks === 0) {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
  };
}
