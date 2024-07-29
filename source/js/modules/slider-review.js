import {Swiper} from '../vendor/swiper.js';

new Swiper('.reviews', {
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

  breakpoints: {
    768: {
      spaceBetween: 100,
    },
    1366: {
      grabCursor: false,
      simulateTouch: false,
      spaceBetween: 300,
    }
  },
});
