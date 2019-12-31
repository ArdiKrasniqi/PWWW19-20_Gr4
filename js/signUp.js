if (getSession('token') || getCookie('token')) {
    location.href = 'index.html';
}


function signUp() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var object = {
        email: email,
        password: password
    }
    var storedUsers = JSON.parse(localStorage.getItem("users"));
    if (!storedUsers) {
        storedUsers = new Array();
    }
    storedUsers.push(object);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    location.href = 'login.html';
}