# Mach Seven — site guide for future sessions

Public single-page marketing site for **Mach Seven Pte. Ltd.** (Singapore deep-tech).
It co-heroes the **company** and its flagship product **Echo**. The primary CTA is
**hiring**. Looks should read as a serious, category-defining tech company that
recruits elite builders — not a templated SaaS landing page.

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (`@tailwindcss/vite`), tokens in `src/index.css` `@theme`
- Framer Motion (motion), Lucide React (icons)
- Deploy target: Vercel (static build, `npm run build` → `dist/`)

Node: use the repo's Node (an nvm Node 24 works). `npm run dev` / `build` / `preview`.

## Non-negotiable design system

**Tokens only — never raw hex in components.** Defined once in `src/index.css`:

| Token            | Value                      | Use                                        |
| ---------------- | -------------------------- | ------------------------------------------ |
| `--color-paper`  | `#FAFAF8`                  | background                                 |
| `--color-ink`    | `#0A0A0B`                  | primary text                               |
| `--color-muted`  | `#86868B`                  | secondary text                             |
| `--color-signal` | `#E8643C` (warm amber)     | the ONLY accent: waveform + primary CTA    |
| `--color-signal-deep` | `#C9491F`             | CTA hover/active                           |
| `--color-line`   | ink @ 8%                   | hairline borders                           |

Tailwind utilities follow the token names: `bg-paper`, `text-ink`, `text-muted`,
`bg-signal`, `text-signal`, `border-line`, `ease-signal`, `text-display/head/body-l`,
`font-serif/sans/mono`.

**Type:** Instrument Serif (wordmark, hero headline, "Echo is built to listen." only);
Inter Variable (all body/UI); JetBrains Mono (legal line, labels, role tags). Loaded
via Google Fonts `<link>` in `index.html` with `display=swap`. **Do not add font npm
packages** without approval.

**Motion:** one signature easing — `cubic-bezier(0.16, 1, 0.3, 1)` (`EASE_SIGNAL` in
`src/lib/motion.ts`, `ease-signal` in CSS). One orchestrated hero moment + quiet scroll
reveals + subtle hovers. Nothing more. `prefers-reduced-motion` is fully honored (CSS
global guard + Framer `useReducedMotion` in `Reveal`, `Hero`, `SonarReturn`).

## The signature element

`src/components/SonarReturn.tsx` — "The Return": a point emits a ping (expanding rings)
and the echo returns as a waveform that draws in left-to-right. Used **once**, in the
hero. This is where all the boldness goes; everything else stays surgically quiet.
Reduced-motion = static composition. <480px = rings dropped, wave kept.

## Anti-default rule

Cream + serif + warm-amber is dangerously close to a generic "AI startup" look. We avoid
it by: (1) zero gradient scatter, (2) amber confined to the waveform + primary CTA only,
(3) all visual risk spent on the sonar motion. If anything starts to read generic, make
it quieter, not louder. Do NOT add: scattered accents, big-number hero, decorative
`01/02/03` numbering, or broadsheet hairline clutter.

## Strategic guardrails — protect the moat

Describe **what** Echo does and **why** it matters; never **how** it works.
NEVER put on this page: the problem taxonomy's structure/size, DB schema or
misconception data architecture, cost/margin thesis, ML internals (knowledge tracing,
IRT, error families), or any framing of a content channel as a distribution moat.

## Positioning (v2 — global STEM)

Echo is a **diagnostic learning engine for STEM**, not an exam-prep app. The mission is
universal: in any rigorous quantitative subject a wrong answer has a shape, and Echo
reads it to find the misconception underneath. India (JEE/NEET) is the **beachhead** —
the hardest proving ground — mentioned **once**, as a deliberate flex, never as the
ceiling. Physics first; math and chemistry next; the engine is built to generalize.
Avoid edtech vocabulary: "crack the exam", "test series", "doubt-solving", "rank/score
guarantee", "coaching", "for Indian students". Lean into: understand, misconception,
diagnose, mastery, the engine/model, learning science, signal, generalize, STEM.

## Confirmed copy decisions

- Hero headline in use: "Every wrong answer is an echo." Subhead = global-STEM option 1
  (alternatives kept in comments in `Hero.tsx`).
- Credibility line: "Incorporated in Singapore. Launching in India. Built for the world."
- Careers CTA → `mailto:careers@machseven.sg`.
- Careers roles: **Lead Full-Stack Engineer** and **Machine Learning Engineer** render as
  full expandable accordions (`RoleAccordion.tsx`); Physics Content Author + Video Editor
  stay concise rows. Rich technical/system detail in JDs is in scope; never expose
  taxonomy structure/size, DB schema specifics, cost/margin economics, or proprietary
  model-design decisions.
- Footer legal line: `Mach Seven Pte. Ltd. · UEN 202626495M · 68 Circular Road, #02-01,
  Singapore 049422 · est. 2026`.

## Open TODOs

- Drop the real **bat mascot** asset at the emitter in `SonarReturn.tsx` (one small,
  subtle appearance).
- Finalize role titles + per-role application links in `Careers.tsx`.
- Decide **compensation** display (show/hide + currency; INR reinforces an India-local
  read), **location/remote** policy per role, and per-role **apply destination** — all
  marked as TODOs in `Careers.tsx` / `RoleAccordion.tsx`.
- Optionally export `public/og-image.svg` to a 1200x630 PNG for older social crawlers.

## Out of scope

No backend / auth / CMS / database. No analytics or tracking. No `localStorage` /
`sessionStorage` for anything load-bearing. Static marketing site only.
