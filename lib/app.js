//Project 2 - WAR CARD GAME

//create a player class for our two players
class Player {
  constructor() {
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
console.log(myCard)
//shuffle deck of cards into random order

class Deck {
  constructor() {
    this.length = 52
    this.cards = []
    //this.createDeck()
    //this.shuffleDeck()

  }
  // createDeck() {
  //   let rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']
  //   //let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  //   let suit = ['Spades', 'Hearts', 'Clubs', 'Diamonds']

  //   for (let i = 0; i < suit.length; i++) {
  //     for (let j = 0; j < rank.length; j++) {
  //       this.cards.push(new Card(suit[i], rank[j], j + 2))
  //     }
  //   }
  //}

  // shuffleDeck() {
  //   for (let i = this.cards.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  //   }
  // }
}

//let myDeck = new Deck()

class WarGame {
  constructor() {
    this.myDeck = new Deck()
    this.P1 = new Player('Player 1')
    this.P2 = new Player('Player 2')
  }

  dealDeck() {
    this.P1.hand = this.myDeck.splice(0, Math.ceil(this.myDeck.length / 2))
    this.P2.hand = this.myDeck
  }

  // commenceWar() {
  //   let warPile = [];
  //   let i = 0;
  //   let draw1 = this.P1.hand[0].score
  //   let draw2 = this.P2.hand[0].score
  //   warPile.push(this.P1.hand.shift())
  //   warPile.push(this.P2.hand.shift())

  //   while (this.P1.hand.length < 52 && this.P2.hand < 52) {
  //     if (this.P1.hand[0].score > this.P2.hand[0].score) {
  //       console.log('Player 1 plays ' + this.P1.hand[0] + ' and takes the win versus ' + this.P2.hand[0])
  //       this.P1.hand.push(...warPile)
  //       warPile.splice(0, warPile.length)
  //       //this.P1.hand.push(this.P2.hand.shift())

  //       //CHECK FOR WINNER
  //       // if (this.P1.hand.length === 0 || this.P2.hand === 0) {

  //       // }

  //     }
  //     else if (draw1 < draw2) {
  //       console.log('Player 2 plays ' + this.P2.hand[0] + ' and takes the win versus ' + this.P1.hand[0])
  //       this.P2.hand.push(...warPile)
  //       warPile.splice(0, warPile.length)
  //       //this.P2.hand.push(this.P1.hand.shift())

  //       //CHECK FOR WINNER
  //     }
  //     else if (draw1 === draw2) {
  //       console.log('Player 1 plays ' + this.P1.hand[0] + ' and is countered by Player 2 with ' + this.P2.hand[0])
  //       console.log('Commence War!')
  //       if (this.P1.hand.length <= 3 || this.P2.hand <= 3) {

  //         if (this.P1.hand.length > this.P2.hand) {
  //           console.log('Player 2 does not have enough cards to survive a round of war. Player 1 has won!')
  //         } else {
  //           console.log('Player 1 does not have enough cards to survive a round of war. Player 2 has won!')
  //         }
  //       }

  //       for (let i = 0; i <= 3; i++) {
  //         warPile.push(this.P1.hand.shift())
  //         warPile.push(this.P2.hand.shift())
  //       }
  //       // if (this.P1.hand.length <= 3) {
  //   console.log('Player 2 is victorious. Good Game.')
  // }
  // if (this.P2.hand.length <= 3) {
  //   console.log('Player 1 is victorious. Good Game')
  // }


  //}
  //}
  //if (this.P1.hand.length)
  //}

}

let war = new WarGame()

//war.dealDeck()
//war.commenceWar()
//console.log(war.commenceWar())



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







