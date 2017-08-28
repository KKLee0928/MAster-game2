var cards = [
    {
        'rank': 'queen',
        'suit': 'hearts',
        'cardImage': 'images/queen-of-hearts.png'
    },
    {
        'rank': 'queen',
        'suit': 'diamonds',
        'cardImage': 'images/queen-of-diamonds.png'
    },
    {
        'rank': 'king',
        'suit': 'hearts',
        'cardImage': 'images/king-of-hearts.png'
    },
    {
        'rank': 'king',
        'suit': 'diamonds',
        'cardImage': 'images/king-of-diamonds.png'
    }
];
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
//BRAIN IS SO FRIED... KEEP GOING DAMN IT!
var cardsInPlay = [];//.length;

var checkForMatch = function () {
	if (cards[cardsInPlay[0]].rank === cards[cardsInPlay[1]].rank) {
		alert("You found a match!.");
        // cardsInPlay = [];
        // return true;
	} 
	else {
		alert("Sorry, try again.");        
        // return false;
	}

    cardsInPlay = [];
}

var flipCard = function () {
    var cardId = this.getAttribute('data-id');

    this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length > 0 && cardsInPlay[0] === cardId){
		alert("You already selected that card.");
	} else {
		cardsInPlay.push(cardId);
		console.log("User flipped: " + cards[cardId].rank);
		console.log(cards[cardId].cardImage);

		if (cardsInPlay.length === 2) { //&& cardsInPlay === [0] [2])
			console.log("two cards flipped.");

            checkForMatch();
		
			//IF I WANT TO FLIP THE CARDS BACK AFTER THE FIRST "SORRY, TRY AGAIN" ALERT. REMEMBER TO UNCOMMENT 'THE RETURN STATEMENT'

			// if (!checkForMatch()) {
   //              document.getElementById('game-board').getElementsByTagName('img')[cardsInPlay[0]].setAttribute('src', 'images/back.png');
   //              document.getElementById('game-board').getElementsByTagName('img')[cardsInPlay[1]].setAttribute('src', 'images/back.png');
   //              cardsInPlay = [];
   //          }

		}
	}
};

var createBoard = function () {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');

        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);

        document.getElementById('game-board').appendChild(cardElement);
    }
}

createBoard();

// console.log("Up and running!");
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

// var cards = [
//     {
//         'rank': 'queen',
//         'suit': 'hearts',
//         'cardImage': 'images/queen-of-hearts.png'
//     },
//     {
//         'rank': 'queen',
//         'suit': 'diamonds',
//         'cardImage': 'images/queen-of-diamonds.png'
//     },
//     {
//         'rank': 'king',
//         'suit': 'hearts',
//         'cardImage': 'images/king-of-hearts.png'
//     },
//     {
//         'rank': 'king',
//         'suit': 'diamonds',
//         'cardImage': 'images/king-of-diamonds.png'
//     }
// ];
// // console.log("User flipped " + cardOne);
// // console.log("User flipped " + cardTwo);
// var cardsInPlay = [];//.length;

// var checkForMatch = function () {
// 	if (cards[cardsInPlay[0]].rank === cards[cardsInPlay[1]].rank) {
// 		alert("You found a match!.");
// 	} 
// 	else {
// 		alert("Sorry, try again.");
// 	}
// 	cardsInPlay = [];
// }

// var flipCard = function (cardId) {
// 	if (cardsInPlay.length > 0 && cardsInPlay[0] === cardId){
// 		alert("You already selected that card.");
// 	} else {
// 		cardsInPlay.push(cardId);
// 		console.log("User flipped: " + cards[cardId].rank);
// 		console.log(cards[cardId].cardImage);

// 		if (cardsInPlay.length === 2) { //&& cardsInPlay === [0] [2])
// 			console.log("two cards flipped.");
		
// 			checkForMatch();	

// 		}
// 	}
	
// 	// var cardOne = [cards[0]];
// 	// cardsInPlay.push(cardO;
// 	// console.log("User flipped " + cardOne);

// 	// var cardTwo = [cards[2]];
// 	// cardsInPlay.push(cardTwo);
// 	// console.log("User flipped " + cardTwo);
// };
// flipCard(0);
// flipCard(1);


// var cardOne = [cards[0]];
// 	cardsInPlay.push(cardOne);
// 	console.log("User flipped " + cardOne);

// var cardTwo = [cards[2]];
// 	cardsInPlay.push(cardTwo);
// 	console.log("User flipped " + cardTwo);

// // var cardThree = [cards[2]];
// // 	cardsInPlay.push(cardThree);
// // 	console.log("User flipped " + cardThree);

// // var cardFour = [cards[3]];
// // 	cardsInPlay.push(cardFour);
// // 	console.log("User flipped " + cardFour);

// if (cardsInPlay.length === 2) { //&& cardsInPlay === [0] [2])
// 	console.log("two cards flipped.");
// }	
// if (cardsInPlay [0] === [1]) {
// 	alert("You found a match!.");
// } 
// else {
// 	alert("Sorry, try again.");
// }
//else if (cardsInPlay[0] === cardsInPlay[1]) {
// 			alert("You found a match!");
// 	// console.log("Sorry! Try again.");
// }	else {
//alert("You found a match!");
// alert("Sorry! Try again.");
// }
// console.log("Up and running!");
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

