document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        console.log('Username:', username);
        console.log('Password:', password);
        alert('login successful!');
        registrationForm.reset(); 
    });
}); 
