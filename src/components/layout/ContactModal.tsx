import { useState } from 'react';
import { Mail, Loader2, CheckCircle2, ChevronDown, X } from 'lucide-react';
import { useHashModal } from '@/hooks/useHashModal';

const ContactModal = () => {
    const { isOpen, close: closeModal } = useHashModal('contact');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const close = () => {
        closeModal();
        setTimeout(() => {
            setIsSuccess(false);
            setErrorMessage(null);
        }, 300);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const service = formData.get("service");
        const budget = formData.get("budget");
        const message = formData.get("message");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, service, budget, message })
            });

            if (response.ok) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                const data = await response.json();
                setErrorMessage(data?.message || "Failed to submit request. Please try contacting directly via email.");
            }
        } catch (error) {
            setErrorMessage("Network error occurred. Please check your connection or contact us directly.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" 
                onClick={close} 
            />
            
            {/* Modal Content */}
            <div className="relative w-full max-w-lg p-6 sm:p-8 md:p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/[0.08] shadow-2xl overflow-y-auto max-h-[90vh] animate-fade-in z-10 custom-scrollbar">
                
                <button 
                    onClick={close} 
                    aria-label="Close modal"
                    className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Ambient Background Glow for Card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-[#F4751E]/[0.05] blur-[50px] pointer-events-none" />
                
                {/* Icon Header */}
                <div className="flex flex-col items-center mb-6 relative z-10 mt-1">
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-b from-[#F4751E]/20 to-transparent border border-[#F4751E]/25 shadow-[0_0_30px_rgba(244,117,30,0.15)] mb-3">
                        <Mail className="w-5 h-5 text-[#F4751E] relative z-10" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white text-center">Let's Build Together</h2>
                    <p className="text-xs sm:text-sm text-white/50 text-center mt-1">Tell us about your project requirements.</p>
                </div>

                {errorMessage && (
                    <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs text-center">
                        {errorMessage}
                    </div>
                )}

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in relative z-10">
                        <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                        <h3 className="text-xl font-medium text-white mb-2">Request Submitted Successfully</h3>
                        <p className="text-white/60 text-sm max-w-xs">Thank you for reaching out. Our engineering team will review your inquiry within 4 hours.</p>
                        <button 
                            onClick={close}
                            className="mt-6 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition-colors border border-white/10"
                        >
                            Close Window
                        </button>
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
                                className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="email" className="text-[13px] font-medium text-white/80 ml-1">Work Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                id="email" 
                                required
                                placeholder="name@company.com" 
                                className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all"
                            />
                        </div>

                        {/* Service Needed */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="service" className="text-[13px] font-medium text-white/80 ml-1">Service Needed</label>
                            <div className="relative">
                                <select 
                                    name="service" 
                                    id="service" 
                                    required
                                    defaultValue=""
                                    className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all cursor-pointer"
                                >
                                    <option value="" disabled className="text-white/30">Select a service category</option>
                                    <option value="AI Automation & Custom Agents">AI Automation & Custom Agents</option>
                                    <option value="Full-Stack Web/App System">Full-Stack Web/App System</option>
                                    <option value="Enterprise Platform Engineering">Enterprise Platform Engineering</option>
                                    <option value="CRM & ERP Solutions">CRM & ERP Solutions</option>
                                    <option value="WhatsApp & Conversational AI Bots">WhatsApp & Conversational AI Bots</option>
                                    <option value="Cloud & DevOps Infrastructure">Cloud & DevOps Infrastructure</option>
                                    <option value="UI/UX & Branding Design">UI/UX & Branding Design</option>
                                    <option value="Strategic Partnership / Technical Consultation">Strategic Partnership / Consultation</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                            </div>
                        </div>

                        {/* Budget Dropdown */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="budget" className="text-[13px] font-medium text-white/80 ml-1">Estimated Budget</label>
                            <div className="relative">
                                <select 
                                    name="budget" 
                                    id="budget" 
                                    required
                                    defaultValue=""
                                    className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all cursor-pointer"
                                >
                                    <option value="" disabled className="text-white/30">Select estimated budget range</option>
                                    <option value="Under $5,000">Under $5,000</option>
                                    <option value="$5,000 - $15,000">$5,000 - $15,000</option>
                                    <option value="$15,000 - $35,000">$15,000 - $35,000</option>
                                    <option value="$35,000+">$35,000+</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                            </div>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-[13px] font-medium text-white/80 ml-1">Project Details</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                required
                                rows={3}
                                placeholder="Describe your goals, timeline, or key technical challenges..." 
                                className="w-full bg-[#141414] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="mt-2 w-full py-3.5 rounded-xl bg-[#F4751E] hover:bg-[#e06815] text-white font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(244,117,30,0.3)] hover:shadow-[0_6px_25px_rgba(244,117,30,0.4)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.99]"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Submitting Request...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactModal;
