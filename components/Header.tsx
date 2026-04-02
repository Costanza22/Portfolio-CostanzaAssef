import Link from "next/link";
import { navLinks, person } from "@/lib/data";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--paper)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href="#topo"
          className="group font-serif text-lg tracking-tight text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
        >
          <span className="block leading-tight">Costanza</span>
          <span className="block text-xs font-sans font-medium uppercase tracking-[0.2em] text-[var(--ink-muted)] group-hover:text-[var(--accent)]">
            Assef
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-[var(--ink-muted)] md:flex"
          aria-label="Principal"
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-[var(--ink)] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[var(--accent)] after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={`mailto:${person.email}`}
            className="rounded-full border border-[var(--ink)] bg-[var(--ink)] px-4 py-2 text-sm font-medium text-[var(--paper)] transition hover:bg-transparent hover:text-[var(--ink)]"
          >
            Me escreve
          </a>
        </div>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium text-[var(--ink)] [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-[var(--line)] bg-[var(--paper-elevated)] p-3 shadow-lg">
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-[var(--ink-muted)] hover:bg-[var(--accent-soft)] hover:text-[var(--ink)]"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={`mailto:${person.email}`}
                className="mt-2 rounded-lg bg-[var(--forest)] px-3 py-2 text-center text-sm text-[var(--paper)]"
              >
                E-mail
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
