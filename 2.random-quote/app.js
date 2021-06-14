const nextQuoteBtn = document.querySelector('.nextQuote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

// functions
function updateQuote() {
    fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    quote.innerText = data.content;
    author.innerText = `—${data.author}`;
  })
}

// event listener
nextQuoteBtn.addEventListener('click', updateQuote)