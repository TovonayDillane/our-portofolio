import { Link as LinkIcon, Mail } from "lucide-react";
import { GithubIcon } from "../ui";
import { useLang } from "../../hooks/useLang";
import { siteConfig } from "../../data/site-config";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="glass dark:glass-dark border-t border-slate-200/50 dark:border-slate-700/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:justify-between">
        <p className="transition-smooth hover:text-slate-900 dark:hover:text-white">
          © {year} {siteConfig.name}. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-4">
          {siteConfig.socials.github && (
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-smooth hover:text-brand-600 dark:hover:text-brand-400 hover:scale-125 active:scale-95"
            >
              <GithubIcon size={18} />
            </a>
          )}
          {siteConfig.socials.linkedin && (
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-smooth hover:text-brand-600 dark:hover:text-brand-400 hover:scale-125 active:scale-95"
            >
              <LinkIcon size={18} />
            </a>
          )}
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="transition-smooth hover:text-brand-600 dark:hover:text-brand-400 hover:scale-125 active:scale-95"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
