if (getSession('token')) {
    location.href = 'index.html';
}


function signUp() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    resetValidation();

    const passwordValid = passwordValidation(password, confirmPassword);
    if (passwordValid)
        return;

    email = emailValidationRegEx(email);
    var object = {
        email: email,
        password: password
    }
    var storedUsers = JSON.parse(localStorage.getItem("users"));
    if (!storedUsers) {
        storedUsers = new Array();
    }


    const userEmail = emailValidation(storedUsers, email);
    if (userEmail)
        return;

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

function passwordValidation(password, confirmPassword) {
    var result = false;
    if (password != confirmPassword) {
        document.getElementById("passwordMatch").innerHTML =
            "<p style='color: red;font-size: 16px;'>Password doesn't match!</p>";
        result = true;
    }
    return result;
}

function emailValidation(users, email) {
    var result = false;
    const userEmail = users.find(item => item.email == email);
    if (userEmail) {
        document.getElementById("emailTaken").innerHTML =
            "<p style='color: red;font-size: 16px;'>This email is taken!</p>";
        result = true;
    }

    return result;
}

function emailValidationRegEx(email) {
    var result = "";
    var regex = /\+(.*)@/;
    var execRegEx = regex.exec(email);
    var testRegEx = regex.test(email);
    var matches = email.match(regex);

    if (matches && testRegEx && execRegEx) {
        result = email.replace(matches[0], "@");
    } else {
        result = email;
    }
    return result;
}