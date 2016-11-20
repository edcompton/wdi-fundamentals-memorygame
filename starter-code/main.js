var gameBoard = document.getElementById('game-board');

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var clearBoard = function () {
	var wipe = gameBoard;
	while (wipe.firstChild) {
		wipe.removeChild(wipe.firstChild);
	}
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
		gameBoard.appendChild(cardElement);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='King.png'>";
	} else {
		this.innerHTML = "<img src='Queen.png'>";
	} 
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
		clearBoard();
		createBoard();
	} else {
		alert("Sorry, try again");
		clearBoard();
		createBoard();
	}
}



createBoard();


//		for (var i = 0; i < cardsInPlay.length; i++) {
//				document.getAttribute('data-card').innerHTML = "";	