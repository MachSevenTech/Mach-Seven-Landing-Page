import { type ReactNode, type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const base =
  "group inline-flex items-center gap-2 rounded-full text-[0.95rem] font-medium " +
  "transition-all duration-300 ease-signal will-change-transform focus-visible:outline-none";

const variants: Record<Variant, string> = {
  // The amber spends almost all its weight here — the primary action.
  primary:
    "bg-signal text-paper px-6 py-3 hover:bg-signal-deep hover:-translate-y-0.5 " +
    "active:translate-y-0 shadow-[0_1px_0_rgba(10,10,11,0.04)]",
  // Quiet text affordance — no fill, ink-toned, underline grows on hover.
  ghost:
    "text-ink/80 px-1 py-3 hover:text-ink " +
    "[&>span.line]:bg-ink/30 hover:[&>span.line]:bg-ink",
};

export function CTAButton({ children, variant = "primary", className = "", ...rest }: Props) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}
