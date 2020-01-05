
var online = navigator.onLine;
if (online) {
    console.log('osht online')
} else {
    console.log('sosht online')
    // location.href = 'login.html';
}

function getSession(name) {
    return sessionStorage.getItem(name)
}
