import { useState } from 'react';
import { ArrowUpRight, ChevronDown, Clock, Sparkles } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import SEO from '@/components/seo/SEO';
import { Button } from '@/components/ui/button';
import { openContactModal } from '@/hooks/useHashModal';

interface Article {
    id: string;
    date: string;
    readTime: string;
    tag: string;
    modalService: string;
    title: string;
    summary: string;
    takeaways: string[];
    architectureNote: string;
}

const articles: Article[] = [
    {
        id: 'ai-agents-2026',
        date: 'Oct 18, 2026',
        readTime: '8 min read',
        tag: 'AI Systems',
        modalService: 'AI Automation & Custom Agents',
        title: 'Why Autonomous AI Agents Are Replacing Brittle Rule-Based Workflows',
        summary:
            'Deterministic webhook chains break the moment unstructured real-world inputs arrive. Here is how production teams are deploying tool-calling AI agents with human-in-the-loop guardrails.',
        takeaways: [
            'Hybrid routing: deterministic state machines wrap LLM reasoning steps so latency stays predictable and auditable.',
            'Structured tool outputs with strict JSON schema validation eliminate downstream CRM and ERP data corruption.',
            'Teams typically reclaim 120–180+ manual operations hours per month within the first 45 days of deployment.',
        ],
        architectureNote:
            'At CGT, we architect agent pipelines with isolated execution sandboxes, idempotency keys, and full trace observability before exposing any autonomous action to production data.',
    },
    {
        id: 'scalable-fullstack-playbook',
        date: 'Sep 29, 2026',
        readTime: '11 min read',
        tag: 'Platform Architecture',
        modalService: 'Full-Stack Web/App System',
        title: 'Engineering High-Concurrency Full-Stack Platforms: Our Production Playbook',
        summary:
            'From modular monoliths to event-driven services — the concrete database indexing, caching, and API boundary decisions that determine whether your platform scales cleanly.',
        takeaways: [
            'Start with a strictly typed modular monolith; split services only along proven throughput or compliance boundaries.',
            'Sub-100ms P95 API reads come from deliberate composite indexing, connection pooling, and edge cache invalidation.',
            'Zero-downtime schema migrations (expand-and-contract) keep weekly shipping velocity high as user traffic compounds.',
        ],
        architectureNote:
            'Every full-stack system shipped by Continental Grand Technologies includes automated CI checks, typed API contracts, and real-time uptime telemetry out of the box.',
    },
    {
        id: 'legacy-crm-cost',
        date: 'Sep 12, 2026',
        readTime: '6 min read',
        tag: 'Enterprise Systems',
        modalService: 'CRM & ERP Solutions',
        title: 'The Hidden Operational Tax of Generic Off-the-Shelf CRMs',
        summary:
            'Bloated per-seat licensing and manual spreadsheet bridges silently drain revenue velocity. We break down when bespoke internal tooling outperforms legacy SaaS.',
        takeaways: [
            'Sales and dispatch teams lose up to 28% of productive hours toggling across disconnected tabs and manual CSV exports.',
            'Custom role-based consoles tailored to your exact pipeline eliminate per-seat enterprise SaaS markups.',
            'Direct WhatsApp, billing, and inventory synchronization turns your CRM from a passive database into an active operating system.',
        ],
        architectureNote:
            'We migrate legacy spreadsheets and fragmented CRM data incrementally — ensuring zero lost leads and zero disruption to live sales operations.',
    },
];

const Blog = () => {
    const [expandedId, setExpandedId] = useState<string>(articles[0].id);

    const toggleArticle = (id: string) => {
        setExpandedId((prev) => (prev === id ? '' : id));
    };

    return (
        <main className="relative min-h-screen bg-black">
            <SEO
                title="Engineering Blog & Architecture Insights"
                description="Technical insights on autonomous AI agents, scalable full-stack SaaS architecture, and custom CRM systems from Continental Grand Technologies (cgtofficial.com)."
                path="/blog"
            />

            <section className="relative pt-36 pb-24 overflow-hidden">
                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#F4751E]/20 bg-[#F4751E]/[0.06] px-3.5 py-1.5 mb-6">
                                <Sparkles className="w-3.5 h-3.5 text-[#F4751E]" />
                                <span className="text-[10.5px] font-semibold tracking-[0.18em] uppercase text-[#F4751E]/85">
                                    Engineering Notes
                                </span>
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.04em] text-white mb-5 leading-[0.98]">
                                Systems &amp; <span className="gradient-text">Architecture</span>
                            </h1>
                            <p className="text-base sm:text-lg text-white/55 font-light mb-14 max-w-2xl leading-relaxed">
                                Practical field notes from the CGT engineering team on autonomous AI workflows, scalable SaaS infrastructure, and operational software design.
                            </p>

                            <div className="flex flex-col gap-5">
                                {articles.map((article) => {
                                    const isExpanded = expandedId === article.id;

                                    return (
                                        <article
                                            key={article.id}
                                            className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                                                isExpanded
                                                    ? 'border-[#F4751E]/35 bg-[#0b0806]/95 shadow-[0_20px_60px_rgba(0,0,0,0.65),inset_0_1px_0_rgba(255,255,255,0.06)]'
                                                    : 'border-white/[0.08] bg-[#080808]/80 hover:border-white/[0.16] hover:bg-[#0c0c0c]'
                                            }`}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => toggleArticle(article.id)}
                                                aria-expanded={isExpanded}
                                                className="w-full text-left p-6 sm:p-8 flex flex-col gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F4751E]/60"
                                            >
                                                <div className="flex flex-wrap items-center justify-between gap-2">
                                                    <div className="flex items-center gap-3 text-xs text-white/45">
                                                        <span className="px-2.5 py-0.5 rounded-full bg-[#F4751E]/[0.1] border border-[#F4751E]/25 text-[#FF9B54] font-medium">
                                                            {article.tag}
                                                        </span>
                                                        <span>{article.date}</span>
                                                        <span className="inline-flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {article.readTime}
                                                        </span>
                                                    </div>

                                                    <span
                                                        className={`h-8 w-8 rounded-full border border-white/10 bg-white/[0.04] flex items-center justify-center text-white/60 transition-transform duration-300 ${
                                                            isExpanded ? 'rotate-180 text-[#F4751E] border-[#F4751E]/30' : ''
                                                        }`}
                                                    >
                                                        <ChevronDown className="w-4 h-4" />
                                                    </span>
                                                </div>

                                                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug pr-4">
                                                    {article.title}
                                                </h2>

                                                <p className="text-sm sm:text-[15px] text-white/60 font-light leading-relaxed">
                                                    {article.summary}
                                                </p>
                                            </button>

                                            {isExpanded && (
                                                <div className="px-6 sm:px-8 pb-7 sm:pb-8 pt-2 border-t border-white/[0.06] animate-fade-in">
                                                    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F4751E]/80 mb-3.5 mt-3">
                                                        Key Engineering Takeaways
                                                    </h3>
                                                    <ul className="space-y-2.5 mb-6">
                                                        {article.takeaways.map((point) => (
                                                            <li key={point} className="flex items-start gap-3 text-sm text-white/75 font-light leading-relaxed">
                                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#F4751E] shrink-0" />
                                                                <span>{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    <div className="rounded-2xl border border-white/[0.07] bg-black/50 p-4 sm:p-5 mb-6">
                                                        <p className="text-xs sm:text-sm text-white/65 font-light leading-relaxed">
                                                            <strong className="text-white font-semibold">Studio Standard: </strong>
                                                            {article.architectureNote}
                                                        </p>
                                                    </div>

                                                    <Button
                                                        type="button"
                                                        variant="accent"
                                                        size="sm"
                                                        onClick={() => openContactModal(article.modalService)}
                                                    >
                                                        <span>Discuss This Architecture</span>
                                                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                                    </Button>
                                                </div>
                                            )}
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default Blog;
