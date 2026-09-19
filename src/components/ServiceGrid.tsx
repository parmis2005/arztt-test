import Link from "next/link";
import {
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Baby,
  Bone,
  Video,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { services } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Stethoscope,
  HeartPulse,
  ShieldCheck,
  Baby,
  Bone,
  Video,
};

export default function ServiceGrid({ limit }: { limit?: number }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((service, i) => {
        const Icon = iconMap[service.icon] ?? Stethoscope;
        return (
          <FadeIn key={service.slug} delay={(i % 3) * 0.08}>
            <Link
              href={`/leistungen#${service.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 text-primary backdrop-blur-sm">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {service.short}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Mehr erfahren
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          </FadeIn>
        );
      })}
    </div>
  );
}
