"use strict";

import { $saibaMais, $information } from "./dom.js";

const readMore = () => {
  $saibaMais.click(e => {
    setTimeout(() => {
      $(e.target).remove();
      $information.fadeIn();
    }, 1000);
    e.preventDefault();
  });
};

export { readMore };
