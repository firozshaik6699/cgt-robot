import Reveal from '@/components/ui/Reveal';

const PrivacyPolicy = () => {
    return (
        <div className="relative min-h-screen bg-black">
            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-white mb-6 leading-[0.95]">
                                Privacy Policy
                            </h1>
                            <p className="text-sm text-white/50 font-light mb-12">
                                Last updated: July 1, 2026
                            </p>
                            
                            <div className="space-y-10 text-white/70 font-light leading-relaxed">
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
                                    <p className="mb-4">
                                        We collect information you provide directly to us, such as personal identification information (name, email address, phone number) provided voluntarily through our contact forms and consultation requests.
                                    </p>
                                    <p>
                                        We also collect technical data including IP address, browser type, operating system, referring URLs, and pages visited, collected automatically to improve site performance.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
                                    <p className="mb-4">
                                        We use your information to respond to your inquiries, provide accurate project estimates, deliver contracted software development services, and send relevant updates about your project status.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">3. Data Protection & Security</h2>
                                    <p className="mb-4">
                                        We implement regular security audits, vulnerability assessments, and penetration testing on our infrastructure. Client project data is stored in isolated, access-controlled environments.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">4. Your Rights</h2>
                                    <p className="mb-4">
                                        You have the right to request access to the personal data we hold about you at any time, request correction of any inaccurate information, or request deletion of your personal data.
                                    </p>
                                </div>
                                
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-4">5. Contact Us</h2>
                                    <p className="mb-4">
                                        If you have any questions about this Privacy Policy, please contact us through our primary contact channels provided on our website.
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

export default PrivacyPolicy;
