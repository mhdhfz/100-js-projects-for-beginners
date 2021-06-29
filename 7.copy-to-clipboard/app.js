const copyToClipboardInput = document.getElementById('copytoclipboard');
const copyBtn = document.getElementById('copy-btn');
const message = document.getElementById('message');

function copyToClipboard() {

    if (copyToClipboardInput.value === '') {
        message.innerText = 'Please enter any value in the textbox';
        message.style.backgroundColor = '#F32013';   
    }

    const selected = document.getSelection().rangeCount > 0 
        ? document.getSelection().getRangeAt(0)
        : false;
    
    copyToClipboardInput.select();
    document.execCommand('copy');

    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
      }
    
    message.style.display = 'block';

    setTimeout(() => {
        copyToClipboardInput.value = "";
        message.style.display = 'none';
    }, 3000);
}

copyBtn.addEventListener('click', copyToClipboard);