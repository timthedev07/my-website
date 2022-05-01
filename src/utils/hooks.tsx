import { useState, useEffect, MutableRefObject } from "react";

export const useOnScreen = <T extends HTMLElement | null>(
  ref: MutableRefObject<T>
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(([entry], observer) => {
      setIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};
