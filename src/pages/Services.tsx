import { Services as ServicesSection } from "../components/sections";
import { useLang } from "../hooks/useLang";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Services() {
  const { t } = useLang();
  useDocumentTitle(t("nav.services"));

  return <ServicesSection />;
}
