import Reveal from '@/components/ui/Reveal';
import SEO from '@/components/seo/SEO';
import { siteConfig } from '@/data/site-config';

const TermsOfService = () => {
    return (
        <main className="relative min-h-screen bg-black">
            <SEO
                title="Terms of Service"
                description="Terms of Service governing access to cgtofficial.com and digital engineering engagements with Continental Grand Technologies."
                path="/terms"
            />

            <section className="relative pt-36 pb-20 overflow-hidden">
                <div className="container-main relative z-10">
                    <Reveal>
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] text-white mb-4 leading-[0.95]">
                                Terms of Service
                            </h1>
                            <p className="text-sm text-white/45 font-light mb-12">
                                Effective Date: November 11, 2026 &bull; {siteConfig.domain}
                            </p>

                            <div className="space-y-10 text-white/70 font-light leading-relaxed">
                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                                    <p>
                                        By accessing or using <strong className="text-white/90 font-medium">{siteConfig.siteUrl}</strong> (operated by {siteConfig.companyName}), you agree to be bound by these Terms of Service. Separate Master Services Agreements (MSAs) or Statements of Work (SOWs) govern bespoke client software engagements.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">2. Intellectual Property Rights</h2>
                                    <p>
                                        All brand marks (including the Continental Grand Technologies and CGT emblems), visual systems, 3D assets, copy, and site source code on {siteConfig.domain} are the proprietary property of {siteConfig.companyName} and may not be reproduced without prior written consent.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">3. Accuracy of Submissions</h2>
                                    <p>
                                        When submitting project briefs or consultation requests through our website, you represent that the contact details and business information provided are accurate and that you are authorized to discuss the proposed scope.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">4. Limitation of Liability</h2>
                                    <p>
                                        {siteConfig.domain} and its informational content are provided &ldquo;as is&rdquo; without warranties of any kind. In no event shall {siteConfig.companyName} be liable for indirect, incidental, or consequential damages arising out of your use of this website.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-semibold text-white mb-3">5. Governing Law &amp; Contact</h2>
                                    <p>
                                        These Terms are governed by the laws of India, with jurisdiction in {siteConfig.address.city}, {siteConfig.address.state}. Questions regarding these Terms may be directed to{' '}
                                        <a href={`mailto:${siteConfig.email}`} className="text-[#F4751E] hover:underline">
                                            {siteConfig.email}
                                        </a>.
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

export default TermsOfService;
