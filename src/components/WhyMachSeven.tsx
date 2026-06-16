import { Reveal, RevealItem } from "./Reveal";

export function WhyMachSeven() {
  return (
    <section
      id="company"
      aria-labelledby="company-heading"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal group className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
        <RevealItem>
          <p
            id="company-heading"
            className="font-mono text-xs uppercase tracking-[0.2em] text-signal"
          >
            Why Mach Seven
          </p>
        </RevealItem>

        <RevealItem className="max-w-2xl space-y-7">
          <p className="font-serif text-head leading-tight tracking-[-0.01em] text-balance text-ink">
            Mach 7 is seven times the speed of sound. We chose the name on
            purpose.
          </p>
          <p className="text-body-l text-pretty text-muted">
            Mach Seven is a small team building at hypersonic speed — engineers
            and educators who&rsquo;ve actually taught this material to hundreds
            of thousands of students, now turning that instinct into software.
          </p>
          {/* TODO: further disclosures (backing, advisors, etc.) are Aditya's call. */}
          <p className="font-mono text-sm tracking-tight text-ink/70">
            Incorporated in Singapore. Launching in India. Built for the world.
          </p>
        </RevealItem>
      </Reveal>
    </section>
  );
}
