import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { EASE_SIGNAL } from "../lib/motion";

/*
 * Hero headline options (per brief — pick one, keep the others on record):
 *   1. "Every wrong answer is an echo."          <- in use
 *   2. "Most tools hear 'wrong.' We built one that hears 'why.'"
 *   3. "Listen to the mistake."
 */

export function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0 } }
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease: EASE_SIGNAL, delay },
        };

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-5 pb-20 pt-28 sm:px-8 sm:pt-32"
    >
      <div className="max-w-3xl">
        <motion.h1
          {...rise(0.12)}
          className="font-serif text-display leading-[1.02] tracking-[-0.01em] text-balance text-ink"
        >
          Every wrong answer is an echo.
        </motion.h1>

        {/*
         * Hero subhead options (per brief — pick one, keep the other on record):
         *   2. "Mach Seven is building Echo — software that hears the misconception
         *       behind the mistake. We start where STEM is hardest and the stakes
         *       are highest, and we don't stop there."
         */}
        <motion.p
          {...rise(0.22)}
          className="mt-7 max-w-xl text-body-l text-pretty text-muted"
        >
          Mach Seven is building <span className="text-ink">Echo</span>, a
          diagnostic learning engine for STEM. It doesn&rsquo;t just mark you
          wrong; it finds the misconception underneath. We&rsquo;re starting
          against the most competitive science exams on Earth, and building for
          every student who has to truly understand.
        </motion.p>

        <motion.div
          {...rise(0.32)}
          className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4"
        >
          <CTAButton href="#careers">
            See open roles
            <ArrowRight
              className="size-4 transition-transform duration-300 ease-signal group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </CTAButton>
          <CTAButton href="#echo" variant="ghost">
            What we&rsquo;re building
          </CTAButton>
        </motion.div>
      </div>
    </section>
  );
}
