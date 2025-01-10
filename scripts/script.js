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
  const header = document.querySelector('.header');
  const burger = header.querySelector('.burger');
  const navigationList = header.querySelector('.header__navigation-list');

  const headerHeight = header.clientHeight;
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navigationList.classList.toggle('header__navigation-list_active');
  });
});
// ------- /Бургер


// -------- Select

document.addEventListener('DOMContentLoaded', () => {
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
});

// ---------- Кнопка развертывания таблицы

document.addEventListener('DOMContentLoaded', function () {
  const showAllButton = document.querySelector('.statistics__button-show-all');
  const showAllTable = document.querySelector('.statistics__table.statistics__block-show-all');

  if (showAllButton && showAllTable) {
    showAllButton.addEventListener('click', function () {
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

// ------- Кнопка изменения цвета в календаре

document.addEventListener('DOMContentLoaded', function () {
  const calendarTable = document.querySelector('.calendar__table tbody tr');

  calendarTable.addEventListener('click', function (event) {
    const target = event.target;

    // Проверяем, является ли цель элементом <td>
    if (target.tagName === 'TD') {
      // Добавляем или удаляем класс 'active'
      target.classList.toggle('active');
    }
  });

});


// ------- /Кнопка изменения цвета в календаре