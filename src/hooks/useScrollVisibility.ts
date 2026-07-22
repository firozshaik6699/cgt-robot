import { useState, useEffect } from 'react';

interface UseScrollVisibilityOptions {
  /** Minimum scroll position (px) to show the element */
  showAfter?: number;
  /** Distance from the bottom of the page (px) to hide the element */
  hideBeforeBottom?: number;
}

/**
 * Returns `true` when the user has scrolled past `showAfter` and is not
 * within `hideBeforeBottom` pixels of the page bottom.
 */
export function useScrollVisibility({
  showAfter = 450,
  hideBeforeBottom = 400,
}: UseScrollVisibilityOptions = {}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isPastThreshold = scrollY > showAfter;

      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const isNearBottom = scrollY + windowHeight > documentHeight - hideBeforeBottom;

      setIsVisible(isPastThreshold && !isNearBottom);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showAfter, hideBeforeBottom]);

  return isVisible;
}
