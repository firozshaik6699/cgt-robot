import { useState, useEffect, useCallback } from 'react';

/**
 * Manages a modal that opens/closes based on a URL hash (e.g. `#contact`).
 * Returns `isOpen` state and a `close()` function that cleans up the hash.
 */
export function useHashModal(hash: string) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === `#${hash}`) {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
      } else {
        setIsOpen(false);
        document.body.style.overflow = '';
      }
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.body.style.overflow = '';
    };
  }, [hash]);

  const close = useCallback(() => {
    setIsOpen(false);
    window.history.pushState("", document.title, window.location.pathname + window.location.search);
    document.body.style.overflow = '';
  }, []);

  return { isOpen, close };
}
