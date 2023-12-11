
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var firstNameInput = document.getElementById('firstName');
    var lastNameInput = document.getElementById('lastName');
    var emailInput = document.getElementById('email');
    var firstNameError = document.getElementById('firstNameError');

    // Reset error messages
    firstNameError.textContent = '';

    // Check for uppercase letter and length in firstName
    if (!/[A-Z]/.test(firstNameInput.value) || firstNameInput.value.length < 3) {
        firstNameError.textContent = 'First name must contain an uppercase letter and be at least 3 characters long.';
        event.preventDefault(); // Prevent form submission
    }

    // Check if all fields are filled
    if (!firstNameInput.value || !lastNameInput.value || !emailInput.value) {
        alert('All fields are required!');
        event.preventDefault(); // Prevent form submission
    }
});

function clearForm(){
    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('email').value = "";
}


