import { useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useFocusTrap } from "@/utils/useFocusTrap";

interface ExpertiseModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    tagline: string;
    skills: string[];
    detail: string;
}

const ExpertiseModal = ({
    isOpen,
    onClose,
    title,
    tagline,
    skills,
    detail,
}: ExpertiseModalProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    useFocusTrap(isOpen, onClose, containerRef);
    const previousFocus = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (isOpen) {
            previousFocus.current = document.activeElement as HTMLElement;
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            previousFocus.current?.focus();
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    const handleBackdrop = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) onClose();
        },
        [onClose]
    );

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center px-6"
                    onClick={handleBackdrop}
                    role="dialog"
                    aria-modal="true"
                    aria-label={title}
                >
                    <motion.div
                        ref={containerRef}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="bg-background rounded-2xl shadow-2xl border border-border max-w-lg w-full max-h-[80vh] overflow-y-auto"
                    >
                        <div className="p-6 lg:p-8">
                            <div className="flex items-start justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="font-display text-xl lg:text-2xl font-semibold text-foreground">
                                        {title}
                                    </h2>
                                    <p className="text-sm text-muted-foreground mt-1">{tagline}</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    aria-label="Close"
                                    className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors shrink-0"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="text-xs font-medium px-3 py-1.5 rounded-full border border-border bg-muted/30 text-foreground"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            <div className="prose prose-sm text-muted-foreground leading-relaxed">
                                <p>{detail}</p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-border">
                                <a
                                    href="#contact"
                                    onClick={onClose}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white transition-opacity hover:opacity-90"
                                    style={{
                                        background: "linear-gradient(135deg, hsl(20 55% 53%), hsl(38 82% 50%))",
                                    }}
                                >
                                    Discuss This Area
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ExpertiseModal;
