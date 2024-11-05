const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes')

btnCreate.addEventListener('click', addBoxes)
btnDestroy.addEventListener('click', destroyBoxes)

let size = 30;

function addBoxes(el) {
  if (+input.value < 1 || +input.value > 100) {
  return
  }
  createBoxes(+input.value)
}

function destroyBoxes() {
  boxes.innerHTML = '';
  input.value = ''
}

function createBoxes(amount) {
  boxes.innerHTML = '';
  size = 30;
  const arr = [];

  for (let i = 0; i < amount; i++) {
  const newBox = document.createElement('div');
  newBox.style.width = `${size}px`;
  newBox.style.height = `${size}px`;
  newBox.style.margin = '10px';
  newBox.style.backgroundColor = getRandomHexColor()

  size += 10;
  arr.push(newBox)
  }
  
  boxes.append(...arr)
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
