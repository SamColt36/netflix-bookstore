"use strict";

import { createComponent } from "./create-component.js";
import { colorRandom } from "./color-random.js";
import { modifyNameTheLastElement } from "./account-children.js";

const insertComponents = () => {
  const $components = $(".component");

  if ($components) {
    $.each($components, function (indexInArray, valueOfElement) {
      if (indexInArray < 5) {
        const colors = ["#0971e6", "#e6B309", "#e50914", "#89a194"];
        createComponent(valueOfElement, colors[indexInArray]);
      } else {
        createComponent(valueOfElement, colorRandom());
      }
    });
    modifyNameTheLastElement();
  }
};

insertComponents();
