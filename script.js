// const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
// Get quotes from API

let apiQuotes = [];

// Show new quote
function newQuote() {
  //Pick a random quote
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const resonse = await fetch(apiUrl);
    apiQuotes = await resonse.json();
    newQuote();
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getQuotes();
