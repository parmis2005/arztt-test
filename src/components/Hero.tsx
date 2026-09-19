"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Star, ChevronDown } from "lucide-react";
import { heroVideoSrc, stats, doctors } from "@/lib/data";
import Counter from "@/components/Counter";

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink">
      <video
        className="absolute inset-0 h-full w-full animate-kenburns object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1600&q=60"
      >
        <source src={heroVideoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1e1c]/80 via-[#0b1e1c]/55 to-[#0b1e1c]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1e1c]/70 via-transparent to-transparent" />

      <div className="glow-orb animate-float-slower h-96 w-96 -left-20 top-10 bg-primary-light/25" />
      <div className="glow-orb animate-drift h-80 w-80 right-0 bottom-0 bg-accent/20" />
      <div className="grain-overlay" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 pb-16 pt-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/90 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Neue Patient:innen herzlich willkommen
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Moderne Medizin.
            <br />
            <span className="text-primary-light">Menschlich gedacht.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            AVEA vereint Allgemeinmedizin, Innere Medizin, Kinderheilkunde und
            Orthopädie unter einem Dach – mit modernster Diagnostik,
            persönlicher Betreuung und Terminen, die zu Ihrem Leben passen.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/kontakt#termin"
              className="group flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent-dark"
            >
              Termin vereinbaren
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/praxis"
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            >
              <PlayCircle className="h-5 w-5" />
              Praxis entdecken
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <div className="flex -space-x-3">
              {doctors.slice(0, 3).map((doctor) => (
                <img
                  key={doctor.slug}
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-10 w-10 rounded-full border-2 border-[#0b1e1c] object-cover"
                />
              ))}
            </div>
            <div className="text-sm text-white/70">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              4,9 / 5 aus über 640 Bewertungen
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end"
        >
          <div className="grid w-full grid-cols-2 gap-4 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
            {stats.map((s) => (
              <div key={s.label} className="text-white">
                <div className="font-display text-2xl font-bold sm:text-3xl">
                  <Counter value={s.value} />
                </div>
                <div className="mt-1 text-xs text-white/70 sm:text-sm">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 sm:flex"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Entdecken</span>
        <ChevronDown className="h-4 w-4 animate-bounce-y" />
      </motion.div>
    </section>
  );
}
