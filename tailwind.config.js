/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#8f2323',
        secondary: '#b74242',
        background: '#e1c3a7',
        dark: '#000000',
        light: '#F4F6F8',
      },
      fontFamily: {
        hindi: ['"Noto Sans Devanagari"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
