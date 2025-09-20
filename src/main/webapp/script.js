document.addEventListener('DOMContentLoaded', () => {
    const detailsForm = document.getElementById('detailsForm');
    const displayName = document.getElementById('displayName');
    const displayEmail = document.getElementById('displayEmail');
    const displayMessage = document.getElementById('displayMessage');

    detailsForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Get values from form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display values in the display area
        displayName.textContent = name;
        displayEmail.textContent = email;
        displayMessage.textContent = message;

        // Optional: Clear the form after submission
        detailsForm.reset();
    });
});