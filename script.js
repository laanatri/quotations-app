const form = document.querySelector("form");
const quoteInput = document.querySelector("#quote-input");
const authorInput = document.querySelector("#author-input");
let text = "";
let author = "";

form.addEventListener("submit", () => {
    event.preventDefault();

    text = quoteInput.value;
    author = authorInput.value;

    console.log(text)
    console.log(author)
})