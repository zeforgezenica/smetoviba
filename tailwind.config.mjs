/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "pastel-green": "#77dd77",
        "tomato-red": "#ff6347",
      },
      width: {
        "20vw": "20vw",
        "35vw": "35vw",
      },
      fontFamily: { exo2: ['"Exo2"', "sans-serif"] },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
