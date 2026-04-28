import { useState, useEffect } from 'react';
import { Mail, Loader2, CheckCircle2, ChevronDown, X } from 'lucide-react';

const ContactModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#contact') {
                setIsOpen(true);
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                setIsOpen(false);
                document.body.style.overflow = '';
            }
        };

        // Check on initial load
        handleHashChange();

        window.addEventListener('hashchange', handleHashChange);
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
            document.body.style.overflow = '';
        };
    }, []);

    const close = () => {
        setIsOpen(false);
        // Remove hash from URL without scrolling
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
        document.body.style.overflow = '';
        setTimeout(() => setIsSuccess(false), 300); // Reset success state after animation
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const service = formData.get("service");
        const budget = formData.get("budget");
        const message = formData.get("message");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, service, budget, message })
            });

            if (response.ok) {
                setIsSuccess(true);
                (e.target as HTMLFormElement).reset();
            } else {
                const data = await response.json();
                console.error("Error from Resend:", data);
                alert("Something went wrong. Please check console.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Something went wrong. Please try again.");
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
            <div className="relative w-full max-w-lg p-8 md:p-10 rounded-[2rem] bg-[#0A0A0A] border border-white/[0.05] shadow-2xl overflow-y-auto max-h-[90vh] animate-fade-in z-10 custom-scrollbar">
                
                <button 
                    onClick={close} 
                    className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 transition-colors z-20"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Ambient Background Glow for Card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-40 bg-white/[0.02] blur-[50px] pointer-events-none" />
                
                {/* Icon Header */}
                <div className="flex flex-col items-center mb-8 relative z-10 mt-2">
                    <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] mb-4">
                        <div className="absolute inset-0 rounded-2xl bg-white blur-md opacity-20" />
                        <Mail className="w-5 h-5 text-white relative z-10" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Get in touch</h2>
                </div>

                {isSuccess ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center animate-fade-in relative z-10">
                        <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-4" />
                        <h3 className="text-xl font-medium text-white mb-2">Request submitted successfully</h3>
                        <p className="text-white/50 text-sm">You will be contacted soon by our team.</p>
                        <button 
                            onClick={close}
                            className="mt-8 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 text-sm transition-colors border border-white/10"
                        >
                            Close window
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                        {/* Name */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-[13px] font-medium text-white/80 ml-1">Name</label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                required
                                placeholder="Your name" 
                                className="w-full bg-[#141414] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#F4751E]/50 focus:ring-1 focus:ring-[#F4751E]/50 transition-all"
                            />
                        </div>

                        {/* Service Needed */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="service" className="text-[13px] font-medium text-white/80 ml-1">Service you need</label>
                            <div className="relative">
                                <select 
                                    name="service" 
                                    id="service" 
                                    required
                                    defaultValue=""
                                    className="w-full bg-[#141414] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-white appearance-none focus:outline-none focus:border-[#F4751E]/50 focus:ring-1 focus:ring-[#F4751E]/50 transition-all cursor-pointer"
                                >
                                    <option value="" disabled className="text-white/20">Select</option>
                                    <option value="AI Automation">AI Automation</option>
                                    <option value="Full-Stack System">Full-Stack System</option>
                                    <option value="Enterprise Platform">Enterprise Platform</option>
                                    <option value="Other">Other</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
                            </div>
                        </div>

                        {/* Budget */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="budget" className="text-[13px] font-medium text-white/80 ml-1">What budget do you have available</label>
                            <input 
                                type="text" 
                                name="budget" 
                                id="budget" 
                                required
                                placeholder="Enter your budget" 
                                className="w-full bg-[#141414] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#F4751E]/50 focus:ring-1 focus:ring-[#F4751E]/50 transition-all"
                            />
                        </div>

                        {/* Message */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-[13px] font-medium text-white/80 ml-1">Message</label>
                            <textarea 
                                name="message" 
                                id="message" 
                                required
                                rows={3}
                                placeholder="Please tell us about your project and what you need." 
                                className="w-full bg-[#141414] border border-white/[0.05] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#F4751E]/50 focus:ring-1 focus:ring-[#F4751E]/50 transition-all resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="mt-2 w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Submitting...
                                </>
                            ) : (
                                "Submit"
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactModal;
