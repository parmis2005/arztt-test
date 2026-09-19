"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faq } from "@/lib/data";

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white">
      {faq.map((item, i) => (
        <div key={item.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
          >
            <span className="font-display text-sm font-semibold text-ink sm:text-base">
              {item.q}
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                open === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
