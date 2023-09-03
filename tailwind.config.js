/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-01': "url('../img/IMG_3715.jpg')",
        'hero-02': "url('../img/IMG_3720.jpg')",
        'hero-03': "url('../img/IMG_4208.jpg')",
        'hero-04': "url('../img/IMG_5244.jpg')",
        'hero-05': "url('../img/IMG_6439.jpg')",
      },
    },
  },
  plugins: [],
};
