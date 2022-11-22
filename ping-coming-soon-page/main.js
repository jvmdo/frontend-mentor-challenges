const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  const input = this.querySelector("input");
  const error = this.querySelector(".input-error");
  const invalidInput = !this.checkValidity();

  if (invalidInput) {
    event.preventDefault();
    input.style.border = "2px solid hsl(354, 100%, 66%)";
    displayErrorMessage(input, error);
  } else {
    input.removeAttribute("style");
  }
});

function displayErrorMessage(field, message) {
  message.classList.add("active");

  if (field.validity.valueMissing) {
    message.textContent = "Whoops! It looks like you forgot to add your email";
  } else if (field.validity.typeMismatch) {
    message.textContent = "Please provide a valid email address";
  } else {
    message.textContent = "";
    message.classList.remove("active");
  }
}
