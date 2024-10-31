// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import { imageService } from "@unpic/astro/service";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.amrelshehaby.com/",
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          ar: "ar-EG",
        },
      },
    }),
  ],
  image: {
    service: imageService(),
  },
});
