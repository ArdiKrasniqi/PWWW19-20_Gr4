if (getSession('token') || getCookie('token')) {
    location.href = 'index.html';
}


function signUp() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    resetValidation();
    if (password != confirmPassword) {
        document.getElementById("passwordMatch").innerHTML =
            "<p style='color: red;font-size: 16px;'>Password doesn't match!</p>";
        return;
    }
    var object = {
        email: email,
        password: password
    }
    var storedUsers = JSON.parse(localStorage.getItem("users"));
    if (!storedUsers) {
        storedUsers = new Array();
    }
    const userEmail = storedUsers.find(item => item.email == email);
    if (userEmail) {
        document.getElementById("emailTaken").innerHTML =
            "<p style='color: red;font-size: 16px;'>This email is taken!</p>";
        return;
    }
    storedUsers.push(object);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    location.href = 'login.html';
}

function resetValidation() {
    document.getElementById("emailTaken").innerHTML = ""
    document.getElementById("passwordMatch").innerHTML = ""
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
} 