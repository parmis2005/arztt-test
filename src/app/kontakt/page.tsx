import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import AppointmentForm from "@/components/AppointmentForm";
import LocationSection from "@/components/LocationSection";
import FAQAccordion from "@/components/FAQAccordion";
import { Phone, Mail } from "lucide-react";
import { practice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kontakt & Termin – AVEA Gesundheitszentrum",
  description:
    "Vereinbaren Sie online einen Termin im AVEA Gesundheitszentrum München oder kontaktieren Sie unser Praxisteam telefonisch.",
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Kontakt"
        title="Wir freuen uns auf Sie"
        description="Vereinbaren Sie unkompliziert einen Termin über unser Formular oder erreichen Sie uns direkt telefonisch."
      />

      <section
        id="termin"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 lg:px-8"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
          <FadeIn>
            <SectionHeading
              eyebrow="Terminanfrage"
              title="In wenigen Minuten zu Ihrem Termin"
              description="Füllen Sie das Formular aus – unser Team meldet sich zeitnah, um Ihren Wunschtermin zu bestätigen. Bei akuten Beschwerden rufen Sie uns bitte direkt an."
            />
            <div className="mt-8 space-y-4">
              <a
                href={practice.phoneHref}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-primary"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-ink-soft">
                    Praxistelefon
                  </p>
                  <p className="font-display font-semibold text-ink">
                    {practice.phone}
                  </p>
                </div>
              </a>
              <a
                href={`mailto:${practice.email}`}
                className="flex items-center gap-3 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-primary"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-medium text-ink-soft">E-Mail</p>
                  <p className="font-display font-semibold text-ink">
                    {practice.email}
                  </p>
                </div>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <AppointmentForm />
          </FadeIn>
        </div>
      </section>

      <LocationSection />

      <section className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Häufige Fragen"
            title="Gut zu wissen"
            align="center"
          />
          <div className="mt-14">
            <FAQAccordion />
          </div>
        </div>
      </section>
    </>
  );
}
