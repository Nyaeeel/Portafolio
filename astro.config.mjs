import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://nyaeeel.github.io/Portafolio",
  base: "/Portafolio/",
  outDir: "./docs",
  integrations: [tailwind(), robotsTxt()],
});
