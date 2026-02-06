import { useRef, useEffect, useState, useMemo } from 'react';

interface SVGDrawOptions {
    threshold?: number;
    duration?: number;
    delay?: number;
    triggerOnce?: boolean;
}

// Default options to avoid object recreation
const DEFAULT_OPTIONS: Required<SVGDrawOptions> = {
    threshold: 0.3,
    duration: 1000,
    delay: 0,
    triggerOnce: true,
};

/**
 * Optimized SVG draw animation hook using IntersectionObserver.
 * Properly handles RAF cleanup and stable options.
 */
export function useSVGDraw(options: SVGDrawOptions = {}) {
    const ref = useRef<SVGPathElement | SVGElement>(null);
    const [isInView, setIsInView] = useState(false);
    const [progress, setProgress] = useState(0);
    const rafRef = useRef<number>(0);

    // Memoize merged options to prevent effect re-runs
    const mergedOptions = useMemo(() => ({
        threshold: options.threshold ?? DEFAULT_OPTIONS.threshold,
        duration: options.duration ?? DEFAULT_OPTIONS.duration,
        delay: options.delay ?? DEFAULT_OPTIONS.delay,
        triggerOnce: options.triggerOnce ?? DEFAULT_OPTIONS.triggerOnce,
    }), [options.threshold, options.duration, options.delay, options.triggerOnce]);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const { threshold, duration, delay, triggerOnce } = mergedOptions;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    const startTime = performance.now() + delay;

                    const animate = (currentTime: number) => {
                        const elapsed = currentTime - startTime;
                        if (elapsed < 0) {
                            rafRef.current = requestAnimationFrame(animate);
                            return;
                        }
                        const newProgress = Math.min(elapsed / duration, 1);
                        setProgress(newProgress);
                        if (newProgress < 1) {
                            rafRef.current = requestAnimationFrame(animate);
                        } else {
                            rafRef.current = 0;
                        }
                    };

                    rafRef.current = requestAnimationFrame(animate);

                    if (triggerOnce) {
                        observer.unobserve(element);
                    }
                } else if (!triggerOnce) {
                    setIsInView(false);
                    setProgress(0);
                    // Cancel ongoing animation when element leaves view
                    if (rafRef.current) {
                        cancelAnimationFrame(rafRef.current);
                        rafRef.current = 0;
                    }
                }
            },
            { threshold }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [mergedOptions]);

    return { ref, isInView, progress };
}

// Pre-defined spring config - exported as frozen object to prevent mutation
export const springBounceConfig = Object.freeze({
    type: "spring" as const,
    stiffness: 400,
    damping: 15,
    mass: 1,
});
