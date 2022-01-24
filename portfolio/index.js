// Вывод в консоль самооценки по заданию.
console.log('Score: 110 / 110');
<<<<<<< portfolio

// Начало меню бургер.
// Создаем переменные с классами, которые нужно менять.
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const menuLinks = document.querySelectorAll('.menu__link');
// Проверяем наличие необходимого класса.
if (iconMenu) {
// Создаем функцию, которая будем срабатывать при клике на иконку бургера, а при повторном нажатие будет возвращать исходное состояние.
    iconMenu.addEventListener('click', () => {
// Во-первых, функция будет делать блок body неактивным.
        document.body.classList.toggle('body_lock');
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
// Конец меню бургер.