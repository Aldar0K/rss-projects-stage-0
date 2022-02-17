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


// Прослушка.
area.addEventListener('click', e => {
    if (e.target.className = 'box') {
        // console.log(e.target);
        move % 2 == 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = '0';
        move++;
        check();
    }
})

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
            result = 'крестики';
            prepareResult(result);
        } else if (
            boxes[winsArr[i][0]].innerHTML == '0' && boxes[winsArr[i][1]].innerHTML == '0' && boxes[winsArr[i][2]].innerHTML == '0'
        ) {
            result = 'нолики';
            prepareResult(result);
        }
    }
}

// Функция подготовки результата.
function prepareResult (winner) {
    // console.log(`Победили ${winner}!`);
    contentWrapper.innerHTML = `Победили ${winner}!`;
    modalResult.style.display = 'block';
}

// Функция перезапуска страницы. 
function reloadPage () {
    modalResult.style.display = 'none';
    location.reload();
}

overlay.addEventListener('click', reloadPage);
btnClose.addEventListener('click', reloadPage);