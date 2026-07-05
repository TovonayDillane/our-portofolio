import { useState, type FormEvent } from "react";
import { Mail, MapPin } from "lucide-react";
import { SectionHeading, Button } from "../common";
import { useLang } from "../../hooks/useLang";
import { siteConfig } from "../../data/site-config";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-colors focus:border-slate-400 dark:border-slate-800 dark:bg-slate-950 dark:text-white";

export default function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: brancher ce formulaire à un service d'envoi (Resend, EmailJS, votre API...)
    setSubmitted(true);
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHeading
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
          <p className="flex items-center gap-2">
            <Mail size={16} /> {siteConfig.email}
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={16} /> {siteConfig.location}
          </p>
          <p className="pt-4 text-xs text-slate-400 dark:text-slate-500">{t("contact.formNote")}</p>
        </div>

        {submitted ? (
          <div className="flex items-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-900 dark:border-slate-800 dark:bg-slate-900 dark:text-white">
            {t("contact.formSubmit")} ✓
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {t("contact.formName")}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t("contact.namePlaceholder")}
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {t("contact.formEmail")}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t("contact.emailPlaceholder")}
                className={inputClasses}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300"
              >
                {t("contact.formMessage")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder={t("contact.messagePlaceholder")}
                className={inputClasses}
              />
            </div>
            <Button type="submit">{t("contact.formSubmit")}</Button>
          </form>
        )}
      </div>
    </section>
  );
}
