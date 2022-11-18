const body = document.querySelector("body");
const cardShare = document.querySelector(".card-share");
const iconShare = document.querySelector(".info-share");

body.addEventListener("click", function (event) {
  const target = event.target.className;
  if (target === "info-share" || target === "card-share active") {
    iconShare.classList.add("active");
    cardShare.classList.add("active");
  } else {
    iconShare.classList.remove("active");
    cardShare.classList.remove("active");
  }
});
