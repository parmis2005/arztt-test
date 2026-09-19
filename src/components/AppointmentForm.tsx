"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { services } from "@/lib/data";

export default function AppointmentForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("done"), 900);
  }

  if (status === "done") {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-white px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-ink">
          Anfrage erfolgreich gesendet
        </h3>
        <p className="mt-2 max-w-sm text-sm text-ink-soft">
          Vielen Dank! Unser Praxisteam meldet sich innerhalb eines Werktags
          bei Ihnen, um Ihren Termin zu bestätigen.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-primary hover:underline"
        >
          Weitere Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-line bg-white p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-ink">Vorname</label>
          <input
            required
            type="text"
            className="mt-1.5 w-full rounded-xl border border-line bg-sand/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
            placeholder="Max"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink">Nachname</label>
          <input
            required
            type="text"
            className="mt-1.5 w-full rounded-xl border border-line bg-sand/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
            placeholder="Mustermann"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink">E-Mail</label>
          <input
            required
            type="email"
            className="mt-1.5 w-full rounded-xl border border-line bg-sand/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
            placeholder="max@beispiel.de"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink">Telefon</label>
          <input
            type="tel"
            className="mt-1.5 w-full rounded-xl border border-line bg-sand/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
            placeholder="+49 89 555 0142"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-ink">Fachbereich</label>
          <select className="mt-1.5 w-full rounded-xl border border-line bg-sand/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white">
            {services.map((s) => (
              <option key={s.slug}>{s.title}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="text-sm font-medium text-ink">Ihr Anliegen</label>
          <textarea
            rows={4}
            className="mt-1.5 w-full rounded-xl border border-line bg-sand/40 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:bg-white"
            placeholder="Kurze Beschreibung Ihres Anliegens…"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-dark disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        {status === "loading" ? "Wird gesendet…" : "Terminanfrage senden"}
      </button>
      <p className="mt-3 text-xs text-ink-soft">
        Dies ist eine unverbindliche Anfrage. Wir bestätigen Ihren
        Wunschtermin per E-Mail oder Telefon.
      </p>
    </form>
  );
}
