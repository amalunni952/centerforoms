<script>

(function () {
  var oldUrl = "https://gp-assets-1.growthplug.com/website_files/5120/Dentist_Huntersville_NC_logo.png";
  var newUrl = "https://www.centerforoms.com/wp-content/uploads/2026/03/Dentist_Huntersville_NC_logo-symbol.webp";

  function replaceHeaderLogo() {
    document.querySelectorAll('img[src="' + oldUrl + '"]').forEach(function (img) {
      img.src = newUrl;
    });
  }

  replaceHeaderLogo();

  var observer = new MutationObserver(function () {
    replaceHeaderLogo();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["src"]
  });
})();

</script>