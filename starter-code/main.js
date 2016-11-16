var cardOne = "queen";
var cardTwo = "king";
var cardThree = "queen";
var cardFour = "king";;

//if (cardTwo === cardFour) {
//	console.log(alert("You found a match!"));
//} else if (cardOne === cardThree) {
//	console.log(alert("You found a match!"));
//} else {
//	console.log(alert("Sorry, try again"));
//}

var gameBoard = document.getElementById('game-board');

var newCard = document.createElement('div');

var max = 3;

var createCards = window.onload = function() {
	for (x = 0; x <= max; x++) {
var newCard = document.createElement('div');
newCard.className = 'card';
gameBoard.appendChild(newCard);
}
}