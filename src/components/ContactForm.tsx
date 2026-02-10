import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { X, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useFocusTrap } from "@/utils/useFocusTrap";

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

const initialFormData = {
    name: "",
    email: "",
    subject: "",
    message: "",
} as const;

const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
    const [formData, setFormData] = useState({ ...initialFormData });
    const [status, setStatus] = useState<"idle" | "success">("idle");
    const dialogRef = useRef<HTMLDivElement | null>(null);

    useFocusTrap(isOpen, onClose, dialogRef);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            setStatus("idle");
            setFormData({ ...initialFormData });
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();

        const recipient = "moses.k.nyanzi@gmail.com";
        const subject = encodeURIComponent(formData.subject || `Contact from ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        );

        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        setStatus("success");
    }, [formData]);

    const handleNameChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(p => ({ ...p, name: e.target.value }));
    }, []);

    const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(p => ({ ...p, email: e.target.value }));
    }, []);

    const handleSubjectChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(p => ({ ...p, subject: e.target.value }));
    }, []);

    const handleMessageChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(p => ({ ...p, message: e.target.value }));
    }, []);

    const isFormValid = useMemo(() =>
        Boolean(formData.name && formData.email && formData.message),
        [formData.name, formData.email, formData.message]
    );

    const submitButtonClass = useMemo(() =>
        `w-full inline-flex items-center justify-center gap-2 font-bold tracking-widest uppercase text-xs py-5 rounded-full transition-all ${isFormValid
            ? "bg-[hsl(var(--gold))] text-[hsl(var(--navy))] hover:scale-[1.02] shadow-lg shadow-[hsl(var(--gold)/0.15)]"
            : "bg-muted text-muted-foreground cursor-not-allowed border border-border/50"
        }`,
        [isFormValid]
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(160,45%,10%)]/95 backdrop-blur-md p-4"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        className="relative w-full max-w-xl bg-card border border-border/50 rounded-2xl shadow-2xl overflow-hidden"
                        ref={dialogRef}
                        tabIndex={-1}
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="p-6 lg:p-8 border-b border-border/50 flex justify-between items-center">
                            <div>
                                <h2 className="font-display text-2xl font-semibold text-foreground">Get in Touch</h2>
                                <p className="text-sm text-muted-foreground mt-1">Let's discuss how I can help with your project.</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 h-10 w-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 lg:p-8">
                            {status === "success" ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-[hsl(var(--gold)/0.1)] rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 className="w-8 h-8 text-[hsl(var(--gold))]" />
                                    </div>
                                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Almost There!</h3>
                                    <p className="text-muted-foreground mb-8">
                                        Your email app should have opened with your message ready. Just hit <strong>Send</strong> in your email client to complete.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="inline-flex items-center gap-2 bg-[hsl(var(--gold))] text-[hsl(var(--navy))] font-semibold px-8 py-3 rounded-full hover:scale-105 transition-all"
                                    >
                                        Close
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Name *</label>
                                            <input
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleNameChange}
                                                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[hsl(var(--gold))] transition-colors placeholder:text-muted-foreground/50"
                                                placeholder="John Smith"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Email *</label>
                                            <input
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleEmailChange}
                                                className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[hsl(var(--gold))] transition-colors placeholder:text-muted-foreground/50"
                                                placeholder="john@company.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Subject</label>
                                        <input
                                            type="text"
                                            value={formData.subject}
                                            onChange={handleSubjectChange}
                                            className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[hsl(var(--gold))] transition-colors placeholder:text-muted-foreground/50"
                                            placeholder="Pricing Model Inquiry"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Message *</label>
                                        <textarea
                                            required
                                            value={formData.message}
                                            onChange={handleMessageChange}
                                            rows={4}
                                            className="w-full bg-muted/30 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-[hsl(var(--gold))] transition-colors resize-none placeholder:text-muted-foreground/50"
                                            placeholder="How can I help?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className={submitButtonClass}
                                    >
                                        <>
                                            Send Message <Send className="w-4 h-4 ml-1" />
                                        </>
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ContactForm;
