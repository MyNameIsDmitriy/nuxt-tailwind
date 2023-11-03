/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary) / 1)",
      secondary: "rgb(var(--color-secondary) / 1)",
      navigate: "rgb(var(--color-nav) / 1)",
      button: "rgb(var(--color-button) / 1)",
      warning: "rgb(var(--color-warning) / 1)",
      cultured: "rgb(var(--color-cultured) / 1)",
      greenCard: "rgb(var(--color-green) / 0.1)",
      purpleCard: "rgb(var(--color-purple) / 0.1)",
      pinkCard: "rgb(var(--color-pink) / 0.1)",
    },
    screens: {
      "sticky-footer": { minHeight: "1000px", maxHeight: "1150px" },
    },
    fontFamily: {
      primary: ["Roboto Slab"],
      logo: ["Baumans"],
    },
    borderRadius: {
      DEFAULT: "0",
    },
    extend: {
      boxShadow: {
        normal: "2px 2px 15px 1px #00000029",
      },
    },
  },
};
