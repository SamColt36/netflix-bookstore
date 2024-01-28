"use strict";

/** @type {import(tailwindcss).Config} */
export const content = ["*.{html,js,svg}"];
export const theme = {
  extend: {
    screens: {
      xl: { min: "1024px" },
      // => @media and (min-width: 1024px) and (max-width: 1279px)
      lg: { min: "768px", max: "1023px" },
      // => @media and (min-width: 768px) and (max-width: 1023px)
      md: { min: "426px", max: "767px" },
      // => @media and (min-width: 426px) and (max-width: 767px)
      sm: { min: "300px", max: "425px" }
      // => @media and (min-width: 300px) and (max-width: 425px)
    },
    backgroundImage: {
      banner: "url('../images/banner.png')"
    },
    colors: {
      "red-submit": "#e50914",
      "red-error": "#ff0000",
      link: "#0080ff"
    }
  }
};
export const plugins = [];
