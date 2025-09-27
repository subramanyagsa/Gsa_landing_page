import { useState, useEffect, RefObject, useRef } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  {
    threshold = 0.1,
    root = null,
    rootMargin = '0%',
    triggerOnce = true,
  }: IntersectionObserverOptions = {},
): boolean => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (triggerOnce && observerRef.current) {
            observerRef.current.unobserve(element);
          }
        } else {
          if (!triggerOnce) {
            setIsIntersecting(false);
          }
        }
      },
      { threshold, root, rootMargin }
    );

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [elementRef, threshold, root, rootMargin, triggerOnce]);

  return isIntersecting;
};