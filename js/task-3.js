const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output");

input.addEventListener("input", addName);

function addName(ev) {
  if (ev.target.value.includes(" ") || ev.target.value.length === 0) {
    return (title.textContent = "Anonymous");
  } else return (title.textContent = `${ev.target.value}`);
}
