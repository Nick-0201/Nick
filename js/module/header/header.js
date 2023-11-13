import { headerArray } from "../library/arrlib.js";

const headerContent = document.querySelector(".header");

export function header() {
    headerArray.map(item => {

        headerContent.innerHTML +=
            ` 
    <a class="header__logo" href="${item.headerIndex}">IZD<span>ER</span></a>
    <ul class="header__menu">
      <li class="header__item">
        <a class="header__link" href="${item.headerIndex}">Главная</a>
      </li>
      <li class="header__item">
        <a class="header__link" href="${item.headerTrevel}">​Туристическая агенства</a>
      </li>
      <li class="header__item">
        <a class="header__link" href="${item.headerShop}">Магазины</a>
      </li>
      <li class="header__item">
        <a class="header__link" href="${item.headerPersona}">Интересные люди</a>
      </li>
      <li class="header__item header__item_hover">
        <a class="header__link" href="${item.headerMedia}">Медия</a>
        <ul class="header__media-list">
  
          <li class="header__media-item">
            <a class="header__media-link" href="${item.headerGuide}">Гиды</a>
          </li>
          <li class="header__media-item">
            <a class="header__media-link" href="${item.headerBooks}">Книги</a>
          </li>
          <li class="header__media-item">
            <a class="header__media-link" href="#">Обзоры</a>
          </li>
  
        </ul>
      </li>
      <li class="header__item">
        <a class="header__link" href="">О нас</a>
      </li>
    </ul>
    <div class="header__right">
      <a href="https://www.instagram.com/alpclub_izder/"><i class="ri-instagram-fill"></i></a>
      <a href="https://t.me/ALPCLUB_IZDERI"><i class="ri-telegram-fill"></i></a>
      <a href=""><i class="ri-whatsapp-fill"></i></a>
      <div class="bx bx-menu" id="menu-icon"></div>
    </div>
  
  `
    });

};


header(headerArray, headerContent);
// -------------------- header blur--------------------

const headerblure = document.querySelector("header")
window.addEventListener("scroll", function () {
    headerblure.classList.toggle("sticky", window.scrollY > 60);
});


// -------------------- header humburger--------------------

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.header__menu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

