let myBtn = document.querySelector(".my-btn");
let overlay = document.querySelector(".overlay");
let container = document.querySelector(".container");

myBtn.addEventListener("click", function () {
  overlay.classList.toggle("open");
  document.querySelectorAll(".overlay-list__item").forEach(item => {
    item.classList.toggle("open");
  });
});

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("close")) {
    overlay.classList.toggle("open");
    document.querySelectorAll(".overlay-list__item").forEach(item => {
      item.classList.toggle("open");
    });
  }
});

