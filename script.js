document.addEventListener('DOMContentLoaded', function() {
    // Dynamically set the current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});

// Optional: You could add more complex JS here later, such as
// a function to toggle detailed view of a job or a smooth scroll
// to different sections when a navigation link (if added) is clicked.
