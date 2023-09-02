/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-01': "url('../img/IMG_3715.jpg')",
        'hero-02': "url('../img/IMG_3722.jpg')",
        'hero-03': "url('../img/IMG_4208.jpg')",
      },
    },
  },
  plugins: [],
};
