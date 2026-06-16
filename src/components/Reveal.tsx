import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { reveal, stagger, viewportOnce } from "../lib/motion";

type Props = {
  children: ReactNode;
  className?: string;
  /** When true, acts as a stagger container for nested <Reveal.Item> children. */
  group?: boolean;
  as?: "div" | "section" | "ul" | "li";
};

/**
 * Scroll reveal wrapper. With reduced-motion preferred, renders content
 * statically (fully visible, no transform) — the calm fallback.
 */
export function Reveal({ children, className, group = false, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      className={className}
      variants={group ? stagger : reveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </Tag>
  );
}

/** Child of a `group` Reveal — inherits the parent's stagger timing. */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag className={className} variants={reveal}>
      {children}
    </Tag>
  );
}
