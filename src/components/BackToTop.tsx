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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="hidden lg:flex fixed bottom-8 right-8 z-40 w-11 h-11 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-elevated hover:shadow-dramatic hover:scale-105 transition-all duration-300 group"
          aria-label="Back to top"
        >
          <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
