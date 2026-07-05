interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-brand-600 dark:text-brand-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>}
    </div>
  );
}
