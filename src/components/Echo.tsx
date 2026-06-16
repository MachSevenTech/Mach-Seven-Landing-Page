import { Reveal, RevealItem } from "./Reveal";

const capabilities = [
  {
    name: "Diagnose",
    body: "Echo reads the misconception behind each mistake: not just that an answer was wrong, but which specific misunderstanding produced it.",
  },
  {
    name: "Adapt",
    body: "What it hears reshapes what comes next. Every student walks a path cut to their own gaps.",
  },
  {
    name: "Master",
    body: "Focused practice on the exact ideas standing between a student and the right answer.",
  },
];

export function Echo() {
  return (
    <section
      id="echo"
      aria-labelledby="echo-heading"
      className="border-y border-line bg-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Echo, the flagship
          </p>
          <h2
            id="echo-heading"
            className="mt-6 font-serif text-display leading-[1.05] tracking-[-0.01em] text-balance text-ink"
          >
            Echo is built to listen.
          </h2>
        </Reveal>

        <Reveal
          group
          as="ul"
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
        >
          {capabilities.map((c) => (
            <RevealItem
              key={c.name}
              as="li"
              className="bg-paper p-8 transition-colors duration-500 ease-signal hover:bg-paper sm:p-9"
            >
              <h3 className="text-lg font-semibold tracking-tight text-ink">
                {c.name}
              </h3>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                {c.body}
              </p>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-10 max-w-2xl">
          <p className="text-body-l text-pretty text-muted">
            <span className="text-ink">One engine, every STEM subject.</span>{" "}
            Physics first, mathematics and chemistry next, built from the start
            to generalize.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
