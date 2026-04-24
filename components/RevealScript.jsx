"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function RevealScript() {
  useEffect(() => {
    const timer = setTimeout(() => {

      // ── Section eyebrows ──
      gsap.utils.toArray(".section-eyebrow").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 16, letterSpacing: "0.5em" },
          { opacity: 1, y: 0, letterSpacing: "",
            duration: 0.8, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // ── h2 titles ──
      gsap.utils.toArray(".section-title, .section-head h2").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power4.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
          }
        );
      });

      // ── Service rows alternating ──
      gsap.utils.toArray(".svc-row").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // ── Portfolio cards ──
      gsap.utils.toArray(".port-card").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out",
            delay: (i % 3) * 0.1,
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" }
          }
        );
      });

      // ── Pricing cards ──
      gsap.utils.toArray(".pricing-card").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            delay: i * 0.12,
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // ── Philosophy items ──
      gsap.utils.toArray(".phil-item").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, x: -40 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // ── Testimonials ──
      gsap.utils.toArray(".testimonial-card").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.75, ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // ── Creative service rows ──
      gsap.utils.toArray(".media-row").forEach((el) => {
        const dir = el.classList.contains("rev") ? 60 : -60;
        gsap.fromTo(el,
          { opacity: 0, x: dir },
          { opacity: 1, x: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" }
          }
        );
      });

      // ── Stats count up ──
      gsap.utils.toArray(".r-stat-num").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30, scale: 0.8 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "back.out(1.7)",
            scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
          }
        );
      });

      // ── Gaming / Additional cards ──
      gsap.utils.toArray(".game-card, .add-card").forEach((el, i) => {
        gsap.fromTo(el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" }
          }
        );
      });

      // ── Banners ──
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%", toggleActions: "play none none none" }
          }
        );
      });

    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
