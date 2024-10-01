document.addEventListener("DOMContentLoaded", function() {
    // Greet the user when the page loads
    alert("Welcome to Micheal Salam's Resume!");

    // Add an event listener to the link
    const link = document.getElementById("ub-link");
    link.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default action
        alert("You are about to visit the University of Belize website.");
        window.location.href = link.href; // Redirect to the link
    });
});
