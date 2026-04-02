import { person } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contato" className="border-t border-[var(--line)] bg-[var(--ink)] py-14 text-[var(--paper)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 md:flex-row md:items-end md:justify-between md:px-8">
        <div className="scroll-mt-28 md:scroll-mt-32">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/50">Contato</p>
          <h2 className="mt-3 font-serif text-3xl">Manda um oi</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
            Vaga, freelance, dúvida sobre algum repo por favor entre em contato!
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${person.email}`}
              className="rounded-full bg-[var(--paper)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--sand)]"
            >
              {person.email}
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-[var(--paper)] transition hover:bg-white/10"
            >
              LinkedIn
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/25 px-5 py-2.5 text-sm font-medium text-[var(--paper)] transition hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
        <p className="text-xs text-white/40">
          © {year} {person.name}. Site em Next.js.
        </p>
      </div>
    </footer>
  );
}
