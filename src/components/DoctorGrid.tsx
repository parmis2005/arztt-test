import FadeIn from "@/components/FadeIn";
import { doctors } from "@/lib/data";

export default function DoctorGrid({ withBio = false }: { withBio?: boolean }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {doctors.map((doctor, i) => (
        <FadeIn key={doctor.slug} delay={i * 0.08}>
          <div className="group h-full overflow-hidden rounded-2xl border border-line bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-base font-semibold text-ink">
                {doctor.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {doctor.role}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {doctor.focus.map((f) => (
                  <span
                    key={f}
                    className="rounded-full bg-sand px-2.5 py-1 text-xs font-medium text-ink-soft"
                  >
                    {f}
                  </span>
                ))}
              </div>
              {withBio && (
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                  {doctor.bio}
                </p>
              )}
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
