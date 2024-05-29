/** @type {import(tailwindcss).Config} */
module.exports = {
  content: ["**/*{html, js}"],
  theme: {
    extend: {
      screens: {
        xl: { min: "1024px" },
        lg: { min: "768px", max: "1023px" },
        md: { min: "426px", max: "767px" },
        sm: { min: "300px", max: "425px" },
      },
      backgroundImage: {
        banner: "url('/docs/images/banner.png')",
        "banner-mobile": "url('/docs/images/banner-mobile.png')",
      },
      colors: {
        "var-primary": "#e50914", //red
        "var-secondary": "#000000", //black
        link: "#0080ff",
        "account-primary": "#4E6C80",
        "browse-secondary": "#000000", // background
      },
    },
  },
  plugins: [],
};
