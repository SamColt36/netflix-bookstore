"use strict";

import { $buttonAddAccount } from "./dom.js";

const checkComponents = (numberMax) => {
  $(".component").length === numberMax ? $buttonAddAccount.remove() : null;
};

export { checkComponents };
