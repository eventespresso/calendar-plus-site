// @ts-check
import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import vercel from "@astrojs/vercel";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // i18n: {
  //   defaultLocale: "en", // Set the default language (for example, 'en' for English)
  //   locales: ["en", "fr"], // Define the languages you support (e.g., English and French)
  //   routing: {
  //     // This can be "manual" or "prefix" depending on your preference.
  //     // For query param-based language switching, we’ll use manual routing here.
  //     prefixDefaultLocale: false, // Set this to false if you want URLs to not contain `/en` or `/fr` for the default language.
  //     redirectToDefaultLocale: false, // We don't want to redirect back to the default locale's URL in case of query-based navigation.
  //   },
  // },
  adapter: vercel(),

  vite: {
    css: {
      transformer: "lightningcss",
    },
    plugins: [tailwindcss()],
  },
  integrations: [astroI18next(), react()],
});