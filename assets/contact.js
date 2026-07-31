(function () {
  document.querySelectorAll("[data-obf]").forEach(function (el) {
    var type = el.getAttribute("data-obf");
    var text = atob(el.getAttribute("data-t"));
    var href = atob(el.getAttribute("data-h"));
    el.textContent = text;
    el.setAttribute("href", (type === "email" ? "mailto:" : "tel:") + href);
  });
})();
