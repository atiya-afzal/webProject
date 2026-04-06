const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

// Toggle menu on hamburger click
hamburger.addEventListener("click", (e) => {
    navLinks.classList.toggle("active");
    e.stopPropagation(); // Prevent click from bubbling to document
});

// Close menu if clicking outside
document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove("active");
    }
});