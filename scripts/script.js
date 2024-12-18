// ----- Слайдер для Интро
const introSwiper = new Swiper('.intro', {
  // Настройки слайдера
  loop: true,
  pagination: {
    el: '.intro-pagination',
  },
  navigation: {
    nextEl: '.intro__button-right',
    prevEl: '.intro__button-left'
  },
});
// ----- /Слайдер для Интро

// ------ Слайдер для расписания матчей

const matchesSwiper = new Swiper('.matches-swiper', {
  // Настройки слайдера
  slidesPerView: 4,
  loop: true,
  pagination: {
    el: '.intro-pagination',
  },
  navigation: {
    nextEl: '.matches__button-next',
    prevEl: '.matches__button-prev'
  },
});

// ------ /Слайдер для расписания матчей