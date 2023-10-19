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
      Yellow: rgba(254, 229, 0, 1),
      Blue: rgba(38, 114, 171, 1),
      BlueNavigate: rgba(62, 126, 180, 1),
    },
    fontFamily: {
      primary: ["Roboto-Slab"],
      logoFont: ["Baumans"],
    },
    borderRadius: {
      DEFAULT: "0",
    },
    extend: {},
    screens: {},
  },
  plugins: [],
};
