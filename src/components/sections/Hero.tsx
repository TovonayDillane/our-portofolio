import { ArrowRight } from "lucide-react";
import { Button } from "../common";
import { useLang } from "../../hooks/useLang";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { cn } from "../../utils/cn";

export default function Hero() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
      <p className={cn(
        "mb-4 text-sm font-medium uppercase tracking-wide text-brand-600 dark:text-brand-400 transition-smooth",
        isVisible ? "animate-fade-in" : "opacity-0"
      )}>
        {t("hero.eyebrow")}
      </p>
      <h1 className={cn(
        "max-w-3xl text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl transition-smooth",
        isVisible ? "animate-slide-up" : "opacity-0 translate-y-6"
      )}>
        {t("hero.title")}
      </h1>
      <p className={cn(
        "mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-400 transition-smooth",
        isVisible ? "animate-slide-up" : "opacity-0 translate-y-6"
      )} style={{
        transitionDelay: isVisible ? "100ms" : "0ms"
      }}>
        {t("hero.subtitle")}
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <div style={{
          transitionDelay: isVisible ? "200ms" : "0ms"
        }} className={cn(
          "transition-smooth",
          isVisible ? "animate-slide-up" : "opacity-0 translate-y-6"
        )}>
          <Button to="/projets">
            {t("hero.ctaPrimary")}
            <ArrowRight size={16} />
          </Button>
        </div>
        <div style={{
          transitionDelay: isVisible ? "300ms" : "0ms"
        }} className={cn(
          "transition-smooth",
          isVisible ? "animate-slide-up" : "opacity-0 translate-y-6"
        )}>
          <Button to="/contact" variant="secondary">
            {t("hero.ctaSecondary")}
          </Button>
        </div>
      </div>
    </section>
  );
}
