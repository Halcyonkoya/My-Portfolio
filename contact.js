// Contact form validation

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    form.addEventListener("submit", function (e) {
        let valid = true;

        // Reset errors
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        // Name validation
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Please enter your name.";
            valid = false;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Please enter your email.";
            valid = false;
        } else if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        }

        // Message validation
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Please enter your message.";
            valid = false;
        }

        if (!valid) {
            e.preventDefault();
        } else {
            alert("Thank you for contacting me!");
            // Optionally, you can clear the form here
            // form.reset();
            // e.preventDefault(); // Remove this if you want to actually submit the form
        }
    });

});
// Display dynamic time and date

function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', year: 'numeric', month: 'long', 
        day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' 
    };
    document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
}

setInterval(updateDateTime, 1000);
window.onload = updateDateTime;