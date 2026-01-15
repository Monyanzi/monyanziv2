import { useState, useEffect, useCallback } from "react";
import { ChevronUp } from "lucide-react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        let timeoutId: number | undefined;

        const toggleVisibility = () => {
            if (timeoutId) return; // Throttle

            timeoutId = window.setTimeout(() => {
                setIsVisible(window.scrollY > 500);
                timeoutId = undefined;
            }, 150); // Check every 150ms instead of every scroll event
        };

        window.addEventListener("scroll", toggleVisibility, { passive: true });
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-40 p-3 bg-foreground text-background border border-border hover:bg-foreground/90 transition-all duration-300 shadow-lg group"
                    aria-label="Back to top"
                >
                    <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
            )}
        </>
    );
};

export default BackToTop;
