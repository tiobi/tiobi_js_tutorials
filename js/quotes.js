const quotes = [
    {
        quote: "hello1",
        author: "me"
    },
    {
        quote: "world1",
        author: "you"
    },
    {
        quote: "hello2",
        author: "me"
    },
    {
        quote: "world2",
        author: "you"
    },
    {
        quote: "hello3",
        author: "me"
    },
    {
        quote: "world3",
        author: "you"
    },
    {
        quote: "hello4",
        author: "me"
    },
    {
        quote: "world4",
        author: "you"
    },
    {
        quote: "hello5",
        author: "me"
    },
    {
        quote: "world5",
        author: "you"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const quoteOfTheDay = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = quoteOfTheDay.quote;
author.innerText = quoteOfTheDay.author;