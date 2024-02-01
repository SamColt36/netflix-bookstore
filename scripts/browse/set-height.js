"use strict";

import { $header, $main } from "./dom.js";

const setHeight = () => {
  return $main.outerHeight($(window).outerHeight() - $header.outerHeight());
};

setHeight()
