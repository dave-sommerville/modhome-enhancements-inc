'use strict';
function select(selector, scope = document) {
  return scope.querySelector(selector);
}
function selectAll(selector, scope = document) {
  return scope.querySelectorAll(selector);
}
function listen(event, element, callback) {
  return element.addEventListener(event, callback);
}


const images = [
  './src/img/reno1.jpg',
  './src/img/reno2.jpg',
  './src/img/reno3.jpg',
  './src/img/reno4.jpg',
  './src/img/reno5.jpg',
  './src/img/reno6.jpg',
  './src/img/reno7.jpg',
  './src/img/reno8.jpg',
  './src/img/reno9.jpg'
];

let currentIndex = 0;

const galleryImage = select('.gallery-image');
const prevButton = select('.prev-btn');
const nextButton = select('.next-btn');


function updateImage() {
  galleryImage.src = images[currentIndex];
}

listen('click', prevButton, () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

listen('click', nextButton, () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

const wrapper = select('.slider-wrapper');
const buttons = document.querySelectorAll('.nav-btns button');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const slideIndex = parseInt(btn.dataset.slide);
    wrapper.style.transform = `translateX(-${slideIndex * 100}vw)`;
  });
});
