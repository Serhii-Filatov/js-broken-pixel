const board = document.querySelector('#board');
const colors = [
  '#e74c3c',
  '#8e44ad',
  '#3498db',
  '#e67e22',
  '#2ecc71',
  '#1abc9c',
];
const SQUARES_NUMBER = 440;

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor(element);
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000000';
}
function getRandomColor(element) {
  return colors[Math.floor(Math.random() * colors.length)];
}
