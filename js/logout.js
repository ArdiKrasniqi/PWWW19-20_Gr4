delete_cookie('token')
delete_session('token')
location.href = 'login.html';

function delete_cookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function delete_session(name) {
    sessionStorage.removeItem(name);
}
