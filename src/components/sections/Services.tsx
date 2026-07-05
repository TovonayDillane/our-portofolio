import { SectionHeading, Card, Button } from "../common";
import { services } from "../../data/services";
import { useLang } from "../../hooks/useLang";

interface ServicesProps {
  limit?: number;
}

export default function Services({ limit }: ServicesProps) {
  const { t, lang } = useLang();
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow={t("services.eyebrow")}
        title={t("services.title")}
        subtitle={t("services.subtitle")}
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.id}>
              <div className="mb-4 inline-flex rounded-xl bg-brand-50 p-3 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400">
                <Icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {service.title[lang]}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {service.description[lang]}
              </p>
            </Card>
          );
        })}
      </div>
      {limit && services.length > limit && (
        <div className="mt-10">
          <Button to="/services" variant="secondary">
            {t("services.viewAll")}
          </Button>
        </div>
      )}
    </section>
  );
}
