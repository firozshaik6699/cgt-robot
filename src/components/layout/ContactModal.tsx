import { useState, useEffect, useRef } from 'react';
import {
    Mail,
    Loader2,
    CheckCircle2,
    ChevronDown,
    X,
    ArrowUpRight,
    Info,
    MessageCircle,
    Copy,
    Check,
    ArrowLeft,
} from 'lucide-react';
import { useHashModal } from '@/hooks/useHashModal';
import { Button } from '@/components/ui/button';
import { getSessionItem, setSessionItem, removeSessionItem } from '@/lib/storage';

const DRAFT_STORAGE_KEY = 'cgt_contact_draft_v1';
const WHATSAPP_NUMBER = '919398404167';
const DIRECT_EMAIL = 'continentalgrandtechnologies@gmail.com';

interface ContactDraft {
    name: string;
    email: string;
    service: string;
    budget: string;
    message: string;
}

const EMPTY_DRAFT: ContactDraft = {
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
};

const CURRENCY_QUICK_CHIPS = [
    { label: '₹ INR', prefix: '₹ ', suffix: ' INR' },
    { label: '$ USD', prefix: '$', suffix: ' USD' },
    { label: 'AED', prefix: 'AED ', suffix: '' },
    { label: '€ EUR', prefix: '€', suffix: ' EUR' },
    { label: 'Flexible / Discuss', fullValue: 'Flexible — Open to Discuss (INR / USD)' },
] as const;

function buildFormattedBrief(draft: ContactDraft): string {
    return [
        'Hello CGT Engineering Team,',
        '',
        'Here is my project inquiry from cgtofficial.com:',
        `• Name: ${draft.name}`,
        `• Work Email: ${draft.email}`,
        `• Capability: ${draft.service}`,
        `• Estimated Budget: ${draft.budget}`,
        '',
        'Project Scope & Timeline:',
        draft.message,
    ].join('\n');
}

const ContactModal = () => {
    const { isOpen, close: closeModal, preselectedService, setPreselectedService } = useHashModal('contact');
    const [draft, setDraft] = useState<ContactDraft>(() =>
        getSessionItem<ContactDraft>(DRAFT_STORAGE_KEY, EMPTY_DRAFT)
    );
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [directDispatchMode, setDirectDispatchMode] = useState(false);
    const [copiedBrief, setCopiedBrief] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const budgetInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (preselectedService) {
            setDraft((prev) => ({ ...prev, service: preselectedService }));
        }
    }, [preselectedService]);

    useEffect(() => {
        setSessionItem(DRAFT_STORAGE_KEY, draft);
    }, [draft]);

    const updateField = <K extends keyof ContactDraft>(key: K, value: ContactDraft[K]) => {
        setDraft((prev) => ({ ...prev, [key]: value }));
        if (errorMessage) setErrorMessage(null);
    };

    const applyCurrencyChip = (chip: (typeof CURRENCY_QUICK_CHIPS)[number]) => {
        if ('fullValue' in chip) {
            updateField('budget', chip.fullValue);
            budgetInputRef.current?.focus();
            return;
        }
        const current = draft.budget.trim();
        const numericCore = current
            .replace(/^(₹|\$|€|£|AED|INR|USD|EUR)\s*/i, '')
            .replace(/\s*(INR|USD|AED|EUR|GBP)$/i, '')
            .trim();
        const nextValue = numericCore
            ? `${chip.prefix}${numericCore}${chip.suffix}`
            : chip.prefix;
        updateField('budget', nextValue);
        requestAnimationFrame(() => {
            const el = budgetInputRef.current;
            if (!el) return;
            el.focus();
            const cursorPos = numericCore ? nextValue.length : chip.prefix.length;
            el.setSelectionRange(cursorPos, cursorPos);
        });
    };

    const close = () => {
        closeModal();
        setTimeout(() => {
            setIsSuccess(false);
            setDirectDispatchMode(false);
            setCopiedBrief(false);
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

    const handleCopyBrief = async () => {
        try {
            await navigator.clipboard.writeText(buildFormattedBrief(draft));
            setCopiedBrief(true);
            setTimeout(() => setCopiedBrief(false), 2500);
        } catch {
            // Clipboard permission denied — no-op
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage(null);

        const payload: ContactDraft = {
            name: draft.name.trim(),
            email: draft.email.trim(),
            service: draft.service.trim(),
            budget: draft.budget.trim(),
            message: draft.message.trim(),
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            let data: { ok?: boolean; code?: string; message?: string } | null = null;
            try {
                data = await response.json();
            } catch {
                data = null;
            }

            if (response.ok) {
                setIsSuccess(true);
                setDirectDispatchMode(false);
                setDraft(EMPTY_DRAFT);
                removeSessionItem(DRAFT_STORAGE_KEY);
                return;
            }

            if (response.status === 400) {
                setErrorMessage(data?.message || 'Please review your inquiry fields and try again.');
                return;
            }

            // If email relay is unconfigured (503) or upstream mail provider is unreachable,
            // switch immediately to Direct Priority Dispatch so the client is never blocked.
            setDirectDispatchMode(true);
        } catch {
            setDirectDispatchMode(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    const formattedBrief = buildFormattedBrief(draft);
    const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(formattedBrief)}`;
    const mailtoHref = `mailto:${DIRECT_EMAIL}?subject=${encodeURIComponent(
        `[cgtofficial.com] Project Inquiry: ${draft.name || 'Client'} — ${draft.service || 'Engineering'}`
    )}&body=${encodeURIComponent(formattedBrief)}`;

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
                className="relative w-full max-w-lg p-6 sm:p-8 md:p-9 rounded-[2rem] bg-[#090909] border border-white/[0.1] shadow-[0_32px_90px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)] overflow-y-auto max-h-[90vh] animate-fade-in z-10 custom-scrollbar"
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
                ) : directDispatchMode ? (
                    <div className="flex flex-col gap-4 py-2 animate-fade-in relative z-10">
                        <div className="rounded-2xl bg-[#F4751E]/[0.08] border border-[#F4751E]/25 p-4 text-left">
                            <p className="text-sm font-semibold text-white mb-1">
                                Brief Ready for Instant Direct Dispatch
                            </p>
                            <p className="text-xs text-white/65 leading-relaxed">
                                Your inquiry details are formatted and preserved below. Dispatch directly to our engineering desk in one click for priority response:
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#111111] border border-white/[0.08] p-3.5 text-xs text-white/75 space-y-1.5 font-mono leading-relaxed max-h-40 overflow-y-auto custom-scrollbar">
                            <div><span className="text-white/40">Name:</span> {draft.name}</div>
                            <div><span className="text-white/40">Email:</span> {draft.email}</div>
                            <div><span className="text-white/40">Capability:</span> {draft.service}</div>
                            <div><span className="text-white/40">Budget:</span> {draft.budget}</div>
                            <div className="pt-1 border-t border-white/[0.06] text-white/65 whitespace-pre-wrap">{draft.message}</div>
                        </div>

                        <div className="flex flex-col gap-2.5 mt-1">
                            <Button
                                asChild
                                size="lg"
                                className="w-full"
                            >
                                <a
                                    href={whatsappHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                        removeSessionItem(DRAFT_STORAGE_KEY);
                                    }}
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    <span>Send Pre-Filled Brief via WhatsApp</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="secondary"
                                size="lg"
                                className="w-full"
                            >
                                <a
                                    href={mailtoHref}
                                    onClick={() => {
                                        removeSessionItem(DRAFT_STORAGE_KEY);
                                    }}
                                >
                                    <Mail className="w-4 h-4" />
                                    <span>Send via Direct Email App</span>
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </Button>

                            <div className="flex items-center justify-between gap-2 pt-1">
                                <button
                                    type="button"
                                    onClick={() => setDirectDispatchMode(false)}
                                    className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors py-1.5 px-2"
                                >
                                    <ArrowLeft className="w-3.5 h-3.5" />
                                    <span>Edit Brief</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={handleCopyBrief}
                                    className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] rounded-lg py-1.5 px-3 transition-all"
                                >
                                    {copiedBrief ? (
                                        <>
                                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                                            <span className="text-emerald-300">Copied Brief</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-3.5 h-3.5" />
                                            <span>Copy Brief Text</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
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
                                maxLength={120}
                                value={draft.name}
                                onChange={(e) => updateField('name', e.target.value)}
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
                                maxLength={254}
                                value={draft.email}
                                onChange={(e) => updateField('email', e.target.value)}
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
                                    value={draft.service}
                                    onChange={(e) => updateField('service', e.target.value)}
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

                        {/* Estimated Budget — User-Fillable with Currency Notice */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between ml-1">
                                <label htmlFor="budget" className="text-[13px] font-medium text-white/80">
                                    Estimated Budget
                                </label>
                                <span className="text-[11px] font-medium text-[#F4751E]/90">
                                    INR / Global Currency
                                </span>
                            </div>

                            {/* Notice right above fill-in-the-blank */}
                            <div className="flex items-start gap-2 rounded-xl bg-[#F4751E]/[0.07] border border-[#F4751E]/20 px-3 py-2 text-[11.5px] text-white/75 leading-snug">
                                <Info className="w-3.5 h-3.5 text-[#F4751E] shrink-0 mt-0.5" />
                                <span>
                                    <strong className="text-white/90 font-medium">Notice:</strong> Mention currency with your budget (e.g., <span className="text-white/90">₹75,000 INR</span>, <span className="text-white/90">₹2.5L INR</span>, <span className="text-white/90">$5,000 USD</span>, or <span className="text-white/90">AED 15,000</span>).
                                </span>
                            </div>

                            <input
                                ref={budgetInputRef}
                                type="text"
                                name="budget"
                                id="budget"
                                required
                                maxLength={120}
                                value={draft.budget}
                                onChange={(e) => updateField('budget', e.target.value)}
                                placeholder="Enter budget & mention currency (e.g., ₹80,000 INR)"
                                className="w-full bg-[#121212] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F4751E]/60 focus:ring-1 focus:ring-[#F4751E]/60 transition-all"
                            />

                            {/* Quick 1-tap currency helpers */}
                            <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                                {CURRENCY_QUICK_CHIPS.map((chip) => (
                                    <button
                                        key={chip.label}
                                        type="button"
                                        onClick={() => applyCurrencyChip(chip)}
                                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-[#F4751E]/15 border border-white/[0.08] hover:border-[#F4751E]/40 text-white/65 hover:text-white transition-all active:scale-95"
                                    >
                                        {chip.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className="text-[13px] font-medium text-white/80 ml-1">Project Scope &amp; Timeline</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                maxLength={4000}
                                rows={3}
                                value={draft.message}
                                onChange={(e) => updateField('message', e.target.value)}
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
