"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Restrained scroll-reveal — 12-16px translate, 300-400ms ease-out.
 * Respects prefers-reduced-motion. No parallax, no bounce.
 *
 * Robustness: uses a 1.2s mount-timeout fallback so content is NEVER
 * permanently invisible — even if the IntersectionObserver is slow to
 * fire (e.g. on full-page screenshots, very slow devices, or elements
 * rendered just below the fold). The timeout is cancelled as soon as
 * the element enters the viewport.
 */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.1, margin: "0px 0px -60px 0px" });
  // Safety net: if the element hasn't entered the viewport within 1.2s
  // of mounting, force it visible. This guarantees content is never
  // stuck at opacity:0 (e.g. slow IntersectionObserver, print/screenshot).
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    if (inView) return; // already visible — no need for the fallback
    const t = setTimeout(() => setFallback(true), 1200);
    return () => clearTimeout(t);
  }, [inView]);

  const visible = inView || fallback;

  return (
    <MotionTag
      ref={ref as never}
      className={className}
      // When reduced motion is requested, skip the translate entirely.
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      animate={visible ? (reduce ? { opacity: 1 } : { opacity: 1, y: 0 }) : undefined}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
