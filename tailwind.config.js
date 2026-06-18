/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#1a2ba8",
        // secondary: "#e5eb4a",
        primary: "#060709",
        secondary: "#595a5e",
      },
    },
  },
  plugins: [],
};
