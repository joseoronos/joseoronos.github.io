/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'heading': ['"Plus Jakarta Sans"'],
      'body': ['Manrope']
    },
    extend: {
      colors: {
        'body': '#F1F3F4',
        'heading': '#1E1E1E',
        'text': '#787878',
      }
    },
  },
  plugins: [],
}

