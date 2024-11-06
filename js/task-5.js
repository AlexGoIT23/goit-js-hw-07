const bodyColor = document.querySelector("body");
const btnChangeColor = document.querySelector(".change-color");
const spanChangeColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", createColor);

function createColor(ev) {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanChangeColor.textContent = `${getRandomHexColor()}`;
  spanChangeColor.style.color = "#FFFFFF";
  bodyColor.style.color = "#FFFFFF";
}

btnChangeColor.style.backgroundColor = "#4E75FF";
btnChangeColor.style.color = "#FFFFFF";
btnChangeColor.style.borderColor = "#4E75FF";
btnChangeColor.style.borderStyle = "solid";
btnChangeColor.style.borderRadius = "5px";
btnChangeColor.style.cursor = "pointer";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
