$(document).ready(function () {
  const MobileMenuToggle = document.querySelector(".toggle-menu");
  const MobMenu = document.querySelector(".header-menu");
  const MobOverlay = document.querySelector("#overlay");
  MobileMenuToggle.addEventListener("click", function () {
    MobMenu.classList.toggle("active");
    this.classList.toggle("active");
    MobOverlay.classList.toggle("active");
  });
  window.addEventListener("resize", function () {
    MobMenu.classList.remove("active");
    MobileMenuToggle.classList.remove("active");
    MobOverlay.classList.remove("active");
  });
});
