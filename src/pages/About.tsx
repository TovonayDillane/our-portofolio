import { About as AboutSection } from "../components/sections";
import { useLang } from "../hooks/useLang";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function About() {
  const { t } = useLang();
  useDocumentTitle(t("nav.about"));

  return <AboutSection />;
}
