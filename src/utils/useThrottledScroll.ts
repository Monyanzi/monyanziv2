import { useEffect, useRef } from "react";

interface ThrottledScrollOptions {
  delay?: number;
  onScroll?: () => void;
  onThrottle?: () => void;
  runOnMount?: boolean;
}

export const useThrottledScroll = ({
  delay = 100,
  onScroll,
  onThrottle,
  runOnMount = false,
}: ThrottledScrollOptions) => {
  const onScrollRef = useRef(onScroll);
  const onThrottleRef = useRef(onThrottle);

  useEffect(() => {
    onScrollRef.current = onScroll;
  }, [onScroll]);

  useEffect(() => {
    onThrottleRef.current = onThrottle;
  }, [onThrottle]);

  useEffect(() => {
    let timeoutId: number | undefined;

    const handler = () => {
      onScrollRef.current?.();

      if (!onThrottleRef.current || timeoutId) {
        return;
      }

      timeoutId = window.setTimeout(() => {
        onThrottleRef.current?.();
        timeoutId = undefined;
      }, delay);
    };

    window.addEventListener("scroll", handler, { passive: true });
    if (runOnMount) {
      handler();
    }

    return () => {
      window.removeEventListener("scroll", handler);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, [delay, runOnMount]);
};
