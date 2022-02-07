// Импорт объекта с разными языками из файла tanslate.js
import i18Obj from './translate.js';
import lightThemeArr from './light-theme.js';

// Вывод в консоль самооценки по заданию.
console.log('Score: 75 / 75');

// Меню бургер.
// Создаем переменные с классами, которые нужно менять.
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');
// const menuSpan = document.querySelector('.munu__span')
// Проверяем наличие необходимого класса.
if (iconMenu) {
// Создаем функцию, которая будем срабатывать при клике на иконку бургера, а при повторном нажатие будет возвращать исходное состояние.
    iconMenu.addEventListener('click', () => {
// Во-первых, функция будет делать блок body неактивным и добавлять затенение для заднего фона.
        document.body.classList.toggle('body_lock');
// Во-вторых, функция меняет иконку меню на крестик.
        iconMenu.classList.toggle('menu__icon_active');
// В-третьих, функция добавляет выезжающее меню.
        menuBody.classList.toggle('menu__body_active');
// В-четвертых, при открытии меню в светлой теме крестик станет черного цвета, а при закрытии превратится в белый бургер.
        if (iconMenu.classList.contains('menu__icon_active') && !themeButtonDark.classList.contains('theme-active')) {
            iconMenu.classList.add('menu__icon_theme-light');
        } else {
            iconMenu.classList.remove('menu__icon_theme-light');
        }
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
// Переключение цвета для меню бургер.
// iconMenu.addEventListener('mouseenter', () => {
//     console.log('mouseenter')
//     menuSpan.classList.toggle('background-gold');
// })
// iconMenu.addEventListener('mouseleave', () => {
//     console.log('mouseleave')
//     menuSpan.classList.toggle('background-gold');
// })
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

    portfolioButton.forEach(button => button.classList.remove('active_light-theme'));
    event.target.classList.add('active_light-theme');
}

portfolioButtons.addEventListener('click', changeClassActive);

// Значение lang по умолчанию 'en'
let currentLang = 'en';

// Функция перевода страницы на русский и английский
function getTranslate(lang) {
    const textBlocks = document.querySelectorAll('[data-i18]');

    textBlocks.forEach(currentElement => {
        if (currentElement.textContent === i18Obj[lang][currentElement.dataset.i18]) {
        } else {
            currentElement.textContent = i18Obj[lang][currentElement.dataset.i18];
        }

        if (currentElement.placeholder) {
            currentElement.placeholder = i18Obj[lang][currentElement.dataset.i18];
            currentElement.textContent = '';
          }
    })
    currentLang = lang;
}

// Вводим новые переменные для кнопок смены языков.
const langSwitcherRU = document.querySelector('.lang-switcher-ru');
const langSwitcherEN = document.querySelector('.lang-switcher-en');

// Функция getTranslate применяется при нажатии на соотвествующую кнопку.
langSwitcherRU.addEventListener('click', () => getTranslate('ru'));
langSwitcherEN.addEventListener('click', () => getTranslate('en'));

// Переключение цвета кнопок при смене языка.
function changeClassSelected(event) {
    langSwitcherRU.classList.remove('selected');
    langSwitcherEN.classList.remove('selected');
    
    event.target.classList.add('selected');
}

langSwitcherRU.addEventListener('click', changeClassSelected);
langSwitcherEN.addEventListener('click', changeClassSelected);

// Кнопки для переключения темы.
const themeButtonDark = document.querySelector('.theme__dark');
const themeButtonLight = document.querySelector('.theme__light');

themeButtonDark.addEventListener('click', () => {
    themeButtonDark.classList.remove('theme-active');
    themeButtonLight.classList.add('theme-active');
});
themeButtonLight.addEventListener('click', () => {
    themeButtonLight.classList.remove('theme-active');
    themeButtonDark.classList.add('theme-active');
});

// Значение theme по умолчанию 'dark'
let currentTheme = 'dark';

// Переключение темы.
// const themeButton = document.querySelector('theme');
const sectionSkills = document.querySelector('.skills');
const sectionPortfolio = document.querySelector('.portfolio');
const sectionVideo = document.querySelector('.video');
const sectionPrice = document.querySelector('.price');
const sectionTitles = document.querySelectorAll('.section-title');
const sectionTitleWrappers = document.querySelectorAll('.section-title-wrapper');
const buttonsBordered = document.querySelectorAll('.button_bordered');
const buttonActive = document.querySelector('.active')

function changeTheme(theme) {
    if (theme === 'dark') {}
    else {
        sectionSkills.classList.add('light-theme');
        sectionPortfolio.classList.add('light-theme');
        sectionVideo.classList.add('light-theme');
        sectionPrice.classList.add('light-theme');
        menuBody.classList.add('light-theme');
        sectionTitles.forEach(element => {
            element.classList.add('section-title_light-theme');
        })
        sectionTitleWrappers.forEach(element => {
            element.classList.add('section-title-wrapper_light-theme');
        })
        buttonsBordered.forEach(element => {
            element.classList.add('button_bordered_light-teme');
        })
        buttonActive.classList.add('active_light-theme')

        currentTheme = 'light';
    }
    if (theme === 'light') {}
    else {
        sectionSkills.classList.remove('light-theme');
        sectionPortfolio.classList.remove('light-theme');
        sectionVideo.classList.remove('light-theme');
        sectionPrice.classList.remove('light-theme');
        menuBody.classList.remove('light-theme');
        sectionTitles.forEach(element => {
            element.classList.remove('section-title_light-theme');
        })
        sectionTitleWrappers.forEach(element => {
            element.classList.remove('section-title-wrapper_light-theme');
        })
        buttonsBordered.forEach(element => {
            element.classList.remove('button_bordered_light-teme');
        })
        buttonActive.classList.remove('active_light-theme')

        currentTheme = 'dark';
    }
    // Проверка, которая убирает выделение с кнопки autumn при переключении тем.
    buttonsBordered.forEach(element => {
        if (!element.classList.contains('active')) {
            element.classList.remove('active_light-theme');
        }
    })
}

themeButtonDark.addEventListener('click', () => changeTheme('light'));
themeButtonLight.addEventListener('click', () => changeTheme('dark'));

// Сохранение выбранных пользователем настроек в local storage.
// let lang = 'en';
// let theme = 'dark';

function setLocalStorage() {
    localStorage.setItem('lang', currentLang);
    localStorage.setItem('theme', currentTheme);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorages() {
    if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang');
        getTranslate(lang);
    }
    if (localStorage.getItem('theme')) {
        const theme = localStorage.getItem('theme');
        changeTheme(theme);
    }
}
window.addEventListener('load', getLocalStorages);

// Цвет кнопок языков с учетом local storage.
function getDefaultLang() {
    if (localStorage.getItem('lang') === 'ru') {
        langSwitcherEN.classList.remove('selected');
        langSwitcherRU.classList.add('selected');
    } 
    if (localStorage.getItem('lang') === 'en') {
        langSwitcherRU.classList.remove('selected');
        langSwitcherEN.classList.add('selected');
    }
}

getDefaultLang();

// Иконка темы с учетом local storage.
function getDefaultTheme() {
    if (localStorage.getItem('theme') === 'dark') {
        themeButtonLight.classList.remove('theme-active');
        themeButtonDark.classList.add('theme-active');
    } 
    if (localStorage.getItem('theme') === 'light') {
        themeButtonDark.classList.remove('theme-active');
        themeButtonLight.classList.add('theme-active');
    }
}

getDefaultTheme();

// Сложные эффекты для кнопок при наведении и/или клике.
const buttons = document.querySelectorAll('.button');

buttons.forEach((element) => {
    element.addEventListener('click', function(e) {
        const x = e.clientX;
        const y = e.clientY;

        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 500);
    }
    )});


// Кастномный видеоплеер.

// Вводим константы для видеоплеера.
const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const playBtn = document.querySelector('.play-button');
const controlsPlayBtn = document.querySelector('.play-icon')

// Функции и слушатели для видеоплеера.

// Переключение проигрывания и паузы видео по нажатию на главную кнопку, иконку в controls и сам плеер.
function togglePlay() {
    if (video.paused) {
        video.play();
        console.log('play');

        playBtn.classList.add('play-button_pause');
        controlsPlayBtn.classList.add('pause');
    } else {
        video.pause();
        console.log('pause');

        playBtn.classList.remove('play-button_pause')
        controlsPlayBtn.classList.remove('pause');
    }
}

playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
controlsPlayBtn.addEventListener('click', togglePlay);