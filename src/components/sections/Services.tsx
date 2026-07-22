import { ServiceCarousel } from "@/components/ui/services-card";
import Reveal from "@/components/ui/Reveal";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(10,6,3,0.82)_16%,rgba(6,5,4,0.95)_58%,rgba(0,0,0,0)_100%)]">
      <div className="absolute inset-x-0 top-8 h-px bg-gradient-to-r from-transparent via-[#F4751E]/25 to-transparent" />
      <div className="absolute left-[-12%] top-24 h-72 w-72 rounded-full bg-[#F4751E]/[0.08] blur-[80px]" style={{ contain: 'strict' }} />
      <div className="absolute right-[-10%] bottom-10 h-80 w-80 rounded-full bg-[#A16207]/[0.08] blur-[90px]" style={{ contain: 'strict' }} />

      <div className="container-main relative z-10">
        <Reveal>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/60 mb-4">What We Do</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5 leading-[1.1]">
              Engineering solutions<br />
              <span className="text-white/45">that move the needle.</span>
            </h2>
            <p className="text-base text-white/55 leading-relaxed max-w-lg font-light">
              We don't do cookie-cutter. Every system we build is purpose-engineered for your business outcomes.
            </p>
          </div>
        </Reveal>

        <ServiceCarousel services={services} />
      </div>

      <div className="section-divider mt-16 md:mt-20" />
    </section>
  );
};

export default Services;
