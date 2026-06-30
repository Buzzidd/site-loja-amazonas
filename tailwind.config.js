/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Essa linha é a que lê o App.tsx!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
