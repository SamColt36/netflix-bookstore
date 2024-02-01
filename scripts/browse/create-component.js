"use strict";

const createComponent = (container, color = "#31343c") => {
  const div = document.createElement("div");
  const p = document.createElement("p");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path0 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");

  $(div).append($(svg)).append($(p));
  $(svg).append($(path0)).append($(path1)).append($(path2));

  $(div).attr(
    "class",
    "cursor-pointer p-2 group flex justify-center items-center flex-col"
  );
  $(svg)
    .attr("xml:space", "preserve")
    .attr("version", "1.1")
    .attr(
      "class",
      `h-16 rounded-lg *:fill-white transition-all duration-300 group-hover:ring-2 group-hover:ring-white lg:h-24 xl:h-36`
    )
    .attr("viewBox", "0 0 1000 1000")
    .attr("role", "figure")
    .attr("style", `background-color: ${color}`);
  $(path0).attr(
    "d",
    "M851.51 606.06c5.82,-11.34 0.1,-20.07 -9.81,-22.71 -16.45,-4.38 -42.17,19.49 -76.88,31.31 -44.88,15.29 -71.63,21.52 -121.91,22.77 -74.19,1.84 -118.69,-14.08 -181.83,-35.2 -10.45,-3.49 -19.77,-10.48 -26.61,-10.68 -21.89,-0.65 -27.37,27.16 -6.74,37.04 64.51,30.91 135.13,46.7 206.11,47.68 55.92,0.78 127.43,-16.34 177.01,-40.44 10.33,-5.02 10.58,-7.49 23.22,-12.99 12.42,-5.42 11.71,-5.6 17.44,-16.78z"
  );
  $(path1).attr(
    "d",
    "M786.68 329.84c-68.87,22 -46.44,119 27.88,105.75 25.53,-4.55 46.88,-37.56 37.99,-68.74 -6.39,-22.38 -35.55,-46.71 -65.87,-37.01z"
  );
  $(path2).attr(
    "d",
    "M186.15 331.57c-70.55,14.6 -42.25,125.7 29.68,103.63 59.22,-18.17 47.24,-119.55 -29.68,-103.63z"
  );
  $(p)
    .attr(
      "class",
      "p-2 text-sm text-center nameUser text-account-primary group-hover:text-white lg:text-base xl:text-base"
    )
    .text("Name");
  $(container).append($(div));
};

export { createComponent };
