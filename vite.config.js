import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [tailwindcss(), svgLoader()],
});
