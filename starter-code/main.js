console.log("JS file is connected to HTML! Woo!")
//var game = document.getElementById('game-board');

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var	cardFour = "king";*/

var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

var isMatch = function(cardsInPlay) {
	console.log(cardsInPlay);
	if (cardsInPlay[0] === 'queen' && cardsInPlay[1] === 'queen') {
		alert("You found a match!");
		//console.log("it works")
	}
	else if (cardsInPlay[0] === 'king' && cardsInPlay[1] === 'king') {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again");
		//return false
	}
}

var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('cardsInPlay'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		//console.log(cardsInPlay);
		cardsInPlay = [];
	}; 
}

/*var createBoard = function() {
	var game = document.getElementById('game-board');
	for (var i=0;i<cards.length;i++) {
		game.setAttribute('cardsInPlay',cards[i]);
		//console.log(cards[i]);
		game.addEventListener('click',isTwoCards);
		//cardsInPlay.push(cards[i])
		//console.log(cardsInPlay);
	};
}

<img src="king.png" alt="King" title="King">
<img src="queen.png" alt="Queen" title="Queen">

createBoard();*/

/*if (cards[0]=== cards[1] || cards[2] === cards[3]) {
	alert("You found a match!");
}
else {
	alert("Sorry, try again");
}*/

var createCards = function() {
	var game = document.getElementById('game-board');
	for (var i=0; i<4; i++) {
		var newDiv = document.createElement('div');
		newDiv.id = 'game-board';
		newDiv.className = 'card';
		newDiv.setAttribute('cardsInPlay', cards[i]);
		newDiv.addEventListener('click',isTwoCards);
		//newDivinnerHTML = '<img src="king.png" alt="King" title="King">';
		//newDiv.innerHTML = '<img src="queen.png" alt="Queen" title="Queen">';
		game.appendChild(newDiv);
	};
}

createCards();
