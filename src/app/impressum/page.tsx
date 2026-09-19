import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { practice } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum – AVEA Gesundheitszentrum",
};

export default function ImpressumPage() {
  return (
    <>
      <PageHero eyebrow="Rechtliches" title="Impressum" />
      <section className="mx-auto max-w-3xl px-5 py-20 lg:px-8">
        <div className="prose-content space-y-8 text-ink-soft">
          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="mt-2">
              AVEA Gesundheitszentrum GbR
              <br />
              {practice.address.street}
              <br />
              {practice.address.zipCity}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Vertreten durch
            </h2>
            <p className="mt-2">Dr. med. Julia Berndt (Ärztliche Leitung)</p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Kontakt
            </h2>
            <p className="mt-2">
              Telefon: {practice.phone}
              <br />
              E-Mail: {practice.email}
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p className="mt-2">
              Berufsbezeichnung: Ärztin bzw. Arzt (verliehen in der
              Bundesrepublik Deutschland). Zuständige Kammer: Bayerische
              Landesärztekammer (fiktive Angabe). Es gelten die
              Berufsordnung, das Heilmittelwerbegesetz sowie die
              gesetzlichen Vorschriften für Vertragsärzt:innen.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            <p className="mt-2">DE 000000000 (fiktiv)</p>
          </div>

          <div>
            <h2 className="font-display text-lg font-semibold text-ink">
              Streitschlichtung
            </h2>
            <p className="mt-2">
              Wir sind nicht bereit oder verpflichtet, an
              Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <p className="text-xs text-ink-soft/70">
            Hinweis: Diese Website inklusive aller Namen, Adressen und
            Kontaktdaten ist ein fiktiver Gestaltungsentwurf und dient
            ausschließlich Demonstrationszwecken.
          </p>
        </div>
      </section>
    </>
  );
}
