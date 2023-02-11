const nav = document.querySelector('.navegacion');
const btn = document.querySelector('.header__icon-burguer');

btn.addEventListener('click', () => {

    nav.classList.toggle('overlay');

    if (nav.classList.contains('overlay')) {
        btn.setAttribute('src', './images/icon-close.svg');
    } else {
        btn.setAttribute('src', './images/icon-hamburger.svg');
    }
});
