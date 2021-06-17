'use strict'


//анимация + логика бургера
burger_icon.onclick = function () {

   if (!burger_icon.classList.contains('_active')) {
      burger_icon.classList.add('_active');
      burger_line.style.transitionDuration = '0s';
      burger_line.style.transform = 'scaleX(-0.3)';
      header_menu.style.transform = 'translate(0, 0)';
      header_menu.style.opacity = '1';

      // если ширина экрана меньше указанной, то бургер работает с доп.фоном.
      if (document.body.clientWidth <= 768) {
         document.body.style.overflow = 'hidden';
         document.querySelector('.header__burger').style.display = 'block';
         setTimeout(() => {
            document.querySelector('.header__burger').style.opacity = '1';
            document.querySelector('.burger__stopper').style.transform = 'translate(0, 0)';
            document.querySelector('.burger__content').style.transform = 'translate(0, 0)';
         }, 10)
      }

      setTimeout(() => {
         burger_line.style.transitionDuration = '0.2s';
         burger_line.style.transform = 'scaleX(1)';
      }, 10)
   } else if (burger_icon.classList.contains('_active')) {
      burger_icon.classList.remove('_active');
      burger_line.style.transitionDuration = '0s';
      burger_line.style.transform = 'scaleX(1)';
      burger_icon.style.transitionDuration = '0.5s';
      burger_icon.style.transform = 'rotate(-180deg)';
      header_menu.style.transform = 'translate(-70px, 0)';
      header_menu.style.opacity = '0';

      // если ширина экрана меньше указанной, то бургер работает с доп.фоном.
      if (document.body.clientWidth <= 768) {
         document.body.style.overflow = 'visible';
         header_menu.style.opacity = '1';
         header_menu.style.transform = 'translate(-170px, 0)';
         document.querySelector('.burger__stopper').style.transform = 'translate(-400px, 0)';
         document.querySelector('.burger__content').style.transform = 'translate(-400px, 0)';
         setTimeout(() => {
            document.querySelector('.header__burger').style.opacity = '0';
            document.querySelector('.header__burger').style.display = 'none';
         }, 300)
      }

      setTimeout(() => {
         burger_icon.style.transitionDuration = '';
         burger_icon.style.transform = '';
      }, 500)
   }
}

window.addEventListener('resize', () => {
   if (document.body.clientWidth > 768) {
      document.querySelector('.header__burger').removeAttribute("style");
      document.querySelector('.burger__content').removeAttribute("style");
      document.querySelector('.burger__stopper').removeAttribute("style");
      document.querySelector('.header-menu__menu').removeAttribute("style");
      burger_icon.classList.remove('_active');
      burger_line.style.transitionDuration = '0s';
      burger_line.style.transform = 'scaleX(1)';
      burger_icon.style.transitionDuration = '0.5s';
      burger_icon.style.transform = 'rotate(-180deg)';
      header_menu.style.transform = 'translate(-70px, 0)';
      header_menu.style.opacity = '0';
      document.body.style.overflow = 'visible';
      setTimeout(() => {
         burger_icon.style.transitionDuration = '';
         burger_icon.style.transform = '';
      }, 500)
   }
});

// плавный скролл до блоков 
document.querySelector('.header-menu__list').onclick = function (event) {
   console.log(1)
   if (event.target.tagName == 'A') {

      // если ширина меньше, то допололнительно скрываются еще блоки burger
      if (document.body.clientWidth <= 768) {
         burger_icon.classList.remove('_active');
         burger_line.style.transitionDuration = '0s';
         burger_line.style.transform = 'scaleX(1)';
         burger_icon.style.transitionDuration = '0.5s';
         burger_icon.style.transform = 'rotate(-180deg)';
         document.body.style.overflow = 'visible';
         header_menu.style.opacity = '1';
         header_menu.style.transform = 'translate(-170px, 0)';
         document.querySelector('.burger__stopper').style.transform = 'translate(-400px, 0)';
         document.querySelector('.burger__content').style.transform = 'translate(-400px, 0)';
         setTimeout(() => {
            document.querySelector('.header__burger').style.opacity = '0';
            document.querySelector('.header__burger').style.display = 'none';
         }, 300)
      }

      let scrollNav = setInterval(() => {
         scrollBy(0, 15)
         if (window.pageYOffset >= document.querySelector(`.${event.target.dataset.scroll}`).offsetTop) {
            clearInterval(scrollNav);
         } else if (window.pageYOffset == document.body.scrollHeight - window.innerHeight) {
            clearInterval(scrollNav);
         }
      }, 5)
   }
}

// анимация появления в блоке header
let headerAnimate = {
   animateShow: setTimeout(() => {
      if (document.body.clientWidth > 1200) {
         document.querySelector('.header__svg-man').style.opacity = '1';
         setTimeout(() => {
            document.querySelector('.header__header-menu').style.opacity = '1';
            document.querySelector('.header__header-menu').style.transform = 'translate(0, 0)';

            document.querySelector('.header__title').style.opacity = '1';
            document.querySelector('.header__title').style.transform = 'translate(0, 0) rotate(0deg)';

            document.querySelector('.header__subtle').style.opacity = '1';
            document.querySelector('.header__subtle').style.transform = 'translate(0, 0)';

            document.querySelector('.header__buttons').style.opacity = '1';
            document.querySelector('.header__buttons').style.transform = 'translate(0, 0)';

            document.querySelector('.header__video').style.opacity = '1';
            document.querySelector('.header__video').style.transform = 'translate(0, 0)';

            document.querySelector('.header__partners').style.opacity = '1';

            document.querySelector('.header__svg-bg').style.opacity = '1';

            setTimeout(() => headerAnimate.svgMan.play(), 5000);
            setTimeout(() => headerAnimate.svgMan.stop(), 7500);
         }, 1500)
      } else if (document.body.clientWidth <= 1200) {
         setTimeout(() => headerAnimate.svgMan.finish(), 150)
      }
   }, 300),

   // параметры запуска отрисовки линий в #vector-svg
   svgMan: new Vivus('vector-svg', {
      type: 'oneByOne',
      duration: 50000,
      start: 'manual',
   }),
}

// анимация появления блоков при сролле (transform, opacity...)
let mainAnimate = {
   // анимация появления блоков при сролле (transform, opacity...)
   scrollAnimate: window.addEventListener('scroll', () => {
      if (document.body.clientWidth > 1200) {
         if (window.pageYOffset + window.innerHeight >= 1040) {
            document.querySelector('.features__title').classList.add('_active');
            document.querySelector('.features__subtle').classList.add('_active');
         }
         if (window.pageYOffset + window.innerHeight >= 1350) {
            document.querySelector('.features__content').classList.add('_active');
         }
         if (window.pageYOffset + window.innerHeight >= 1925) {
            document.querySelector('.traffic__content').classList.add('_active');
            document.querySelector('.traffic__slider').classList.add('_active');
         }
         if (window.pageYOffset + window.innerHeight >= 2250) {
            document.querySelector('.advice__text').classList.add('_active');
         }
         if (window.pageYOffset + window.innerHeight >= 2400) {
            document.querySelector('.advice__content').classList.add('_active');
         }
         if (window.pageYOffset + window.innerHeight >= 2660) {
            document.querySelector('.startup__title').classList.add('_active');
            document.querySelector('.startup__link').classList.add('_active');
         }
         if (window.pageYOffset + window.innerHeight >= 3650) {
            document.querySelector('.invest__content').classList.add('_active');
            document.querySelector('.invest__slider').classList.add('_active');
         }
         if (window.pageYOffset + window.innerHeight >= 4150) {
            document.querySelector('.finding__content').classList.add('_active');
            document.querySelector('.finding__text').classList.add('_active');
         }
         if (window.pageYOffset + window.innerHeight >= 4650) {
            document.querySelector('.subscribe__container').classList.add('_active');
         }
      }
   }),
}

//анимация svg линий в блоке advance
let advanceAnimateSvg = {

   fourthLine: anime({
      targets: '#advice_svgLine1',
      translateX: [-50, 20],
      translateY: [22, -10],
      easing: 'linear',
      duration: 7000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   firstLine: anime({
      targets: '#advice_svgLine2',
      translateX: 100,
      translateY: -65,
      easing: 'linear',
      duration: 10000,
      loop: true,
      direction: 'alternate',
   }),
   secondLine: anime({
      targets: '#advice_svgLine3',
      translateX: -100,
      translateY: 55,
      easing: 'linear',
      duration: 10000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   sixthLine: anime({
      targets: '#advice_svgLine4',
      translateX: [-100, 30],
      translateY: [55, -22],
      easing: 'linear',
      duration: 13000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   fifthLine: anime({
      targets: '#advice_svgLine5',
      translateX: [-50, 30],
      translateY: [22, -22],
      easing: 'linear',
      duration: 6000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   fifthLine: anime({
      targets: '#advice_svgLine6',
      translateX: [-50, 30],
      translateY: [30, -18],
      easing: 'linear',
      duration: 8000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
}

//анимация svg линий в блоке startup
let startupAnimateSvg = {

   firstLine: anime({
      targets: '#startup_svgLine1',
      translateY: [50, -10],
      easing: 'linear',
      duration: 7000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   secondLine: anime({
      targets: '#startup_svgLine2',
      translateY: [30, -10],
      easing: 'linear',
      duration: 7000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   thirdLine: anime({
      targets: '#startup_svgLine3',
      translateY: [30, -50],
      easing: 'linear',
      duration: 7000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   fourthLine: anime({
      targets: '#startup_svgLine4',
      translateY: [50, -10],
      easing: 'linear',
      duration: 7000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   fifthLine: anime({
      targets: '#startup_svgLine5',
      translateY: [30, -20],
      easing: 'linear',
      duration: 7000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   sixthLine: anime({
      targets: '#startup_svgLine6',
      translateY: [5, -25],
      easing: 'linear',
      duration: 6000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   seventhLine: anime({
      targets: '#startup_svgLine7',
      translateY: [-35, 10],
      easing: 'linear',
      duration: 6000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   eightLine: anime({
      targets: '#startup_svgLine8',
      translateY: [-40, 50],
      easing: 'linear',
      duration: 8000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   ninthLine: anime({
      targets: '#startup_svgLine9',
      translateY: [-10, 80],
      easing: 'linear',
      duration: 9000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   tenthLine: anime({
      targets: '#startup_svgLine10',
      translateY: [-10, 30],
      easing: 'linear',
      duration: 5000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   eleventhLine: anime({
      targets: '#startup_svgLine11',
      translateY: [-15, 50],
      easing: 'linear',
      duration: 7000,
      delay: 200,
      loop: true,
      direction: 'alternate',
   }),
   twelveLine: anime({
      targets: '#startup_svgLine12',
      translateY: [10, -100],
      easing: 'linear',
      duration: 10000,
      loop: true,
      direction: 'alternate',
   }),
   thirteenthLine: anime({
      targets: '#startup_svgLine13',
      translateY: [100, -10],
      easing: 'linear',
      duration: 10000,
      loop: true,
      direction: 'alternate',
   }),
   fourteenthLine: anime({
      targets: '#startup_svgLine14',
      translateY: 100,
      easing: 'linear',
      duration: 9500,
      loop: true,
      direction: 'alternate',
   }),
}

