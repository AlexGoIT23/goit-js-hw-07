const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", checkForm);

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
