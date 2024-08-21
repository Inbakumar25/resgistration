document.getElementById('registrationForm').onsubmit = function(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    // Get the message div
    const messageDiv = document.getElementById('message');
    
    // Check if all fields are filled
    if (!username || !email || !password || !firstName || !lastName || !phone || !address) {
        messageDiv.innerHTML = "Please fill out all fields.";
        messageDiv.className = "alert"; // Error alert
        messageDiv.style.display = "block"; // Show the message
    } else {
        messageDiv.innerHTML = "Registration successful! Thank you for signing up.";
        messageDiv.className = "success"; // Success alert
        messageDiv.style.display = "block"; // Show the message

        // Optionally, you can clear the form fields after successful registration
        document.getElementById('registrationForm').reset();
    }
};