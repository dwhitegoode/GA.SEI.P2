//Project 2 - WAR CARD GAME

//create a player class for our two players
class Player {
  constructor() {
    //this.name = name;
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
    this.cards = []
    this.hand1 = []
    this.hand2 = []
    this.memory = []
    this.createDeck()
    this.shuffleDeck()


    this.dealDeck()
    //this.draw();
    // this.tieDraw();

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

  dealDeck() {
    this.hand1 = this.cards.splice(0, Math.ceil(this.cards.length / 2))
    this.hand2 = this.cards
  }



  // draw() {
  //   let i = 0;
  //   while (myDeck.hand1.length || myDeck.hand2.length >= 0) {
  //     if (myDeck.hand1[i].score > myDeck.hand2[i].score) {
  //       myDeck.hand1.push(myDeck.hand2[i])
  //     } else if (myDeck.hand1[i].score < myDeck.hand2[i].score) {
  //       myDeck.hand2.push(myDeck.hand1[i])
  //     }
  //     // else if (myDeck.hand1[i].score === myDeck.hand2[i].score) {
  //     //   tieDraw();
  //     // }
  //   }

}
let myDeck = new Deck()
let i = 0
// while (i < 25) {
//   if (myDeck.hand1[i].score > myDeck.hand2[i].score) {
//     console.log(myDeck.hand1[i], 'player 1 wins turn against', myDeck.hand2[i])
//   } else {
//     console.log(myDeck.hand2[i], 'player 2 beats', myDeck.hand1[i])
//   }
//   i++
// }

console.log(myDeck.hand1.Card)

//don't iterate through
//keep index you're looking at the same, i.e zero 
//remove the first index to the end of the pile each turn 
//have a war pile to add to when in war, collect the proceeds after each win
//deal with double war 
//console the moves for each turn, what is played, what it beats, when war happens, when player losses/wins
//let i = 0;
// while (myDeck.hand1.length && myDeck.hand2.length >= 0) {
//   if (myDeck.hand1[i].score > myDeck.hand2[i].score) {
//     myDeck.hand1.push(myDeck.hand2[i])
//   } else if (myDeck.hand1[i].score < myDeck.hand2[i].score) {
//     myDeck.hand2.push(myDeck.hand1[i])
//   }
//   i++;
// }
      // else if (myDeck.hand1[i].score === myDeck.hand2[i].score) {
      //   tieDraw();
      // }




// class War {
//   constructor() {
//     this.draw();
//   }

// }

// let war = new War()
// console.log(war)




//console.log(myDeck)
//console.log(myDeck.hand1[0])
//console.log(myDeck)

//let p1Deck = new Deck()
//let myDeck = new Deck()

//deal out half of the deck to each player

//player has array to hold their cards

//each turn player draws last card 




//if card is higher that player adds opponents card to deck

//if same, 4 cards are drawn and last is determined t







