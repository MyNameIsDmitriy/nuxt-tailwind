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

    fontFamily: {
      primary: ["Roboto Slab"],
      logo: ["Baumans"],
    },

    borderRadius: {
      DEFAULT: "0",
    },

    extend: {
      screens: {
        "max-670": { max: "670px" },
        "max-780": { max: "780px" },
        "max-950": { max: "950px" },
        "min-992": { min: "992px" },
        "max-992": { max: "992px" },
        "min-1250": { min: "1250px" },
        "max-1250": { max: "1250px" },
        "max-1340": { max: "1340px" },
        "max-1370": { max: "1370px" },
        "sticky-footer": { minHeight: "1000px", maxHeight: "1150px" },
      },

      boxShadow: {
        normal: "2px 2px 15px 1px #00000029",
      },
    },
  },
};
