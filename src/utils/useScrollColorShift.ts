import { useState, useEffect, RefObject } from 'react';
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

export const scrollAnimationStyles = {
  colorShift: (color: string): React.CSSProperties => ({
    color,
    transition: 'color 0.5s ease-out',
  }),

  pulseGlow: (isPulsing: boolean, intensity: number, glowColor: string): React.CSSProperties => ({
    transform: isPulsing ? `scale(${1 + intensity * 0.08})` : 'scale(1)',
    boxShadow: isPulsing
      ? `0 0 ${20 + intensity * 30}px ${glowColor}`
      : `0 0 0px transparent`,
    transition: 'transform 0.4s ease-out, box-shadow 0.4s ease-out',
  }),
};

