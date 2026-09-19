import { Star, Quote } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-sand py-24">
      <div className="glow-orb animate-float-slower pointer-events-none absolute left-1/4 -top-20 h-72 w-72 bg-primary/10" />
      <div className="glow-orb animate-drift pointer-events-none absolute -right-16 bottom-0 h-72 w-72 bg-accent/10" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Erfahrungsberichte"
          title="Was unsere Patient:innen sagen"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <div className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:ring-primary/20">
                <Quote className="h-6 w-6 text-primary/30" />
                <div className="mt-3 flex gap-0.5 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  „{t.text}“
                </p>
                <p className="mt-5 font-display text-sm font-semibold text-ink">
                  {t.name}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
