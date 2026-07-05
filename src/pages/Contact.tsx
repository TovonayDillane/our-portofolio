import { Contact as ContactSection } from "../components/sections";
import { useLang } from "../hooks/useLang";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Contact() {
  const { t } = useLang();
  useDocumentTitle(t("nav.contact"));

  return <ContactSection />;
}
