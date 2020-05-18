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
  let containerEl = document.querySelector("#portfolio-project");
  let mixer = mixitup(containerEl, {
    classNames: {
      block: "",
    },
  });

  const filter = document.querySelectorAll(".list-portfolio button");
  const portfolioBigCard = document.querySelectorAll(".block-portfolio");
  for (let i = 0; i < filter.length; i++) {
    filter[i].addEventListener("click", function () {
      if (i == 0) {
        for (let j = 0; j < 2; j++) {
          portfolioBigCard[j].classList.add("block-portfolio-big");
          portfolioBigCard[j].classList.remove("block-portfolio-small");
        }
      } else {
        for (let j = 0; j < 2; j++) {
          portfolioBigCard[j].classList.remove("block-portfolio-big");
          portfolioBigCard[j].classList.add("block-portfolio-small");
        }
      }
    });
  }
});
