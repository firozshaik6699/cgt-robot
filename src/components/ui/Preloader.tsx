import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo_metallic_transparent.png';

interface PreloaderProps {
  onComplete?: () => void;
  maxWaitTimeMs?: number;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete, maxWaitTimeMs = 3800 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const dismiss = () => {
      // 500ms graceful pause so the logo holds steady before starting the cinematic dissolve
      setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 500);
    };

    if (window.__CGT_SPLINE_LOADED__) {
      dismiss();
    }

    const handleSplineLoaded = () => {
      dismiss();
    };

    window.addEventListener('cgt-spline-loaded', handleSplineLoaded);

    // Max fallback timer in case WebGL or Spline load takes extra time
    const fallbackTimer = setTimeout(() => {
      dismiss();
    }, maxWaitTimeMs);

    return () => {
      window.removeEventListener('cgt-spline-loaded', handleSplineLoaded);
      clearTimeout(fallbackTimer);
    };
  }, [maxWaitTimeMs, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04, filter: 'blur(12px)' }}
          transition={{ duration: 1.4, ease: [0.25, 1, 0.35, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#020202] overflow-hidden select-none pointer-events-auto"
        >
          {/* Outer Ambient Studio Light (GPU Accelerated) */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.4, 0.75, 0.4],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full bg-[#F4751E]/[0.18] blur-[130px] pointer-events-none"
          />

          {/* Focused Core Backlight Directly Behind Logo */}
          <motion.div
            animate={{
              scale: [0.95, 1.08, 0.95],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-r from-[#F4751E]/30 via-[#FF8F3F]/25 to-[#F4751E]/30 blur-[75px] pointer-events-none"
          />

          {/* CGT METALLIC LOGO PRELOADER */}
          <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: [1, 1.03, 1],
                opacity: 1,
                filter: [
                  'drop-shadow(0 0 30px rgba(244,117,30,0.55))',
                  'drop-shadow(0 0 50px rgba(244,117,30,0.88))',
                  'drop-shadow(0 0 30px rgba(244,117,30,0.55))',
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="relative"
            >
              <img
                src={logo}
                alt="Continental Grand Technologies Logo"
                className="h-22 sm:h-28 md:h-32 w-auto object-contain brightness-125 contrast-125"
              />
            </motion.div>

            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 flex items-center gap-2"
            >
              <span className="text-[10px] sm:text-xs font-extrabold tracking-[0.35em] uppercase text-[#F4751E] drop-shadow-[0_0_14px_rgba(244,117,30,0.6)]">
                Digital Engineering Studio
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
