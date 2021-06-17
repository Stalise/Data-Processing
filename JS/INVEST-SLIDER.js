'use strict'


let investSlider = new Swiper('.invest__swiper-container', {

   shortSwipes: false,

   longSwipesRatio: 0.1,

   grabCursor: true,

   autoplay: {
      delay: 7000,
   },

   speed: 1500,

   loop: true,
});