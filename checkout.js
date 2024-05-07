document.addEventListener('DOMContentLoaded', function() {
    // Add focus and blur event listeners to form inputs
    document.querySelectorAll('.form-group input').forEach(function(input){
        input.addEventListener('focus',function(){
            this.parentNode.classList.add('active');
        });

        input.addEventListener('blur',function(){
            if(this.value===''){
                this.parentNode.classList.remove('active');
            }
        });
    });

    // Add event listeners to input fields for showing and removing error messages
    const checkoutForm = document.getElementById('checkout-form');
    const inputFields = checkoutForm.querySelectorAll('input[type="text"], input[type="email"], input[type="number"]');
    
    inputFields.forEach(function(input) {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('active');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentNode.classList.remove('active');
            }
        });

        input.addEventListener('input', function() {
            const label = this.parentNode.querySelector('label');
            if (this.value !== '') {
                label.style.display = 'none';
            } else {
                label.style.display = 'block';
            }
        });
    });

    // Remove error messages when input values change
    inputFields.forEach(function(input) {
        input.addEventListener('input', function() {
            const label = this.parentElement.querySelector('label');
            const errorSpan = label.nextElementSibling;
            if (errorSpan) {
                errorSpan.textContent = '';
            }
        });
    });

    // Handle form submission
    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            // Perform further actions if form is valid
            // For example: Submit form data to server
            console.log('Form is valid');
        }
    });

    // Function to validate form inputs
    function validateForm() {
        let isValid = true;
        // Validate each input field
        const fname = document.getElementById('fname').value;
        if (fname.trim() === '') {
            showError('fname', 'First name is required');
            isValid = false;
        } else {
            removeError('fname');
        }

        const lname = document.getElementById('lname').value;
        if (lname.trim() === '') {
            showError('lname', 'Last name is required');
            isValid = false;
        } else {
            removeError('lname');
        }

        const email = document.getElementById('email').value;
        if (email.trim() === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            } else {
                removeError('email');
            }
        }

        const address = document.getElementById('address').value;
        if (address.trim() === '') {
            showError('address', 'Address is required');
            isValid = false;
        } else {
            removeError('address');
        }

        // Add validation logic for other input fields
        // For example:
         const phone = document.getElementById('phone').value;
         if (phone.trim() === '') {
             showError('phone', 'Phone number is required');
             isValid = false;
         } else {
             removeError('phone');
         }

        return isValid;
    }

    // Function to show error message for an input field
    function showError(fieldId, errorMessage) {
        const errorSpan = document.getElementById(fieldId + '-error');
        errorSpan.textContent = errorMessage;
    }

    // Function to remove error message for an input field
    function removeError(fieldId) {
        const errorSpan = document.getElementById(fieldId + '-error');
        errorSpan.textContent = '';
    }
});
