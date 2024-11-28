// JavaScript for Hamburger Menu
console.log('Menu toggle script loaded');  // To check if script runs

// Get elements
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.navbar a');

// Toggle the navigation menu when the hamburger icon is clicked
menuToggle.addEventListener('click', () => {
    console.log('Menu toggle script loaded hamburger icon');  // To check if script runs
    navbar.classList.toggle('active');  // Toggle 'active' class for mobile menu
    navbar.classList.toggle('open');    // Toggle 'open' class (if required)
});

// Close the menu when a link is clicked (on mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Menu link clicked on mobile');  // To check if script runs

        if (window.innerWidth <= 768) {  // Only close on mobile devices
            console.log('Closing menu on mobile');  // To check if script runs
            navbar.classList.remove('active');
            navbar.classList.remove('open');
        }
    });
});
