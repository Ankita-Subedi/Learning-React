/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: 'rgba(14, 56, 94, 1)',
      },
      titleColor: {
        'pink-blue-gradient': 'linear-gradient(90deg, #00C2DD 0%, #FF4E79 100%), #FFFFFF00',
      },
    },
  },
  plugins: [],
}

