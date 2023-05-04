/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        ytBlack: '#0f0f0f',
        ytGray: '#222222'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
