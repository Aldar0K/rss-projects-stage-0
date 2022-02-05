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

// Введение переменной для тега audio.
const audio = document.querySelector('audio');

// Флаг, отображающий, играет музыка в данный момент или нет. По умолчанию - false.
let isPlay = false;

// Стоп или пауза трека и переключение кнопки play.
const playBtn = document.querySelector('.play');

function switchAudio () {
    if (!isPlay) {
        audio.currentTime = 0;
        audio.play();

        playBtn.classList.add('pause');
        isPlay = true;
    } else {
        audio.pause();

        playBtn.classList.remove('pause');
        isPlay = false;
    }
}

playBtn.addEventListener('click', switchAudio);

// Переключение кнопок, картинок и треков.
const navItem = document.querySelectorAll('.nav__item');
const mainImage = document.querySelector('.main__image');
const logo = document.querySelector('.header__logo');
const headerIcon = document.querySelector('.header__icon');

function changeItemActive (event) {
    navItem.forEach(item => item.classList.remove('active'));
    headerIcon.classList.remove('icon_active');

    event.target.classList.add('active');

    mainImage.src = `./assets/img/jpg/${event.target.dataset.bird}.jpg`;
    audio.src = `./assets/audio/${event.target.dataset.bird}.mp3`

    audio.currentTime = 0;
    audio.play();
    playBtn.classList.add('pause');
    isPlay = true;
}

navItem.forEach(item => item.addEventListener('click', changeItemActive));

logo.addEventListener('click', () => {
    navItem.forEach(item => item.classList.remove('active'));

    headerIcon.classList.add('icon_active');

    mainImage.src = `./assets/img/jpg/default.jpg`;
    audio.src = `./assets/audio/forest.mp3`

    audio.currentTime = 0;
    audio.play();
    playBtn.classList.add('pause');
    isPlay = true;
});
