# Mach Seven — website

Single-page marketing site for **Mach Seven Pte. Ltd.**, a Singapore deep-tech company
building **Echo** — learning software that hears the misconception behind the mistake.
The page co-heroes the company and the product; its primary call-to-action is hiring.

## Stack

- React + TypeScript + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) (hero/scroll motion)
- [Lucide React](https://lucide.dev) (icons)

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build → dist/
npm run preview  # preview the production build
```

## Deploy (Vercel)

Static build. Framework preset: **Vite**. Build command `npm run build`, output `dist`.
No environment variables or backend required.

## Project structure

```
index.html              meta / OG / fonts
src/
  index.css             Tailwind v4 import + @theme design tokens
  App.tsx               page composition
  lib/motion.ts         signature easing + reveal variants
  components/
    Nav.tsx             sticky minimal nav
    Hero.tsx            thesis headline + the signature
    SonarReturn.tsx     "The Return" — the one signature element
    Problem.tsx         why we exist
    Echo.tsx            Diagnose / Adapt / Master
    WhyMachSeven.tsx    velocity + Singapore incorporation
    Careers.tsx         primary CTA — open roles
    Footer.tsx          corporate legitimacy line
    Reveal.tsx          scroll-reveal wrapper (reduced-motion aware)
    CTAButton.tsx       primary / ghost buttons
public/
  favicon.svg
  og-image.svg
```

## Design system & guardrails

See [`CLAUDE.md`](./CLAUDE.md) for the full design tokens, motion rules, the sonic
creative concept, and the strategic "reveal vs. protect" guardrails. The short version:
tokens only (no raw hex in components), one restrained sonar signature in the hero,
everything else surgically quiet.

## Accessibility & performance

Semantic landmarks, visible keyboard focus (amber rings), `prefers-reduced-motion` fully
honored (the sonar has a calm static fallback), responsive from 380px, fonts loaded with
`display=swap` to avoid FOIT.
