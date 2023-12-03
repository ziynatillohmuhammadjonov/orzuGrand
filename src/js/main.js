// Swiper
const swiperScroll = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  autoplay: {
    delay: 5000,
  },
});

// modal
const cover = document.querySelector(".cover");
const modal = document.querySelector(".modal");
const forum = document.querySelector(".modal__form");
const closeBtn = document.querySelector(".modal__close");
const openBtn = document.querySelector(".topnav__btn");
openBtn.addEventListener("click", () => {
  cover.classList.remove("modal-block");
  modal.classList.remove("modal-block");
});
closeBtn.addEventListener("click", () => {
  cover.classList.add("modal-block");
  modal.classList.add("modal-block");
});
modal.addEventListener("click", () => {
  cover.classList.add("modal-block");
  modal.classList.add("modal-block");
});
cover.addEventListener("click", () => {
  cover.classList.add("modal-block");
  modal.classList.add("modal-block");
});
forum.addEventListener("submit", () => {
  cover.classList.add("modal-block");
  modal.classList.add("modal-block");
});

// gsap action
