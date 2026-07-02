import Reveal from '@/components/ui/Reveal';

const Blog = () => {
    return (
        <div className="relative min-h-screen bg-black">
            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-white mb-6 leading-[0.95]">
                                Blog
                            </h1>
                            <p className="text-lg text-white/50 font-light mb-16">
                                Thoughts, engineering insights, and updates from the team.
                            </p>
                            
                            <div className="space-y-12">
                                <article className="group cursor-pointer">
                                    <p className="text-sm text-white/40 mb-2">Jun 28, 2026 • 8 min read</p>
                                    <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-white/80 transition-colors">
                                        Why AI Agents Are Replacing Traditional Workflows in 2026
                                    </h2>
                                    <p className="text-white/60 font-light leading-relaxed">
                                        The shift from rule-based automation to intelligent agents is accelerating. Here's how businesses are deploying autonomous AI systems to handle complex, multi-step workflows.
                                    </p>
                                </article>

                                <div className="h-px bg-white/10 w-full" />

                                <article className="group cursor-pointer">
                                    <p className="text-sm text-white/40 mb-2">Jun 22, 2026 • 12 min read</p>
                                    <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-white/80 transition-colors">
                                        Building Scalable Full-Stack Platforms: Our Architecture Playbook
                                    </h2>
                                    <p className="text-white/60 font-light leading-relaxed">
                                        From monolith to microservices — the engineering decisions that define whether your platform scales to 10 users or 10 million.
                                    </p>
                                </article>

                                <div className="h-px bg-white/10 w-full" />

                                <article className="group cursor-pointer">
                                    <p className="text-sm text-white/40 mb-2">Jun 15, 2026 • 6 min read</p>
                                    <h2 className="text-2xl font-semibold text-white mb-3 group-hover:text-white/80 transition-colors">
                                        The Real Cost of Not Modernizing Your CRM
                                    </h2>
                                    <p className="text-white/60 font-light leading-relaxed">
                                        Legacy CRM systems are costing businesses more than they realize. We break down the hidden costs of outdated systems and the ROI of modern platforms.
                                    </p>
                                </article>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default Blog;
