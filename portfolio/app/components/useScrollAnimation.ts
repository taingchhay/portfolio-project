"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimation<T extends HTMLElement>(
  animationClass: string = "animate-fade-in-up"
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("animate-hidden");
          el.classList.add(animationClass);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animationClass]);

  return ref;
}
