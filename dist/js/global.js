const menu = document.querySelector("section.contact");
const menuButton = document.querySelector("a.menu");

$(menuButton).click(function() {
  $(menu).toggleClass("show-menu");
  return false;
});
