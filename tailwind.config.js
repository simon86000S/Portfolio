/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%': { transform: 'translate-y-1/4' },
          '100%': { transform: 'translate-y-full' },
        }
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

