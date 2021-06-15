const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');


function showPassword() {
    const typeInput = password.getAttribute('type');

    if (typeInput === 'password') {
        password.setAttribute('type', 'text')
    }
}

togglePassword.addEventListener('click', showPassword);