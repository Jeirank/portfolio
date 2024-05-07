// Get references to navbar and content elements
const navbar = document.getElementById('navbar');
const content = document.getElementById('content');

// Calculate the height of the navbar
const navbarHeight = navbar.offsetHeight;

// Event listener for scroll event
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

    // Check if the scroll position is below the navbar
    if (scrollPosition >= navbarHeight) {
        // Add blur effect to content when navbar overlaps it
        content.classList.add('blur-text');
    } else {
        // Remove blur effect when navbar is above the content
        content.classList.remove('blur-text');
    }
});
let prevScrollPos = window.pageYOffset; // Initial scroll position
const navbar = document.getElementById("navbar");

window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        navbar.style.top = "0";
    } else {
        // Scrolling down
        navbar.style.top = `-${navbar.offsetHeight}px`; // Hide navbar off the top
    }

    prevScrollPos = currentScrollPos;
}