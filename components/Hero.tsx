import type { SVGProps } from "react";
import { HeroCarousel } from "@/components/HeroCarousel";
import { intro, person } from "@/lib/data";

function IconMail(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden {...props}>
      <path d="M4 6h16v12H4z" strokeLinejoin="round" />
      <path d="M4 7l8 6 8-6" strokeLinecap="round" />
    </svg>
  );
}

function IconGithub(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function IconLinkedin(props: Readonly<SVGProps<SVGSVGElement>>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="topo" className="hero-surface">
      <div className="hero-grid">
        <div>
          <p className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface-card)] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" aria-hidden />
            {person.focus}
          </p>
          <h1 className="font-serif text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[var(--ink)] sm:text-5xl lg:text-[3.15rem]">
            {person.name.split(" ").slice(0, 2).join(" ")}
            <span className="mt-1 block text-[var(--ink-muted)] sm:text-[2.45rem]">
              {person.name.split(" ").slice(2).join(" ")}
            </span>
          </h1>
          <p className="mt-2 max-w-xl text-lg text-[var(--ink-soft)] md:text-xl">{person.title}</p>
          <p
            id="sobre"
            className="mt-7 max-w-xl scroll-mt-28 text-[0.98rem] leading-[1.75] text-[var(--ink-soft)] md:scroll-mt-32 md:text-[1.05rem]"
          >
            {intro}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--ink-muted)]">{person.availability}</p>
          <div className="mt-9 flex flex-wrap gap-2.5">
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--forest)] px-5 py-2.5 text-sm font-medium text-[var(--paper-elevated)] transition-colors hover:bg-[var(--forest-hover)]"
            >
              <IconMail className="h-4 w-4" />
              E-mail
            </a>
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--surface-card)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
            >
              <IconGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 text-sm font-medium text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
            >
              <IconLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <HeroCarousel />
          <div className="hero-contact">
            <h2>Se precisar falar comigo</h2>
            <ul>
              <li>
                <strong>E-mail</strong>
                <a href={`mailto:${person.email}`}>{person.email}</a>
              </li>
              <li>
                <strong>Telefone</strong>
                <a href={person.phoneHref}>{person.phone}</a>
              </li>
              <li>
                <strong>Local</strong>
                <span>{person.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
