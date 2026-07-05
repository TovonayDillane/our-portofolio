import { Home as HomeIcon } from "lucide-react";
import { Button } from "../components/common";
import { useLang } from "../hooks/useLang";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  const { t } = useLang();
  useDocumentTitle(t("notFound.title"));

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <p className="text-sm font-medium uppercase tracking-wide text-brand-600 dark:text-brand-400">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">
        {t("notFound.title")}
      </h1>
      <p className="mt-4 text-slate-600 dark:text-slate-400">{t("notFound.subtitle")}</p>
      <div className="mt-8">
        <Button to="/">
          <HomeIcon size={16} />
          {t("notFound.backHome")}
        </Button>
      </div>
    </section>
  );
}
