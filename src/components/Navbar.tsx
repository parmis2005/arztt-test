"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Phone, CalendarClock } from "lucide-react";
import { practice } from "@/lib/data";

const links = [
  { href: "/", label: "Start" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/team", label: "Team" },
  { href: "/praxis", label: "Praxis" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_var(--color-line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary font-display text-base font-bold text-white">
            A
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink">
            {practice.name}
            <span className="hidden font-medium text-ink-soft sm:inline">
              {" "}
              Gesundheitszentrum
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : "text-ink-soft"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={practice.phoneHref}
            className="flex items-center gap-2 text-sm font-semibold text-ink-soft transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            {practice.phone}
          </a>
          <Link
            href="/kontakt#termin"
            className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
          >
            <CalendarClock className="h-4 w-4" />
            Termin vereinbaren
          </Link>
        </div>

        <button
          aria-label="Menü öffnen"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-3 text-base font-medium ${
                  pathname === link.href
                    ? "bg-sand text-primary"
                    : "text-ink-soft"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={practice.phoneHref}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-line px-5 py-3 text-sm font-semibold text-ink"
            >
              <Phone className="h-4 w-4" />
              {practice.phone}
            </a>
            <Link
              href="/kontakt#termin"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white"
            >
              <CalendarClock className="h-4 w-4" />
              Termin vereinbaren
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
