"use strict";

import { $buttonAddAccount } from "./dom.js";
import { colorRandom } from "./color-random.js";
import { createComponent } from "./create-component.js";
import { modifyNameTheLastElement } from "./account-children.js";
import { checkComponents } from "./check-n-components.js";

const numberOfComponents = 6;

const createContainer = () => {
  const li = document.createElement("li");
  li.setAttribute("class", "component");
  return li;
};

const addAccount = () => {
  $buttonAddAccount.click(function (e) {
    const li = createContainer();
    createComponent(li, colorRandom());
    $buttonAddAccount.before(li);
    modifyNameTheLastElement();

    checkComponents(numberOfComponents);
    e.preventDefault();
  });
};

addAccount();
export { addAccount };
