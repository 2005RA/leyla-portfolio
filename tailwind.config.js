/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clay: '#B8735E',
        sage: '#8A9A7B',
        slate: '#6B7C93',
        ochre: '#C9A66B',
        cream: '#F7F6F3',
        charcoal: '#2A2A2A',
        midgray: '#555555',
        lightgray: '#888888',
        border: '#E5E5E5',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}