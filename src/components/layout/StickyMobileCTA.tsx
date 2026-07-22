import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { siteConfig } from '@/data/site-config';

const StickyMobileCTA: React.FC = () => {
  const isScrollVisible = useScrollVisibility({ showAfter: 450, hideBeforeBottom: 400 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setIsModalOpen(window.location.hash === '#contact');
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isVisible = isScrollVisible && !isModalOpen;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none md:hidden"
        >
          <div 
            className="w-full max-w-sm rounded-full p-2 flex items-center justify-between gap-3 pointer-events-auto border border-white/10 shadow-[0_10px_35px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)]"
            style={{
              background: 'rgba(10, 10, 10, 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
            }}
          >
            {/* Direct WhatsApp Quick Link */}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-[#F4751E] flex items-center justify-center min-w-[44px] min-h-[44px] transition-colors"
              aria-label="Direct WhatsApp Contact"
            >
              <MessageCircle className="w-5 h-5 fill-[#F4751E]/20" />
            </a>

            {/* Primary Action Button */}
            <a
              href="#contact"
              onClick={() => {
                window.location.hash = 'contact';
              }}
              className="flex-1 py-3 px-5 rounded-full bg-[#F4751E] hover:bg-[#e06815] text-white text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(244,117,30,0.35)] transition-all active:scale-[0.98]"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
