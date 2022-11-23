const notifications = document.querySelectorAll(".notification");
const number = document.querySelector(".number");
const markBtn = document.querySelector("button");

function setUnreadNumber() {
  let counter = 0;
  notifications.forEach(
    (notification) => /false/.test(notification.dataset.read) && counter++
  );
  number.textContent = number.dataset.value = counter;
}

// Mark as read clicking on notification
notifications.forEach((notification) => {
  notification.addEventListener("click", function () {
    this.dataset.read = "true";
    setUnreadNumber();
  });
});

// Mark all as read clicking on button
markBtn.addEventListener("click", function () {
  notifications.forEach((notification) => {
    notification.dataset.read = "true";
  });
  setUnreadNumber();
});

setUnreadNumber();
