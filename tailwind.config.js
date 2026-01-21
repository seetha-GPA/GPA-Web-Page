/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gp-dark': '#1e1b4b', // Deep indigo/blue
        'gp-blue': '#3B82F6',
        'gp-purple': '#8B5CF6',
        'gp-text': '#F8FAFC',
        'gp-muted': '#94A3B8',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right bottom, #1e1b4b, #312e81, #4c1d95)',
      }
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
  },
  plugins: [],
}
