// Слайдер с расписанием 
const swiperLinks = {
  script: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js",
  style: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
}
const matchesSwiperSettings = {
  name: ".matches-swiper",
  settings: {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 32,
    autoHeight: true,
    a11y: {
      slideRole: 'listitem',
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '.matches__button-prev',
      prevEl: '.matches__button-next',
    },
  }
};


// Загрузка и инициализация

window.addEventListener("DOMContentLoaded", async ()=>{
  await firstInputEvent(async()=>{
    await loadLibrary(swiperLinks);
    const matchesSwiper = new Swiper(matchesSwiperSettings.name, matchesSwiperSettings.settings);
  });
});

// Хелпер на добавление библиотеки

async function loadLibrary(libraryObj){
  if(libraryObj.style) await loadStyle(libraryObj.style);
  if(libraryObj.script) await loadScript(libraryObj.script);
}

// Скрипт отложенной загрузки

/*
* The function calls a callback at any user interaction with the site, or 3 seconds after load
* @function
* @param {requestCallback} callback - The callback that handles the response.
*/
let notFirst = false;
async function firstInputEvent(callback) {
  const f = e => {
    if (notFirst) return;
    if(e) e.currentTarget.removeEventListener(e.type, f);
    callback();
    notFirst = true;
  }
  window.addEventListener('scroll', f, { once: true });
  window.addEventListener('click', f, { once: true });
  window.addEventListener('contextmenu', f, { once: true });
  window.addEventListener('mousemove', f, { once: true });
  window.addEventListener('touchstart', f, { once: true });
  window.addEventListener('load', ()=>{
    setTimeout(()=>{
      f();
    }, 3000);
  });
}

/*
* @function loadStyle
* @param {string} src - Download link
* @returns {Promise<style>} Promise object represents the object style
* @description Returns a promise when loading
*/
function loadStyle(src) {
  return new Promise(function(resolve, reject) {
    let style = document.createElement("link");
    style.href = src;
    style.setAttribute("rel", "stylesheet");
    
    style.onload = () => resolve(style);
    style.onerror = () => reject(new Error(`Style loading error ${src}`));
    
    document.head.append(style);
  });
}
  /*
  * @function loadScript
  * @param {string} src - Download link
  * @returns {Promise<script>} Promise object represents the object script
  * @description Returns a promise when loading
  */
function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;
    
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Script loading error ${src}`));
    
    document.head.append(script);
  });
}

// Бургер

$(document).ready(function() {
  $(document).ready(function() {
    $('.burger').click(function() {
      $('.burger, .burger__lines').toggleClass('active');
      $('.header__navigation-list').slideToggle();
    });
  });
});
