/* 
  Menu toggle button behavior
*/
const navBtn = document.querySelector(".nav-btn");
const navBar = document.querySelector(".navbar");
let btnImg = "assets/images/icon-menu.svg";

navBtn.addEventListener("click", function () {
  navBar.classList.toggle("active");

  if (navBar.className.includes("active")) {
    btnImg = btnImg.replace("menu", "menu-close");
  } else {
    btnImg = btnImg.replace("-close", "");
  }

  navBtn.firstElementChild.src = btnImg;
});

/* 
  Auto close the navigation menu when the screen gets wider then 768px
*/
const mediaQuery = window.matchMedia("(min-width: 768px)");

function handleTabletChange(event) {
  // Check if the media query is true
  if (event.matches) {
    navBar.classList.remove("active");
    btnImg = btnImg.replace("-close", "");
    navBtn.firstElementChild.src = btnImg;
  }
}

mediaQuery.addEventListener("change", handleTabletChange);

// Initial check necessary since the event is not triggered on page load
handleTabletChange(mediaQuery);
