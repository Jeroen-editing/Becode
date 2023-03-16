

document.getElementById("random").addEventListener("click", function () {

    let cardDeck = [
        "Ace of clubs", "Two of clubs", "Three of clubs", "For of clubs", "Five of clubs",
        "Six of clubs", "Seven of clubs", "Eight of clubs", "Nine of clubs", "Ten of clubs",
        "Jack of clubs", "Queen of clubs", "King of clubs",
        "Ace of diamonds", "Two of diamonds", "Three of diamonds", "For of diamonds", "Five of diamonds",
        "Six of diamonds", "Seven of diamonds", "Eight of diamonds", "Nine of diamonds", "Ten of diamonds",
        "Jack of diamonds", "Queen of diamonds", "King of diamonds",
        "Ace of spades", "Two of spades", "Three of spades", "For of spades", "Five of spades",
        "Six of spades", "Seven of spades", "Eight of spades", "Nine of spades", "Ten of spades",
        "Jack of spades", "Queen of spades", "King of spades",
        "Ace of hearts", "Two of hearts", "Three of hearts", "For of hearts", "Five of hearts",
        "Six of hearts", "Seven of hearts", "Eight of hearts", "Nine of hearts", "Ten of hearts",
        "Jack of hearts", "Queen of hearts", "King of hearts",
    ];

    let playerIndexOne;        let playerFirstCard;        let playerIndexTwo;     let playerSecondCard;
    let pcIndexOne;            let pcFirstCard;            let pcIndexTwo;         let pcSecondCard;

    let newCardDeck;

    let totalPlayer;        let totalPc;                let winner;

    let max = 52;

    function getRandomInteger() {
        let min = 0;
        /*
        min = Math.ceil(min);
        max = Math.floor(max);
        */
        return Math.floor(Math.random() * (max - min)) + min;
    }

    for (let i = 0; i < 1; i++) {

        playerIndexOne = getRandomInteger();
        playerFirstCard = cardDeck[playerIndexOne];
        console.log('pl' + playerIndexOne);
        console.log(playerFirstCard);

        if (playerIndexOne < 6 || playerIndexOne > 45) {
            playerCardValueOne = 10;
        } else if (playerIndexOne === 6 || playerIndexOne === 26 || playerIndexOne === 36 || playerIndexOne === 46) {
            playerCardValueOne = playerIndexOne + 1;
        }

        newCardDeck = cardDeck.splice(playerIndexOne, 1);
        max = max - 1;

        pcIndexOne = getRandomInteger();
        pcFirstCard = cardDeck[pcIndexOne];
        console.log('pc' + pcIndexOne);
        console.log(pcFirstCard);

        if (pcIndexOne < 6 || pcIndexOne > 45) {
            pcCardValueOne = 10;
        } else  {
            pcCardValueOne = pcIndexOne + 1;
        }

        newCardDeck = cardDeck.splice(pcIndexOne, 1);
        max = max - 1;

        for (let j = 0; j < 1; j++) {

            playerIndexTwo = getRandomInteger();
            playerSecondCard = cardDeck[playerIndexTwo];
            console.log('pl' + playerIndexTwo);
            console.log(playerSecondCard);

            if (playerIndexTwo < 6 || playerIndexTwo > 45) {
                playerCardValueTwo = 10;
            } else  {
                playerCardValueTwo = playerIndexTwo + 1;
            }

            newCardDeck = cardDeck.splice(playerIndexTwo, 1);
            max = max - 1;

            pcIndexTwo = getRandomInteger();
            pcSecondCard = cardDeck[pcIndexTwo];
            console.log('pc' + pcIndexTwo);
            console.log(pcSecondCard);

            if (pcIndexTwo < 6 || pcIndexTwo > 45) {
                pcCardValueTwo = 10;
            } else  {
                pcCardValueTwo = pcIndexTwo + 1;
            }

            newCardDeck = cardDeck.splice(pcIndexTwo, 1);
            max = max - 1;

            console.log(max);

        }

        let outputOne = 'Your 1st card: ' + playerFirstCard + '. The dealers 1st card: ' + pcFirstCard + '.';
        console.log(outputOne);
        let outputTwo = 'Your 2nd card: ' + playerSecondCard + '. The dealers 2nd card: ' + pcSecondCard + '.';
        console.log(outputTwo);

        console.log(newCardDeck);

        document.getElementById("targetOne").innerHTML = outputOne;
        document.getElementById("targetTwo").innerHTML = outputTwo;

        totalPlayer = playerFirstCard + playerSecondCard;
        totalPc = playerFirstCard + playerSecondCard;

    }

});




/*
let cardDeck = {
        "Ace of clubs": 1, "Two of clubs": 2, "Three of clubs": 3, "For of clubs" : 4, "Five of clubs": 5,
        "Six of clubs": 6, "Seven of clubs": 7, "Eight of clubs": 8, "Nine of clubs": 9, "Ten of clubs": 10,
        "Jack of clubs": 10, "Queen of clubs": 10, "King of clubs": 10,
        "Ace of diamonds": 1, "Two of diamonds": 2, "Three of diamonds" : 3, "For of diamonds" : 4, "Five of diamonds": 5,
        "Six of diamonds": 6, "Seven of diamonds": 7, "Eight of diamonds": 8, "Nine of diamonds": 9, "Ten of diamonds": 10,
        "Jack of diamonds": 10, "Queen of diamonds": 10, "King of diamonds": 10,
        "Ace of spades": 1, "Two of spades": 2, "Three of spades" : 3, "For of spades" : 4, "Five of spades": 5,
        "Six of spades": 6, "Seven of spades": 7, "Eight of spades": 8, "Nine of spades": 9, "Ten of spades": 10,
        "Jack of spades": 10, "Queen of spades": 10, "King of spades": 10,
        "Ace of hearts": 1, "Two of hearts": 2, "Three of hearts" : 3, "For of hearts" : 4, "Five of hearts": 5,
        "Six of hearts": 6, "Seven of hearts": 7, "Eight of hearts": 8, "Nine of hearts": 9, "Ten of hearts": 10,
        "Jack of hearts": 10, "Queen of hearts": 10, "King of hearts": 10,
    };
 */