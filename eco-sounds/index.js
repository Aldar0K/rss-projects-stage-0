// Самооценка по заданию.
console.log('Score: 60 / 60');

// Кеширование изображений.
const themes = ['default', 'solovey', 'drozd', 'malinovka', 'javoronok', 'slavka'];

function preloadImages() {
    themes.forEach(theme => {
        const img = new Image();
        img.src = `./assets/img/jpg/${theme}.jpg`;
    })
}

preloadImages()

// Переключение кнопок  и картинок.
const navItem = document.querySelectorAll('.nav__item');
const mainImage = document.querySelector('.main__image');
const logo = document.querySelector('.header__logo');
const headerIcon = document.querySelector('.header__icon');

function changeItemActive (event) {
    navItem.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');

    headerIcon.classList.remove('icon_active');

    mainImage.src = `./assets/img/jpg/${event.target.dataset.bird}.jpg`;
}

navItem.forEach(item => item.addEventListener('click', changeItemActive));

logo.addEventListener('click', () => {
    mainImage.src = `./assets/img/jpg/default.jpg`;

    navItem.forEach(item => item.classList.remove('active'));
    headerIcon.classList.add('icon_active');
});