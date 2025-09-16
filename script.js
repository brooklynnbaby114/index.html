document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const contactLink = document.querySelector('nav a.contact');

    // Highlight nav links on click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active')); // Remove active class from all
            link.classList.add('active'); // Add active class to the clicked link
        });
    });

    // Display alert when contact link is clicked
    if (contactLink) {
        contactLink.addEventListener('click', function() {
            alert('Contact link clicked!');
        });
    }
});