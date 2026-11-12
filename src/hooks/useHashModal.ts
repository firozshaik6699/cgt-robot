import { useState, useEffect, useCallback } from 'react';
import { useBodyScrollLock } from './useBodyScrollLock';

export interface OpenContactDetail {
  service?: string;
}

const CONTACT_EVENT = 'cgt:open-contact';

/**
 * Programmatically opens the CGT Contact Modal from anywhere in the app,
 * optionally pre-selecting a specific service category.
 */
export function openContactModal(service?: string) {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent<OpenContactDetail>(CONTACT_EVENT, {
      detail: { service },
    })
  );
  if (window.location.hash !== '#contact') {
    window.history.pushState('', document.title, `${window.location.pathname}${window.location.search}#contact`);
  }
}

/**
 * Manages a modal that opens/closes via URL hash (`#contact`) or custom `cgt:open-contact` event.
 */
export function useHashModal(hash: string) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  useBodyScrollLock(isOpen);

  useEffect(() => {
    const syncFromHash = () => {
      setIsOpen(window.location.hash === `#${hash}`);
    };

    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent<OpenContactDetail>;
      if (customEvent.detail?.service) {
        setPreselectedService(customEvent.detail.service);
      }
      setIsOpen(true);
    };

    syncFromHash();

    window.addEventListener('hashchange', syncFromHash);
    if (hash === 'contact') {
      window.addEventListener(CONTACT_EVENT, handleCustomOpen);
    }

    return () => {
      window.removeEventListener('hashchange', syncFromHash);
      if (hash === 'contact') {
        window.removeEventListener(CONTACT_EVENT, handleCustomOpen);
      }
    };
  }, [hash]);

  const close = useCallback(() => {
    setIsOpen(false);
    if (window.location.hash === `#${hash}`) {
      window.history.pushState('', document.title, window.location.pathname + window.location.search);
    }
  }, [hash]);

  return { isOpen, close, preselectedService, setPreselectedService };
}
