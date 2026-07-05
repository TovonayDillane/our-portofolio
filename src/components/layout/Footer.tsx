import { Link as LinkIcon, Mail } from "lucide-react";
import { GithubIcon } from "../ui";
import { useLang } from "../../hooks/useLang";
import { siteConfig } from "../../data/site-config";

export default function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:justify-between">
        <p>
          © {year} {siteConfig.name}. {t("footer.rights")}
        </p>
        <div className="flex items-center gap-4">
          {siteConfig.socials.github && (
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-slate-900 dark:hover:text-white"
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
              className="hover:text-slate-900 dark:hover:text-white"
            >
              <LinkIcon size={18} />
            </a>
          )}
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="Email"
            className="hover:text-slate-900 dark:hover:text-white"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
