import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import DoctorGrid from "@/components/DoctorGrid";
import CTASection from "@/components/CTASection";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Unser Team – AVEA Gesundheitszentrum",
  description:
    "Lernen Sie das ärztliche Team des AVEA Gesundheitszentrums kennen: erfahren, einfühlsam und interdisziplinär vernetzt.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Unser Team"
        title="Menschen, die zuhören und Verantwortung übernehmen"
        description="Unser interdisziplinäres Team bringt langjährige klinische Erfahrung mit und arbeitet eng zusammen, damit Sie ganzheitlich betreut werden."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <FadeIn>
          <DoctorGrid withBio />
        </FadeIn>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
              Verstärkung für unser Team gesucht
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              Wir wachsen stetig und suchen engagierte Fachärzt:innen und
              medizinisches Fachpersonal, die unsere Vision einer modernen,
              menschlichen Medizin teilen.
            </p>
            <a
              href="mailto:karriere@avea-gesundheit.de"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Initiativbewerbung senden
            </a>
          </FadeIn>
        </div>
      </section>

      <CTASection />
    </>
  );
}
