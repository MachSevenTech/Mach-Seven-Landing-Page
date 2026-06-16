export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="flex flex-col gap-8 border-t border-line pt-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-xl tracking-tight text-ink">Mach Seven</p>
          <p className="mt-3 max-w-md font-mono text-xs leading-relaxed tracking-tight text-muted">
            Mach Seven Pte. Ltd. · UEN 202626495M · 68 Circular Road, #02-01,
            Singapore 049422 · est. 2026
          </p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-6 text-sm">
          <a
            href="#careers"
            className="text-muted transition-colors duration-300 ease-signal hover:text-ink"
          >
            Careers
          </a>
          <a
            href="mailto:careers@machseven.sg"
            className="text-muted transition-colors duration-300 ease-signal hover:text-ink"
          >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
