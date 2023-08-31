document.getElementById("contact-form").addEventListener('submit', (event) => {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Format email tidak valid";
    } else {
        document.getElementById("emailError").innerText = "";
    }

    var date = document.getElementById("date").value;
    var datePattern = /^\d{2}-\d{2}-\d{4}$/;
    if (!datePattern.test(date)) {
        document.getElementById("dateError").innerText = "Format tanggal tidak valid";
    } else {
        document.getElementById("dateError").innerText = "";
    }

});