import React from 'react';
import { BrandScroller, BrandScrollerReverse } from './ui/brand-scroller';
import { 
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase, 
  SiPostgresql, SiFastapi, SiPython, SiVercel, SiDocker, 
  SiGithub, SiAnthropic, SiGooglegemini, SiWhatsapp, 
  SiStripe, SiFramer 
} from 'react-icons/si';
import { TbBrandOpenai } from 'react-icons/tb';

const row1 = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
];

const row2 = [
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
  { name: 'OpenAI', icon: TbBrandOpenai, color: '#ffffff' },
  { name: 'Claude', icon: SiAnthropic, color: '#d97757' },
  { name: 'Gemini', icon: SiGooglegemini, color: '#8E75B2' },
  { name: 'WhatsApp API', icon: SiWhatsapp, color: '#25D366' },
  { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
];

const TechItem = ({ name, icon: Icon, color }: { name: string, icon: any, color: string }) => (
  <div className="flex items-center w-[180px] md:w-[200px] gap-4 group/tech cursor-default">
    <div className="p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 group-hover/tech:bg-white/10 group-hover/tech:border-white/20 group-hover/tech:shadow-[0_0_20px_rgba(244,117,30,0.15)] group-hover/tech:-translate-y-1">
      <Icon size={24} className="text-white/70 transition-colors duration-300 group-hover/tech:!text-[color:var(--hover-color)]" style={{ '--hover-color': color } as React.CSSProperties} />
    </div>
    <p className="text-sm md:text-base font-semibold opacity-70 group-hover/tech:opacity-100 transition-opacity duration-300">
      {name}
    </p>
  </div>
);

const TechStackScroller = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-color/5 via-bg-primary to-bg-primary pointer-events-none" />
      
      <div className="container-main relative z-10 mb-12 md:mb-20 text-center">
        <h2 className="mb-4 md:mb-6 font-extrabold tracking-tight animate-fade-in">
          Technologies We <span className="gradient-text">Build With</span>
        </h2>
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '100ms' }}>
          Modern web, cloud, AI, and automation stacks engineered for scalable digital systems.
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-6 md:gap-10">
        <BrandScroller duration="45s" gap="3rem">
          {row1.map((tech) => (
            <TechItem key={tech.name} {...tech} />
          ))}
        </BrandScroller>
        
        <BrandScrollerReverse duration="50s" gap="3rem">
          {row2.map((tech) => (
            <TechItem key={tech.name} {...tech} />
          ))}
        </BrandScrollerReverse>
      </div>
      
      {/* Extra subtle overlays for edge fading, complementing the mask-image */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[10%] md:w-[15%] bg-gradient-to-r from-bg-primary to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[10%] md:w-[15%] bg-gradient-to-l from-bg-primary to-transparent z-20" />
    </section>
  );
};

export default TechStackScroller;
