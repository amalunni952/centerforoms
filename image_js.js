(function () {
  var newUrl = "https://www.centerforoms.com/wp-content/uploads/2026/03/Dentist_Huntersville_NC_logo-symbol.webp";

  function replaceHeaderLogo() {
    var selectors = [
      'img[alt*="Brand Logo"]',
      'img[title*="Brand Logo"]',
      'a.navbar-brand img',
      'a.logo img',
      'header img'
    ];

    selectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (img) {
        img.src = newUrl;
        img.setAttribute("src", newUrl);
        if (img.srcset) {
          img.srcset = newUrl;
          img.setAttribute("srcset", newUrl);
        }
      });
    });
  }

  function init() {
    replaceHeaderLogo();

    var observer = new MutationObserver(function () {
      replaceHeaderLogo();
    });

    if (document.body) {
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["src", "srcset"]
      });
    }

    setInterval(replaceHeaderLogo, 1500);
    window.addEventListener("load", replaceHeaderLogo);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
