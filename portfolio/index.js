// Импорт объекта с разными языками из файла tanslate.js
import i18Obj from './translate.js';

// Вывод в консоль самооценки по заданию.
console.log('Score: 75 / 75');

// Меню бургер.
// Создаем переменные с классами, которые нужно менять.
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');
// Проверяем наличие необходимого класса.
if (iconMenu) {
// Создаем функцию, которая будем срабатывать при клике на иконку бургера, а при повторном нажатие будет возвращать исходное состояние.
    iconMenu.addEventListener('click', () => {
// Во-первых, функция будет делать блок body неактивным и добавлять затенение для заднего фона.
        document.body.classList.toggle('body_lock');
        document.body.classList.toggle('body_shadow');
// Во-вторых, функция меняет иконку меню на крестик.
        iconMenu.classList.toggle('menu__icon_active');
// В-третьих, функция добавляет выезжающее меню.
        menuBody.classList.toggle('menu__body_active');
    })
// Создаем новое состояние при наведении.
    // iconMenu.addEventListener('mouseenter', () => {
    //     iconMenu.classList.toggle('background-gold')
    // })
    // iconMenu.addEventListener('mouseleave', () => {
    //     iconMenu.classList.toggle('background-gold')
    // })
// При нажатии на любую кнопку навигации, меню бургер будет закрываться.
    menuLinks.forEach((link) => link.addEventListener('click', () => {
        document.body.classList.remove('body_lock');
        iconMenu.classList.remove('menu__icon_active');
        menuBody.classList.remove('menu__body_active');
}))
}


// Смена изображений в секции Portfolio.
const portfolioButtons = document.querySelector('.portfolio__buttons')
const portfolioButton = document.querySelectorAll('.portfolio__button');
const portfolioImage = document.querySelectorAll('.portfolio__image');

// portfolioButton.addEventListener('click', () => {
//     portfolioImage.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
// });

function changeImage(event) {
    if(event.target.classList.contains('portfolio__button') && event.target.dataset.season === "winter") {
        portfolioImage.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    }
    if(event.target.classList.contains('portfolio__button') && event.target.dataset.season === "spring") {
        portfolioImage.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    }
    if(event.target.classList.contains('portfolio__button') && event.target.dataset.season === "summer") {
        portfolioImage.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    }
    if(event.target.classList.contains('portfolio__button') && event.target.dataset.season === "autumn") {
        portfolioImage.forEach((img, index) => img.src = `./assets/img/${event.target.dataset.season}/${index + 1}.jpg`);
    }
}

portfolioButtons.addEventListener('click', changeImage);

// Кеширование изорбажений.
const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
    seasons.forEach(season => {
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${season}/${i}.jpg`;
        }
    });
}

preloadImages();

// Функция которая добавляет класс active элементу, на котором произошло событие, а также удаляет этот класс у других подобных элементов.
function changeClassActive(event) {
    portfolioButton.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
}

portfolioButtons.addEventListener('click', changeClassActive);