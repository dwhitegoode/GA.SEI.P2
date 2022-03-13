//Project 2 - WAR CARD GAME

//create a player class for our two players
class Player {
  constructor(name) {
    this.name = name;
    this.hand = []

  }

}

//populate array of cards into an array
class Card {
  constructor(suite, rank, score) {
    this.suite = suite
    this.rank = rank
    this.score = score
  }
}

let myCard = new Card('heart', '10', 10)
//console.log(myCard)
//shuffle deck of cards into random order

class Deck {
  constructor() {
    this.length = 52
    this.cards = []

  }
  createDeck() {
    let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
    //let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    let suit = ['Spades', 'Hearts', 'Clubs', 'Diamonds']

    for (let i = 0; i < suit.length; i++) {
      for (let j = 0; j < rank.length; j++) {
        this.cards.push(new Card(suit[i], rank[j], j + 2))
      }
    }
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  // dealDeck() {
  //   this.hand1 = this.cards.splice(0, Math.ceil(this.cards.length / 2))
  //   this.hand2 = this.cards
  // }

}

//let myDeck = new Deck()

class WarGame {
  constructor() {
    this.myDeck = new Deck()
    this.P1 = new Player('Player 1')
    this.P2 = new Player('Player 2')
  }
}



//console.log(myDeck.hand1[0])
//console.log(myDeck)

//don't iterate through
//keep index you're looking at the same, i.e zero 

//remove the first index to the end of the pile each turn 
//have a war pile to add to when in war, collect the proceeds after each win
//deal with double war 

// let war = new War()
// console.log(war)




//deal out half of the deck to each player

//player has array to hold their cards

//each turn player draws last card 




//if card is higher that player adds opponents card to deck

//if same, 4 cards are drawn and last is determined t







