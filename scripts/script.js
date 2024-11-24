const popup = document.querySelector('.popup'); //Всплывающее окно
const openPopupButton = document.querySelector('.open-popup'); //Кнопка открытия попапа
const closePopupButton = document.querySelector('.popup__button-close'); //Кнопка закрытия попапа

// Открытие и закрытие попапа
openPopupButton.addEventListener('click', () => {
	popup.classList.add('popup_opened');
});

closePopupButton.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});



// $(document).ready(function(){
//   $(".owl-carousel").owlCarousel({
//     items: 1,
//     loop: true,
//     margin: 10,
//     autoplay: true,
//     autoplayTimeout: 4000,
//     autoplayHoverPause: true
//   });
// });

// const swiper = new swiper('.intro__block-slider', {
  // Optional parameters
  // loop: true,

  // If we need pagination
  // pagination: {
  //   el: '.intro__block-slider .swiper-pagination',
  // },

  // Navigation arrows
//   navigation: {
//     nextEl: '.intro__block-slider .swiper-button-next',
//     prevEl: '.intro__block-slider .swiper-button-prev',
//   },
// });



