import { useEffect, useState, type ReactNode } from "react";
import { translations, type Lang, type TranslationKey } from "../i18n";
import { LangContext } from "./lang-context";

const SUPPORTED_LANGS: Lang[] = ["fr", "en", "mg"];

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "fr";
  const stored = window.localStorage.getItem("lang");
  if (stored && SUPPORTED_LANGS.includes(stored as Lang)) return stored as Lang;
  return "fr";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (key: TranslationKey) => translations[lang][key];

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}
