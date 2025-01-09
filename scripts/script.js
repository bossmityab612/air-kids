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

document.addEventListener('DOMContentLoaded', function() {
  const showAllButton = document.querySelector('.statistics__button-show-all');
  const showAllTable = document.querySelector('.statistics__table.statistics__block-show-all');

  if (showAllButton && showAllTable) {
    showAllButton.addEventListener('click', function() {
      showAllTable.classList.toggle('active');
      
      // Обновляем текст кнопки
      const buttonText = this.querySelector('p');
      buttonText.textContent = buttonText.textContent === 'Результаты матчей' ? 'Скрыть результаты' : 'Результаты матчей';
      
      // Изменяем изображение стрелки
      const arrowImage = this.querySelector('img');
      arrowImage.src = arrowImage.src.includes('vector-down.svg') ? './images/vector-up.svg' : './images/vector-down.svg';
    });
  } else {
    console.error('Элементы не найдены');
  }
});


// ---------- /Кнопка развертывания таблицы

