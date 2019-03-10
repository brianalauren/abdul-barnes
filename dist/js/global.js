const menu = document.querySelector("section.contact");
const menuButton = document.querySelector("a.menu");
const closeButton = document.querySelector("a.close-menu");

$(menuButton).click(function() {
  $(menu).css("display", "flex");
  return false;
});

$(closeButton).click(function() {
  $(menu).css("display", "none");
  return false;
});
