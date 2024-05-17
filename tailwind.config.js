/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        "c-primary": "#fef3ea",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/images/cruda-hero.webp')",
      // },
    },
  },
  plugins: [],
};
