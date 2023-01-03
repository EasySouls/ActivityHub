/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "open-sans": "Open Sans, sans-serif",
    },
    extend: {
      backgroundImage: {
        "hiking-img": "url(/hiking-img.jpg)",
        "board-game-img": "url()",
        "cooking-img": "url()",
        "geocaching-img": "url()",
        "videogames-img": "url()",
        "dnd-img": "url()",
      },
    },
  },
  plugins: [],
};
