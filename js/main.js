// console.log("Up and running!");
// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

var cards = ["queen","queen","king","king"];
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);
var cardsInPlay = [];//.length;
	cardsInPlay.length;

var cardOne = [cards[0]];
	cardsInPlay.push(cardOne);
	console.log("User flipped " + cardOne);

var cardTwo = [cards[2]];
	cardsInPlay.push(cardTwo);
	console.log("User flipped " + cardTwo);

// var cardThree = [cards[2]];
// 	cardsInPlay.push(cardThree);
// 	console.log("User flipped " + cardThree);

// var cardFour = [cards[3]];
// 	cardsInPlay.push(cardFour);
// 	console.log("User flipped " + cardFour);

if (cardsInPlay.length === 2) { //&& cardsInPlay === [0] [2])
	console.log("two cards flipped.");
}	
if (cardsInPlay [0] === [1]) {
	alert("You found a match!.");
} 
else {
	alert("Sorry, try again.");
}
//else if (cardsInPlay[0] === cardsInPlay[1]) {
// 			alert("You found a match!");
// 	// console.log("Sorry! Try again.");
// }	else {
//alert("You found a match!");
// alert("Sorry! Try again.");
// }
