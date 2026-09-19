import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { practice } from "@/lib/data";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4.03 0 4.78 2.55 4.78 5.86V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-4V9z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.5c0-.93.26-1.56 1.6-1.56h1.7V3.1C16.5 3.06 15.53 3 14.4 3c-2.36 0-3.98 1.44-3.98 4.08v2.52H7.66v3.2h2.76V21h3.08z" />
    </svg>
  );
}

const columns = [
  {
    title: "Navigation",
    links: [
      { href: "/", label: "Start" },
      { href: "/leistungen", label: "Leistungen" },
      { href: "/team", label: "Team" },
      { href: "/praxis", label: "Praxis" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b1e1c] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-base font-bold text-white">
                A
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                AVEA Gesundheitszentrum
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Hausärztliche und fachärztliche Versorgung unter einem Dach –
              moderne Diagnostik, persönliche Betreuung und kurze Wartezeiten
              in München.
            </p>
            <div className="mt-6 flex gap-3">
              {[InstagramIcon, LinkedinIcon, FacebookIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
                  aria-label="Social Media Link"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-white/90">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-display text-sm font-semibold text-white/90">
              Kontakt
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-light" />
                {practice.address.full}
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary-light" />
                <a href={practice.phoneHref} className="hover:text-white">
                  {practice.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary-light" />
                <a href={`mailto:${practice.email}`} className="hover:text-white">
                  {practice.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} AVEA Gesundheitszentrum. Alle Angaben fiktiv.</p>
          <p>Gestaltet als moderner Praxisauftritt · München</p>
        </div>
      </div>
    </footer>
  );
}
