import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import { galleryImages } from "@/lib/data";

export default function Gallery() {
  return (
    <section className="bg-ink py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Einblicke"
          title="Ein Rundgang durch AVEA"
          description="Helle Räume, moderne Technik und eine Atmosphäre, in der man sich wohlfühlt."
          theme="dark"
        />
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <FadeIn
              key={img.src}
              delay={i * 0.08}
              className={i === 0 ? "col-span-2 row-span-2" : ""}
            >
              <div
                className={`group relative overflow-hidden rounded-2xl ${
                  i === 0 ? "h-full min-h-[280px]" : "h-[180px] lg:h-[260px]"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
