const bodyColor = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const spanChangeColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", createColor);

function createColor(ev) {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanChangeColor.textContent = `${getRandomHexColor()}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
