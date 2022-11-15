const form = document.querySelector("form");
const radios = document.querySelectorAll(".rating .circle");

form.addEventListener("submit", function (event) {
  if (!this.checkValidity()) {
    event.preventDefault();
    radios.forEach((circle) => circle.classList.add("accuseInvalidness"));
    document.querySelector(".message").style.display = "inline-block";
  } /* else {
    localStorage.setItem("value", event.target.rating.value);
  } */
});

radios.forEach((circle) =>
  circle.addEventListener("click", function () {
    radios.forEach((circle) => circle.classList.remove("accuseInvalidness"));
    document.querySelector(".message").style.display = "none";
  })
);
