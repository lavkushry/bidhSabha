// Custom JavaScript for BLAS Website - Based on Original Implementation

$(document).ready(function() {
    
    // Disable autocomplete on all form elements
    $('input').attr('autocomplete', 'off');
    $('select').attr('autocomplete', 'off');
    $('textarea').attr('autocomplete', 'off');
    
    // Setup CSRF token for AJAX requests
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    
    // Initialize date picker
    $('.date_view').datepicker({
        yearRange: "1970:+nn",
        changeMonth: true,
        changeYear: true,
        showButtonPanel: true,
        dateFormat: 'dd-mm-yy',
        maxDate: 0, // Cannot select future dates
        showAnim: 'slideDown'
    });
    
    // Form validation rules
    $('#downloadForm').validate({
        rules: {
            application_id: {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            mobile_number: {
                required: true,
                digits: true,
                minlength: 10,
                maxlength: 10
            },
            dob: {
                required: true
            }
        },
        messages: {
            application_id: {
                required: "Application ID is required",
                minlength: "Application ID must be at least 5 characters",
                maxlength: "Application ID cannot exceed 20 characters"
            },
            mobile_number: {
                required: "Mobile Number is required",
                digits: "Please enter only digits",
                minlength: "Mobile number must be 10 digits",
                maxlength: "Mobile number must be 10 digits"
            },
            dob: {
                required: "Date of Birth is required"
            }
        },
        errorClass: "error",
        validClass: "valid",
        errorPlacement: function(error, element) {
            error.insertAfter(element.next('small'));
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
        }
    });
    
    // Handle form submission
    $('#downloadForm').on('submit', function(e) {
        e.preventDefault();
        
        if ($(this).valid()) {
            // Show loading
            showPageLoader();
            $(this).addClass('form-submitting');
            
            // Get form data
            var formData = new FormData(this);
            
            // Submit form via AJAX
            $.ajax({
                url: '/download-admit-card',
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                timeout: 10000, // 10 second timeout
                success: function(response) {
                    hidePageLoader();
                    $('#downloadForm').removeClass('form-submitting');
                    
                    if (response.status === 'success') {
                        // Show success message and redirect
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: response.message,
                            confirmButtonText: 'OK',
                            confirmButtonColor: '#28a745',
                            timer: 3000,
                            timerProgressBar: true
                        }).then(function() {
                            // Redirect to BLAS website
                            window.location.href = response.redirect_url;
                        });
                        
                        // Also redirect after 3 seconds even if user doesn't click OK
                        setTimeout(function() {
                            window.location.href = response.redirect_url;
                        }, 3000);
                        
                    } else {
                        showErrorMessage(response.message || 'Operation failed. Please check your credentials and try again.');
                    }
                },
                error: function(xhr, status, error) {
                    hidePageLoader();
                    $('#downloadForm').removeClass('form-submitting');
                    
                    var errorMessage = 'Something went wrong. Please try again.';
                    
                    if (xhr.status === 422) {
                        var errorData = xhr.responseJSON;
                        if (errorData && errorData.errors) {
                            errorMessage = ajaxErrorList(errorData.errors);
                        } else if (errorData && errorData.message) {
                            errorMessage = errorData.message;
                        }
                    } else if (xhr.status === 403) {
                        errorMessage = xhr.responseJSON ? xhr.responseJSON.message : 'Access denied. Please refresh the page and try again.';
                    } else if (status === 'timeout') {
                        errorMessage = 'Request timeout. Please check your connection and try again.';
                    }
                    
                    showErrorMessage(errorMessage);
                }
            });
        }
    });
    
    
    // Error handling functions
    function ajaxErrorMsg(data) {
        var msg = 'Something missing.... try again';
        if (data.status == 422) {
            var errorData = data.responseJSON.errors;
            console.log(errorData);
            msg = ajaxErrorList(errorData);
        } else if (data.status == 403) {
            msg = data.responseJSON.msg;
        }
        return msg;
    }
    
    function ajaxErrorList(errorData) {
        var output = '';
        output += '<ul style="font-size: 1.2rem">';
        $.each(errorData, function (index, i) {
            output += '<li>' + i + '</li>';
        });
        output += '</ul>';
        return output;
    }
    
    // Page loader functions
    function showPageLoader() {
        $('.pageloader').fadeIn(300);
    }
    
    function hidePageLoader() {
        $('.pageloader').fadeOut(300);
    }
    
    // Error message function
    function showErrorMessage(message) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            html: message,
            confirmButtonText: 'Try Again',
            confirmButtonColor: '#dc3545'
        });
    }
    
    // Mobile number validation and formatting
    $('#mobile_number').on('input', function() {
        var value = $(this).val();
        // Remove non-numeric characters
        var cleaned = value.replace(/[^\d]/g, '');
        
        // Limit to 10 digits
        if (cleaned.length > 10) {
            cleaned = cleaned.substring(0, 10);
        }
        
        if (cleaned !== value) {
            $(this).val(cleaned);
        }
        
        // Real-time validation feedback
        if (cleaned.length === 10) {
            $(this).removeClass('error').addClass('valid');
            $(this).next('small').after().remove();
        } else if (cleaned.length > 0) {
            $(this).removeClass('valid').addClass('error');
        }
    });
    
    // Application ID validation
    $('#application_id').on('input', function() {
        var value = $(this).val().trim();
        
        // Remove special characters except letters, numbers, and common separators
        var cleaned = value.replace(/[^a-zA-Z0-9\-_]/g, '');
        
        if (cleaned !== value) {
            $(this).val(cleaned);
        }
        
        // Real-time validation feedback
        if (cleaned.length >= 5) {
            $(this).removeClass('error').addClass('valid');
        } else if (cleaned.length > 0) {
            $(this).removeClass('valid').addClass('error');
        }
    });
    
    // Date of birth field - prevent manual typing
    $('#dob').on('keydown', function(e) {
        // Allow only tab, escape, enter, delete, backspace
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13]) !== -1 ||
            // Allow Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
            (e.keyCode === 65 && e.ctrlKey === true) ||
            (e.keyCode === 67 && e.ctrlKey === true) ||
            (e.keyCode === 86 && e.ctrlKey === true) ||
            (e.keyCode === 88 && e.ctrlKey === true)) {
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
    
    // Focus management
    $('#application_id').focus();
    
    // Add ARIA labels for better accessibility
    $('#application_id').attr('aria-label', 'Enter your Application ID');
    $('#mobile_number').attr('aria-label', 'Enter your 10-digit Mobile Number');
    $('#dob').attr('aria-label', 'Select your Date of Birth');
    
    // Handle escape key to close any open elements
    $(document).on('keydown', function(e) {
        if (e.keyCode === 27) { // Escape key
            $('.pageloader').fadeOut(300);
            $('#downloadForm').removeClass('form-submitting');
        }
    });
    
    // Handle window beforeunload for unsaved changes
    var formChanged = false;
    $('#downloadForm input').on('change input', function() {
        formChanged = true;
    });
    
    $('#downloadForm').on('submit', function() {
        formChanged = false;
    });
    
    $(window).on('beforeunload', function(e) {
        if (formChanged) {
            var confirmationMessage = 'You have unsaved changes. Are you sure you want to leave?';
            (e || window.event).returnValue = confirmationMessage;
            return confirmationMessage;
        }
    });
    
    // Console log for debugging (remove in production)
    console.log('BLAS Download Form initialized successfully');
    
});

// Additional utility functions

// Format phone number (optional)
function formatPhoneNumber(phoneNumber) {
    var cleaned = ('' + phoneNumber).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
        return match[1] + '-' + match[2] + '-' + match[3];
    }
    return phoneNumber;
}

// Validate date format
function isValidDate(dateString) {
    var regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(dateString)) return false;
    
    var parts = dateString.split('-');
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);
    
    var date = new Date(year, month - 1, day);
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

// Check if user is on mobile device
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Accessibility enhancements
$(document).ready(function() {
    // Add focus indicators for keyboard navigation
    $('input, button').on('focus', function() {
        $(this).addClass('keyboard-focus');
    }).on('blur', function() {
        $(this).removeClass('keyboard-focus');
    });
    
    // Add keyboard navigation for buttons
    $('#downloadBtn').on('keydown', function(e) {
        if (e.keyCode === 13 || e.keyCode === 32) { // Enter or Space
            e.preventDefault();
            $(this).click();
        }
    });
});