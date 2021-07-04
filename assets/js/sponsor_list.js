const _ = (selector) => {
  return document.querySelector(selector);
};

_(".sponsor-list-sidebar-mobile-overlay").addEventListener(
  "click",
  function () {
    _(".sponsor-list-sidebar").classList.remove("sponsor-list-sidebar-active");
  }
);
_(".sponsor-list-sidebar-toggle").addEventListener("click", function () {
  _(".sponsor-list-sidebar").classList.add("sponsor-list-sidebar-active");
});
