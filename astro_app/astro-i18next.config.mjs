/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "fr",
  locales: ["fr", "en", "en-US"], // Define supported locales
  load: ["server", "client"],
};
