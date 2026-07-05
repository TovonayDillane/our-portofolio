import { Button } from "../common";
import { useLang } from "../../hooks/useLang";

export default function ContactCta() {
  const { t } = useLang();

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="rounded-3xl border border-slate-200 bg-slate-50 px-8 py-14 text-center dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
          {t("contactCta.title")}
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-400">{t("contactCta.subtitle")}</p>
        <div className="mt-8 flex justify-center">
          <Button to="/contact">{t("contactCta.button")}</Button>
        </div>
      </div>
    </section>
  );
}
