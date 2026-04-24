"use client";
import { motion } from "framer-motion";

/**
 * DropReveal — Top-down text drop animation on scroll.
 * Splits the children string into words; each word drops from -60px with stagger.
 *
 * Props:
 *  - text: string (will be split by spaces, each word animated)
 *  - as: HTML tag (default "div")
 *  - className: string
 *  - delay: extra delay before stagger starts
 *  - stagger: per-word delay (default 0.06)
 *  - distance: drop distance in px (default 80)
 */
export default function DropReveal({
  text,
  as: Tag = "div",
  className = "",
  delay = 0,
  stagger = 0.06,
  distance = 80,
  children,
}) {
  const content = text ?? children;
  if (typeof content !== "string") {
    // fallback: animate the whole block as one
    return (
      <motion.div
        className={className}
        initial={{ y: -distance, opacity: 0, filter: "blur(8px)" }}
        whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {content}
      </motion.div>
    );
  }

  const words = content.split(" ");
  const MotionTag = motion[Tag] || motion.div;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: stagger, delayChildren: delay }}
      style={{ display: "inline-block" }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.15em" }}
        >
          <motion.span
            style={{ display: "inline-block", whiteSpace: "pre" }}
            variants={{
              hidden: { y: -distance, opacity: 0, filter: "blur(8px)" },
              visible: {
                y: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
