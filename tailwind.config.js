module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/public/images/bg-main-desktop.png')",
        "hero-pattern-mobile": "url('/public/images/bg-main-mobile.png')",
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
