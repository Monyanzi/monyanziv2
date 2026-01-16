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
                    className="fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-br from-[hsl(38_82%_50%)] to-[hsl(25_70%_45%)] text-white border-0 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md group"
                    aria-label="Back to top"
                >
                    <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
            )}
        </>
    );
};

export default BackToTop;
