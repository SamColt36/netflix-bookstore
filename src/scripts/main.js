"use strict";
import "../styles/styles.css";
import $ from "jquery";
import { readMore } from "./read-more.js";
import { addLinks } from "./footer.js";
import {
  $input_password,
  $input_login,
  $input_submit,
  $showView,
  $noticeUser,
  $noticePassword,
} from "./dom.js";

import {
  checkContentLogin,
  checkContentPassword,
  showHideButton,
  allFieldsValidated,
} from "./form.js";

readMore();
addLinks();

$input_login.on("input", function (e) {
  checkContentLogin(this, $noticeUser);
  allFieldsValidated($(this), $input_password, $input_submit);

  e.preventDefault();
});

$input_password.on("input", function (e) {
  checkContentPassword(this, $noticePassword);
  showHideButton(this, $showView);
  allFieldsValidated($input_login, $(this), $input_submit);
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
  window.location.href = "https://github.com/SamColt36/netflix-bookstore";
  e.preventDefault();
});
