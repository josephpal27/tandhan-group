/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#57585a",
        // secondary: "#231f20",
        primary: "#1a2ba8",
        secondary: "#e5eb4a",
      },
    },
  },
  plugins: [],
};
