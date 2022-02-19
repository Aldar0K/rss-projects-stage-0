// Самооценка по заданию.
console.log('Score: 60 / 60');

// Переменные.
const area = document.getElementById('area');
let move = 0;
let result = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
const btnReset = document.getElementById('btn-reset');
const turnSound = document.querySelector('.turn-sound');


// Отслеживание поля, по которому кликнул пользователь.
area.addEventListener('click', e => {
    if (e.target.className = 'box') {
        if (e.target.innerHTML != 'X' && e.target.innerHTML != '0') {
            move % 2 == 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
            move++;
            check();
            playTurnSound();
        }
    }
})

// функции для проигрывания звука действий.
function playTurnSound() {
    turnSound.volume = 0.05;
    turnSound.play();
}

// Функция проверки.
function check () {
    // const boxes = document.querySelectorAll('.box');
    const boxes = document.getElementsByClassName('box');
    // console.log(boxes);

    const winsArr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winsArr.length; i++) {
        if (
            boxes[winsArr[i][0]].innerHTML == 'X' && boxes[winsArr[i][1]].innerHTML == 'X' && boxes[winsArr[i][2]].innerHTML == 'X'
        ) {
            result = 'X';
            prepareResult(result);
            break;
        } else if (
            boxes[winsArr[i][0]].innerHTML == '0' && boxes[winsArr[i][1]].innerHTML == '0' && boxes[winsArr[i][2]].innerHTML == '0'
        ) {
            result = '0';
            prepareResult(result);
            break;
        }

        if (move === 9) {
            contentWrapper.innerHTML = `Tie!\nTurns: ${move}`;
            modalResult.style.display = 'block';
        }
    }
}

// Функция подготовки результата.
function prepareResult (winner) {
    // console.log(`Победили ${winner}!`);
    contentWrapper.innerHTML = `Player "${winner}" won!\nTurns: ${move}`;
    modalResult.style.display = 'block';
}

// Функция перезапуска страницы. 
function reloadPage () {
    modalResult.style.display = 'none';
    location.reload();
}


// Перезагрузка страницы при нажатии на btn-reset, btn-close или вне всплывающего окна.
overlay.addEventListener('click', reloadPage);
btnClose.addEventListener('click', reloadPage);
btnReset.addEventListener('click', reloadPage);

// Сохранение результатов последних 10 партий.