import { useState, useEffect } from 'react';
import { Mail, Loader2, CheckCircle2, ChevronDown, X, ArrowUpRight } from 'lucide-react';
import { useHashModal } from '@/hooks/useHashModal';
import { Button } from '@/components/ui/button';

const ContactModal = () => {
    const { isOpen, close: closeModal, preselectedService, setPreselectedService } = useHashModal('contact');
    const [selectedService, setSelectedService] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        if (preselectedService) {
            setSelectedService(preselectedService);
        }
    }, [preselectedService]);

    const close = () => {
        closeModal();
        setTimeout(() => {
            setIsSuccess(false);
            setErrorMessage(null);
            setPreselectedService('');
        }, 300);
    };

    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') close();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);

        const formData = new FormData(e.currentTarget);
        const name = formData.get('name');
        const email = formData.get('email');
        const service = formData.get('service');
        const budget = formData.get('budget');
        const message = formData.get('message');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, service, budget, message }),
            });

            if (response.ok) {
                setIsSuccess(true);
                setSelectedService('');
                (e.target as HTMLFormElement).reset();
            } else {
                const data = await response.json();
                setErrorMessage(data?.message || 'Failed to submit request. Please try contacting us directly via email.');
            }
        } catch {
            setErrorMessage('Network error occurred. Please check your connection or email us directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
        >
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/82 backdrop-blur-md animate-fade-in"
                onClick={close}
            />

            {/* Modal Content — data-lenis-prevent ensures crisp native scrolling inside modal */}
            <div
                data-lenis-prevent
                className="relative w-full max-w-lg p-6 sm:p-8 md:p-10 rounded-[2rem] bg-[#090909] border border-white/[0.1] shadow-[0_32px_90px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-y-auto max-h-[90vh] animate-fade-in z-10 custom-scrollbar"
            >
                <button
                    type="button"
                    onClick={close}
                    aria-label="Close inquiry modal"
                    className="absolute top-5 right-5 h-10 w-10 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-white/60 hover:text-white flex items-center justify-center transition-all active:scale-95 z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F4751E]/60"
                >
                    <X className="w-4.5 h-4.5" />
                </button>

                {/* Top Specular Highlight & Ambient Glow */}
                <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-[#F4751E]/50 to-transparent pointer-events-none" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-36 bg-[#F4751E]/[0.06] blur-[50px] pointer-events-none" />

                {/* Header */}
                <div className="flex flex-col items-center mb-6 relative z-10 mt-1">
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-b from-[#F4751E]/22 to-[#F4751E]/[0.04] border border-[#F4751E]/30 shadow-[0_0_30px_rgba(244,117,30,0.18)] mb-3">
                        <Mail className="w-5 h-5 text-[#F4751E] relative z-10" />
                    </div>
                    <h2 id="contact-modal-title" className="text-2xl md:text-3xl font-bold tracking-tight text-white text-center">
                        Start an Engineering Brief
                    </h2>
                    <p className="text-xs sm:text-sm text-white/50 text-center mt-1">
                        Share your architecture goals — our senior engineers respond within 4 hours.
                    </p>
                </div>

                {errorMessage && (
                    <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs text-center">
                        {errorMessage}
                    </div>
                )}

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in relative z-10">
                        <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Inquiry Received</h3>
                        <p className="text-white/60 text-sm max-w-xs leading-relaxed">
                            Thank you for reaching out to CGT. A technical lead will review your scope and reply within 4 business hours.
                        </p>
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={close}
                            className="mt-6"
                        >
                            Return to Site
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 relative z-10">
                        {/* Name */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="name" className="text-[13px] font-medium text-white/80 ml-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                placeholder="Your full name"
                                className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all"
                            />
                        </div>

                        {/* Work Email */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-[13px] font-medium text-white/80 ml-1">Work Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                placeholder="name@company.com"
                                className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all"
                            />
                        </div>

                        {/* Service Needed */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="service" className="text-[13px] font-medium text-white/80 ml-1">Capability Required</label>
                            <div className="relative">
                                <select
                                    name="service"
                                    id="service"
                                    required
                                    value={selectedService}
                                    onChange={(e) => setSelectedService(e.target.value)}
                                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all cursor-pointer"
                                >
                                    <option value="" disabled className="text-white/30">Select a capability</option>
                                    <option value="AI Automation & Custom Agents">AI Automation &amp; Autonomous Agents</option>
                                    <option value="Full-Stack Web/App System">Full-Stack Web / Mobile Platform</option>
                                    <option value="Enterprise Platform Engineering">Enterprise SaaS &amp; Data Intelligence</option>
                                    <option value="CRM & ERP Solutions">Custom CRM &amp; Business Systems</option>
                                    <option value="WhatsApp & Conversational AI Bots">WhatsApp &amp; Conversational AI Bots</option>
                                    <option value="Cloud & DevOps Infrastructure">Cloud Architecture &amp; DevOps</option>
                                    <option value="UI/UX & Branding Design">Product UI/UX, Brand &amp; Technical SEO</option>
                                    <option value="Strategic Partnership / Technical Consultation">Strategic Partnership / Architecture Audit</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                            </div>
                        </div>

                        {/* Estimated Budget */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="budget" className="text-[13px] font-medium text-white/80 ml-1">Estimated Investment</label>
                            <div className="relative">
                                <select
                                    name="budget"
                                    id="budget"
                                    required
                                    defaultValue=""
                                    className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all cursor-pointer"
                                >
                                    <option value="" disabled className="text-white/30">Select estimated budget range</option>
                                    <option value="Under $5,000">Under $5,000</option>
                                    <option value="$5,000 - $15,000">$5,000 – $15,000</option>
                                    <option value="$15,000 - $35,000">$15,000 – $35,000</option>
                                    <option value="$35,000+">$35,000+</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-[13px] font-medium text-white/80 ml-1">Project Scope &amp; Timeline</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={3}
                                placeholder="Outline your system objectives, target launch window, or key bottlenecks..."
                                className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={isSubmitting}
                            className="mt-2 w-full"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    <span>Transmitting Brief...</span>
                                </>
                            ) : (
                                <>
                                    <span>Submit Project Brief</span>
                                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </>
                            )}
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactModal;
