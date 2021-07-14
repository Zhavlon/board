const board = document.querySelector('#board');
const SQUARES_NUMBER = 891;
const colors = ['#d61f1f', '#283ae4', '#00ff8f', '#fbff00', '#dd2b8f', '#ffab31', '#16e6db', '#ca42f5'];

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
}