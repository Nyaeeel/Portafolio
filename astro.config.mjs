import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://nyaeeel.github.io/Portafolio",
  base: "/Portafolio/",
  integrations: [tailwind(), robotsTxt()],
  outDir: "./docs", // 👈 Esto indica dónde se genera el sitio para GitHub Pages
});
