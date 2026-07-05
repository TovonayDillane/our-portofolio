import { fr } from "./fr";
import { en } from "./en";
import { mg } from "./mg";

export type Lang = "fr" | "en" | "mg";
export type TranslationKey = keyof typeof fr;

export const translations: Record<Lang, Record<TranslationKey, string>> = {
  fr,
  en,
  mg,
};

export const languageNames: Record<Lang, string> = {
  fr: "Français",
  en: "English",
  mg: "Malagasy",
};
