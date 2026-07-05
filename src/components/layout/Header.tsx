import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useLang } from "../../hooks/useLang";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../utils/cn";
import { siteConfig } from "../../data/site-config";
import Tooltip from "../ui/Tooltip";
import type { TranslationKey } from "../../i18n";

const navItems: Array<{ to: string; key: TranslationKey }> = [
  { to: "/", key: "nav.home" },
  { to: "/a-propos", key: "nav.about" },
  { to: "/services", key: "nav.services" },
  { to: "/projets", key: "nav.projects" },
  { to: "/contact", key: "nav.contact" },
];

const languages: Array<{ code: "fr" | "en" | "mg"; label: string }> = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "mg", label: "MG" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, lang, setLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <NavLink to="/" className="text-lg font-semibold text-slate-900 dark:text-white">
          {siteConfig.name}
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
                )
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 p-1 dark:border-slate-800">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
                  lang === l.code
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "text-slate-500 hover:text-slate-900 dark:hover:text-white",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
          <Tooltip label={t("common.toggleTheme")}>
            <button
              onClick={toggleTheme}
              aria-label={t("common.toggleTheme")}
              className="rounded-full border border-slate-200 p-2 text-slate-600 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </Tooltip>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("common.closeMenu") : t("common.openMenu")}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-slate-200 px-6 py-4 md:hidden dark:border-slate-800">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-medium",
                  isActive
                    ? "bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-white"
                    : "text-slate-600 dark:text-slate-400",
                )
              }
            >
              {t(item.key)}
            </NavLink>
          ))}
          <div className="mt-3 flex items-center justify-between border-t border-slate-200 pt-3 dark:border-slate-800">
            <div className="flex gap-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-medium",
                    lang === l.code
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                      : "text-slate-500",
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              aria-label={t("common.toggleTheme")}
              className="text-slate-600 dark:text-slate-300"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
