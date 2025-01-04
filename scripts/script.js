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
  slidesPerView: 1,
  spaceBetween: 23,
  loop: true,
  navigation: {
    nextEl: '.matches__button-next',
    prevEl: '.matches__button-prev'
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
      spaceBetween: 26
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 32
    },
  },
});

// ------ /Слайдер для расписания матчей


// -------- Бургер

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const navigationList = document.querySelector('.header__navigation-list');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navigationList.style.display = navigationList.style.display === 'none' ? 'block' : 'none';
  });
});
// ------- /Бургер


// ---------- Кнопка развертывания таблицы

$('.statistics__button-show-all').click(function() {
  if ($(this).hasClass('active')) {
    $(this).closest('.statistics__table').find('.statistics__block-show-all').slideUp(300);
    $(this).removeClass('active')
  } else {
    $('.statistics__button-show-all').closest('.statistics__table').find('.statistics__block-show-all').slideUp(600);
    $('.statistics__button-show-all').removeClass('active')

    $(this).closest('.statistics__table').find('.statistics__block-show-all').slideDown(300);
    $(this).addClass('active')
  }
});

// ---------- /Кнопка развертывания таблицы