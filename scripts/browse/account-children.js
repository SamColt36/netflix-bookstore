"use strict";

const modifyNameTheLastElement = () => {
  const $names = $(".nameUser");

  $.each($names, function (index, name) {
    $(name).text("Name");
    $($names[$names.length - 1]).text("Children");
  });
};

export { modifyNameTheLastElement };
