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
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-brand-600 dark:text-brand-400 transition-smooth hover:text-brand-700 dark:hover:text-brand-300">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold bg-gradient-to-r from-slate-900 via-slate-900 to-slate-700 dark:from-white dark:via-white dark:to-slate-300 bg-clip-text text-transparent sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 transition-smooth hover:text-slate-700 dark:hover:text-slate-300">{subtitle}</p>}
    </div>
  );
}
