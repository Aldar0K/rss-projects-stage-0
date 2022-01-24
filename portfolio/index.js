// Выводим в консль самооценку по заданию
console.log('Score: 110 / 110');

// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function () {
        document.body.classList.toggle('.body_lock')
        iconMenu.classList.toggle('menu__icon_active');
        menuBody.classList.toggle('menu__body_active');
    })
}