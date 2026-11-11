import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import logo from '@/assets/logo_metallic_transparent.png';

interface PreloaderProps {
  onComplete?: () => void;
  /** Hard network-failure ceiling (ms) so an offline/blocked client never deadlocks forever */
  maxWaitTimeMs?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({
  onComplete,
  maxWaitTimeMs = 22000,
}) => {
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, '') || '/';
  const isHomeRoute = pathname === '/';

  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(8);
  const hasDismissed = useRef(false);

  // Lock body scroll on iOS & Android while Preloader is covering the viewport
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isVisible]);

  useEffect(() => {
    const finalizeReveal = () => {
      if (hasDismissed.current) return;
      hasDismissed.current = true;
      setProgress(100);

      // Brief beat at 100% so progress bar completes cleanly, then trigger Hero + Curtain sync
      window.setTimeout(() => {
        window.__CGT_PRELOADER_DONE__ = true;
        window.dispatchEvent(new CustomEvent('cgt-preloader-reveal'));
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 220);
    };

    // Non-home routes (/blog, /partnership/syncrobiz, etc.) have no 3D robot — release swiftly
    if (!isHomeRoute) {
      if (hasDismissed.current) return;
      const quickTimer = window.setTimeout(finalizeReveal, 450);
      return () => window.clearTimeout(quickTimer);
    }

    // Home route: strictly wait until Spline 3D robot finishes loading & painting frame 2
    if (window.__CGT_SPLINE_LOADED__) {
      finalizeReveal();
      return;
    }

    // If user entered via a subpage first and then navigated to '/' before robot loaded,
    // re-engage the preloader until the 3D robot finishes initializing
    hasDismissed.current = false;
    window.__CGT_PRELOADER_DONE__ = false;
    setProgress(12);
    setIsVisible(true);

    // Smooth asymptotic progress curve up to 92% while 3D runtime + scene download on new devices
    const progressInterval = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 92) return prev;
        const remaining = 92 - prev;
        const step = Math.max(0.8, remaining * 0.08);
        return Math.min(92, Math.round((prev + step) * 10) / 10);
      });
    }, 140);

    const handleSplineLoaded = () => {
      window.clearInterval(progressInterval);
      finalizeReveal();
    };

    window.addEventListener('cgt-spline-loaded', handleSplineLoaded);

    // Generous 22s safety ceiling only in case Cloudinary is blocked/offline
    const safetyTimer = window.setTimeout(() => {
      window.clearInterval(progressInterval);
      finalizeReveal();
    }, maxWaitTimeMs);

    return () => {
      window.clearInterval(progressInterval);
      window.removeEventListener('cgt-spline-loaded', handleSplineLoaded);
      window.clearTimeout(safetyTimer);
    };
  }, [isHomeRoute, maxWaitTimeMs, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          // Pure GPU opacity + subtle scale (NO CSS filter:blur on fullscreen layer — protects iOS WebGL VRAM)
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#020202] overflow-hidden select-none pointer-events-auto touch-none"
        >
          {/* Zero-VRAM Radial Ambient Studio Glow (replaces heavy blur-[130px] offscreen texture on iOS) */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.55, 0.85, 0.55],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[680px] sm:h-[680px] rounded-full pointer-events-none will-change-transform"
            style={{
              background:
                'radial-gradient(circle, rgba(244,117,30,0.24) 0%, rgba(244,117,30,0.08) 36%, rgba(244,117,30,0) 68%)',
            }}
          />

          {/* CGT Metallic + Orange Triangle Brand Mark & Live Loader Progress */}
          <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{
                scale: [1, 1.02, 1],
                opacity: 1,
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative will-change-transform"
            >
              <img
                src={logo}
                alt="Continental Grand Technologies Logo"
                className="h-14 sm:h-20 md:h-24 w-auto object-contain brightness-105 contrast-105 drop-shadow-[0_0_28px_rgba(244,117,30,0.42)]"
              />
            </motion.div>

            {/* Studio Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 flex flex-col items-center gap-3.5"
            >
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.34em] uppercase text-[#F4751E]">
                Digital Engineering Studio
              </span>

              {/* Sleek Architectural Progress Track */}
              {isHomeRoute && (
                <div className="flex flex-col items-center gap-2 w-44 sm:w-52">
                  <div className="w-full h-[2px] rounded-full bg-white/[0.08] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#F4751E] via-[#FF9D59] to-[#F4751E] transition-[width] duration-200 ease-out"
                      style={{ width: `${Math.min(100, Math.round(progress))}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono tracking-[0.18em] text-white/35 tabular-nums">
                    {Math.min(100, Math.round(progress))}%
                  </span>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
