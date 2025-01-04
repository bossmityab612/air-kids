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
  const button = document.querySelector('.statistics__button-show-all');
  const tbody = document.querySelector('tbody');

  button.addEventListener('click', function() {
      tbody.classList.toggle('show-all');
      
      // Обновляем текст кнопки
      const buttonText = button.querySelector('p');
      buttonText.textContent = buttonText.textContent === 'Результаты матчей' ? 'Скрыть результаты' : 'Результаты матчей';
      
      // Изменяем изображение стрелки
      const arrowImage = button.querySelector('img');
      arrowImage.src = arrowImage.src.includes('vector-down.svg') ? './images/vector-up.svg' : './images/vector-down.svg';
  });
});
  

$('.statistics__button-show-all').click(function() {
  var $button = $(this);
  var $table = $button.closest('.statistics__table');
  var $showAllBlock = $table.find('.statistics__block-show-all');

  if ($button.hasClass('active')) {
    $showAllBlock.slideUp(300);
    $button.removeClass('active');
  } else {
    $('.statistics__button-show-all.active').removeClass('active');
    
    $showAllBlock.slideDown(300);
    $button.addClass('active');
  }
});



// $('.statistics__button-show-all').click(function() {
//   if ($(this).hasClass('active')) {
//     $(this).closest('.statistics__table').find('.statistics__block-show-all').slideUp(300);
//     $(this).removeClass('active')
//   } else {
//     $('.statistics__button-show-all').closest('.statistics__table').find('.statistics__block-show-all').slideUp(600);
//     $('.statistics__button-show-all').removeClass('active')

//     $(this).closest('.statistics__table').find('.statistics__block-show-all').slideDown(300);
//     $(this).addClass('active')
//   }
// });

// ---------- /Кнопка развертывания таблицы