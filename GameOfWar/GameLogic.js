// Create the hand for each player (this is a shuffled Deck, divided by the number of players)
class Player {
    constructor() {
      //this.name = name;
      this.hand = []
    }
  }
  //Create each individual card- this will then be added to the deck array.
  class Card {
    constructor(suit, rank, score) {
      this.suit = suit
      this.rank = rank
      this.score = score
    }
  }
//create an array which will be a deck of cards containing 52 cards.
  class Deck {
    constructor() {
      this.cards = []
      this.hand1 = []
      this.hand2 = []
      this.pile = []
      this.memory = []
      this.warPile=[]
      this.createDeck()
      this.shuffleDeck()
      this.dealDeck()
      this.goToWar()
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
    // draw() {
    //   return this.cards[Math.floor(Math.random() * this.cards.length)]
    // }
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
  goToWar() {}
    this.player1War = myDeck.hand1.splice(0,2)
    this.player2War = myDeck.hand2.splice(0.2)
  }
// Needed a deck in scope to access
  let myDeck = new Deck()
  
  let count = 0;
  while (myDeck.hand1.length > 0 && myDeck.hand2.length > 0) {
      count++;
    let p1 = myDeck.hand1[0]
    let p2 = myDeck.hand2[0]
//minimum amount of cards needed to start war
    let cardMinimum = 3
    //add player 1's first card to the war pile
    myDeck.pile.push(myDeck.hand1.shift())
// add player 2's first card to the war pile
    myDeck.pile.push(myDeck.hand2.shift())
  
    console.log('Pile:', myDeck.pile)
  
    // Instance 1: Player 1 has a higher score
    if (p1.score > p2.score) {
      console.log(`Player 1 plays ${p1.rank} of ${p1.suit} and takes the win versus ${p2.rank} of ${p2.suit}`)
      myDeck.hand1.push(...myDeck.pile)
            //Push the card player 1 just won into their deck
      myDeck.pile.splice(0, myDeck.pile.length)
      console.log(`Current Score: P1= ${myDeck.hand1.length}, P2= ${myDeck.hand2.length}`)
    }
    // Instance 2: Player 2 has a higher score
    else if (p1.score < p2.score) {
      console.log(`Player 2 plays ${p2.rank} of ${p2.suit} and takes the win versus ${p1.rank} of ${p1.suit}`)
      myDeck.hand2.push(...myDeck.pile)
      //Push the card player 2 just won into their deck
      myDeck.pile.splice(0, myDeck.pile.length)
      console.log(`Current Score: P1= ${myDeck.hand1.length}, P2= ${myDeck.hand2.length}`)
    }

    // Instance 3: Player 1 & 2 are tied 
    else if (p1.score === p2.score) {
      console.log(`Player 1 plays ${p1.rank} of ${p1.suit} and is countered by Player 2 with ${p2.rank} of ${p2.suit} `)
      console.log("Let's go to war")

      // Instance 3.1 : Player doesn't have enough cards to go to war.
      if (myDeck.hand1.length <= cardMinimum) {
        console.log('Player 1 does not have enough cards to survive a round of war. Player 2 has won!')
     // Instance 3.2 : Player 2 doesn't have enough cards to go to war
      } else if (myDeck.hand2.length <= cardMinimum) {
        console.log('Player 2 does not have enough cards to survive a round of war. Player 1 has won!')
        // }
      } 
      
      else if {
        // Instance 3.3: Players go to war. 
        while ((p1.score === p2.score) && p1.score>cardMinimum && p2.score>cardMinimum)
        console.log ('We are going to war')
        goToWar ()
        //add player1 & 2's card to the war pile 
        for (let i = 0; i < 3; i++) {
        myDeck.warPile.push(myDeck.hand1.shift())
        myDeck.warPile.push(myDeck.hand2.shift())

        if (player1War.score > player2War.score){
        console.log('Player 1 is victorious. Good Game.')
        myDeck.hand1.push(...myDeck.warPile)
    }
        else if (player2War.score>player1War.score){
        console.log('Player 2 is victorious. Good Game.')
        myDeck.hand2.push(...myDeck.warPile)
    }
        else {
        console.log ('We are going to war again')
        goToWar()
        for (let i = 0; i < 3; i++) {
          myDeck.warPile.push(myDeck.hand1.shift())
          myDeck.warPile.push(myDeck.hand2.shift())
          goToWar ()
        }
        }
      }
      }
    }