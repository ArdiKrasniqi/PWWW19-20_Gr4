if (getSession('token') || getCookie('token')) {
    location.href = 'index.html';
}

function myFunction() {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var storedUsers = JSON.parse(localStorage.getItem("users"));

    const userEmail = storedUsers.find(item => item.email == email);
    var message = "failed";
    if (userEmail) {
        if (userEmail.password == password) {
            message = 'success';
            let token = Math.random().toString(36);
            sessionStorage.setItem("token", token);
            setCookie('token', token, 1);
            location.href = 'index.html';
        }
    }
    if (message == "failed")
        document.getElementById("cannotLogin").innerHTML =
            "<p style='color: red;font-size: 22px;padding-top: 20px;'>Your email or password is incorrect!</p>";

}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    console.log(d.getTime(), 'time')
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}