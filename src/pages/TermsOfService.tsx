import Reveal from '@/components/ui/Reveal';

const TermsOfService = () => {
    return (
        <div className="relative min-h-screen bg-black">
            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-white mb-6 leading-[0.95]">
                                Terms of Service
                            </h1>
                            <p className="text-sm text-white/50 font-light mb-12">
                                Last updated: July 1, 2026
                            </p>
                            
                            <div className="space-y-10 text-white/70 font-light leading-relaxed">
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                                    <p className="mb-4">
                                        By accessing or using our services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">2. Intellectual Property Rights</h2>
                                    <p className="mb-4">
                                        Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site are owned or controlled by us.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">3. User Representations</h2>
                                    <p className="mb-4">
                                        By using the Site, you represent and warrant that all registration information you submit will be true, accurate, current, and complete. You will maintain the accuracy of such information.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">4. Limitation of Liability</h2>
                                    <p className="mb-4">
                                        In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages.
                                    </p>
                                </div>
                                
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">5. Modifications</h2>
                                    <p className="mb-4">
                                        We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default TermsOfService;
