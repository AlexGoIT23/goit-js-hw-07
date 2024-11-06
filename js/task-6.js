const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");

btnCreate.addEventListener("click", addBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

let size = 30;

function addBoxes(el) {
  if (+input.value < 1 || +input.value > 100) {
    return;
  }
  createBoxes(+input.value);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  input.value = "";
}

function createBoxes(amount) {
  boxes.innerHTML = "";
  size = 30;
  const arr = [];

  for (let i = 0; i < amount; i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.margin = "10px";
    newBox.style.backgroundColor = getRandomHexColor();

    size += 10;
    arr.push(newBox);
  }

  boxes.append(...arr);
}
boxes.style.display = "flex";
boxes.style.flexWrap = "wrap";
boxes.style.flexDirection = "row";

controls.style.display = "flex";
controls.style.flexWrap = "wrap";
controls.style.flexDirection = "row";
controls.style.gap = "10px";

input.style.borderRadius = "5px";
input.style.border = "3px, solid, #000000";
btnCreate.style.borderRadius = "5px";
btnCreate.style.backgroundColor = "#4E75FF";
btnCreate.style.color = "#FFFFFF";
btnCreate.style.borderColor = "#4E75FF";
btnCreate.style.borderStyle = "solid";
btnCreate.style.cursor = "pointer";
btnDestroy.style.borderRadius = "5px";
btnDestroy.style.backgroundColor = "#FF4E4E";
btnDestroy.style.color = "#FFFFFF";
btnDestroy.style.borderColor = "#FF4E4E";
btnDestroy.style.borderStyle = "solid";
btnDestroy.style.cursor = "pointer";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
