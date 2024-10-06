import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-12 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-4">
          Contact Dr. Amr El-Shehaby
        </h2>
        <div className="grid md:grid-cols-2 gap-4 items-baseline">
          <div className="space-y-2">
            <Button asChild variant="link">
              <a
                href="geo: 30.104592289447755, 31.341258223995094"
                className="flex items-center text-primary-foreground text-wrap"
              >
                <MapPin className="mr-2" />
                21 Dr Ahmed Amin St, El-Nozha, El Nozha, Cairo Governorate
                4470152
              </a>
            </Button>
            <Button asChild variant="link">
              <a
                href="tel:+20 01011338537"
                className="flex items-center text-primary-foreground"
              >
                <Phone className="mr-2" />
                +20 01011338537
              </a>
            </Button>
          </div>
          <div className="space-y-2">
            <Button asChild variant="link">
              <a
                href="mailto:amrelshehaby@yahoo.com"
                className="flex items-center text-primary-foreground"
              >
                <Mail className="mr-2" />
                amrelshehaby@yahoo.com
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
