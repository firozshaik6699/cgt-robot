import { BrainCircuit, Code2, Database, MessageSquare, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const services = [
    {
        icon: BrainCircuit,
        title: 'AI Automation',
        description: 'Custom AI agents, workflow automation, and intelligent systems that eliminate manual processes and accelerate growth.',
    },
    {
        icon: Code2,
        title: 'Full Stack Development',
        description: 'Scalable web applications built with modern frameworks — from MVPs to complex enterprise platforms.',
    },
    {
        icon: Database,
        title: 'CRM & Business Systems',
        description: 'End-to-end CRM solutions, ERP integrations, and custom business tools that streamline your operations.',
    },
    {
        icon: MessageSquare,
        title: 'WhatsApp & AI Bots',
        description: 'Conversational AI bots for WhatsApp, web, and messaging platforms — driving engagement and automating support.',
    },
];

const Services = () => {
    return (
        <section id="services" className="section-padding relative">
            <div className="container-main">
                {/* Section Header */}
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

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {services.map((service, index) => (
                        <Reveal key={service.title} delay={index * 0.1}>
                            <div className="card-premium rounded-2xl p-8 md:p-10 group cursor-pointer h-full">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                                        <service.icon className="w-5 h-5 text-[#F4751E]/70" />
                                    </div>
                                    <ArrowUpRight className="w-5 h-5 text-white/10 group-hover:text-[#F4751E]/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{service.title}</h3>
                                <p className="text-sm text-white/55 leading-relaxed font-light">{service.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <div className="section-divider mt-16 md:mt-20" />
        </section>
    );
};

export default Services;
