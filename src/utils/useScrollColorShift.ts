import { useState, useEffect, RefObject, useRef } from 'react';

/**
 * Optimized scroll-based color shift hook with RAF throttling.
 * Only updates state when the actual color value changes.
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
  const rafRef = useRef<number>(0);
  const lastColorRef = useRef(colors.start);
  
  // Store latest colors in ref to avoid stale closures
  const colorsRef = useRef(colors);
  colorsRef.current = colors;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      // Skip if RAF already scheduled
      if (rafRef.current) return;
      
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionTop = rect.top;
        const sectionHeight = rect.height;

        const progress = Math.max(0, Math.min(1,
          (windowHeight - sectionTop) / (windowHeight + sectionHeight)
        ));

        const { start, mid, end } = colorsRef.current;
        let newColor: string;

        if (progress < 0.25) {
          newColor = start;
        } else if (progress < 0.5 && mid) {
          newColor = mid;
        } else if (progress >= 0.5) {
          newColor = end;
        } else {
          newColor = mid || end;
        }

        // Only update state if color actually changed
        if (newColor !== lastColorRef.current) {
          lastColorRef.current = newColor;
          setCurrentColor(newColor);
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [sectionRef]);

  return currentColor;
}

/**
 * Scroll-based pulse effect using IntersectionObserver (no scroll listener).
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

// Pre-computed style factory functions - creates objects only when parameters change
const colorShiftStyleCache = new Map<string, React.CSSProperties>();
const pulseGlowStyleCache = new Map<string, React.CSSProperties>();

export const scrollAnimationStyles = {
  colorShift: (color: string): React.CSSProperties => {
    if (!colorShiftStyleCache.has(color)) {
      colorShiftStyleCache.set(color, {
        color,
        transition: 'color 0.5s ease-out',
      });
    }
    return colorShiftStyleCache.get(color)!;
  },

  pulseGlow: (isPulsing: boolean, intensity: number, glowColor: string): React.CSSProperties => {
    const key = `${isPulsing}-${intensity.toFixed(2)}-${glowColor}`;
    if (!pulseGlowStyleCache.has(key)) {
      pulseGlowStyleCache.set(key, {
        transform: isPulsing ? `scale(${1 + intensity * 0.08})` : 'scale(1)',
        boxShadow: isPulsing
          ? `0 0 ${20 + intensity * 30}px ${glowColor}`
          : `0 0 0px transparent`,
        transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out',
      });
    }
    return pulseGlowStyleCache.get(key)!;
  },
};
