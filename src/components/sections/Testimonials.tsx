import React, { useState } from 'react';
import Reveal from '@/components/ui/Reveal';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding relative overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(244,117,30,0.06),transparent_50%),linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(6,5,4,0.92)_40%,rgba(0,0,0,0)_100%)]">
      {/* Background divider lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute right-[-10%] top-[20%] w-[450px] h-[450px] rounded-full bg-[#F4751E]/[0.05] blur-[100px] pointer-events-none" style={{ contain: 'strict' }} />

      <div className="container-main relative z-10">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F4751E]/20 bg-[#F4751E]/[0.06] px-4 py-1.5 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F4751E] shadow-[0_0_8px_rgba(244,117,30,0.8)]" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F4751E]/80">Client Validation</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-white leading-[1.1] mb-4">
              Proven Results <span className="text-white/60">From Leaders</span>
            </h2>
          </div>
        </Reveal>

        {/* Testimonial Luxury Card Showcase */}
        <div className="max-w-4xl mx-auto relative px-2 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl p-8 sm:p-12 md:p-14 shadow-[0_25px_60px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.08)]"
            >
              {/* Decorative top accent glow */}
              <div className="absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-[#F4751E]/50 to-transparent" />
              
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center justify-between">
                
                {/* Left Content */}
                <div className="flex-1 flex flex-col items-start text-left">
                  
                  {/* Rating Stars & Industry Tag */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center gap-1 text-[#F4751E]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#F4751E] stroke-none" />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-white/40 border-l border-white/10 pl-3">
                      {current.industry}
                    </span>
                  </div>

                  {/* Quote */}
                  <div className="relative mb-8">
                    <Quote className="w-10 h-10 text-[#F4751E]/20 absolute -top-4 -left-3 pointer-events-none" />
                    <p className="text-base sm:text-lg md:text-xl text-white/90 font-light leading-relaxed relative z-10">
                      "{current.quote}"
                    </p>
                  </div>

                  {/* Author */}
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">{current.author}</h4>
                    <p className="text-xs sm:text-sm text-white/50">{current.role} &bull; <span className="text-[#F4751E]/90 font-medium">{current.company}</span></p>
                  </div>
                </div>

                {/* Right Metric Callout */}
                <div className="w-full md:w-auto shrink-0 flex md:flex-col items-center justify-between md:justify-center p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                  <div>
                    <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white gradient-text tracking-tight mb-1">
                      {current.metric}
                    </div>
                    <div className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-white/60">
                      {current.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'w-8 bg-[#F4751E]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="p-3 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/20 active:scale-95 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="p-3 rounded-full border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/20 active:scale-95 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="section-divider mt-16 md:mt-20" />
    </section>
  );
};

export default Testimonials;
