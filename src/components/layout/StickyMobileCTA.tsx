import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { useScrollVisibility } from '@/hooks/useScrollVisibility';
import { openContactModal } from '@/hooks/useHashModal';
import { siteConfig } from '@/data/site-config';
import { Button } from '@/components/ui/button';

const StickyMobileCTA: React.FC = () => {
  const isScrollVisible = useScrollVisibility({ showAfter: 540, hideBeforeBottom: 320 });
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
            className="w-full max-w-sm rounded-full p-1.5 flex items-center justify-between gap-2.5 pointer-events-auto border border-white/[0.12] shadow-[0_14px_40px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.1)]"
            style={{
              background: 'rgba(8, 8, 8, 0.9)',
              backdropFilter: 'blur(22px)',
              WebkitBackdropFilter: 'blur(22px)',
            }}
          >
            {/* Direct WhatsApp Quick Action */}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/12 text-[#F4751E] flex items-center justify-center shrink-0 transition-all active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4751E]/60"
              aria-label="Chat on WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-[#F4751E]/20" />
            </a>

            {/* Primary Tactile Action Button */}
            <Button
              type="button"
              onClick={() => openContactModal()}
              className="flex-1 h-11 text-xs sm:text-sm"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyMobileCTA;
