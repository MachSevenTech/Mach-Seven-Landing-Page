import { Reveal, RevealItem } from "./Reveal";

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal group className="grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-16">
        <RevealItem>
          <p
            id="problem-heading"
            className="font-mono text-xs uppercase tracking-[0.2em] text-signal"
          >
            The problem
          </p>
        </RevealItem>

        <RevealItem className="max-w-2xl space-y-7">
          <p className="font-serif text-head leading-tight tracking-[-0.01em] text-balance text-ink">
            In every STEM subject there&rsquo;s a gap between getting the answer
            wrong and understanding why you got it wrong. Almost every learning
            tool ever built sits on the wrong side of that gap. They can tell you
            that you missed. They can&rsquo;t tell you what you misunderstood.
          </p>
          <p className="text-body-l text-pretty text-muted">
            That &ldquo;what&rdquo; is the entire game. In physics, math,
            chemistry — the subjects where almost-right is still wrong — a mistake
            isn&rsquo;t random noise. It has a shape. Read the shape and you know
            exactly where a mind went sideways. We started against the most
            demanding exams in the world for one reason: if diagnosis holds up
            there, it holds up anywhere.
          </p>
        </RevealItem>
      </Reveal>
    </section>
  );
}
