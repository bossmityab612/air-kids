document.addEventListener("DOMContentLoaded", async () => {
  const swiperLinks = {
    script: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
    style: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
  }
  const fancyboxLinks = {
    script: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js",
    style: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"
  }
  await firstInputEvent(async () => {
    if (typeof swiperLinks !== "undefined") {
      await loadLibrary(swiperLinks);

      // // ----- Слайдер для Интро
      const introSwiper = new Swiper('.intro', {
        // Настройки слайдера
        loop: true,
        pagination: {
          el: '.intro-pagination',
        },
        speed: 800,
        navigation: {
          nextEl: '.intro__button-right',
          prevEl: '.intro__button-left'
        },
        autoplay: {
          delay: 3000,
        },
        pagination: {
          el: '.swiper-pagination',     // Селектор элемента пагинации
          clickable: true,             // Включить кликабельную пагинацию
          type: 'bullets',             // Тип пагинации ('bullets' или 'fraction')

          // Для дробной пагинации
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
          }
        },
      });
      // // ----- /Слайдер для Интро

      // ------ Слайдер для расписания матчей
      const matchesSwiper = new Swiper('.matches-swiper', {
        // Настройки слайдера
        slidesPerView: 1,
        spaceBetween: 23,
        loop: true,
        // pagination: true,
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

      // ------ Слайдер для новостей
      const newsSwiper = new Swiper('.news', {
        // Настройки слайдера
        slidesPerView: 1,
        spaceBetween: 23,
        loop: true,
        // pagination: true,
        navigation: {
          nextEl: '.news__button-next',
          prevEl: '.news__button-prev'
        },
        pagination: {
          el: '.news-pagination',     // Селектор элемента пагинации
          clickable: true,             // Включить кликабельную пагинацию
          type: 'bullets',             // Тип пагинации ('bullets' или 'fraction')

          // Для дробной пагинации
          renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' / ' + '<span class="' + totalClass + '"></span>';
          }
        },
        breakpoints: {
          480: {
            slidesPerView: 2,
            spaceBetween: 0
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 32
          },
        },
      });
      // ------ /Слайдер для новостей
    }
  });
  await firstInputEvent(async () => {
    if (typeof swiperLinks !== "undefined") {
      await loadLibrary(fancyboxLinks);
      Fancybox.bind('[data-fancybox="gallery"]', {
        //
      }); 
    }
  });
});

// ------ Слайдер для расписания матчей
const matchesSwiper = new Swiper('.matches-swiper', {
  // Настройки слайдера
  slidesPerView: 1,
  spaceBetween: 23,
  loop: true,
  // pagination: true,
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
// ------ //Слайдер для расписания матчей


// -------- Бургер

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  const burger = header.querySelector('.burger');
  const navigationList = header.querySelector('.header__navigation-list');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navigationList.classList.toggle('header__navigation-list_active');
  });
});
// ------- /Бургер

// ------- Добавляем обработчики кликов для мобильной версии
document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = this.parentElement;
        dropdown.classList.toggle('active');

        // Закрываем другие открытые dropdown
        document.querySelectorAll('.dropdown').forEach(item => {
          if (item !== dropdown) {
            item.classList.remove('active');
          }
        });
      }
    });
  });
});
// ------- /Добавляем обработчики кликов для мобильной версии

// -------- Select
document.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector(".schedule")){
    const schedule = document.querySelector(".schedule");
    const select = schedule.querySelector(".select-wrap");
    const customSelect = select.querySelector(".custom-select");
    const customDropdown = select.querySelector(".select-dropdown");
    const defSelect = select.querySelector(".def-select");
  
    for (const el of defSelect) {
      let customOption = document.createElement("li");
      customOption.textContent = el.textContent;
  
      customDropdown.append(customOption);
    }
  
    const selectValue = select.querySelector(".custom-select__value");
    const optionsList = customDropdown.querySelectorAll("li");
  
    select.addEventListener("click", () => {
      customSelect.classList.toggle("custom-select_active");
    })
  
    optionsList.forEach(option => {
      function handler(e) {
        // Click Events
        if ((e.type === "click" && e.clientX !== 0 && e.clientY !== 0) || e.key === "Enter") {
          e.currentTarget.parentNode.querySelector(".active-item")?.classList.remove("active-item");
          select.value = e.currentTarget.textContent;
          selectValue.textContent = this.textContent;
  
          e.currentTarget.classList.add('active-item')
        }
      }
  
      option.addEventListener("keyup", handler);
      option.addEventListener("click", handler);
    });
  }  
});
// -------- /Select


// ---------- Кнопка развертывания таблицы
document.addEventListener('DOMContentLoaded', function () {
  // Получаем все кнопки и таблицы
  const showAllButtons = document.querySelectorAll('.statistics__button-show-all');
  const showAllTables = document.querySelectorAll('.statistics__table.statistics__block-show-all');

  // Проверяем наличие элементов
  if (showAllButtons.length === 0 || showAllTables.length === 0) {
    console.error('Элементы не найдены');
    return;
  }

  // Проверяем что количество кнопок и таблиц совпадает
  if (showAllButtons.length !== showAllTables.length) {
    console.warn('Количество кнопок и таблиц не совпадает');
  }

  // Создаем массив пар кнопка-таблица
  const pairs = showAllButtons.length < showAllTables.length
    ? showAllButtons.length
    : showAllTables.length;

  // Обрабатываем каждую пару
  for (let i = 0; i < pairs; i++) {
    const button = showAllButtons[i];
    const table = showAllTables[i];

    // Добавляем обработчик клика для текущей пары
    button.addEventListener('click', function () {
      table.classList.toggle('active');

      const buttonText = this.querySelector('p');
      const arrowImage = this.querySelector('img');

      // Обновляем текст кнопки
      if (buttonText) {
        buttonText.textContent = buttonText.textContent === 'Результаты матчей'
          ? 'Скрыть результаты'
          : 'Результаты матчей';
      }

      // Меняем изображение стрелки
      if (arrowImage) {
        arrowImage.src = arrowImage.src.includes('vector-down.svg')
          ? './images/vector-up.svg'
          : './images/vector-down.svg';
      }
    });
  }
});
// ---------- /Кнопка развертывания таблицы


// ------- Кнопка изменения цвета в календаре
document.addEventListener('DOMContentLoaded', function () {
  const calendarTable = document.querySelector('.calendar__table tbody tr');
  if(calendarTable){
    calendarTable.addEventListener('click', function (event) {
      const target = event.target;
  
      // Проверяем, является ли цель элементом <td>
      if (target.tagName === 'TD') {
        // Добавляем или удаляем класс 'active'
        target.classList.toggle('active');
      }
    });
  }
});
// ------- /Кнопка изменения цвета в календаре