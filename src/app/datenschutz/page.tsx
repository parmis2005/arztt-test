import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { practice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz – AVEA Gesundheitszentrum",
};

const sections = [
  {
    title: "1. Verantwortlicher",
    text: `Verantwortlich für die Datenverarbeitung auf dieser Website ist die AVEA Gesundheitszentrum GbR, ${practice.address.full}, ${practice.email} (fiktive Angabe für Demonstrationszwecke).`,
  },
  {
    title: "2. Erhebung und Verarbeitung von Gesundheitsdaten",
    text: "Im Rahmen der Terminanfrage und der Video-Sprechstunde verarbeiten wir personenbezogene und gesundheitsbezogene Daten ausschließlich zum Zweck der Terminorganisation und ärztlichen Behandlung. Eine Weitergabe an Dritte erfolgt nur im gesetzlich vorgeschriebenen Rahmen oder mit ausdrücklicher Einwilligung.",
  },
  {
    title: "3. Kontaktformular",
    text: "Wenn Sie uns über das Kontakt- oder Terminformular Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage sowie für eventuelle Anschlussfragen gespeichert.",
  },
  {
    title: "4. Cookies und Reichweitenmessung",
    text: "Diese Demo-Website verwendet keine Tracking- oder Analyse-Cookies. Technisch notwendige Cookies können für die Grundfunktionen der Seite gesetzt werden.",
  },
  {
    title: "5. Ihre Rechte",
    text: "Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten sowie ein Widerspruchsrecht gegen die Verarbeitung.",
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Datenschutzerklärung" />
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <div className="space-y-8 text-ink-soft">
          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="font-display text-lg font-semibold text-ink">
                {s.title}
              </h2>
              <p className="mt-2 leading-relaxed">{s.text}</p>
            </div>
          ))}
          <p className="text-xs text-ink-soft/70">
            Hinweis: Diese Datenschutzerklärung ist Teil eines fiktiven
            Gestaltungsentwurfs und dient ausschließlich
            Demonstrationszwecken.
          </p>
        </div>
      </section>
    </>
  );
}
