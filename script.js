const form = document.querySelector("form");
const quoteInput = document.querySelector("#quote-input");
const authorInput = document.querySelector("#author-input");
const quoteList = document.querySelector("#quote-list");

const addQuote = (quote, author) => {
    const paragrapheText = document.createElement("p");
    paragrapheText.classList.add("author");
    const paragrapheAuthor = document.createElement("p");
    paragrapheAuthor.classList.add("author");

    paragrapheText.innerText = quote;
    paragrapheAuthor.innerText = author;

    const quoteContent = document.createElement("div");
    quoteContent.classList.add("quote");
    quoteContent.append(paragrapheText, paragrapheAuthor);
    quoteList.appendChild(quoteContent);
}

form.addEventListener("submit", () => {
    event.preventDefault();

    let text = quoteInput.value;
    let author = authorInput.value;

    console.log(text)
    console.log(author)

    addQuote(text, author)
})