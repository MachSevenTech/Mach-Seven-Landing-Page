import { ArrowRight } from "lucide-react";
import { Reveal, RevealItem } from "./Reveal";
import { CTAButton } from "./CTAButton";
import { RoleAccordion, type EngineeringRole } from "./RoleAccordion";

const MAILTO =
  "mailto:careers@machseven.sg?subject=Tell%20us%20what%20you%27d%20build";

/*
 * Open fields for Aditya (TODO):
 *   - Compensation: show or hide, and currency. Advertising an INR salary
 *     reinforces an India-local read — prefer "competitive + meaningful equity"
 *     or omit if the goal is a global feel.
 *   - Location / remote policy per role.
 *   - Apply destination: shared section mailto for now (MAILTO above).
 */

// The two senior engineering roles get the full, expandable treatment.
const engineeringRoles: EngineeringRole[] = [
  {
    title: "Lead Full-Stack Engineer",
    tag: "Engineering",
    hook: "Architect the system the entire product runs on — and own the decisions that shape it.",
    intro:
      "The role. You are the founding engineer. You design the backend, build the student-facing web app, and stand up the content engine that feeds everything else. The big architecture calls are yours to make.",
    owns: [
      "The backend, from the ground up — data model, APIs, infrastructure. You decide the architecture.",
      "The student-facing web application: the surface students actually live in, built for focus.",
      "The content engine — a pipeline that ingests problems from screenshots, extracts and structures them with the Claude API and Mathpix, and routes them through human review with async batch processing.",
      "One API layer serving both web and mobile, plus the real-time event tracking that powers analytics and trains our learning models.",
    ],
    hard: [
      "Serve the right next problem to each student in under 200ms, while the library grows from thousands of problems to tens of thousands, each carrying dozens of structured signals.",
      "Track per-student, per-concept mastery and traverse prerequisite dependency graphs in real time.",
      "Scale from a 100-student pilot to tens of thousands of concurrent learners without the experience degrading.",
      "Then go further: real-time 1v1 problem battles over WebSockets, live leaderboards, payments, and a multi-tenant API for institutions.",
    ],
    fit: [
      "You've designed and shipped production full-stack systems and are comfortable owning architecture end-to-end.",
      "You decide well with incomplete information and would rather ship and iterate than plan in triplicate.",
      "TypeScript, React, and PostgreSQL are home turf, and you've worked with caching, async job queues, and real-time systems.",
    ],
    bonus:
      "You've built something at scale solo or near-solo, worked with LLM-powered pipelines, or care about education.",
    stack:
      "TypeScript end-to-end, React, PostgreSQL/Supabase, Claude API + Mathpix, Redis, S3-compatible storage. You'll have real say in all of it.",
  },
  {
    title: "Machine Learning Engineer",
    tag: "Engineering",
    hook: "Build the brain — the model that figures out what each student actually understands, and what they should do next.",
    intro:
      "The role. You're the founding ML hire. Before you train a single model, you design the data foundation the entire company will build on — then you build the models on top of it.",
    owns: [
      "The learner-state model: how we represent what a student knows, how they err, how confident they are, and how all of that shifts over time.",
      "The interaction event schema — designed so every signal a future model could need is captured from day one.",
      "The recommendation engine: choosing the next problem from error type, mastery, prerequisite readiness, and spacing — built modular so it can grow from rule-based to fully learned without a rewrite.",
      "The adaptive model itself, evolving from knowledge tracing toward deep, per-student models of learning and forgetting.",
    ],
    hard: [
      "Diagnose the specific misconception behind a wrong answer — and eventually predict it from partial signals (response time, hint use, confidence) before the student even commits.",
      "Model individual learning rates and forgetting curves to drive genuinely personalized spaced repetition.",
      "Read open-ended student reasoning with the Claude API to catch the misunderstandings multiple-choice can't surface.",
      "Measure what actually matters — conceptual gain, retention, transfer — through rigorous experiments, never vanity engagement metrics.",
    ],
    fit: [
      "You're fluent in the modern Python/ML stack and energized by applied modeling on messy, real human data.",
      "You think like a scientist but ship like an engineer — you care whether students actually learn, and you'll instrument everything to prove it.",
      "You want the ownership of being employee-zero for ML, defining the foundation rather than inheriting one.",
    ],
    bonus:
      "Background or genuine curiosity in learning science, knowledge tracing (BKT/DKT), psychometrics/IRT, or LLM-based evaluation.",
  },
];

export function Careers() {
  return (
    <section
      id="careers"
      aria-labelledby="careers-heading"
      className="border-t border-line bg-ink text-paper"
    >
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-signal">
            Careers
          </p>
          <h2
            id="careers-heading"
            className="mt-6 font-serif text-display leading-[1.02] tracking-[-0.01em] text-paper"
          >
            We&rsquo;re hiring.
          </h2>
          <p className="mt-7 max-w-xl text-body-l text-pretty text-paper/65">
            Mach Seven is for people who want to own something, ship it this week,
            and watch real students use it. If you need a roadmap signed in
            triplicate before you start, this isn&rsquo;t it. If you&rsquo;ve been
            waiting for a reason to do the best work of your life, it might be.
          </p>
        </Reveal>

        <Reveal group as="ul" className="mt-14 flex flex-col">
          {engineeringRoles.map((role) => (
            <RevealItem key={role.title} as="li">
              <RoleAccordion role={role} applyHref={MAILTO} />
            </RevealItem>
          ))}

          <RevealItem as="li">
            <div className="border-t border-paper/12 py-6">
              <p className="text-[0.95rem] text-paper/55">
                <span className="text-paper/80">
                  And roles we haven&rsquo;t named yet
                </span>{" "}
                — for people who don&rsquo;t fit a box.
              </p>
            </div>
          </RevealItem>
        </Reveal>

        <Reveal className="mt-14">
          <CTAButton href={MAILTO} className="text-base">
            Tell us what you&rsquo;d build
            <ArrowRight
              className="size-4 transition-transform duration-300 ease-signal group-hover:translate-x-1"
              aria-hidden="true"
            />
          </CTAButton>
        </Reveal>
      </div>
    </section>
  );
}
