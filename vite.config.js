import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});

/* export default defineConfig(({ command }) => {
  const isProduction = command === "build";
  return {
    plugins: [vue()],
    base: isProduction ? "/login" : "/",
  };
}); */
