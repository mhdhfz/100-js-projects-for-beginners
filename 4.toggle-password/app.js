const password = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');


function showPassword() {
    const typeInput = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', typeInput);

    const changeIcon = togglePassword.getAttribute('src') === 'img/eye-show.svg' ? 'img/eye-hide.svg' : 'img/eye-show.svg';
    togglePassword.setAttribute('src', changeIcon);
}

togglePassword.addEventListener('click', showPassword);