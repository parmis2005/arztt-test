"use client";

import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const PracticeMap = dynamic(() => import("@/components/PracticeMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center rounded-3xl bg-sand text-sm text-ink-soft">
      Karte wird geladen…
    </div>
  ),
});

export default function PracticeMapLoader() {
  return <PracticeMap />;
}
