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
    const totalDisplay = document.querySelector("#display");

    let randomQuote = quoteArray[0];

    function getRandomColor() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        if (randomColor === "white") {
            randomColor = Math.floor(Math.random()*16777215).toString(16);
        }
        return "#" + randomColor
    }
    
    document.body.style.backgroundColor = getRandomColor();
    // totalDisplay.style.backgroundColor = getRandomColor(); // doesn't yet work
    quoteDisplay.innerHTML = randomQuote.text;
    sourceDisplay.innerHTML = randomQuote.source;
     
    
});

