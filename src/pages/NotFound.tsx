import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import SEO from '@/components/seo/SEO';
import { Button } from '@/components/ui/button';
import { openContactModal } from '@/hooks/useHashModal';

const NotFound = () => {
    return (
        <main className="relative min-h-[82vh] flex items-center justify-center px-4 pt-28 pb-20 overflow-hidden bg-black">
            <SEO
                title="404 — Page Not Found"
                description="The requested page could not be found on cgtofficial.com."
                noindex
            />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#F4751E]/[0.07] blur-[100px] pointer-events-none" />

            <div className="container-main relative z-10 text-center max-w-xl mx-auto">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#F4751E] mb-4">
                    Error 404
                </p>
                <h1 className="text-4xl sm:text-6xl font-extrabold tracking-[-0.04em] text-white mb-4 leading-none">
                    Route not found.
                </h1>
                <p className="text-sm sm:text-base text-white/55 font-light leading-relaxed mb-9">
                    The URL you requested doesn&apos;t exist on <span className="text-white/80">cgtofficial.com</span>. Return to our studio overview or start an engineering brief directly.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                    <Button asChild size="lg">
                        <Link to="/">
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Studio</span>
                        </Link>
                    </Button>
                    <Button
                        type="button"
                        variant="secondary"
                        size="lg"
                        onClick={() => openContactModal()}
                    >
                        <span>Book a Call</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default NotFound;

