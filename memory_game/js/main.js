console.log("Up and running!");

var cards = [
{
	rank: "Queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
},
{
    rank: "Queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];
var cardsInPlay = [];
var checkForMatch = function() {
    this.setAttribute('src', cards[0].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
	    console.log('You found a match!'); }
	else {
	    console.log('Sorry, try again.'); }
}
var flipCard = function() {
	 
	  console.log('User flipped ' + cards[cardId].rank);
      cardsInPlay.push(cardId).rank;
      console.log(cards[cardId].cardImage);
      console.log(cards[cardId].suit); 
  }
var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', 'i');
		cardElement.addEventListener('click', flipCard);
		document.getElementById.('game-board').appendChild(node);
}
};
createBoard();
       
	   
	
