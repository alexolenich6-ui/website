"use client";

import { useEffect, ReactNode } from "react";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Respect users who prefer reduced motion — no smooth-scroll hijack.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.4,
      wheelMultiplier: 1,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // reducedMotion="user" — все framer-motion анимации уважают системную
  // настройку «уменьшить движение».
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
