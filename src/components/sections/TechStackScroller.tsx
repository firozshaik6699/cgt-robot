import React from 'react';
import Reveal from '@/components/ui/Reveal';
import { BrandScroller, BrandScrollerReverse } from '@/components/ui/brand-scroller';
import { techStackRow1, techStackRow2 } from '@/data/tech-stack';
import type { TechItem } from '@/types';

const TechPillCard = ({ name, tag, icon: Icon, color }: TechItem) => (
  <div className="group/tech relative flex items-center gap-3.5 px-4.5 py-3 rounded-2xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md hover:bg-[#111111] hover:border-[#F4751E]/40 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(244,117,30,0.2)] hover:-translate-y-0.5 cursor-default shrink-0">
    {/* Subtle top brand glow line */}
    <div 
      className="absolute top-0 inset-x-4 h-0.5 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-500 rounded-full" 
      style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
    />
    
    <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 group-hover/tech:border-white/20 transition-colors duration-300">
      <Icon size={20} className="text-white/80 transition-colors duration-300 group-hover/tech:!text-[color:var(--hover-color)]" style={{ '--hover-color': color } as React.CSSProperties} />
    </div>

    <div className="flex flex-col text-left">
      <span className="text-xs sm:text-sm font-semibold text-white tracking-tight group-hover/tech:text-white transition-colors duration-300">
        {name}
      </span>
      <span className="text-[9px] sm:text-[10px] font-medium text-white/40 uppercase tracking-wider group-hover/tech:text-[#F4751E]/90 transition-colors duration-300">
        {tag}
      </span>
    </div>
  </div>
);

const TechStackScroller = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-[#040404]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-[#F4751E]/[0.05] blur-[100px] pointer-events-none" style={{ contain: 'strict' }} />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="container-main relative z-10 mb-10 md:mb-14 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F4751E]/20 bg-[#F4751E]/[0.06] px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F4751E] shadow-[0_0_8px_rgba(244,117,30,0.8)]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F4751E]/80">Tech Ecosystem</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-[-0.03em] text-white leading-[1.1] mb-4">
            Technologies We <span className="gradient-text">Build With</span>
          </h2>
          
          <p className="text-white/55 text-sm sm:text-base max-w-xl mx-auto font-light leading-relaxed">
            Battle-tested programming languages, relational & NoSQL databases, web frameworks, and cloud DevOps tools.
          </p>
        </Reveal>
      </div>

      {/* 21st.dev Animated Dual-Row Marquee */}
      <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
        <BrandScroller duration="28s" gap="1.25rem">
          {techStackRow1.map((tech) => (
            <TechPillCard key={`r1-${tech.name}`} {...tech} />
          ))}
        </BrandScroller>
        
        <BrandScrollerReverse duration="32s" gap="1.25rem">
          {techStackRow2.map((tech) => (
            <TechPillCard key={`r2-${tech.name}`} {...tech} />
          ))}
        </BrandScrollerReverse>
      </div>

      {/* Gradient edge masks for seamless visual fading */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[12%] md:w-[18%] bg-gradient-to-r from-[#040404] to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[12%] md:w-[18%] bg-gradient-to-l from-[#040404] to-transparent z-20" />

      <div className="section-divider mt-14 md:mt-18" />
    </section>
  );
};

export default TechStackScroller;
