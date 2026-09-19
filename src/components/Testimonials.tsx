import { Star, Quote } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-sand py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Erfahrungsberichte"
          title="Was unsere Patient:innen sagen"
          align="center"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-line">
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
