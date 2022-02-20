// Самооценка по заданию.
console.log('Score: 60 / 60');

// Переменные.
const area = document.getElementById('area');
let move = 0;
let result = '';
// let winsStats = '';
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
const btnReset = document.getElementById('btn-reset');
const turnSound = document.querySelector('.turn-sound');
const statsItem1 = document.getElementById('stats__item1');
const statsItem2 = document.getElementById('stats__item2');
const statsItem3 = document.getElementById('stats__item3');
const statsItem4 = document.getElementById('stats__item4');
const statsItem5 = document.getElementById('stats__item5');
const statsItem6 = document.getElementById('stats__item6');
const statsItem7 = document.getElementById('stats__item7');
const statsItem8 = document.getElementById('stats__item8');
const statsItem9 = document.getElementById('stats__item9');
const statsItem10 = document.getElementById('stats__item10');


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
            setWinStats(result);
            break;
        }

        else if (
            boxes[winsArr[i][0]].innerHTML == '0' && boxes[winsArr[i][1]].innerHTML == '0' && boxes[winsArr[i][2]].innerHTML == '0'
        ) {
            result = '0';
            prepareResult(result);
            setWinStats(result);
            break;
        }

        if (move === 9) {
            result = 'T';
            prepareResult(result);
            setWinStats(result);
            break;
        }
    }
}

// Функция записи результатов последних 10 партий.
function setWinStats (winner) {
    let winsStats = localStorage.getItem('gameStats');

    if (winsStats.length < 10) {
        winsStats = winner + winsStats;
    } else {
        winsStats = winsStats.slice(0, 9);
        winsStats = winner + winsStats;
    }

    localStorage.setItem('gameStats', winsStats);
}

// Функция подготовки результата.
function prepareResult (winner) {
    if (winner === 'T') {
        contentWrapper.innerHTML = `Tie!\nTurns: ${move}`;
        modalResult.style.display = 'block';
    } else {
        contentWrapper.innerHTML = `Player "${winner}" won!\nTurns: ${move}`;
        modalResult.style.display = 'block';
    }
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

// Таблица результатов последних 10 партий.

// statsItem1.innerHTML = `1. ${localStorage.getItem('gameStats').slice(0, 1)} Win`;
// statsItem2.innerHTML = `2. ${localStorage.getItem('gameStats').slice(1, 2)} Win`;
// statsItem3.innerHTML = `3. ${localStorage.getItem('gameStats').slice(2, 3)} Win`;
// statsItem4.innerHTML = `4. ${localStorage.getItem('gameStats').slice(3, 4)} Win`;
// statsItem5.innerHTML = `5. ${localStorage.getItem('gameStats').slice(4, 5)} Win`;
// statsItem6.innerHTML = `6. ${localStorage.getItem('gameStats').slice(5, 6)} Win`;
// statsItem7.innerHTML = `7. ${localStorage.getItem('gameStats').slice(6, 7)} Win`;
// statsItem8.innerHTML = `8. ${localStorage.getItem('gameStats').slice(7, 8)} Win`;
// statsItem9.innerHTML = `9. ${localStorage.getItem('gameStats').slice(8, 9)} Win`;
// statsItem10.innerHTML = `10. ${localStorage.getItem('gameStats').slice(9)} Win`;

if (localStorage.getItem('gameStats').slice(0, 1) === 'T') {
    statsItem1.innerHTML = `1. Tie`;
} else {
    statsItem1.innerHTML = `1. "${localStorage.getItem('gameStats').slice(0, 1)}" Win`;
}

if (localStorage.getItem('gameStats').slice(1, 2) === 'T') {
    statsItem2.innerHTML = `2. Tie`;
} else {
    statsItem2.innerHTML = `2. "${localStorage.getItem('gameStats').slice(1, 2)}" Win`;
}

if (localStorage.getItem('gameStats').slice(2, 3) === 'T') {
    statsItem3.innerHTML = `3. Tie`;
} else {
    statsItem3.innerHTML = `3. "${localStorage.getItem('gameStats').slice(2, 3)}" Win`;
}

if (localStorage.getItem('gameStats').slice(3, 4) === 'T') {
    statsItem4.innerHTML = `4. Tie`;
} else {
    statsItem4.innerHTML = `4. "${localStorage.getItem('gameStats').slice(3, 4)}" Win`;
}

if (localStorage.getItem('gameStats').slice(4, 5) === 'T') {
    statsItem5.innerHTML = `5. Tie`;
} else {
    statsItem5.innerHTML = `5. "${localStorage.getItem('gameStats').slice(4, 5)}" Win`;
}

if (localStorage.getItem('gameStats').slice(5, 6) === 'T') {
    statsItem6.innerHTML = `6. Tie`;
} else {
    statsItem6.innerHTML = `6. "${localStorage.getItem('gameStats').slice(5, 6)}" Win`;
}

if (localStorage.getItem('gameStats').slice(6, 7) === 'T') {
    statsItem7.innerHTML = `7. Tie`;
} else {
    statsItem7.innerHTML = `7. "${localStorage.getItem('gameStats').slice(6, 7)}" Win`;
}

if (localStorage.getItem('gameStats').slice(7, 8) === 'T') {
    statsItem8.innerHTML = `8. Tie`;
} else {
    statsItem8.innerHTML = `8. "${localStorage.getItem('gameStats').slice(7, 8)}" Win`;
}

if (localStorage.getItem('gameStats').slice(8, 9) === 'T') {
    statsItem9.innerHTML = `9. Tie`;
} else {
    statsItem9.innerHTML = `9. "${localStorage.getItem('gameStats').slice(8, 9)}" Win`;
}

if (localStorage.getItem('gameStats').slice(9) === 'T') {
    statsItem10.innerHTML = `10. Tie`;
} else {
    statsItem10.innerHTML = `10. "${localStorage.getItem('gameStats').slice(9)}" Win`;
}

function localStoragesInfo() {
    console.log(localStorage.getItem('gameStats').length);
    console.log(localStorage.getItem('gameStats'));
}
window.addEventListener('load', localStoragesInfo);