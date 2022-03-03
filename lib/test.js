class Test {
  constructor() {
    this.arr = ['a', 'b', 'c', 'd', 'e', 'f']
    this.hand1 = []
    this.hand2 = []
    this.dealDeck()
  }


  dealDeck() {
    this.hand1 = this.arr.splice(0, Math.ceil(this.arr.length / 2))
    this.hand2 = this.arr
  }
}

let newDeck = new Test()
console.log(newDeck)