import { useState, type FormEvent } from "react";
import { Mail, MapPin } from "lucide-react";
import { SectionHeading, Button } from "../common";
import { useLang } from "../../hooks/useLang";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { siteConfig } from "../../data/site-config";
import { cn } from "../../utils/cn";

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none transition-smooth focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-slate-800 dark:bg-slate-950 dark:text-white dark:focus:border-brand-400 dark:focus:ring-brand-400/20";

export default function Contact() {
  const { t } = useLang();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: brancher ce formulaire à un service d'envoi (Resend, EmailJS, votre API...)
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="mx-auto max-w-6xl px-6 py-20">
      <div className={cn(
        "transition-smooth duration-500",
        isVisible ? "opacity-100" : "opacity-0 translate-y-10"
      )}>
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.3fr]">
        <div className={cn(
          "space-y-4 text-sm text-slate-600 dark:text-slate-400 transition-smooth duration-500",
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        )}>
          <p className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-smooth group">
            <Mail size={16} className="group-hover:scale-110 transition-smooth" /> 
            <a href={`mailto:${siteConfig.email}`} className="hover:underline">
              {siteConfig.email}
            </a>
          </p>
          <p className="flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-smooth group">
            <MapPin size={16} className="group-hover:scale-110 transition-smooth" /> 
            {siteConfig.location}
          </p>
          <p className="pt-4 text-xs text-slate-400 dark:text-slate-500">{t("contact.formNote")}</p>
        </div>

        {submitted ? (
          <div className={cn(
            "flex items-center justify-center rounded-2xl glass dark:glass-dark p-8 text-slate-900 dark:text-white shadow-soft transition-smooth duration-500 animate-scale-in",
            isVisible ? "opacity-100" : "opacity-0"
          )}>
            <span className="text-lg font-medium">{t("contact.formSubmit")} ✓</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={cn(
            "space-y-4 transition-smooth duration-500",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          )}>
            <div className="group">
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-smooth"
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
            <div className="group">
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-smooth"
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
            <div className="group">
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-smooth"
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
       
