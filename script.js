const color_primary = "#00bcd4";

new fullpage("#fullpage", {
  licenseKey: "gplv3-license",
  anchors: ["home", "about", "services", "gallery", "contact"],
  //because of header height
  paddingTop: "60px",
  menu: true,
  navigation: true,
  navigationPosition: "right",
  slidesNavigation: true,
  slidesNavPosition: "bottom",
});

const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
});
