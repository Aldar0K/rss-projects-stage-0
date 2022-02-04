// Самооценка по заданию.
console.log('Score: 60 / 60');

// Кеширование изображений.


// Переключение кнопок  и картинок.
const navItem = document.querySelectorAll('.nav__item');
const mainImage = document.querySelector('.main__image');
const logo = document.querySelector('.header__logo');

function changeItemActive (event) {
    navItem.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');

    mainImage.src = `./assets/img/jpg/${event.target.dataset.bird}.jpg`;
}

navItem.forEach(item => item.addEventListener('click', changeItemActive));

logo.addEventListener('click', () => {
    mainImage.src = `./assets/img/jpg/default.jpg`;
    navItem.forEach(item => item.classList.remove('active'));
});