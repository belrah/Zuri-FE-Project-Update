const _ = (selector) => {
  return document.querySelector(selector);
};
_("#menu-toggle").addEventListener("click", function () {
  _("#nav-dropdown").classList.toggle("nav-active");
});
