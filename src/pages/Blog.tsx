import { useState } from 'react';
import { ArrowUpRight, Clock, Calendar, BrainCircuit, Code2, Briefcase, Cpu, Sparkles, TrendingUp } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';

const categories = ['All', 'AI & Automation', 'Engineering', 'Business', 'Product'];

const blogPosts = [
    {
        category: 'AI & Automation',
        icon: BrainCircuit,
        title: 'Why AI Agents Are Replacing Traditional Workflows in 2026',
        excerpt: 'The shift from rule-based automation to intelligent agents is accelerating. Here\'s how businesses are deploying autonomous AI systems to handle complex, multi-step workflows that were previously impossible to automate.',
        readTime: '8 min read',
        date: 'Jun 28, 2026',
        featured: true,
    },
    {
        category: 'Engineering',
        icon: Code2,
        title: 'Building Scalable Full-Stack Platforms: Our Architecture Playbook',
        excerpt: 'From monolith to microservices — the engineering decisions that define whether your platform scales to 10 users or 10 million. A deep dive into our stack choices and design patterns.',
        readTime: '12 min read',
        date: 'Jun 22, 2026',
        featured: false,
    },
    {
        category: 'Business',
        icon: Briefcase,
        title: 'The Real Cost of Not Modernizing Your CRM',
        excerpt: 'Legacy CRM systems are costing businesses more than they realize. We break down the hidden costs of outdated systems and the ROI of modern, custom-built CRM platforms.',
        readTime: '6 min read',
        date: 'Jun 15, 2026',
        featured: false,
    },
    {
        category: 'AI & Automation',
        icon: Cpu,
        title: 'WhatsApp AI Bots: From Gimmick to Revenue Channel',
        excerpt: 'How enterprise-grade WhatsApp bots are driving real business outcomes — lead qualification, support automation, and payment processing through conversational interfaces.',
        readTime: '10 min read',
        date: 'Jun 8, 2026',
        featured: false,
    },
    {
        category: 'Product',
        icon: Sparkles,
        title: 'Designing Enterprise Software That People Actually Want to Use',
        excerpt: 'Enterprise doesn\'t have to mean ugly. Our approach to building B2B products combines premium design with complex functionality — without compromising on either.',
        readTime: '7 min read',
        date: 'May 30, 2026',
        featured: false,
    },
    {
        category: 'Business',
        icon: TrendingUp,
        title: 'How Strategic Tech Partnerships Accelerate Growth',
        excerpt: 'The CGT x Syncrobiz partnership model demonstrates how complementary capabilities create outsized value for clients. Lessons from building collaborative go-to-market strategies.',
        readTime: '5 min read',
        date: 'May 22, 2026',
        featured: false,
    },
];

const cardTones = [
    {
        card: 'border-[#F4751E]/18 bg-[linear-gradient(145deg,rgba(244,117,30,0.09),rgba(11,8,6,0.92)_48%,rgba(0,0,0,0.95))]',
        badge: 'border-[#F4751E]/25 bg-[#F4751E]/[0.10] text-[#F4751E]',
        glow: 'bg-[#F4751E]/[0.12]',
    },
    {
        card: 'border-white/[0.07] bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(8,8,8,0.94)_48%,rgba(23,12,6,0.85))]',
        badge: 'border-white/[0.12] bg-white/[0.05] text-white/70',
        glow: 'bg-white/[0.07]',
    },
    {
        card: 'border-[#A16207]/16 bg-[linear-gradient(145deg,rgba(161,98,7,0.09),rgba(9,8,7,0.94)_52%,rgba(0,0,0,0.95))]',
        badge: 'border-[#A16207]/25 bg-[#A16207]/[0.10] text-[#A16207]',
        glow: 'bg-[#A16207]/[0.10]',
    },
    {
        card: 'border-[#F4751E]/14 bg-[linear-gradient(145deg,rgba(244,117,30,0.06),rgba(3,3,3,0.94)_45%,rgba(28,16,8,0.85))]',
        badge: 'border-[#F4751E]/20 bg-[#F4751E]/[0.07] text-[#F4751E]/80',
        glow: 'bg-[#F4751E]/[0.08]',
    },
    {
        card: 'border-[#C9863D]/14 bg-[linear-gradient(145deg,rgba(201,134,61,0.07),rgba(15,15,14,0.94)_50%,rgba(0,0,0,0.95))]',
        badge: 'border-[#C9863D]/22 bg-[#C9863D]/[0.09] text-[#C9863D]',
        glow: 'bg-[#C9863D]/[0.08]',
    },
    {
        card: 'border-[#8B5E34]/18 bg-[linear-gradient(145deg,rgba(139,94,52,0.09),rgba(13,14,14,0.94)_50%,rgba(0,0,0,0.95))]',
        badge: 'border-[#8B5E34]/25 bg-[#8B5E34]/[0.10] text-[#8B5E34]',
        glow: 'bg-[#8B5E34]/[0.08]',
    },
];

const Blog = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredPosts = activeFilter === 'All'
        ? blogPosts
        : blogPosts.filter(post => post.category === activeFilter);

    return (
        <div className="relative min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="absolute left-[-15%] top-16 h-80 w-80 rounded-full bg-[#F4751E]/[0.06] blur-[100px]" style={{ contain: 'strict' }} />
                <div className="absolute right-[-10%] top-24 h-64 w-64 rounded-full bg-[#A16207]/[0.06] blur-[90px]" style={{ contain: 'strict' }} />

                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#F4751E]/20 bg-[#F4751E]/[0.06] mb-8">
                                <Sparkles className="w-3.5 h-3.5 text-[#F4751E]" />
                                <span className="text-xs font-medium tracking-[0.12em] uppercase text-[#F4751E]/80">Insights</span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.04em] text-white mb-6 leading-[0.95]">
                                Insights &<br />
                                <span className="gradient-text">Engineering Notes</span>
                            </h1>
                            <p className="text-base md:text-lg text-white/55 leading-relaxed max-w-2xl font-light">
                                Perspectives on AI, modern engineering, and building digital systems that create real business impact. Written by the CGT team.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </section>

            <div className="section-divider" />

            {/* Filter Tabs & Blog Grid */}
            <section className="section-padding relative overflow-hidden">
                <div className="absolute right-[-12%] top-[10%] h-72 w-72 rounded-full bg-[#F4751E]/[0.04] blur-[80px]" style={{ contain: 'strict' }} />
                <div className="absolute left-[-8%] bottom-[20%] h-56 w-56 rounded-full bg-[#A16207]/[0.03] blur-[70px]" style={{ contain: 'strict' }} />

                <div className="container-main relative z-10">
                    {/* Filter Pills */}
                    <Reveal>
                        <div className="flex flex-wrap gap-3 mb-12">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                        activeFilter === cat
                                            ? 'bg-[#F4751E] text-white border-[#F4751E] shadow-[0_8px_25px_rgba(244,117,30,0.25)]'
                                            : 'bg-black/30 text-white/55 border-white/[0.08] hover:text-white/80 hover:border-white/[0.15] hover:bg-white/[0.03]'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </Reveal>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredPosts.map((post, index) => {
                            const tone = cardTones[index % cardTones.length];
                            // First card spans 2 columns on large screens
                            const spanClass = index === 0 && activeFilter === 'All' ? 'lg:col-span-2' : '';

                            return (
                                <Reveal key={post.title} delay={index * 0.08} className={spanClass}>
                                    <a
                                        href="#"
                                        onClick={e => e.preventDefault()}
                                        className={`relative h-full flex flex-col overflow-hidden rounded-2xl border p-7 md:p-8 transition-all duration-500 group cursor-pointer hover:-translate-y-1 hover:border-[#F4751E]/35 ${tone.card}`}
                                    >
                                        {/* Top accent */}
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/30 to-transparent opacity-60" />
                                        {/* Glow */}
                                        <div className={`absolute -right-14 -top-14 h-36 w-36 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-75 ${tone.glow}`} style={{ contain: 'strict' }} />

                                        <div className="relative z-10 flex flex-col h-full">
                                            {/* Badge & Arrow */}
                                            <div className="flex items-center justify-between mb-6">
                                                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[11px] font-medium tracking-wide uppercase ${tone.badge}`}>
                                                    <post.icon className="w-3 h-3" />
                                                    {post.category}
                                                </div>
                                                <ArrowUpRight className="w-5 h-5 text-white/15 group-hover:text-[#F4751E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-lg md:text-xl font-semibold text-white tracking-tight mb-3 leading-snug group-hover:text-white/95 transition-colors duration-300">
                                                {post.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-sm text-white/45 leading-relaxed font-light mb-6 flex-grow">
                                                {post.excerpt}
                                            </p>

                                            {/* Meta */}
                                            <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                                                <div className="flex items-center gap-1.5 text-white/35 text-xs">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime}
                                                </div>
                                                <div className="flex items-center gap-1.5 text-white/35 text-xs">
                                                    <Calendar className="w-3 h-3" />
                                                    {post.date}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Reveal>
                            );
                        })}
                    </div>

                    {/* Empty State */}
                    {filteredPosts.length === 0 && (
                        <Reveal>
                            <div className="text-center py-20">
                                <p className="text-white/40 text-lg font-light">No articles found in this category yet.</p>
                                <button
                                    onClick={() => setActiveFilter('All')}
                                    className="mt-4 text-[#F4751E] text-sm font-medium hover:text-[#e06815] transition-colors"
                                >
                                    View all articles →
                                </button>
                            </div>
                        </Reveal>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="relative pb-24">
                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-2xl border border-[#F4751E]/16 bg-[radial-gradient(circle_at_18%_0%,rgba(244,117,30,0.12),transparent_34%),linear-gradient(145deg,rgba(244,117,30,0.06),rgba(4,4,4,0.97)_44%,rgba(0,0,0,0.98))] px-8 py-10 md:p-14 text-center">
                            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/40 to-transparent" />
                            <div className="absolute right-[-10%] top-[-18%] h-48 w-48 rounded-full bg-[#F4751E]/[0.08] blur-[70px]" style={{ contain: 'strict' }} />

                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">
                                    Stay in the loop
                                </h3>
                                <p className="text-sm md:text-base text-white/50 font-light max-w-md mx-auto mb-8 leading-relaxed">
                                    Get our latest engineering insights and project updates delivered directly — no spam, just substance.
                                </p>
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md mx-auto">
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="flex-1 px-5 py-3.5 rounded-full bg-black/50 border border-white/[0.08] text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#F4751E]/40 focus:ring-1 focus:ring-[#F4751E]/20 transition-all duration-300"
                                    />
                                    <button className="px-8 py-3.5 rounded-full bg-[#F4751E] text-white font-semibold text-sm hover:bg-[#e06815] transition-all duration-300 shadow-[0_12px_35px_rgba(244,117,30,0.2)] hover:shadow-[0_16px_45px_rgba(244,117,30,0.3)] hover:-translate-y-0.5 active:scale-[0.98] flex items-center justify-center gap-2">
                                        Subscribe
                                        <ArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Blog;
