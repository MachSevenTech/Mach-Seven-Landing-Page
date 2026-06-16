import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_SIGNAL } from "../lib/motion";

/* ------------------------------------------------------------------ *
 * SonarReturn — "The Return": the page's one signature element.
 *
 * Concept (echolocation): a source emits a pulse into a directional
 * field of wavefronts; the pulse propagates outward, and a fainter
 * echo travels back to the source. "Send a signal, read the echo."
 * Used ONCE, here in the hero.
 *
 * Composition: a static fan of concentric wavefronts gives permanent
 * structure (every frame reads as composed, never mid-animation noise);
 * one bright pulse sweeps out, one faint echo returns, alternating in a
 * slow, quiet loop. Amber (--signal) only.
 *
 * Reduced motion: the static fan + a single highlighted wavefront.
 * Small screens: the outermost wavefronts drop; the near field remains.
 * ------------------------------------------------------------------ */

const VIEW_W = 480;
const VIEW_H = 360;
const EX = 116; // emitter x
const EY = VIEW_H / 2; // emitter y

// directional fan: bearings where 90deg = straight right.
// kept to a focused beam so every wavefront stays inside the viewBox.
const FAN_START = 60;
const FAN_END = 120;

/** point on a circle around the emitter (0deg = up, clockwise). */
function polar(r: number, deg: number): [number, number] {
  const a = ((deg - 90) * Math.PI) / 180;
  return [EX + r * Math.cos(a), EY + r * Math.sin(a)];
}

/** clockwise fan arc at radius r. */
function fanArc(r: number): string {
  const [sx, sy] = polar(r, FAN_START);
  const [ex, ey] = polar(r, FAN_END);
  return `M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${r} ${r} 0 0 1 ${ex.toFixed(2)} ${ey.toFixed(2)}`;
}

// the standing wavefronts — faint structure, brightest near the source
const wavefronts = [
  { r: 66, op: 0.36, far: false },
  { r: 118, op: 0.27, far: false },
  { r: 172, op: 0.19, far: false },
  { r: 230, op: 0.12, far: true },
  { r: 292, op: 0.07, far: true },
];

// base radius the animated pulses scale out from (~innermost wavefront)
const PULSE_R = 66;

export function SonarReturn() {
  const reduce = useReducedMotion();
  const frontPaths = useMemo(
    () => wavefronts.map((w) => ({ ...w, d: fanArc(w.r) })),
    [],
  );
  const pulseD = useMemo(() => fanArc(PULSE_R), []);

  // scale around the emitter, in viewBox units, with a crisp stroke
  const pulseStyle = {
    transformBox: "view-box" as const,
    transformOrigin: `${EX}px ${EY}px`,
  };

  return (
    <div className="relative w-full select-none" aria-hidden="true" role="presentation">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="w-full h-auto"
        fill="none"
      >
        {/* standing wavefronts — permanent structure */}
        {frontPaths.map((w, i) => (
          <path
            key={`front-${w.r}`}
            d={w.d}
            stroke="var(--color-signal)"
            strokeOpacity={reduce && i === 1 ? 0.7 : w.op}
            strokeWidth="1.75"
            strokeLinecap="round"
            className={w.far ? "max-[479px]:hidden" : undefined}
          />
        ))}

        {/* emitted pulse — sweeps outward */}
        {!reduce && (
          <motion.path
            d={pulseD}
            stroke="var(--color-signal)"
            strokeWidth="2.5"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={pulseStyle}
            initial={{ scale: 0.55, opacity: 0 }}
            animate={{ scale: 4.4, opacity: [0, 0.7, 0] }}
            transition={{
              duration: 2.4,
              ease: EASE_SIGNAL,
              repeat: Infinity,
              repeatDelay: 2.4,
            }}
          />
        )}

        {/* returning echo — travels back to the source, fainter */}
        {!reduce && (
          <motion.path
            d={pulseD}
            stroke="var(--color-signal)"
            strokeWidth="2"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            style={pulseStyle}
            initial={{ scale: 4.4, opacity: 0 }}
            animate={{ scale: 0.55, opacity: [0, 0.4, 0] }}
            transition={{
              duration: 2.4,
              ease: EASE_SIGNAL,
              repeat: Infinity,
              repeatDelay: 2.4,
              delay: 2.4,
            }}
          />
        )}

        {/* emitter source */}
        <circle cx={EX} cy={EY} r="11" stroke="var(--color-signal)" strokeOpacity="0.35" strokeWidth="1.5" />
        {!reduce && (
          <motion.circle
            cx={EX}
            cy={EY}
            r="11"
            stroke="var(--color-signal)"
            strokeWidth="1.5"
            style={pulseStyle}
            initial={{ scale: 1, opacity: 0 }}
            animate={{ scale: 1.9, opacity: [0, 0.5, 0] }}
            transition={{
              duration: 1.2,
              ease: EASE_SIGNAL,
              repeat: Infinity,
              repeatDelay: 3.6,
              delay: 2.4,
            }}
          />
        )}
        <motion.circle
          cx={EX}
          cy={EY}
          r="6.5"
          fill="var(--color-signal)"
          style={pulseStyle}
          initial={reduce ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 0.5, ease: EASE_SIGNAL }}
        />
      </svg>

      {/*
        TODO: drop bat asset here — the echolocation mascot belongs at the
        emitter source, small and subtle (one appearance only).
        Suggested placement: absolute, near the emitter point (~22% from left,
        vertically centered), max-height ~28px, low opacity.
      */}
    </div>
  );
}
