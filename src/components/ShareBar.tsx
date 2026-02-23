import { useState, useCallback } from "react";
import { Link2, Mail, Check } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ShareBarProps {
    url: string;
    title: string;
    className?: string;
}

const ShareBar = ({ url, title, className = "" }: ShareBarProps) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* Clipboard API unavailable */
        }
    }, [url]);

    const mailUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this article: ${url}`)}`;

    const buttons = [
        { href: mailUrl, icon: Mail, label: "Share via email", external: true },
    ];

    return (
        <div className={`flex items-center gap-1.5 ${className}`.trim()}>
            {buttons.map(({ href, icon: Icon, label, external }) => (
                <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    aria-label={label}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground 
            hover:text-foreground hover:bg-muted/60 transition-all duration-200"
                >
                    <Icon className="w-3.5 h-3.5" />
                </a>
            ))}
            <button
                onClick={handleCopy}
                aria-label="Copy link"
                className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground 
          hover:text-foreground hover:bg-muted/60 transition-all duration-200 relative"
            >
                <AnimatePresence mode="wait" initial={false}>
                    {copied ? (
                        <motion.span
                            key="check"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Check className="w-3.5 h-3.5 text-green-600" />
                        </motion.span>
                    ) : (
                        <motion.span
                            key="copy"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            transition={{ duration: 0.15 }}
                        >
                            <Link2 className="w-3.5 h-3.5" />
                        </motion.span>
                    )}
                </AnimatePresence>
            </button>
        </div>
    );
};

export default ShareBar;
