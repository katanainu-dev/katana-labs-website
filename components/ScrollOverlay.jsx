"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollOverlay({ children, className, style }) {
  const wrapRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Overlay fades IN as section exits (scrolling past it)
      gsap.fromTo(overlayRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "60% center",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} style={{ position: "relative", ...style }} className={className}>
      {children}
      {/* Dark overlay that fades in on scroll out */}
      <div
        ref={overlayRef}
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(8,8,10,0) 0%, rgba(8,8,10,0.97) 100%)",
          pointerEvents: "none",
          zIndex: 10,
          opacity: 0,
        }}
      />
    </div>
  );
}
