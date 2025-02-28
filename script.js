const form = document.querySelector("form");
const quoteInput = document.querySelector("#quote-input");
const authorInput = document.querySelector("#author-input");
const quoteList = document.querySelector("#quote-list");
let quoteCount  = 0;
let quotesArray = [];

const updateCount = () => {
    const count = document.getElementById("count");
    quoteCount += 1;
    count.innerText = `${quoteCount} ${quoteCount <= 1 ? "citation" : "citations"}`;
}

const displayQuote = (q, a) => {
    const paragrapheText = document.createElement("p");
    paragrapheText.classList.add("text");
    const paragrapheAuthor = document.createElement("p");
    paragrapheAuthor.classList.add("author");
    paragrapheText.innerText = q;
    paragrapheAuthor.innerText = a;
    const quoteContent = document.createElement("div");
    quoteContent.classList.add("quote");
    quoteContent.append(paragrapheText, paragrapheAuthor);
    quoteList.appendChild(quoteContent);
}

const addQuote = (quote, author) => {
    displayQuote(quote, author);
    updateCount();
    const citation = {
        author: author,
        text: quote
    };
    quotesArray.push(citation);
    localStorage.setItem("citations", JSON.stringify(quotesArray));
}

const displayList = (list) => {
    list.forEach((c, i) => {
        displayQuote(list[i].text, list[i].author);
    })
}

window.addEventListener("load", () => {
    const listCitation = JSON.parse(localStorage.getItem("citations"));
    if (listCitation) {
        listCitation.forEach(c => {
            quotesArray.push(c);
            updateCount();
        })
        displayList(listCitation);
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let text = quoteInput.value;
    let author = authorInput.value;
    addQuote(text, author);
    e.target.reset();
})