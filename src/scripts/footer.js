"use strict";
import $ from "jquery";
import { $listLinksFooter } from "./dom.js";

const addLinks = () => {
  let links = new Array();
  links = [
    "https://help.netflix.com/support/412",
    "https://help.netflix.com/",
    "https://help.netflix.com/legal/termsofuse",
    "https://help.netflix.com/legal/privacy",
    "https://www.netflix.com/br/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fbrowse#",
    "https://help.netflix.com/legal/corpinfo",
  ];

  $.each($listLinksFooter, function (i, valueOfElement) {
    $(valueOfElement).attr("href", links[i]);
  });
};

export { addLinks };
