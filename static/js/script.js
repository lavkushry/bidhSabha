document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const confirmation = document.getElementById('confirmation');
    const error = document.getElementById('error');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const applicationId = document.getElementById('applicationId').value;
        const dateOfBirth = document.getElementById('dateOfBirth').value;
        
        // Create FormData object
        const formData = new FormData();
        formData.append('applicationId', applicationId);
        formData.append('dateOfBirth', dateOfBirth);
        
        // Send data to backend
        fetch('/login', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                // Show confirmation
                form.reset();
                hideError();
                showConfirmation();
            } else {
                // Show error
                hideConfirmation();
                showError();
            }
        })
        .catch(error => {
            console.error('Error:', error);
            hideConfirmation();
            showError();
        });
    });
    
    // Show confirmation message
    function showConfirmation() {
        confirmation.classList.remove('hidden');
        setTimeout(() => {
            confirmation.classList.add('hidden');
        }, 3000);
    }
    
    // Hide confirmation message
    function hideConfirmation() {
        confirmation.classList.add('hidden');
    }
    
    // Show error message
    function showError() {
        error.classList.remove('hidden');
        setTimeout(() => {
            error.classList.add('hidden');
        }, 3000);
    }
    
    // Hide error message
    function hideError() {
        error.classList.add('hidden');
    }
});