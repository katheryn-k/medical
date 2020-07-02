const burgerMenu = document.querySelector('#toggleMenu');
const navigation = document.querySelector('#navigation');

/* burger menu */
burgerMenu.onclick = () => {
    navigation.classList.toggle('header__nav-active');
};

/* slider */
const btnRight = document.querySelector('#arrow-right');
const slides = document.querySelectorAll('.testimonials-card__box');

let active = 0;

btnRight.onclick = () => {
    slides[active].classList.remove('testimonials-card__box_active');
    active + 1 === slides.length ?
    active = 0 :
    active++;
    slides[active].classList.add('testimonials-card__box_active');
};


