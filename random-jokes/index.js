function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; // Максимум и минимум включаются.
}

const mainContent = document.querySelector('.main__content');
const mainButton = document.querySelector('.main__button');
const audio = document.querySelector('audio');

async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    // console.log(data[getRandomIntInclusive(0, 99)].joke);

    mainContent.textContent = data[getRandomIntInclusive(0, 99)].joke;
}

getQuotes();

function playSound() {
    audio.play();
    console.log('sound!');
}

mainButton.addEventListener('click', getQuotes);
mainButton.addEventListener('click', playSound);
