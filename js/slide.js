let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

let slideIndex = 1;
showSlides(slideIndex);

let timer = setInterval(() => {
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  showSlides(slideIndex);
}, 2500);

let timerDelay;
let delay;
let isDelaying = false;

const autoSlide = function () {
  isDelaying = true;
  delay = 5;
  clearInterval(timer);
  clearInterval(timerDelay);

  timerDelay = setInterval(() => {
    --delay;
    if (delay == 0) {
      isDelaying = false;
      clearInterval(timerDelay);
      setInterval(() => {
        slideIndex++;
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
        if (slideIndex < 1) {
          slideIndex = slides.length;
        }
        showSlides(slideIndex);
      }, 2500);
    }
  }, 1000);
};

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
