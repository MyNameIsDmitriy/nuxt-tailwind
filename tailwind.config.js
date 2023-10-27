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
        normal: "2px 3px 10px 3px #00000026",
      },
    },
    screens: {},
  },
  plugins: [],
};
