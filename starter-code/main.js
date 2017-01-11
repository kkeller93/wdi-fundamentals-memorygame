console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var	cardFour = "king";

/*if (cardOne === cardTwo || cardThree === cardFour) {
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
		game.appendChild(newDiv);
	};
}

createCards();