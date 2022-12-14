// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        omos: resolve(__dirname, "src/omos.html"),
        events: resolve(__dirname, "src/events.html"),
        forestillinger: resolve(__dirname, "src/forestillinger.html"),
        gogoyoku: resolve(__dirname, "src/gogoyo-ku.html"),
        mandliggersommandselvharredt: resolve(__dirname, "src/mandliggersommandharredt.html"),
        vildmedmig: resolve(__dirname, "src/vildmedmig.html"),
        detlevenderum: resolve(__dirname, "src/detlevenderum.html"),
        frygtenforikkeatleve: resolve(__dirname, "src/frygtenforikkeatleve.html"),
        whatfirestogetherwirestogether: resolve(__dirname, "src/whatfirestogetherwirestogether.html"),
        rebirth: resolve(__dirname, "src/re-birth.html"),
        frivillige: resolve(__dirname, "src/frivillige.html"),
        opencall: resolve(__dirname, "src/opencall.html"),
        programoversigt: resolve(__dirname, "src/programoversigt.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),


      },
    },
  },
});
