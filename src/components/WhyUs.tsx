import { Sparkles, Clock3, HeartHandshake, MonitorSmartphone } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";

const items = [
  {
    icon: Sparkles,
    title: "Moderne Diagnostik",
    text: "Digitale Bildgebung, Ultraschall und Labordiagnostik direkt vor Ort für schnelle, verlässliche Befunde.",
  },
  {
    icon: Clock3,
    title: "Kurze Wartezeiten",
    text: "Durch smarte Terminplanung und Akutsprechstunden minimieren wir Wartezeiten spürbar.",
  },
  {
    icon: HeartHandshake,
    title: "Persönliche Betreuung",
    text: "Wir nehmen uns Zeit für Gespräche – für Diagnosen, die zu Ihrem Leben passen, nicht nur zur Akte.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digitale Praxis",
    text: "Online-Terminbuchung, Video-Sprechstunde und digitale Befundübermittlung inklusive.",
  },
];

export default function WhyUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="Warum AVEA"
        title="Gesundheitsversorgung, wie sie sein sollte"
        description="Wir kombinieren fachärztliche Expertise mit einer Praxisorganisation, die auf Ihren Alltag Rücksicht nimmt."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <div className="group h-full rounded-2xl border border-line bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary shadow-[0_0_0_0_rgba(15,107,98,0)] transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_0_24px_2px_rgba(15,107,98,0.35)]">
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
  );
}
