const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message; 
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmailValid(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function registerForm(e) {
    e.preventDefault();

    if (usernameInput.value === '') {
        showError(usernameInput, 'username are required');
    }else {
        showSuccess(usernameInput);
    }

    if (emailInput.value === '') {
        showError(emailInput, 'email are required');
    } else if (!isEmailValid(emailInput.value)) {
        showError(emailInput, 'Email is not valid');
    } else {
        showSuccess(emailInput);
    }

    if (passwordInput.value === '') {
        showError(passwordInput, 'password are required');
    }else {
        showSuccess(passwordInput);
    }

    if (confirmPasswordInput.value === '') {
        showError(confirmPasswordInput, 'confirm password are required');
    }else {
        showSuccess(confirmPasswordInput);
    }
}

form.addEventListener('submit', registerForm);