/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3875f6',
          light: '#2f71ff',
          dark: '#4c7add',
        }
      }
    },
  },
  plugins: [],
}

