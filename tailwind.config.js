/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        grey: {
          50: "#C5C5C5",
          100: "#A0A0A0",
          200: "#8B8B8B",
          300: "#7E7E7E",
          400: "#505050",
          500: "#3E3E3E",
          600: "#343434",
          700: "#2E2E2E",
          800: "#282828",
          850: "#232323",
          900: "#202020",
          950: "#1C1C1C",
        },
        point: {
          50: "#85AEE0",
          100: "#3E7FCF",
          300: "#376599",
          500: "#153259",
          700: "#0C2039",
          900: "#1F262E",
          950: "#040F1C",
        },
      },
    },
  },
  plugins: [],
};
