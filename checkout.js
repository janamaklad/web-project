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





document.addEventListener('DOMContentLoaded', function() {
    const checkoutform = document.getElementById('checkout-form');
    const inputFields = checkoutform.querySelectorAll('input[type="text"], input[type="email"], input[type="number"]');

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



    inputFields.forEach(function(input) {
        input.addEventListener('input', function() {
            const label = this.parentElement.querySelector('label');
            const requiredSpan = label.querySelector('.required');
            if (requiredSpan) {
                label.removeChild(requiredSpan);
            }
        });
    });

  

  

    
});  
