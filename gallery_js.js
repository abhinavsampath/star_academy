const carousel = document.querySelector('.carousel');
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

let currentIndex = 0;

// Slide width is the width of one item (100% of the carousel container)
const slideWidth = carousel.offsetWidth;

// Slide to the previous item
leftBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? carousel.children.length - 1 : currentIndex - 1;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

// Slide to the next item
rightBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === carousel.children.length - 1) ? 0 : currentIndex + 1;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

// Adjust the slide width on window resize
window.addEventListener('resize', () => {
    carousel.style.transform = `translateX(-${currentIndex * carousel.offsetWidth}px)`;
});

