import FadeIn from "@/components/FadeIn";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}) {
  const isDark = theme === "dark";

  return (
    <FadeIn className={align === "center" ? "mx-auto text-center" : ""}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider ${
          isDark ? "bg-white/10 text-primary-light" : "bg-primary/10 text-primary"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl lg:whitespace-nowrap lg:text-4xl ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-lg leading-relaxed ${
            isDark ? "text-white/70" : "text-ink-soft"
          } ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </FadeIn>
  );
}
