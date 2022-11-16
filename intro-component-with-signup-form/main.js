const form = document.querySelector("form");
const fields = form.querySelectorAll("input");

fields.forEach((field) => {
  field.addEventListener("invalid", function () {
    this.classList.add("accuseInvalidness");
  });

  field.addEventListener("focusout", function () {
    if (this.validity.valid) {
      this.classList.remove("accuseInvalidness");
    }
  });
});

form.addEventListener("submit", function (event) {
  if (!this.checkValidity()) {
    event.preventDefault();
  }
});
