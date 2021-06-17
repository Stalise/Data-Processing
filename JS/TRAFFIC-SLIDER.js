'use strict'

let trafficSlider = new Swiper('.traffic__swiper-container', {

   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },

   pagination: {
      el: '.traffic__swiper-pagination',
      type: 'bullets',
      clickable: true,
   },

   shortSwipes: false,

   longSwipesRatio: 0.1,

   loop: true,

   autoplay: {
      delay: 7000,
   },

   grabCursor: true,

   speed: 1000,
});