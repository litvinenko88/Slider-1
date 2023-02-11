let sliderLine = document.querySelector(".slider-line");
let position = 0;
let width = 0;

document.querySelector(".back").addEventListener("click", function () {
  position -= 250;
  if (position < 0) {
    position = 1500;
  }
  sliderLine.style.left = -position + "px";
});

document.querySelector(".forward").addEventListener("click", function () {
  position += 250;
  if (position > 1500) {
    position = 0;
  }
  sliderLine.style.left = -position + "px";
});
