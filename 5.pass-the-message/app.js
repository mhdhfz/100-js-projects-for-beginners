const inputMessage = document.getElementById('message');
const btnSubmit = document.querySelector('#submit');
const lastMessage = document.querySelector(".last-message");


function getMessageInput() {
    inputMessage.value === '' ? alert('Please enter a valid message') : lastMessage.innerText = inputMessage.value;
    inputMessage.value = '';
}

btnSubmit.addEventListener('click', getMessageInput);