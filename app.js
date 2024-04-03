document.addEventListener("DOMContentLoaded", () => {

    // list of quotes
    const quoteArray = [
        {
            text: "It always seems impossible until it's done.",
            source: "Nelson Mandela"
        },
        {
            text: "If you're going through hell, keep going.",
            source: "Winston Churchill"
        },
        {
            text: "Try to be a rainbow in someone's cloud.",
            source: "Maya Angelou"
        },
        {
            text: "The only journey is the one within.",
            source: "Rainer Maria Rilke"
        },
        {
            text: "Always remember that you are absolutely unique. Just like everyone else.",
            source: "Margaret Mead"
        },
        {
            text: "No one can make you feel inferior without your consent.",
            source: "Eleanor Roosevelt"
        }
    ];

    quoteArray.sort(() => 0.5 - Math.random());

    const quoteDisplay = document.querySelector(".quote");
    const sourceDisplay = document.querySelector(".source");

    let randomQuote = quoteArray[0];

    quoteDisplay.innerHTML = randomQuote.text;
    sourceDisplay.innerHTML = randomQuote.source;
});

