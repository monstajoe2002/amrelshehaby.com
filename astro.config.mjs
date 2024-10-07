// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
import { imageService } from "@unpic/astro/service";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({ applyBaseStyles: false }), react()],
  image: {
    service: imageService(),
  },
});
