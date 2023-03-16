let clubs = [
    "Ace of clubs", "Two of clubs", "Three of clubs", "For of clubs", "Five of clubs",
    "Six of clubs", "Seven of clubs", "Eight of clubs", "Nine of clubs", "Ten of clubs",
    "Jack of clubs", "Queen of clubs", "King of clubs"
];

let diamonds = [
    "Ace of diamonds", "Two of diamonds", "Three of diamonds", "For of diamonds", "Five of diamonds",
    "Six of diamonds", "Seven of diamonds", "Eight of diamonds", "Nine of diamonds", "Ten of diamonds",
    "Jack of diamonds", "Queen of diamonds", "King of diamonds"
    ];

let spades = [
    "Ace of spades", "Two of spades", "Three of spades", "For of spades", "Five of spades",
    "Six of spades", "Seven of spades", "Eight of spades", "Nine of spades", "Ten of spades",
    "Jack of spades", "Queen of spades", "King of spades"
];

let hearts = [
    "Ace of hearts", "Two of hearts", "Three of hearts", "For of hearts", "Five of hearts",
    "Six of hearts", "Seven of hearts", "Eight of hearts", "Nine of hearts", "Ten of hearts",
    "Jack of hearts", "Queen of hearts", "King of hearts"
    ];

let playersCards;       let pcCards;
let indexOne;           let indexTwo;           let cardValue;          let cardType;           let card;
let playerValueOne;     let playerCardOne;      let playerValueTwo;     let playerCardTwo;
let playerValueThree;   let playerCardThree;    let playerValueFour;   let playerCardFour;
let playerValueFive;    let playerCardFive;
let pcValueOne;         let pcCardOne;          let pcValueTwo;         let pcCardTwo;
let pcValueThree;       let pcCardThree;

let playerTotal;        let pcTotal;            let winner;

        function getCardInteger() {
            let max = 13;
            return  Math.floor(Math.random() * (max));
        }

        function getCardValue() {
            if (indexOne > 9) {
                cardValue = 10;
            } else {
                 cardValue = indexOne + 1;
            }
            return cardValue;
        }

        function getTypeInteger() {
                return Math.floor(Math.random() * (4));
        }

        function getCardTYpe() {
            if (cardType === 0) {
                card = clubs[indexOne];
            } else if (cardType === 1) {
                card = diamonds[indexOne];
            } else if (cardType === 2) {
                card = spades[indexOne];
            } else {
                card = hearts[indexOne];
            }
            return card;
        }


document.getElementById("reload").addEventListener("click", function () {

    location.reload(true);

});

document.getElementById("scoreTarget").innerHTML = "Push 'Card 1' to start the game.";

document.getElementById("cardOne").addEventListener("click", function () {

    indexOne = getCardInteger();
    console.log(indexOne);
    cardValue = getCardValue();
    console.log(cardValue);
    cardType = getTypeInteger();
    console.log(cardType);
    card = getCardTYpe();
    console.log(card);

    playerValueOne = cardValue;
    playerCardOne = card;

    document.getElementById("playerTargetOne").style.fontSize = "28px";
    document.getElementById("playerTargetOne").innerHTML = playerCardOne;

    indexOne = getCardInteger();
    console.log(indexOne);
    cardValue = getCardValue();
    console.log(cardValue);
    cardType = getTypeInteger();
    console.log(cardType);
    card = getCardTYpe();
    console.log(card);

    pcValueOne = cardValue;
    pcCardOne = card;

    document.getElementById("pcTargetOne").style.fontSize = "28px";
    document.getElementById("pcTargetOne").innerHTML = pcCardOne;

    document.getElementById("scoreTarget").innerHTML = "Push 'Card 2' for your next card.";


    document.getElementById("cardTwo").addEventListener("click", function () {

        indexOne = getCardInteger();
        console.log(indexOne);
        cardValue = getCardValue();
        console.log(cardValue);
        cardType = getTypeInteger();
        console.log(cardType);
        card = getCardTYpe();
        console.log(card);

        playerValueTwo = cardValue;
        playerCardTwo = card;

        document.getElementById("playerTargetTwo").style.fontSize = "28px";
        document.getElementById("playerTargetTwo").innerHTML = playerCardTwo;

        indexOne = getCardInteger();
        console.log(indexOne);
        cardValue = getCardValue();
        console.log(cardValue);
        cardType = getTypeInteger();
        console.log(cardType);
        card = getCardTYpe();
        console.log(card);

        pcValueTwo = cardValue;
        pcCardTwo = card;

        document.getElementById("pcTargetTwo").style.fontSize = "28px";
        document.getElementById("pcTargetTwo").innerHTML = pcCardTwo;

        playersCards = (playerCardOne + ' & ' + playerCardTwo);
        playerTotal = playerValueOne + playerValueTwo;
        console.log(playersCards);
        console.log("players total is: " + playerTotal);

        pcCards = (pcCardOne + ' & ' + pcCardTwo);
        pcTotal = pcValueOne + pcValueTwo;
        console.log(pcCards);
        console.log("pc's total is: " + pcTotal);

        document.getElementById("scoreTarget").innerHTML = "Push 'Hit 1' if you want an extra card.";


        document.getElementById("hitOne").addEventListener("click", function () {

            indexOne = getCardInteger();
            console.log(indexOne);
            cardValue = getCardValue();
            console.log(cardValue);
            cardType = getTypeInteger();
            console.log(cardType);
            card = getCardTYpe();
            console.log(card);

            playerValueThree = cardValue;
            playerCardThree = card;

            document.getElementById("playerTargetThree").style.fontSize = "28px";
            document.getElementById("playerTargetThree").innerHTML = playerCardThree;

            playersCards = (playerCardOne + ' & ' + playerCardTwo + ' & ' + playerCardThree);
            playerTotal = playerValueOne + playerValueTwo + playerValueThree;
            console.log(playersCards);
            console.log("players total is: " + playerTotal);

            if (playerTotal > 21) {

                document.getElementById("scoreTarget").style.fontSize = "22px";
                document.getElementById("scoreTarget").innerHTML = "BUSTED! PC wins. \n Push 'Reset' for a new game.";

            } else {

                document.getElementById("scoreTarget").innerHTML = "Push 'Hit 2' if you want an extra card.";

                document.getElementById("hitTwo").addEventListener("click", function () {

                    indexOne = getCardInteger();
                    console.log(indexOne);
                    cardValue = getCardValue();
                    console.log(cardValue);
                    cardType = getTypeInteger();
                    console.log(cardType);
                    card = getCardTYpe();
                    console.log(card);

                    playerValueFour = cardValue;
                    playerCardFour = card;

                    document.getElementById("playerTargetFour").style.fontSize = "28px";
                    document.getElementById("playerTargetFour").innerHTML = playerCardFour;

                    playersCards = (playerCardOne + ' & ' + playerCardTwo + ' & ' + playerCardThree + ' & ' + playerCardFour);
                    playerTotal = playerValueOne + playerValueTwo + playerValueThree + playerValueFour;
                    console.log(playersCards);
                    console.log("players total is: " + playerTotal);

                    if (playerTotal > 21) {

                        document.getElementById("scoreTarget").style.fontSize = "22px";
                        document.getElementById("scoreTarget").innerHTML = "BUSTED! PC wins. \n Push 'Reset' for a new game.";

                    } else {

                        document.getElementById("scoreTarget").innerHTML = "Push 'Hit 3' if you want an extra card.";

                        document.getElementById("hitThree").addEventListener("click", function () {

                            indexOne = getCardInteger();
                            console.log(indexOne);
                            cardValue = getCardValue();
                            console.log(cardValue);
                            cardType = getTypeInteger();
                            console.log(cardType);
                            card = getCardTYpe();
                            console.log(card);

                            playerValueFive = cardValue;
                            playerCardFive = card;

                            document.getElementById("playerTargetFour").style.fontSize = "28px";
                            document.getElementById("playerTargetFour").innerHTML = playerCardFive;

                            playersCards = (playerCardOne + ' & ' + playerCardTwo + ' & ' + playerCardThree + ' & ' + playerCardFour + ' & ' + playerCardFive);
                            playerTotal = playerValueOne + playerValueTwo + playerValueThree + playerValueFour + playerValueFive;
                            console.log(playersCards);
                            console.log("players total is: " + playerTotal);

                            if (playerTotal > 21) {

                                document.getElementById("scoreTarget").style.fontSize = "22px";
                                document.getElementById("scoreTarget").innerHTML = "BUSTED! PC wins. \n Push 'Reset' for a new game.";

                            }

                        });

                    }

                });

            }

        });

    });

});







document.getElementById("cardOne").addEventListener("click", function () {



});
document.getElementById("cardOne").addEventListener("click", function () {



});


/*

if (pcTotal >= playerTotal) {
    winner = 'The computer won!';
    console.log(winner);
} else {
    winner = 'You won!';
    console.log(winner);
}

 */


