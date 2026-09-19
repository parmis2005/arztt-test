import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leistungen – AVEA Gesundheitszentrum",
  description:
    "Allgemeinmedizin, Innere Medizin, Vorsorge, Kinderheilkunde, Orthopädie und Video-Sprechstunde im AVEA Gesundheitszentrum München.",
};

const highlights = [
  "Digitale Terminbuchung",
  "Kurze Wartezeiten",
  "Moderne Diagnostik vor Ort",
  "Mehrsprachiges Praxisteam",
];

export default function LeistungenPage() {
  return (
    <>
      <PageHero
        eyebrow="Leistungen"
        title="Fachärztliche Betreuung für jede Lebensphase"
        description="Von der Vorsorgeuntersuchung bis zur spezialisierten Diagnostik – unser interdisziplinäres Team deckt die wichtigsten medizinischen Fachbereiche unter einem Dach ab."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="space-y-20">
          {services.map((service, i) => (
            <FadeIn key={service.slug}>
              <div
                id={service.slug}
                className={`grid scroll-mt-28 grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-80 w-full object-cover sm:h-96"
                  />
                </div>
                <div>
                  <span className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    Leistung {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-display text-2xl font-bold text-ink sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-2">
                    {highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="flex items-center gap-2 text-sm text-ink"
                      >
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/kontakt#termin"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Termin für {service.title}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
