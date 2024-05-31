// formHandler.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const form = document.querySelector('form');
    
    // Add a submit event listener to the form
    form.addEventListener('submit', function (event) {
        // Prevent the form from submitting the default way
        event.preventDefault();

        // Get form values
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const subject = document.querySelector('input[name="subject"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        // Validate form data
        if (validateForm(name, email, message)) {
            // Process form submission
            console.log('Form submitted successfully!');
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Subject: ${subject}`);
            console.log(`Message: ${message}`);

            // Optionally, send the data to the server or display a success message
            alert('Your message has been sent successfully!');
            form.reset();
        } else {
            alert('Please fill out all required fields.');
        }
    });
});

// Function to validate the form inputs
function validateForm(name, email, message) {
    if (name === '' || email === '' || message === '') {
        return false;
    }
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    return true;
}

// Function to validate the email address format
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
}
