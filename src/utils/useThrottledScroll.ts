import { useEffect, useRef, useCallback } from "react";

interface ThrottledScrollOptions {
  delay?: number;
  onScroll?: () => void;
  onThrottle?: () => void;
  runOnMount?: boolean;
}

const listeners = new Set<() => void>();
let isListening = false;

const sharedScrollHandler = () => {
  listeners.forEach((listener) => listener());
};

const subscribeToSharedScroll = (listener: () => void) => {
  listeners.add(listener);

  if (!isListening) {
    window.addEventListener("scroll", sharedScrollHandler, { passive: true });
    isListening = true;
  }

  return () => {
    listeners.delete(listener);

    if (listeners.size === 0 && isListening) {
      window.removeEventListener("scroll", sharedScrollHandler);
      isListening = false;
    }
  };
};

/**
 * Optimized throttled scroll hook.
 * Uses refs to avoid stale closures and ensures proper cleanup.
 */
export const useThrottledScroll = ({
  delay = 100,
  onScroll,
  onThrottle,
  runOnMount = false,
}: ThrottledScrollOptions) => {
  const onScrollRef = useRef(onScroll);
  const onThrottleRef = useRef(onThrottle);
  const timeoutIdRef = useRef<number | undefined>();
  const mountedRef = useRef(true);

  // Keep refs updated with latest callbacks
  useEffect(() => {
    onScrollRef.current = onScroll;
  }, [onScroll]);

  useEffect(() => {
    onThrottleRef.current = onThrottle;
  }, [onThrottle]);

  // Memoized handler that won't change between renders
  const handler = useCallback(() => {
    onScrollRef.current?.();

    if (!onThrottleRef.current || timeoutIdRef.current) {
      return;
    }

    timeoutIdRef.current = window.setTimeout(() => {
      if (mountedRef.current) {
        onThrottleRef.current?.();
      }
      timeoutIdRef.current = undefined;
    }, delay);
  }, [delay]);

  useEffect(() => {
    mountedRef.current = true;

    const unsubscribe = subscribeToSharedScroll(handler);

    if (runOnMount) {
      handler();
    }

    return () => {
      mountedRef.current = false;
      unsubscribe();
      if (timeoutIdRef.current) {
        window.clearTimeout(timeoutIdRef.current);
        timeoutIdRef.current = undefined;
      }
    };
  }, [handler, runOnMount]);
};
