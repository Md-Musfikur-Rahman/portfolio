/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "#050a0a",
      BG: "#F0F7FA",
      primary: "#294EBC",
      secondary: "#AFDFEF",
      accent: "#4E29BC",
    },
  },
  plugins: [],
};
