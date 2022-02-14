// Функция, генерирующая рандомное целое число в диапазоне.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются.
}


// Ввод переменных.
const mainContent = document.querySelector('.main__content');
const mainButton = document.querySelector('.main__button');
const audio = document.querySelector('audio');


// Ассинхронная функция, берущая рандомную цитату из файла data.json
async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    // console.log(data[getRandomIntInclusive(0, 99)].joke);

    mainContent.textContent = data[getRandomIntInclusive(0, 99)].joke;
}

getQuotes();


// Функция для проигрывания звука.
function playSound() {
    audio.play();
}


// Добавляем кнопке слушатели.
mainButton.addEventListener('click', getQuotes);
mainButton.addEventListener('click', playSound);
