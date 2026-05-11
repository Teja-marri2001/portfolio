// useReveal.js — Custom hook: adds 'visible' class when element enters viewport
import { useEffect, useRef } from "react";

/**
 * useReveal()
 * Attach the returned ref to any element.
 * Once the element scrolls into view, 'visible' is added to its classList.
 * @returns {React.RefObject}
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el); // fire once only
        }
      },
      { threshold: 0.12 } // options moved inline — no external dependency needed
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []); // empty array is correct — observer is set up once on mount

  return ref;
}