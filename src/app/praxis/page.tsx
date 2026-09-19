import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Gallery from "@/components/Gallery";
import CTASection from "@/components/CTASection";
import { Microscope, ScanLine, Activity, MonitorSmartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Die Praxis – AVEA Gesundheitszentrum",
  description:
    "Moderne Räume, hochwertige Diagnostiktechnik und eine Atmosphäre zum Wohlfühlen – ein Einblick in das AVEA Gesundheitszentrum.",
};

const equipment = [
  {
    icon: ScanLine,
    title: "Digitale Ultraschalldiagnostik",
    text: "Hochauflösende Sonografie für Innere Medizin, Orthopädie und Vorsorge.",
  },
  {
    icon: Activity,
    title: "Belastungs-EKG",
    text: "Präzise kardiologische Diagnostik zur Früherkennung von Risiken.",
  },
  {
    icon: Microscope,
    title: "Eigenes Praxislabor",
    text: "Schnelle Laboranalysen ohne lange Wartezeit auf externe Befunde.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digitale Patientenakte",
    text: "Sicherer, ortsunabhängiger Zugriff auf Befunde für unser gesamtes Team.",
  },
];

const timeline = [
  { year: "2009", text: "Gründung als hausärztliche Einzelpraxis in München-Ludwigsvorstadt." },
  { year: "2014", text: "Erweiterung um die Fachbereiche Innere Medizin und Kinderheilkunde." },
  { year: "2019", text: "Umzug in die neuen, hellen Räumlichkeiten in der Wilhelm-Böckh-Straße." },
  { year: "2023", text: "Einführung der Video-Sprechstunde und des digitalen Patientenportals." },
];

export default function PraxisPage() {
  return (
    <>
      <PageHero
        eyebrow="Die Praxis"
        title="Ein Ort, an dem Medizin und Wohlbefinden zusammenkommen"
        description="Wir haben unsere Räume bewusst hell, ruhig und einladend gestaltet – für Patient:innen genauso wie für unser Team."
      />

      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Ausstattung"
          title="Moderne Diagnostik unter einem Dach"
          description="Wir investieren kontinuierlich in aktuelle Medizintechnik, damit Befunde schnell und zuverlässig vorliegen."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {equipment.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-white p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-sand py-24">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Unsere Geschichte"
            title="Gewachsen aus dem Anspruch, besser zuzuhören"
            align="center"
          />
          <div className="mt-16 space-y-10 border-l-2 border-primary/20 pl-8">
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.08} className="relative">
                <span className="absolute -left-[38px] flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-sand" />
                <p className="font-display text-lg font-bold text-primary">
                  {item.year}
                </p>
                <p className="mt-1 text-ink-soft">{item.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <Gallery />
      <CTASection />
    </>
  );
}
