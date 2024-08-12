/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'seek-pink': 'hsl(329, 98%, 46%)',
        'seek-deep-blue': 'hsl(220, 90%, 15%)',
        'seek-blue': 'hsl(221, 87%, 21%)',
        'seek-light-grey': 'hsl(210, 20%, 96%)',
      },
      animation: {
        'spin-90': 'spin 0.3s ease-out 1',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(90deg)' },
        },
      },
      fontFamily: {
        seek: ['Rubik', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
