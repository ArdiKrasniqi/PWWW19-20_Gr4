if (getSession('token')) {
    location.href = 'index.html';
}

function login() {
    try {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var storedUsers = JSON.parse(localStorage.getItem("users"));

        if (email == "") {
            throw "email is empty";
        }
        var message = "failed";
        if (storedUsers) {
            const userEmail = storedUsers.find(item => item.email == email);
            if (userEmail) {
                if (userEmail.password == password) {
                    message = 'success';
                    let token = Math.random().toString(36);
                    sessionStorage.setItem("token", token);
                    location.href = 'index.html';
                }
            }
        }

        if (message == "failed")
            document.getElementById("cannotLogin").innerHTML =
                "<p style='color: red;font-size: 22px;padding-top: 20px;'>Your email or password is incorrect!</p>";
    }
    catch (err) {
        console.log('err', err)
    }
}
