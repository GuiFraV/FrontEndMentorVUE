module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./src/assets/bg-main-desktop.png')",
        "hero-pattern-mobile": "url('./src/assets/bg-main-mobile.png')",
      },
      fontFamily: {
        "space-grotesk": ['"Space Grotesk"', "sans-serif"],
      },
      screens: {
        xs: "375px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
