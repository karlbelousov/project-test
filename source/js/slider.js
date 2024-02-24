const slider = document.querySelector('.slider__inner');
const slides = slider.querySelectorAll('.slide');
const sliderLine = slider.querySelector('.slider__line');
const sliderButtonNext = document.querySelector('.slider__next');
const sliderButtonPrev = document.querySelector('.slider__prev');
const sliderDots = document.querySelectorAll('.slider__dot');
let sliderCount = 0;

function nextSlideClick() {
  sliderCount++;
  if (sliderCount >= slides.length) {
    sliderCount = 0;
  }
  rollSlider();
  thisSlide(sliderCount);
}

function prevSlideClick() {
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = slides.length - 1;
  }
  rollSlider();
  thisSlide(sliderCount);
}

function nextSlide() {
  sliderCount++;
  if (sliderCount >= slides.length) {
    sliderCount = 0;
  }
  rollSlider();
  thisSlide(sliderCount);
}

function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * slider.offsetWidth}px)`;
}

function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove('active-dot'));
  sliderDots[index].classList.add('active-dot');
}

function debounce (callback, timeoutDelay) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

sliderButtonPrev.addEventListener('click', prevSlideClick);
sliderButtonNext.addEventListener('click', nextSlideClick);
sliderDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});

setInterval(nextSlide, 2000);
