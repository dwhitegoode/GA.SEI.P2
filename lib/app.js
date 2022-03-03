//Project 2 - WAR CARD GAME

//create a player class for our two players
class Player {
  constructor(name, cards) {
    this.name = name;
    this.cards = cards
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
console.log(myCard)
//shuffle deck of cards into random order

class Deck {
  constructor() {
    this.cards = []
    this.createDeck()
    this.shuffleDeck()
    this.shuffleArray()
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

  }

  shuffleArray() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
}

let myDeck = new Deck()
console.log(myDeck)

//let myDeck = new Deck()

//deal out half of the deck to each player

//player has array to hold their cards

//each turn player draws last card 

//if card is higher that player adds opponents card to deck

//if same, 4 cards are drawn and last is determined t







