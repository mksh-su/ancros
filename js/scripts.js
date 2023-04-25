const swiper = new Swiper(".main-swiper", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".main-swiper-button-next",
    prevEl: ".main-swiper-button-prev",
  },
});

// burger
const burger = document.querySelector(".burger");
const nav = document.querySelector('.header-nav');
burger.addEventListener('click',function(){
  this.classList.toggle("close");
  nav.classList.toggle("open");
  document.body.classList.toggle("no-scroll");
});
