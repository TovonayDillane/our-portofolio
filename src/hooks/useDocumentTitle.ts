import { useEffect } from "react";
import { siteConfig } from "../data/site-config";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    document.title = `${title} — ${siteConfig.name}`;
  }, [title]);
}
