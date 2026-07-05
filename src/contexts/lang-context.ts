import { createContext } from "react";
import type { Lang, TranslationKey } from "../i18n";

export interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: TranslationKey) => string;
}

export const LangContext = createContext<LangContextValue | undefined>(undefined);
