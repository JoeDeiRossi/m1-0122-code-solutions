console.log('Lodash is loaded:', typeof _ !== 'undefined');

var playerArray = [
  { name: 'Al', hand: [] },
  { name: 'Bill', hand: [] },
  { name: 'Cher', hand: [] },
  { name: 'Don', hand: [] }
];

var deck = [
  { rank: 'Ace', suit: 'clubs', value: 11 },
  { rank: '2', suit: 'clubs', value: 2 },
  { rank: '3', suit: 'clubs', value: 3 },
  { rank: '4', suit: 'clubs', value: 4 },
  { rank: '5', suit: 'clubs', value: 5 },
  { rank: '6', suit: 'clubs', value: 6 },
  { rank: '7', suit: 'clubs', value: 7 },
  { rank: '8', suit: 'clubs', value: 8 },
  { rank: '9', suit: 'clubs', value: 9 },
  { rank: '10', suit: 'clubs', value: 10 },
  { rank: 'Jack', suit: 'clubs', value: 10 },
  { rank: 'Queen', suit: 'clubs', value: 10 },
  { rank: 'King', suit: 'clubs', value: 10 },
  { rank: 'Ace', suit: 'diamonds', value: 11 },
  { rank: '2', suit: 'diamonds', value: 2 },
  { rank: '3', suit: 'diamonds', value: 3 },
  { rank: '4', suit: 'diamonds', value: 4 },
  { rank: '5', suit: 'diamonds', value: 5 },
  { rank: '6', suit: 'diamonds', value: 6 },
  { rank: '7', suit: 'diamonds', value: 7 },
  { rank: '8', suit: 'diamonds', value: 8 },
  { rank: '9', suit: 'diamonds', value: 9 },
  { rank: '10', suit: 'diamonds', value: 10 },
  { rank: 'Jack', suit: 'diamonds', value: 10 },
  { rank: 'Queen', suit: 'diamonds', value: 10 },
  { rank: 'King', suit: 'diamonds', value: 10 },
  { rank: 'Ace', suit: 'hearts', value: 11 },
  { rank: '2', suit: 'hearts', value: 2 },
  { rank: '3', suit: 'hearts', value: 3 },
  { rank: '4', suit: 'hearts', value: 4 },
  { rank: '5', suit: 'hearts', value: 5 },
  { rank: '6', suit: 'hearts', value: 6 },
  { rank: '7', suit: 'hearts', value: 7 },
  { rank: '8', suit: 'hearts', value: 8 },
  { rank: '9', suit: 'hearts', value: 9 },
  { rank: '10', suit: 'hearts', value: 10 },
  { rank: 'Jack', suit: 'hearts', value: 10 },
  { rank: 'Queen', suit: 'hearts', value: 10 },
  { rank: 'King', suit: 'hearts', value: 10 },
  { rank: 'Ace', suit: 'spades', value: 11 },
  { rank: '2', suit: 'spades', value: 2 },
  { rank: '3', suit: 'spades', value: 3 },
  { rank: '4', suit: 'spades', value: 4 },
  { rank: '5', suit: 'spades', value: 5 },
  { rank: '6', suit: 'spades', value: 6 },
  { rank: '7', suit: 'spades', value: 7 },
  { rank: '8', suit: 'spades', value: 8 },
  { rank: '9', suit: 'spades', value: 9 },
  { rank: '10', suit: 'spades', value: 10 },
  { rank: 'Jack', suit: 'spades', value: 10 },
  { rank: 'Queen', suit: 'spades', value: 10 },
  { rank: 'King', suit: 'spades', value: 10 }
];

function shuffleDeck(deck) {
  var shuffledDeck = [];
  while (deck.length > 0) {
    var randomIndex = Math.floor(Math.random() * deck.length);
    var randomCard = deck[randomIndex];
    shuffledDeck.push(randomCard);
    deck.splice(randomIndex, 1);
  }
  return shuffledDeck;
}

function dealCards(playerArray, cardsPerPlayer) {
  var shuffledDeck = shuffleDeck(deck);
  while (cardsPerPlayer > 0) {
    for (let i = 0; i < playerArray.length; i++) {
      var dealtCard = shuffledDeck.shift();
      playerArray[i].hand.push(dealtCard);
    }
    cardsPerPlayer--;
  }
  return playerArray;
}

function determineWinner(playerArray) {
  if (playerArray[0].hand.length === 0) {
    console.log('Cards have not been dealt yet!');
    return;
  }

  var winner = {
    name: 'placeholder',
    score: 0
  };

  for (let i = 0; i < playerArray.length; i++) {
    var currentPlayer = playerArray[i];
    currentPlayer.score = 0;
    for (let j = 0; j < currentPlayer.hand.length; j++) {
      var cardValue = currentPlayer.hand[j].value;
      currentPlayer.score += cardValue;
    }
    if (currentPlayer.score > winner.score) {
      winner = currentPlayer;
    }
  }

  console.log(`The winner is ${winner.name} with ${winner.score} points!`);
}

function playHand() {
  dealCards(playerArray, 2);
  determineWinner(playerArray);
}

playHand();
