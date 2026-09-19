import FadeIn from "@/components/FadeIn";

export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-32">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
      <div className="relative mx-auto max-w-4xl px-5 text-center lg:px-8">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-light">
            {eyebrow}
          </span>
          <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
              {description}
            </p>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
