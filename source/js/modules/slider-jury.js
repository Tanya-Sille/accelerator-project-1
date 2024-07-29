import {Swiper} from '../vendor/swiper.js';

new Swiper('.jury__wrapper', {
  watchOverflow: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 600,
  simulateTouch: true,
  grabCursor: true,
  loop: true,

  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
      simulateTouch: false,
      grabCursor: false,
    }
  },
});
