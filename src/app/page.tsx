import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import ServiceGrid from "@/components/ServiceGrid";
import DoctorGrid from "@/components/DoctorGrid";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import LocationSection from "@/components/LocationSection";
import SectionHeading from "@/components/SectionHeading";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Unsere Leistungen"
            title="Fachärztliche Kompetenz unter einem Dach"
            description="Von der Vorsorge bis zur Spezialdiagnostik – wir begleiten Sie in jeder Lebensphase."
          />
          <FadeIn>
            <Link
              href="/leistungen"
              className="flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Alle Leistungen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
        <div className="mt-14">
          <ServiceGrid limit={6} />
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Unser Team"
              title="Erfahrene Ärztinnen und Ärzte, die zuhören"
            />
            <FadeIn>
              <Link
                href="/team"
                className="flex shrink-0 items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Ganzes Team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>
          <div className="mt-14">
            <DoctorGrid />
          </div>
        </div>
      </section>

      <Testimonials />
      <Gallery />
      <LocationSection />
      <CTASection />
    </>
  );
}
