const form = document.querySelector(".login-form");
const button = document.querySelector("button");
const input = document.querySelector("input");
const inputTwo = document.querySelector('input[type="password"]');

console.log(form);

form.addEventListener("submit", checkForm);

form.style.display = "flex";
form.style.flexWrap = "wrap";
form.style.flexDirection = "column";
form.style.gap = "10px";
input.style.borderRadius = "5px";
input.style.border = "2px, solid, #4E75FF";
inputTwo.style.borderRadius = "5px";
inputTwo.style.border = "2px, solid, #4E75FF";
button.style.backgroundColor = "#4E75FF";
button.style.color = "#FFFFFF";
button.style.borderColor = "#4E75FF";
button.style.borderStyle = "solid";
button.style.borderRadius = "5px";
button.style.width = "60px";
button.style.height = "26px";
button.style.cursor = "pointer";

function checkForm(ev) {
  ev.preventDefault();
  const elements = ev.target.elements;

  if (elements.email.value === "" || elements.password.value === "") {
    return alert("All form fields must be filled in");
  }

  if (elements.password.value.includes(" ")) {
    return alert("Password cannot contain space");
  }
  const allValue = {
    email: elements.email.value,
    password: elements.password.value,
  };
  console.log(allValue);
  ev.target.reset();
}
