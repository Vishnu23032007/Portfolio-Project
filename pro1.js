// Smooth page-to-page navigation
document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('nav ul li a');

    // When a link is clicked, the corresponding page becomes active
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = document.querySelector(e.target.getAttribute('href'));

            // Reset all pages, hide them
            pages.forEach(page => page.classList.remove('active'));

            // Show the target section
            targetSection.classList.add('active');
        });
    });

    // Automatically activate the first section
    pages[0].classList.add('active');
});