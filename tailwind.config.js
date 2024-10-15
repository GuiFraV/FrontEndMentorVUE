// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/bg-main-desktop.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
