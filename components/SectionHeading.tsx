type SectionHeadingProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-28 md:scroll-mt-32">
      <p className="text-xs font-medium uppercase tracking-[0.22em] text-[var(--accent)]">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl tracking-tight text-[var(--ink)] md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-muted)]">{description}</p>
      ) : null}
    </div>
  );
}
