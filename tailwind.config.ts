// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      fontFamily: {
        helvitica: ["helvitica-now", "Times New Roman"],
        awesome: ["awesome-serif", "sans-serif"],
      },
    },
  },
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  plugins: [],
};
export default config;
