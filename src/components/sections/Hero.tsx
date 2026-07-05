import { ArrowRight } from "lucide-react";
import { Button } from "../common";
import { useLang } from "../../hooks/useLang";

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
      <p className="mb-4 text-sm font-medium uppercase tracking-wide text-brand-600 dark:text-brand-400">
        {t("hero.eyebrow")}
      </p>
      <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
        {t("hero.title")}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
        {t("hero.subtitle")}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button to="/projets">
          {t("hero.ctaPrimary")}
          <ArrowRight size={16} />
        </Button>
        <Button to="/contact" variant="secondary">
          {t("hero.ctaSecondary")}
        </Button>
      </div>
    </section>
  );
}
