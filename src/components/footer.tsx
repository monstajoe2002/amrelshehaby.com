import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";
import { FaWhatsapp } from "react-icons/fa";
const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-12 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">{t("footer").title}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Button asChild variant="link">
              <a
                href={encodeURI(
                  "https://www.google.com/maps/search/?api=1&query=21 Dr Ahmed Amin St, El-Nozha, El Nozha, Cairo Governorate 4470152"
                )}
                target="_blank"
                className="flex items-center text-primary-foreground text-wrap"
              >
                <MapPin className="mr-2 rtl:ml-2" />
                {t("footer").address}
              </a>
            </Button>
            <Button asChild variant="link" className="mt-0">
              <a
                href="https://wa.me/+2001011338537"
                className="flex items-center text-primary-foreground"
              >
                {" "}
                <FaWhatsapp
                  size={24}
                  className="mr-2 rtl:ml-2 items-baseline"
                />
                {t("footer").phone}
              </a>
            </Button>
          </div>
          <div className="space-y-2">
            <Button asChild variant="link">
              <a
                href="mailto:amrelshehaby@yahoo.com"
                className="flex items-center text-primary-foreground"
              >
                <Mail className="mr-2 rtl:ml-2" />
                {t("footer").email}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
