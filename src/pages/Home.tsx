import { Hero, Services, Projects, ContactCta } from "../components/sections";
import { useLang } from "../hooks/useLang";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Home() {
  const { t } = useLang();
  useDocumentTitle(t("nav.home"));

  return (
    <>
      <Hero />
      <Services limit={3} />
      <Projects limit={3} />
      <ContactCta />
    </>
  );
}
