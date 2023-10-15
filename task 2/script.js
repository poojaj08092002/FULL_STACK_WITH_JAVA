function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var message = document.getElementById("message").value;
    var color = document.getElementById("color").value;
    var valid = true;

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var phoneError = document.getElementById("phoneError");
    var dobError = document.getElementById("dobError");
    var messageError = document.getElementById("messageError");
    var colorError = document.getElementById("colorError");

    nameError.innerHTML = "";
    emailError.innerHTML = "";
    phoneError.innerHTML = "";
    dobError.innerHTML = "";
    messageError.innerHTML = "";
    colorError.innerHTML = "";

    if (name === "") {
        nameError.innerHTML = "Name is required.";
        valid = false;
    }

    if (email === "") {
        emailError.innerHTML = "Email is required.";
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        emailError.innerHTML = "Invalid email format.";
        valid = false;
    }

    if (phone === "") {
        phoneError.innerHTML = "Phone number is required.";
        valid = false;
    }

    if (dob === "") {
        dobError.innerHTML = "Date of birth is required.";
        valid = false;
    }

    if (message === "") {
        messageError.innerHTML = "Message is required.";
        valid = false;
    }

    if (color === "") {
        colorError.innerHTML = "Favorite color is required.";
        valid = false;
    }

    return valid;
}
