/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'dusty': '#E6E49F',
      'spanish': '#989C94',
      'spanishLight': '#b3b6af',
      'beige': '#E3E7D3',
      'silver': '#BDC2BF',
      'silverLight': "#cfd3d1"
    }
  },
  },
  plugins: [],
}
