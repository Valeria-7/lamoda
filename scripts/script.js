const headerCityButton = document.querySelector(".header__city-button");

headerCityButton.textContent = localStorage.getItem('lomoda-location') || 'Ваш город?';

headerCityButton.addEventListener('click', () => {
    const city = prompt('Укажите ваш город');
    headerCityButton.textContent = city;
    localStorage.setItem('lomoda-location', city); // сохранится при обновлении страницы
});

// scroll lock

const disableScroll = () => {
    const widthScroll = window.innerWidth - document.body.offsetWidth;

    document.body.dbScrollY = window.scrollY; //сколько пикселей от верха отмотали

    document.body.style.cssText = `
        top: ${-window.scrollY}px;
        left: 0;
        wigth: 100%;
        height: 100vh;
        overflow: hidden;
        padding-right: ${widthScroll}px;
    `;
};

const enableScroll = () => {
    document.body.style.cssText = '';
    window.scroll({
        top: document.body.dbScrollY,
    });
};

// modal

const subheaderCart = document.querySelector('.subheader__cart');
const cartOverlay = document.querySelector('.cart-overlay');

function cartModalOpen () {
    cartOverlay.classList.add('cart-overlay-open');
    disableScroll();
};
function cartModalClose () {
    cartOverlay.classList.remove('cart-overlay-open');
    enableScroll();
};

subheaderCart.addEventListener('click', () => {
    cartModalOpen();
});

cartOverlay.addEventListener('click', event => {
    let target = event.target;
    if (target.classList.contains('cart-overlay') || target.matches('.cart__btn-close')) cartModalClose();
});