/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: '#8d6e63',
          'brown-dark': '#5d4037',
          beige: '#fdfaf5',
          tan: '#efebe9',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      }
    },
  },
  plugins: [],
}
