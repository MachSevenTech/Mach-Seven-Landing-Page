import type { Variants } from "framer-motion";

/** Signature easing — used for every transition on the site. */
export const EASE_SIGNAL = [0.16, 1, 0.3, 1] as const;

/** Quiet upward reveal for scroll-triggered content. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE_SIGNAL },
  },
};

/** Staggered container — children resolve in sequence. */
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

/** Shared viewport config so reveals fire once, slightly before fully in view. */
export const viewportOnce = { once: true, amount: 0.3, margin: "0px 0px -10% 0px" };
