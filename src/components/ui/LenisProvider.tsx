"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      frameRef.current = requestAnimationFrame(raf);
    }

    frameRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameRef.current);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
