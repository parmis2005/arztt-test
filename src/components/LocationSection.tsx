import { MapPin, Phone, Mail, Clock } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import PracticeMapLoader from "@/components/PracticeMapLoader";
import { practice } from "@/lib/data";

export default function LocationSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <SectionHeading
        eyebrow="So finden Sie uns"
        title="Mitten in München, gut erreichbar"
        description="Unsere Praxis liegt zentral mit guter Anbindung an öffentliche Verkehrsmittel und Parkmöglichkeiten in unmittelbarer Nähe."
      />

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
        <FadeIn>
          <div className="flex h-full flex-col justify-between rounded-3xl border border-line bg-white p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-ink">Adresse</p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {practice.address.street}
                    <br />
                    {practice.address.zipCity}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-ink">Telefon</p>
                  <a
                    href={practice.phoneHref}
                    className="mt-1 block text-sm text-ink-soft hover:text-primary"
                  >
                    {practice.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display font-semibold text-ink">E-Mail</p>
                  <a
                    href={`mailto:${practice.email}`}
                    className="mt-1 block text-sm text-ink-soft hover:text-primary"
                  >
                    {practice.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <p className="font-display font-semibold text-ink">
                    Öffnungszeiten
                  </p>
                  <ul className="mt-1 space-y-1 text-sm text-ink-soft">
                    {practice.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="font-medium text-ink">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="h-[420px] overflow-hidden rounded-3xl border border-line shadow-sm lg:h-full">
            <PracticeMapLoader />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
