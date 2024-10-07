import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLangFromUrl, useTranslations } from "@/i18n/utils";
const lang = getLangFromUrl(new URL(window.location.href));
const t = useTranslations(lang);

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-12 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">{t("footer").title}</h2>
        <div className="grid md:grid-cols-2 gap-4 items-baseline">
          <div className="space-y-2">
            <Button asChild variant="link">
              <a
                href="geo: 30.104592289447755, 31.341258223995094"
                className="flex items-center text-primary-foreground text-wrap"
              >
                <MapPin className="mr-2 rtl:ml-2" />
                {t("footer").address}
              </a>
            </Button>
            <Button asChild variant="link">
              <a
                href="tel:+20 01011338537"
                className="flex items-center text-primary-foreground"
              >
                <Phone className="mr-2 rtl:ml-2" />
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
