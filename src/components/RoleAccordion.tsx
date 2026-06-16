import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { EASE_SIGNAL } from "../lib/motion";

export type EngineeringRole = {
  title: string;
  tag: string;
  hook: string;
  intro: string;
  owns: string[];
  hard: string[];
  fit: string[];
  bonus: string;
  stack?: string;
};

function Group({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mt-7 first:mt-0">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-signal">
        {label}
      </p>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3 text-[0.95rem] leading-relaxed text-paper/70"
        >
          <span
            className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-signal/80"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function RoleAccordion({
  role,
  applyHref,
}: {
  role: EngineeringRole;
  applyHref: string;
}) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelId = useId();
  const btnId = useId();

  const panel = (
    <div className="pr-1 pb-9 sm:pl-[8.25rem]">
      <p className="max-w-2xl text-[0.95rem] leading-relaxed text-paper/75">
        {role.intro}
      </p>

      <div className="mt-7 grid gap-x-12 gap-y-7 sm:grid-cols-2">
        <Group label="What you'll own">
          <BulletList items={role.owns} />
        </Group>
        <Group label="The hard problems">
          <BulletList items={role.hard} />
        </Group>
        <Group label="You might be a fit if">
          <BulletList items={role.fit} />
        </Group>
        <div>
          <Group label="Bonus">
            <p className="text-[0.95rem] leading-relaxed text-paper/70">
              {role.bonus}
            </p>
          </Group>
          {role.stack && (
            <Group label="Stack">
              <p className="text-[0.95rem] leading-relaxed text-paper/70">
                {role.stack}
              </p>
            </Group>
          )}
        </div>
      </div>

      {/* TODO: per-role apply destination — shared section mailto for now. */}
      <a
        href={applyHref}
        className="group/cta mt-8 inline-flex items-center gap-2 text-[0.95rem] font-medium text-signal transition-colors duration-300 ease-signal hover:text-paper"
      >
        Tell us what you&rsquo;d build
        <ArrowRight
          className="size-4 transition-transform duration-300 ease-signal group-hover/cta:translate-x-1"
          aria-hidden="true"
        />
      </a>
    </div>
  );

  return (
    <div>
      <h3>
        <button
          type="button"
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="group flex w-full items-start gap-5 border-t border-paper/12 py-6 text-left transition-colors duration-300 ease-signal hover:border-paper/30"
        >
          <span className="hidden w-28 shrink-0 pt-1 font-mono text-xs uppercase tracking-[0.15em] text-paper/45 sm:block">
            {role.tag}
          </span>
          <span className="flex-1">
            <span className="block text-lg font-medium tracking-tight text-paper sm:text-xl">
              {role.title}
            </span>
            <span className="mt-1 block text-[0.95rem] text-paper/55">
              {role.hook}
            </span>
          </span>
          <ChevronDown
            className={
              "mt-1 size-5 shrink-0 text-paper/40 transition-[transform,color] duration-300 ease-signal group-hover:text-signal " +
              (open ? "rotate-180" : "")
            }
            aria-hidden="true"
          />
        </button>
      </h3>

      {reduce ? (
        open && (
          <div id={panelId} role="region" aria-labelledby={btnId}>
            {panel}
          </div>
        )
      ) : (
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: EASE_SIGNAL }}
              style={{ overflow: "hidden" }}
            >
              {panel}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}
