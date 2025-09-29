document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const contactLink = document.querySelector('nav a.contact');

    // Highlight nav links on click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Display alert when contact link is clicked, or warn if not found
    if (contactLink) {
        contactLink.addEventListener('click', function() {
            alert('Contact link clicked!');
        });
    } else {
        // This else branch provides feedback if the contact link isn't found
        console.warn('Contact link not found in navigation.');
    }
});
