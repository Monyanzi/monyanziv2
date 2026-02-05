import { useRef, useEffect, useState } from 'react';
export function useSVGDraw(options: {
    threshold?: number;
    duration?: number;
    delay?: number;
    triggerOnce?: boolean;
} = {}) {
    const ref = useRef<SVGPathElement | SVGElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    const duration = options.duration ?? 1000;
                    const delay = options.delay ?? 0;
                    const startTime = performance.now() + delay;

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        if (elapsed < 0) {
                            requestAnimationFrame(animate);
                            return;
                        }
                        const newProgress = Math.min(elapsed / duration, 1);
                        setProgress(newProgress);
                        if (newProgress < 1) {
                            requestAnimationFrame(animate);
                        }
                    };

                    requestAnimationFrame(animate);

                    if (options.triggerOnce !== false) {
                        observer.unobserve(element);
                    }
                } else if (options.triggerOnce === false) {
                    setIsInView(false);
                    setProgress(0);
                }
            },
            { threshold: options.threshold ?? 0.3 }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, [options.threshold, options.duration, options.delay, options.triggerOnce]);

    return { ref, isInView, progress };
}

export const springBounceConfig = {
    type: "spring" as const,
    stiffness: 400,
    damping: 15,
    mass: 1,
};
