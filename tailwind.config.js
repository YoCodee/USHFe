/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rent: {
          orange: '#FF9F43', // Adjusted to match the vibrant orange in the screenshot
          light: '#FFF9F0',  // Background for inputs
          dark: '#2D3436',
        }
      }
    },
  },
  plugins: [],
}
