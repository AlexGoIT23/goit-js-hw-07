const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output");

input.addEventListener("input", addName);
input.style.borderRadius = "5px";
input.style.borderColor = "#4E75FF";
input.style.width = "300px";
input.style.border = "3px, solid, #000000";

function addName(ev) {
  if (ev.target.value.includes(" ") || ev.target.value.length === 0) {
    return (title.textContent = "Anonymous");
  } else return (title.textContent = `${ev.target.value}`);
}
