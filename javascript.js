function validateForm(event) {
    if (!checkEmails()) {
        event.preventDefault();
        return false;
    }

    if (!checkDate()) {
        event.preventDefault();
        alert("Please select a valid date for your appointment.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function checkEmails() {
    var email1 = document.getElementById("email").value.trim();
    var email2 = document.getElementById("confirm-email").value.trim();

    if (email1 !== email2) {
        alert("Emails do not match!");
        return false;
    }

    var astonEmailRegex = /^[a-zA-Z0-9._%+-]+@aston\.ac\.uk$/i; 

    if (!astonEmailRegex.test(email1)) {
        alert("Please use a valid Aston University email (@aston.ac.uk).");
        return false;
    }

    return true;
}

function checkDate() {
    var selectedDateStr = document.getElementById("appointment-date").value;
    if (!selectedDateStr) {
        return false;
    }
    
    var selectedDate = new Date(selectedDateStr);
    var today = new Date();
    today.setHours(0,0,0,0);
    
    return selectedDate >= today;
}

document.getElementById("appointment-date").min = new Date().toISOString().split("T")[0];

document.getElementById("booking-form").addEventListener("submit", validateForm);