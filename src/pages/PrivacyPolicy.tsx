import Reveal from '@/components/ui/Reveal';
import SEO from '@/components/seo/SEO';
import { siteConfig } from '@/data/site-config';

const PrivacyPolicy = () => {
    return (
        <main className="relative min-h-screen bg-black">
            <SEO
                title="Privacy Policy"
                description="Privacy Policy for Continental Grand Technologies (cgtofficial.com), detailing how we collect, safeguard, and process inquiry and client information."
                path="/privacy"
            />

            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-white mb-4 leading-[0.95]">
                                Privacy Policy
                            </h1>
                            <p className="text-sm text-white/45 font-light mb-12">
                                Effective Date: November 11, 2026 &bull; {siteConfig.domain}
                            </p>

                            <div className="space-y-10 text-white/70 font-light leading-relaxed">
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
                                    <p className="mb-4">
                                        Continental Grand Technologies (&ldquo;CGT&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) collects information you voluntarily submit via <strong className="text-white/90 font-medium">{siteConfig.domain}</strong>, including your name, work email address, service interest, estimated project budget, and technical brief details.
                                    </p>
                                    <p>
                                        We also collect standard non-identifying diagnostic telemetry (browser type, viewport dimensions, referring URL, and page performance metrics) strictly to maintain site reliability and security.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
                                    <p>
                                        Submitted inquiry details are used exclusively to evaluate technical scope, prepare accurate architecture proposals, communicate regarding prospective or active engineering engagements, and deliver contracted software services. We never sell or rent personal data to third parties.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">3. Infrastructure &amp; Data Security</h2>
                                    <p>
                                        All transmissions on {siteConfig.domain} are encrypted via TLS. Client source code, credentials, and project artifacts are isolated inside access-controlled environments governed by strict least-privilege policies and mutual NDAs where applicable.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">4. Your Privacy Rights</h2>
                                    <p>
                                        You may request access to, correction of, or permanent deletion of any personal inquiry records we hold by contacting our team directly.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">5. Contact Information</h2>
                                    <p>
                                        For privacy-related inquiries regarding {siteConfig.companyName} ({siteConfig.domain}), email us at{' '}
                                        <a href={`mailto:${siteConfig.email}`} className="text-[#F4751E] hover:underline">
                                            {siteConfig.email}
                                        </a>{' '}
                                        or write to us in {siteConfig.address.city}, {siteConfig.address.state}, {siteConfig.address.country}.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;
