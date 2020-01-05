delete_session('token')
location.href = 'login.html';

function delete_session(name) {
    sessionStorage.removeItem(name);
}
