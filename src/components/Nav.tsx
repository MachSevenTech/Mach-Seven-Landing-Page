import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-signal " +
        (scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent")
      }
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="flex items-center gap-2.5 text-ink"
        >
          <img
            src="/mach-seven-mark.png"
            alt="Mach Seven logo"
            className="size-7 rounded-md"
            width={28}
            height={28}
          />
          <span className="text-2xl leading-none tracking-tight">Mach Seven</span>
        </a>
        <a
          href="#careers"
          className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-all duration-300 ease-signal hover:border-ink/40 hover:-translate-y-0.5"
        >
          See open roles
        </a>
      </nav>
    </header>
  );
}
