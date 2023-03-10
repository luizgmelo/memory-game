const cards = document.querySelector("div.cards")
const arrayCardsId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                      13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24] 
const match = []
const differenceId = 12;
let score = 0;

// randomize cards
arrayCardsId.sort((a, b) => 0.5 - Math.random())

console.log(arrayCardsId);


arrayCardsId.forEach((cardId) => {
    cards.innerHTML += `<img id="${cardId}" src="images/card.png" alt="card-blank" onclick="flipCard(${cardId})">`
}) 

function resetCards() {
    let firstCard = document.getElementById(match[0].id);
    let secondCard = document.getElementById(match[1].id);
    if (firstCard.alt == "face-card" && secondCard.alt != "face-card") {
        alert("The first card has already been turned over, please choose another one")
        secondCard.src = "images/card.png";
    } else if (secondCard.alt == "face-card" && firstCard.alt != "face-card"){
        alert("The second card has already been turned over, please choose another one")
        firstCard.src = "images/card.png";
    } else if (firstCard.alt != "face-card" && secondCard.alt != "face-card") {
        firstCard.src = "images/card.png";
        secondCard.src = "images/card.png";
    }


    // clear array
    match.splice(0, 24);
}

function flipCard(id) {
    let card = document.getElementById(id);

    match.push(card);

    if (match.length <= 2) {
        card.setAttribute('src', `images/${id}.png`)
    } else {
        alert("You only can to turn two cards at same time");
    }
    
    if (match.length == 2) {
        if ((Number(match[0].id) + differenceId == Number(match[1].id) || Number(match[0].id) == Number(match[1].id) + differenceId) && card.alt != "face-card") {
            let firstCard = document.getElementById(match[0].id);
            let secondCard = document.getElementById(match[1].id);
            firstCard.alt = "face-card"
            secondCard.alt = "face-card"
            score++
            alert("Awesome")
            match.pop()
            match.pop()
            if (score == 12) {
                alert("Congradulations you complete the game.")
                let title = document.getElementById("title")
                title.style.color = "#ff0000"
                title.innerText = "restart the page to play again"
            }
        } else {
            setTimeout(resetCards, 1000)
        }
    }

}
