// useReveal.js — Custom hook: adds 'visible' class when element enters viewport
import { useEffect, useRef } from "react";

/**
 * useReveal(options)
 * Attach the returned ref to any element.
 * Once the element scrolls into view, 'visible' is added to its classList.
 *
 * @param {object} options - IntersectionObserver options
 * @returns {React.RefObject}
 */
export default function useReveal(options = {}) {
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
      { threshold: 0.12, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
