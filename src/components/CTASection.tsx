import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { practice } from "@/lib/data";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center sm:px-16">
          <div className="glow-orb animate-float-slower pointer-events-none absolute -left-24 -top-24 h-72 w-72 bg-white/15" />
          <div className="glow-orb animate-drift pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 bg-accent/40" />
          <div className="grain-overlay" />

          <h2 className="relative font-display text-3xl font-bold text-white sm:text-4xl">
            Bereit für Ihren nächsten Termin?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/80">
            Buchen Sie online in wenigen Minuten oder rufen Sie unser
            freundliches Praxisteam an – wir freuen uns auf Sie.
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/kontakt#termin"
              className="group flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-sand"
            >
              Termin vereinbaren
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={practice.phoneHref}
              className="flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              {practice.phone}
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
