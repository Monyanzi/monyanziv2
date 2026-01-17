import { useState, useEffect, useRef, RefObject } from 'react';

// ============================================
// COMPLETE GTA 6-INSPIRED SCROLL ANIMATION SYSTEM
// Includes: color-shift, fade-in, stagger, pulse, background progression
// ============================================

/**
 * Hook for scroll-based color transitions (dramatic version)
 */
export function useScrollColorShift(
  sectionRef: RefObject<HTMLElement | null>,
  colors: {
    start: string;
    mid?: string;
    end: string;
  }
) {
  const [currentColor, setCurrentColor] = useState(colors.start);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const progress = Math.max(0, Math.min(1,
        (windowHeight - sectionTop) / (windowHeight + sectionHeight)
      ));

      if (progress < 0.25) {
        setCurrentColor(colors.start);
      } else if (progress < 0.5 && colors.mid) {
        setCurrentColor(colors.mid);
      } else if (progress >= 0.5) {
        setCurrentColor(colors.end);
      } else {
        setCurrentColor(colors.mid || colors.end);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef, colors.start, colors.mid, colors.end]);

  return currentColor;
}

/**
 * Hook for global page-wide background color progression
 */
export function usePageBackgroundProgression(colors: string[]) {
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const colorIndex = Math.min(
        Math.floor(scrollPercent * colors.length),
        colors.length - 1
      );
      setCurrentColor(colors[colorIndex]);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [colors]);

  return currentColor;
}

/**
 * Hook for scroll-triggered visibility with stagger support
 */
export function useScrollReveal(options: {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
} = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce !== false) {
            observer.unobserve(element);
          }
        } else if (options.triggerOnce === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold ?? 0.15,
        rootMargin: options.rootMargin ?? '-30px',
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return { ref, isVisible };
}

/**
 * Hook for pulsing effect on scroll (for stats/badges)
 */
export function useScrollPulse(elementRef: RefObject<HTMLElement | null>) {
  const [isPulsing, setIsPulsing] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPulsing(true);
          // Calculate intensity based on how centered the element is
          const rect = entry.boundingClientRect;
          const centerY = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distanceFromCenter = Math.abs(centerY - viewportCenter);
          const maxDistance = window.innerHeight / 2;
          const intensity = 1 - (distanceFromCenter / maxDistance);
          setPulseIntensity(Math.max(0, Math.min(1, intensity)));
        } else {
          setIsPulsing(false);
          setPulseIntensity(0);
        }
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: '-10%' }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [elementRef]);

  return { isPulsing, pulseIntensity };
}

// ============================================
// STYLE GENERATORS - GTA 6 Animation Presets
// ============================================

export const scrollAnimationStyles = {
  // Color shift with smooth transition
  colorShift: (color: string): React.CSSProperties => ({
    color,
    transition: 'color 0.5s ease-out',
  }),

  // Fade in from below
  fadeInUp: (isVisible: boolean, delay: number = 0): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
  }),

  // Fade in from left
  fadeInLeft: (isVisible: boolean, delay: number = 0): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
  }),

  // Fade in from right
  fadeInRight: (isVisible: boolean, delay: number = 0): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
    transition: `opacity 0.7s ease-out ${delay}s, transform 0.7s ease-out ${delay}s`,
  }),

  // Scale in (for images/badges)
  scaleIn: (isVisible: boolean, delay: number = 0): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'scale(1)' : 'scale(0.85)',
    transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}s`,
  }),

  // Pulsing glow effect for stats
  pulseGlow: (isPulsing: boolean, intensity: number, glowColor: string): React.CSSProperties => ({
    transform: isPulsing ? `scale(${1 + intensity * 0.08})` : 'scale(1)',
    boxShadow: isPulsing
      ? `0 0 ${20 + intensity * 30}px ${glowColor}`
      : `0 0 0px transparent`,
    transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out',
  }),

  // Staggered child animation
  staggerChild: (isVisible: boolean, index: number, baseDelay: number = 0.1): React.CSSProperties => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.5s ease-out ${baseDelay + index * 0.08}s, transform 0.5s ease-out ${baseDelay + index * 0.08}s`,
  }),

  // Background color transition
  backgroundShift: (color: string): React.CSSProperties => ({
    backgroundColor: color,
    transition: 'background-color 1.2s ease-out',
  }),
};

// ============================================
// CSS CLASS NAMES for declarative usage
// ============================================

export const scrollAnimationClasses = {
  fadeInUp: 'scroll-fade-in-up',
  fadeInLeft: 'scroll-fade-in-left',
  fadeInRight: 'scroll-fade-in-right',
  scaleIn: 'scroll-scale-in',
  stagger: 'scroll-stagger',
  pulse: 'scroll-pulse',
  colorShift: 'scroll-color-shift',
};

// CSS to inject (can be added to index.css)
export const scrollAnimationCSS = `
/* GTA 6-style scroll animations */
.scroll-fade-in-up {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.scroll-fade-in-up.in-view {
  opacity: 1;
  transform: translateY(0);
}

.scroll-fade-in-left {
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
}
.scroll-fade-in-left.in-view {
  opacity: 1;
  transform: translateX(0);
}

.scroll-stagger > * {
  opacity: 0;
  transform: translateY(25px);
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;
}
.scroll-stagger.in-view > *:nth-child(1) { transition-delay: 0.05s; opacity: 1; transform: translateY(0); }
.scroll-stagger.in-view > *:nth-child(2) { transition-delay: 0.12s; opacity: 1; transform: translateY(0); }
.scroll-stagger.in-view > *:nth-child(3) { transition-delay: 0.19s; opacity: 1; transform: translateY(0); }
.scroll-stagger.in-view > *:nth-child(4) { transition-delay: 0.26s; opacity: 1; transform: translateY(0); }
.scroll-stagger.in-view > *:nth-child(5) { transition-delay: 0.33s; opacity: 1; transform: translateY(0); }
.scroll-stagger.in-view > *:nth-child(6) { transition-delay: 0.40s; opacity: 1; transform: translateY(0); }

.scroll-pulse {
  transition: transform 0.4s ease-out, box-shadow 0.4s ease-out;
}
.scroll-pulse.active {
  transform: scale(1.05);
  box-shadow: 0 0 30px currentColor;
}

.scroll-color-shift {
  transition: color 0.5s ease-out;
}
`;
