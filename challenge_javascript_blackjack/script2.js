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

let playersCards;       let pcCards;            let playerTotal;        let pcTotal;
let indexOne;           let cardValue;          let cardType;           let card;
let playerValueOne;     let playerCardOne;      let playerValueTwo;     let playerCardTwo;
let playerValueThree;   let playerCardThree;    let playerValueFour;    let playerCardFour;
let playerValueFive;    let playerCardFive;
let pcValueOne;         let pcCardOne;          let pcValueTwo;         let pcCardTwo;
let pcValueThree;       let pcCardThree;        let pcValueFour;        let pcCardFour;
let pcValueFive;        let pcCardFive;


        function cardPick() {
            function getCardInteger() {
                let max = 13;
                return  Math.floor(Math.random() * (max));
            }
            indexOne = getCardInteger();
            console.log(indexOne);

            function getCardValue() {
                if (indexOne > 9) {
                    cardValue = 10;
                } else {
                     cardValue = indexOne + 1;
                }
                return cardValue;
            }
            cardValue = getCardValue();
            console.log(cardValue);

            function getTypeInteger() {
                    return Math.floor(Math.random() * (4));
            }
            cardType = getTypeInteger();
            console.log(cardType);

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
            card = getCardTYpe();
            console.log(card);
            return card + cardValue;
        }


document.getElementById("reload").addEventListener("click", function () {

    location.reload(true);

});

document.getElementById("scoreTarget").innerHTML = "Push 'Card 1' to start the game.";

document.getElementById("cards").addEventListener("click", function () {

    cardPick();

    playerValueOne = cardValue;
    playerCardOne = card;

    document.getElementById("playerTargetOne").style.fontSize = "28px";
    document.getElementById("playerTargetOne").innerHTML = playerCardOne;

    cardPick();

    pcValueOne = cardValue;
    pcCardOne = card;

    document.getElementById("pcTargetOne").style.fontSize = "28px";
    document.getElementById("pcTargetOne").innerHTML = pcCardOne;



        cardPick();

        playerValueTwo = cardValue;
        playerCardTwo = card;

        document.getElementById("playerTargetTwo").style.fontSize = "28px";
        document.getElementById("playerTargetTwo").innerHTML = playerCardTwo;

        cardPick();

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

        if (playerValueOne === 10 && playerValueTwo === 1 && pcTotal < 21) {

            document.getElementById("pcTargetTwo").style.fontSize = "32px";
            document.getElementById("scoreTarget").innerHTML = "!!! 21  !!! \n You win";

        } else if (pcValueOne === 10 && pcValueTwo === 1) {

            document.getElementById("pcTargetTwo").style.fontSize = "32px";
            document.getElementById("scoreTarget").innerHTML = "!!! 21  !!! \n PC wins";

        } else {

            document.getElementById("scoreTarget").innerHTML = "Push 'Hit 1' if you want an extra card.";

            // still need an extra step if player stops here: 'count button made already'

            document.getElementById("hitOne").addEventListener("click", function () {

                cardPick();

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

                } else if (playerTotal < 18 || pcTotal < 18) {

                    cardPick();

                    pcValueThree = cardValue;
                    pcCardThree = card;

                    document.getElementById("pcTargetThree").style.fontSize = "28px";
                    document.getElementById("pcTargetThree").innerHTML = pcCardThree;

                    pcCards = (pcCardOne + ' & ' + pcCardTwo + ' & ' + pcCardThree);
                    pcTotal = pcValueOne + pcValueTwo + pcValueThree;
                    console.log(pcCards);
                    console.log("pc's total is: " + pcTotal);

                    if (pcTotal === 21) {

                        document.getElementById("scoreTarget").style.fontSize = "28px";
                        document.getElementById("scoreTarget").innerHTML = "!!! 21  !!! \n PC wins";

                    } else if (pcTotal > 21) {

                    document.getElementById("scoreTarget").style.fontSize = "22px";
                    document.getElementById("scoreTarget").innerHTML = "Pc BUSTED! You win! \n Push 'Reset' for a new game.";

                    } else {}
                    
                } else {

                    document.getElementById("scoreTarget").innerHTML = "Push 'Hit 2' if you want an extra card.";

                    document.getElementById("hitTwo").addEventListener("click", function () {

                        cardPick();

                        playerValueFour = cardValue;
                        playerCardFour = card;

                        document.getElementById("playerTargetFour").style.fontSize = "28px";
                        document.getElementById("playerTargetFour").innerHTML = playerCardFour;

                        playersCards = (playerCardOne + ' & ' + playerCardTwo + ' & ' + playerCardThree + ' & ' + playerCardFour);
                        playerTotal = playerValueOne + playerValueTwo + playerValueThree + playerValueFour;
                        console.log(playersCards);
                        console.log("players total is: " + playerTotal);

                        if (playerTotal >= 21) {

                            document.getElementById("scoreTarget").style.fontSize = "22px";
                            document.getElementById("scoreTarget").innerHTML = "BUSTED! PC wins. \n Push 'Reset' for a new game.";

                        } else if (playerTotal <= 20) {

                            if (pcTotal <= 15) {

                                cardPick();

                                pcValueFour = cardValue;
                                pcCardFour = card;

                                document.getElementById("pcTargetFour").style.fontSize = "28px";
                                document.getElementById("pcTargetFour").innerHTML = pcCardFour;

                                pcCards = (pcCardOne + ' & ' + pcCardTwo + ' & ' + pcCardThree + ' & ' + pcCardFour);
                                pcTotal = pcValueOne + pcValueTwo + pcValueThree + pcValueFour;
                                console.log(pcCards);
                                console.log("pc's total is: " + pcTotal);

                                if (playerTotal > pcTotal) {

                                    document.getElementById("scoreTarget").style.fontSize = "22px";
                                    document.getElementById("scoreTarget").innerHTML = "You win! \n Push 'Reset' for a new game.";

                                } else {

                                    document.getElementById("scoreTarget").style.fontSize = "22px";
                                    document.getElementById("scoreTarget").innerHTML = "PC wins. \n Push 'Reset' for a new game.";

                                }

                            } else if (pcTotal === 20 || pcTotal === 21) {

                                document.getElementById("scoreTarget").style.fontSize = "22px";
                                document.getElementById("scoreTarget").innerHTML = "PC wins. \n Push 'Reset' for a new game.";

                            } else {

                                document.getElementById("scoreTarget").style.fontSize = "22px";
                                document.getElementById("scoreTarget").innerHTML = "You win! \n Push 'Reset' for a new game.";

                            }

                        } else {

                            document.getElementById("scoreTarget").innerHTML = "Push 'Hit 3' if you want an extra card.";

                            document.getElementById("hitThree").addEventListener("click", function () {

                                cardPick();

                                playerValueFive = cardValue;
                                playerCardFive = card;

                                document.getElementById("playerTargetFive").style.fontSize = "28px";
                                document.getElementById("playerTargetFive").innerHTML = playerCardFive;

                                playersCards = (playerCardOne + ' & ' + playerCardTwo + ' & ' + playerCardThree + ' & ' + playerCardFour + ' & ' + playerCardFive);
                                playerTotal = playerValueOne + playerValueTwo + playerValueThree + playerValueFour + playerValueFive;
                                console.log(playersCards);
                                console.log("players total is: " + playerTotal);

                                if (playerTotal > 21) {

                                    document.getElementById("scoreTarget").style.fontSize = "22px";
                                    document.getElementById("scoreTarget").innerHTML = "BUSTED! PC wins. \n Push 'Reset' for a new game.";

                                } else if (playerTotal <= 20) {

                                    if (pcTotal < 19) {

                                        cardPick();

                                        pcValueFive = cardValue;
                                        pcCardFive = card;

                                        document.getElementById("pcTargetFour").style.fontSize = "28px";
                                        document.getElementById("pcTargetFour").innerHTML = pcCardFive;

                                        pcCards = (pcCardOne + ' & ' + pcCardTwo + ' & ' + pcCardThree + ' & ' + pcCardFour + ' & ' + pcCardFive);
                                        pcTotal = pcValueOne + pcValueTwo + pcValueThree + pcValueFour + pcValueFive;
                                        console.log(pcCards);
                                        console.log("pc's total is: " + pcTotal);

                                        if (playerTotal > pcTotal) {

                                            document.getElementById("scoreTarget").style.fontSize = "22px";
                                            document.getElementById("scoreTarget").innerHTML = "You win! \n Push 'Reset' for a new game.";

                                        } else {

                                            document.getElementById("scoreTarget").style.fontSize = "22px";
                                            document.getElementById("scoreTarget").innerHTML = "PC wins. \n Push 'Reset' for a new game.";

                                        }

                                    } else if (pcTotal === 20 || pcTotal === 21) {

                                        document.getElementById("scoreTarget").style.fontSize = "22px";
                                        document.getElementById("scoreTarget").innerHTML = "PC wins. \n Push 'Reset' for a new game.";

                                    } else {

                                        document.getElementById("scoreTarget").style.fontSize = "22px";
                                        document.getElementById("scoreTarget").innerHTML = "You win! \n Push 'Reset' for a new game.";

                                    }

                                }

                            })

                        }

                    })

                }

            })

        }



});