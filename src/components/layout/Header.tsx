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
    <header className="sticky top-0 z-40 glass dark:glass-dark">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <NavLink 
          to="/" 
          className="group text-lg font-semibold text-slate-900 dark:text-white transition-smooth"
        >
          <span className="relative inline-block">
            {siteConfig.name}
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative text-sm font-medium transition-smooth group",
                  isActive
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white",
                )
              }
            >
              {t(item.key)}
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-slate-900 dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="flex items-center gap-2 rounded-full glass dark:glass-dark p-1.5">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium transition-smooth duration-200",
                  lang === l.code
                    ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-soft hover:shadow-soft-lg"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white",
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
              className="rounded-full glass dark:glass-dark p-2.5 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:scale-110 active:scale-95 transition-smooth"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </Tooltip>
        </div>

        <button
          className="md:hidden transition-smooth hover:scale-110 active:scale-95"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("common.closeMenu") : t("common.openMenu")}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="animate-slide-down border-t border-slate-200/50 px-6 py-4 glass dark:border-slate-700/50 dark:glass-dark md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-4 py-2.5 text-sm font-medium transition-smooth",
                    isActive
                      ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-soft"
                      : "text-slate-600 hover:bg-slate-100/50 dark:text-slate-400 dark:hover:bg-slate-800/50",
                  )
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-slate-200/50 pt-4 dark:border-slate-700/50">
            <div className="flex gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-medium transition-smooth",
                    lang === l.code
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-soft"
                      : "text-slate-600 dark:text-slate-400",
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              aria-label={t("common.toggleTheme")}
              className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-smooth hover:scale-110 active:scale-95"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
