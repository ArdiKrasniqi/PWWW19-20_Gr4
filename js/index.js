if (getSession('token') || getCookie('token')) {
    document.getElementById("login").href = 'logout.html'
    document.getElementById("login").innerHTML = 'LOGOUT'
}