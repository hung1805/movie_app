module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins, sans-serif'],
        roboto: ['Roboto Condensed, sans-serif'],
      },
      borderWidth: {
        1.5: '1.5px',
      },
      colors: {
        'bookmark-purple': '#5267df',
        'bookmark-red': '#fa5959',
        'bookmark-blue': '#242a45',
        'bookmark-grey': '#9194a2',
        'bookmark-white': '#f7f7f7',
      },
      height: {
        banner: '600px',
        movieBanner: '520px',
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
