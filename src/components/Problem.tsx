import { Reveal, RevealItem } from "./Reveal";

export function Problem() {
  return (
    <section
      id="problem"
      aria-labelledby="problem-heading"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32"
    >
      <Reveal group className="grid gap-y-8 lg:grid-cols-[0.32fr_0.68fr] lg:gap-16">
        <RevealItem>
          <p
            id="problem-heading"
            className="font-mono text-xs uppercase tracking-[0.2em] text-signal"
          >
            The problem
          </p>
          <span className="mt-4 hidden h-px w-10 bg-signal/40 lg:block" aria-hidden="true" />
        </RevealItem>

        <RevealItem className="max-w-[42rem]">
          {/* Setup fades back; the closing line lands in full ink. */}
          <p className="text-[clamp(1.6rem,2.7vw,2.4rem)] font-medium leading-[1.22] tracking-[-0.02em] text-balance text-ink/45">
            In every STEM subject there&rsquo;s a gap between getting the answer
            wrong and understanding why you got it wrong. Almost every learning
            tool ever built sits on the wrong side of that gap. They can tell you
            that you missed.{" "}
            <span className="text-ink">
              They can&rsquo;t tell you what you misunderstood.
            </span>
          </p>

          <div className="mt-9 h-px w-full bg-line" aria-hidden="true" />

          <p className="mt-9 max-w-prose text-body-l text-pretty text-muted">
            That &ldquo;what&rdquo; is the entire game. In physics, math, and
            chemistry, the subjects where almost-right is still wrong, a mistake
            isn&rsquo;t random noise. It has a{" "}
            <span className="text-ink">shape</span>. Read the shape and you know
            exactly where a mind went sideways. We started against the most
            demanding exams in the world for one reason: if diagnosis holds up
            there, it holds up anywhere.
          </p>
        </RevealItem>
      </Reveal>
    </section>
  );
}
