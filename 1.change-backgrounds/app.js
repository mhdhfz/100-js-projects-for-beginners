const body = document.body;
const button = document.querySelector('button')

// functions
function changeBackgroundColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.style.backgroundColor = `#${randomColor}`;
}


// event listeners
button.addEventListener('click', changeBackgroundColor);