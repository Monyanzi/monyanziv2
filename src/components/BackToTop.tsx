import { useState, useCallback } from "react";
import { ChevronUp } from "lucide-react";
import { useThrottledScroll } from "@/utils/useThrottledScroll";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const updateVisibility = useCallback(() => {
    setIsVisible(window.scrollY > 500);
  }, []);

  useThrottledScroll({
    delay: 150,
    onThrottle: updateVisibility,
  });

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
                    className="hidden lg:block fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-br from-[hsl(38_82%_50%)] to-[hsl(25_70%_45%)] text-white border-0 hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md group"
                    aria-label="Back to top"
                >
                    <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
            )}
        </>
    );
};

export default BackToTop;
