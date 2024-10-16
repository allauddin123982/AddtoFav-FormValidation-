/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      // Add your custom scrollbar styles
      scrollbar: {
        hide: {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        default: {
          '&::-webkit-scrollbar': {
            display: 'block',
          },
          'scrollbar-width': 'auto',
          '-ms-overflow-style': 'auto',
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
        '.scrollbar-default': {
          '&::-webkit-scrollbar': {
            display: 'block',
          },
          'scrollbar-width': 'auto',
          '-ms-overflow-style': 'auto',
        },
      });
    },
  ],
}

