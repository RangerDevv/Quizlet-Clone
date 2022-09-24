let Card = document.getElementById("card")
let Side1 = document.getElementById("Side1")
let Side2 = document.getElementById("Side2")
let Next = document.getElementById("Next")
let Prev = document.getElementById("Prev")
// To check if the card has been flipped or not.
let flipped = false
// To see what the current card is.
let CurrCard = 0

let CardList = [
    {
        "Side1": "Hello",
        "Side2": "World"  
    },
    {
        "Side1": "What is this?",
        "Side2": "This is a Quizlet Clone"  
    }
]

Card.onclick = function() {
    if (flipped) {
        Side2.style.display = "None"
        Side1.style.display = "Block"
        flipped = false
    }
    else {
        Side2.style.display = "Block"
        Side1.style.display = "None" 
        flipped = true
    }
}

Next.onclick = function(){
    CurrCard++
    if (CurrCard >= CardList.length) {
        CurrCard = 0;
    }
    console.log(CurrCard)
    flipped = false
}

Prev.onclick = function(){
    CurrCard--
    if (CurrCard < 0) {
        CurrCard = 0;
    }
    flipped = false
}

setInterval(() => {
    Side1.innerText = CardList[CurrCard].Side1
    Side2.innerText = CardList[CurrCard].Side2
}, 10);
