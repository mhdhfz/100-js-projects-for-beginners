const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');


function showPassword() {
    const typeInput = password.getAttribute('type');

    if (typeInput === 'password') {
        password.setAttribute('type', 'text')
    } else {
        password.setAttribute('type', 'password')
    }
}

togglePassword.addEventListener('click', showPassword);