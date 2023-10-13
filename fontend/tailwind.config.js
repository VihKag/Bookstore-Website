/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}","./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
        '2xl': '5rem',
      },
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {};
      // Tạo lớp CSS cho các kích thước từ 1 đến 12
      for (let i = 1; i <= 12; i++) {
        newUtilities[`.col-${i}`] = {
          'max-width': `${(i / 12) * 100}%`,
        };
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('flowbite/plugin')
  ],
}