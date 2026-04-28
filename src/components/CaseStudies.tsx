import Reveal from '@/components/ui/Reveal';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
    {
        tag: 'AI Automation',
        title: 'Automated Invoice Processing for Accounting Firm',
        problem: 'Manual invoice entry consuming 20+ hours/week with frequent errors and delayed billing cycles.',
        solution: 'Built an AI-powered WhatsApp bot with natural language processing that auto-generates invoices, tracks payments, and sends reminders.',
        result: '85% reduction in manual work, 3x faster billing cycles, and zero data entry errors.',
        metric: '85%',
        metricLabel: 'Time Saved',
    },
    {
        tag: 'Full Stack Platform',
        title: 'Enterprise CRM for Real Estate Group',
        problem: 'Scattered lead data across spreadsheets with no visibility into sales pipeline or agent performance.',
        solution: 'Designed a custom CRM with automated lead scoring, pipeline dashboards, and integrated WhatsApp follow-ups.',
        result: '40% increase in lead conversion rate and complete visibility across 50+ agents.',
        metric: '40%',
        metricLabel: 'More Conversions',
    },
    {
        tag: 'Business Systems',
        title: 'Reseller Management Platform for Tech Distributor',
        problem: 'No centralized system for managing 200+ resellers, inventory tracking, or order fulfillment.',
        solution: 'Built a full-stack platform with real-time inventory, automated pricing, and reseller self-service portal.',
        result: 'Onboarded 200+ resellers in 30 days, reduced support tickets by 60%.',
        metric: '200+',
        metricLabel: 'Resellers Onboarded',
    },
];

const CaseStudies = () => {
    return (
        <section id="work" className="section-padding relative">
            <div className="container-main">
                {/* Section Header */}
                <Reveal>
                    <div className="max-w-2xl mb-16 md:mb-20">
                        <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#F4751E]/60 mb-4">Case Studies</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-5 leading-[1.1]">
                            Results that speak<br />
                            <span className="text-white/45">louder than promises.</span>
                        </h2>
                    </div>
                </Reveal>

                {/* Case Study Cards */}
                <div className="flex flex-col gap-5">
                    {caseStudies.map((study, index) => (
                        <Reveal key={study.title} delay={index * 0.1}>
                            <div className="card-premium rounded-2xl p-8 md:p-10 lg:p-12 group cursor-pointer">
                                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                                    {/* Left: Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-5">
                                            <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#F4751E]/60 px-3 py-1 rounded-full border border-[#F4751E]/10 bg-[#F4751E]/[0.03]">
                                                {study.tag}
                                            </span>
                                            <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-[#F4751E]/40 transition-colors duration-300" />
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-semibold text-white mb-6 tracking-tight leading-tight">{study.title}</h3>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/45 mb-1.5">Problem</p>
                                                <p className="text-sm text-white/60 leading-relaxed font-light">{study.problem}</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/45 mb-1.5">Solution</p>
                                                <p className="text-sm text-white/60 leading-relaxed font-light">{study.solution}</p>
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/45 mb-1.5">Result</p>
                                                <p className="text-sm text-[#F4751E]/70 leading-relaxed font-medium">{study.result}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right: Metric Highlight */}
                                    <div className="lg:w-48 flex-shrink-0 flex lg:flex-col items-center lg:items-center justify-start lg:justify-center lg:text-center gap-3 lg:gap-1 lg:pt-8">
                                        <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold gradient-text leading-none">{study.metric}</span>
                                        <span className="text-xs font-medium text-white/50 tracking-wide uppercase">{study.metricLabel}</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            <div className="section-divider mt-16 md:mt-20" />
        </section>
    );
};

export default CaseStudies;
