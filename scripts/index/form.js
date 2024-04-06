"use strict";

const removeErrorInput = (
  input,
  notice,
  styles = "border-b border-b-orange-400"
) => {
  notice.fadeOut();
  $(input).removeClass(styles);
};

const addErrorInput = (
  input,
  notice,
  styles = "border-b border-b-orange-400"
) => {
  notice.fadeIn();
  $(input).addClass(styles);
};

const withContent = function (input) {
  return $(input).addClass("has-content");
};

const withoutContent = function (input) {
  return $(input).removeClass("has-content");
};

const checkContentLogin = function (input, notice) {
  const value = $(input).val().trim();

  value.length > 0 ? withContent(input) : withoutContent(input);
  /^\d+$/.test(value) ? testNumber() : testEmail();

  function testNumber() {
    if (/^\d{11}$/.test(value)) {
      $(input).addClass("is-valid");
      removeErrorInput(input, notice);
    } else {
      addErrorInput(input, notice);
      $(input).removeClass("is-valid");
    }
  }

  function testEmail() {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      $(input).addClass("is-valid");
      removeErrorInput(input, notice);
    } else {
      addErrorInput(input, notice);
      $(input).removeClass("is-valid");
    }
  }
};

const checkContentPassword = function (input, notice) {
  const value = $(input).val().length;
  if (value === 0) {
    $(input).removeClass("is-valid");
    withoutContent(input);
    addErrorInput(input, notice);
  } else if (value > 0 && value < 4) {
    $(input).removeClass("is-valid");
    withContent(input);
    addErrorInput(input, notice);
  } else {
    $(input).addClass("is-valid");
    withContent(input);
    removeErrorInput(input, notice);
  }
};

const showHideButton = function (input, element) {
  $(input).val().trim().length > 0 ? element.fadeIn() : element.fadeIn();
};

const allFieldsValidated = function (objLogin, objPassword, objSubmit) {
  return objLogin.hasClass("is-valid") && objPassword.hasClass("is-valid")
    ? objSubmit.attr("disabled", false)
    : objSubmit.attr("disabled", true);
};

export {
  checkContentLogin,
  checkContentPassword,
  showHideButton,
  allFieldsValidated,
};
