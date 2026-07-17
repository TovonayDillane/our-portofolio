import { SectionHeading, Card, Button } from "../common";
import { services } from "../../data/services";
import { useLang } from "../../hooks/useLang";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { cn } from "../../utils/cn";

interface ServicesProps {
  limit?: number;
}

export default function Services({ limit }: ServicesProps) {
  const { t, lang } = useLang();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <div className={cn(
        "transition-smooth duration-500",
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      )}>
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms"
              }}
              className={cn(
                "transition-smooth duration-500",
                isVisible ? "opacity-100" : "opacity-0 translate-y-10"
              )}
            >
              <Card glass hover animated>
                <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-brand-50 to-brand-100 p-3 text-brand-600 dark:from-brand-500/20 dark:to-brand-600/10 dark:text-brand-300 transition-smooth hover:scale-110">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {service.title[lang]}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  {service.description[lang]}
                </p>
              </Card>
            </div>
          );
        })}
      </div>
      {limit && services.length > limit && (
        <div className={cn(
          "mt-10 transition-smooth duration-500",
          isVisible ? "opacity-100" : "opacity-0 translate-y-10"
        )}>
          <Button to="/services" variant="secondary">
            {t("services.viewAll")}
          </Button>
        </div>
      )}
    </section>
  );
}
