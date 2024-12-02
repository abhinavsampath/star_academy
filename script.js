// JavaScript for Hamburger Menu
console.log('Menu toggle script loaded');  // To check if script runs

document.getElementById('menu-toggle').addEventListener('click', function () {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('open');
});
// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Toggle the navigation menu when the hamburger icon is clicked
menuToggle.addEventListener('click', () => {
    console.log('Menu toggle script loaded hamburger icon');  // To check if script runs

    navbar.classList.toggle('active');
});

// Close the menu when a link is clicked (on mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Menu toggle script loaded on mobile');  // To check if script runs

        if (window.innerWidth <= 768) {  // Only close on mobile devices
            console.log('Menu toggle script loaded if 768');  // To check if script runs
            navbar.classList.remove('active');
            navbar.classList.remove('open');
        }
    });
});


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

