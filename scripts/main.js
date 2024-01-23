"use strict";

import { readMore } from "./read-more.js";
import { addLinks } from "./footer.js";
import {
  $input_password,
  $input_login,
  $input_submit,
  $showView,
  $noticeUser,
  $noticePassword
} from "./dom.js";
import {
  checkContentLogin,
  checkContentPassword,
  showHideButton
} from "./form.js";

readMore();
addLinks();

$input_login.on("input", function (e) {
  checkContentLogin(this, $noticeUser);
  e.preventDefault();
});

$input_password.on("input", function (e) {
  checkContentPassword(this, $noticePassword);
  e.preventDefault();
});

$input_password.on("input", function (e) {
  showHideButton(this, $showView);
  e.preventDefault();
});

$showView.on("click", function (e) {
  if ($input_password.attr("type") === "password") {
    $(this).text("Ocultar");
    $input_password.attr("type", "text");
  } else {
    $(this).text("Mostrar");
    $input_password.attr("type", "password");
  }
  e.preventDefault();
});

$input_submit.click(function (e) {
  if (
    $input_login.hasClass("is-valid") &&
    $input_password.hasClass("is-valid")
  ) {
    console.log("campos validados");
  } else {
    console.log("campos invalidos");
  }
  e.preventDefault();
});
