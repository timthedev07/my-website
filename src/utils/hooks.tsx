import { useState, useEffect, MutableRefObject } from "react";

export const useOnScreen = <T extends HTMLElement | null>(
  ref: MutableRefObject<T>,
  threshold = 0.5
) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        setIntersecting(entry.isIntersecting);
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      {
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold]);

  return isIntersecting;
};

export const useViewportClassname = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  viewportClassname = "",
  nonViewportClassname = "",
  threshold = 0.05
) => {
  const isOnScreen = useOnScreen(ref, threshold);

  useEffect(() => {
    const currNode = ref.current;
    if (!currNode) return;

    if (isOnScreen) {
      currNode.className = currNode.className.concat(" ", viewportClassname);
    } else {
      if (currNode.className.includes(viewportClassname)) {
        currNode.className = currNode.className.replace(viewportClassname, "");
      }
      if (!currNode.className.includes(nonViewportClassname)) {
        currNode.className = currNode.className.concat(
          " ",
          nonViewportClassname
        );
      }
    }
  }, [isOnScreen, ref, viewportClassname, nonViewportClassname]);
};
