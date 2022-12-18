class Player {
  constructor() {
    //this.name = name;
    this.hand = []
  }
}

class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}
let loopBreak=false;
let card = new Card('hearts', 'King', 13)
//console.log(card)

class Deck {
  constructor() {
    this.cards = []
    this.hand1 = []
    this.hand2 = []
    this.warPile = []
    this.memory = []
    this.createDeck()
    this.shuffleDeck()
    this.dealDeck()
  }

  createDeck() {

    let suit = ['Spades', 'Clubs', 'Hearts', 'Diamonds']
    let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Joker', 'Queen', 'King', 'Ace']
    let score = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        this.cards.push(new Card(suit[i], rank[j], j + 2))

      }
    }
  }
  RandomDraw() {
    let randomInt = Math.floor(Math.random() * this.card.length)
    console.log (this.cards[randomInt])
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  dealDeck() {
    this.hand1 = this.cards.splice(0, Math.ceil(this.cards.length / 2))
    this.hand2 = this.cards
  }
}
// need a deck object to access this stuff
let myDeck = new Deck()

let count = 0;
while (myDeck.hand1.length > 0 && myDeck.hand2.length > 0) {

  //for (let i = 0; i <= 10; i++) {
  count++;
  let p1 = myDeck.hand1[0]
  let p2 = myDeck.hand2[0]
  myDeck.warPile.push(myDeck.hand1.shift())
  myDeck.warPile.push(myDeck.hand2.shift())

  console.log('WAR PILE:', myDeck.warPile)

  if (p1.score > p2.score) {
    console.log(`Player 1 plays ${p1.rank} of ${p1.suit} and wins vs. ${p2.rank} of ${p2.suit}`)
    myDeck.hand1.push(...myDeck.warPile)
    myDeck.warPile.splice(0, myDeck.warPile.length)
    console.log(`Current Score: P1= ${myDeck.hand1.length}, P2= ${myDeck.hand2.length}`)
  }
  else if (p1.score < p2.score) {
    console.log(`Player 2 plays ${p2.rank} of ${p2.suit} and wins vs. ${p1.rank} of ${p1.suit}`)
    myDeck.hand2.push(...myDeck.warPile)
    // myDeck.hand2.push(myDeck.hand1.shift())
    //myDeck.hand2.push(myDeck.hand2.shift())
    myDeck.warPile.splice(0, myDeck.warPile.length)
    console.log(`Current Score: P1= ${myDeck.hand1.length}, P2= ${myDeck.hand2.length}`)
  }
  else if (p1.score == p2.score) {
if (myDeck.hand2.length <= 3 || myDeck.hand1.length <= 3) {
  loopBreak = true;
  console.log("GAME OVER NOT ENOUGH CARDS FOR WAR... FINAL SCORE Player 1: " + myDeck.hand1.length + " Player 2: " + myDeck.hand2.length)
}
else if (myDeck.hand1[2].rank > myDeck.hand2[2].rank) {
  myDeck.hand1.push(p1)
  myDeck.hand2.shift(p2)
  myDeck.hand1.push(myDeck.hand2[1])
  myDeck.hand2.shift(myDeck.hand2[1])
  myDeck.hand1.push(myDeck.hand2[2])
  myDeck.hand2.shift(myDeck.hand2[2])
  myDeck.hand1.push(myDeck.hand2[3])
  myDeck.hand2.shift(myDeck.hand2[3])
  console.log(" WAR PLAY. Player 1 wins with " + myDeck.hand1.length)

} else if (myDeck.hand1[2].rank < myDeck.hand2[2].rank) {
  myDeck.hand2.push(p1);
 myDeck.hand1.shift(p1)
  myDeck.hand2.push(myDeck.hand1[1])
  myDeck.hand1.shift(myDeck.hand1[1])
  myDeck.hand2.push(myDeck.hand2[2])
  myDeck.hand1.shift(myDeck.hand1[2])
  myDeck.hand2.push(myDeck.hand1[3])
  myDeck.hand1.shift(myDeck.hand1[3])
  console.log(" WAR PLAY. Player 2 wins with " + myDeck.hand2.length)

} else if (myDeck.hand1[2].rank == myDeck.hand2[2].rank) {
  myDeck.hand2.push(myDeck.hand1[0])
  myDeck.hand1.shift()
 myDeck.hand1.push(myDeck.hand2[0])
  myDeck.hand2.shift()
}

}
else {
console.log("Game stopped working")
}

if (myDeck.hand1.length > 51) {
console.log("Game Over. Player 1 wins with a score of " + myDeck.hand1.length)
}
if (myDeck.hand2.length > 51) {
console.log("Game Over.s Player 2 wins with a score of " + myDeck.hand2.length)
}
}
while (myDeck.hand1.length < 52 && myDeck.hand2.length < 52) {
if (loopBreak == true) break;
compareScores()
}