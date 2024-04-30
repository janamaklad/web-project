document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const inputFields = registrationForm.querySelectorAll('input[type="text"], input[type="email"], input[type="password"]');

    inputFields.forEach(function(input) {
        input.addEventListener('input', function() {
            const label = this.parentElement.querySelector('label');
            const requiredSpan = label.querySelector('.required');
            if (requiredSpan) {
                label.removeChild(requiredSpan);
            }
        });
    }); 

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const isValid = validateForm(fname, lname, username, email, password);

        if (isValid) {
            alert('Registration successful!');
            registrationForm.reset(); 
        }
    });

    function validateForm(fname, lname, username, email, password) {
        let isValid = true;

        if (fname.trim() === '') {
            showError('fname', 'First name is required');
            isValid = false;
        } else {
            removeError('fname');
        }

        if (lname.trim() === '') {
            showError('lname', 'Last name is required');
            isValid = false;
        } else {
            removeError('lname');
        }

        if (username.trim() === '') {
            showError('username', 'Username is required');
            isValid = false;
        } else {
            removeError('username');
        }

        if (email.trim() === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else {
            removeError('email');
        }

        if (password.trim() === '') {
            showError('password', 'Password is required');
            isValid = false;
        } else {
            removeError('password');
        }

        return isValid;
    }

    function showError(fieldId, errorMessage) {
        const errorSpan = document.getElementById(fieldId + '-error');
        errorSpan.textContent = errorMessage;
    }

    function removeError(fieldId) {
        const errorSpan = document.getElementById(fieldId + '-error');
        errorSpan.textContent = '';
    }
});
