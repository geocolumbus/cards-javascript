const Deck = require('./deck')

const myDeck = new Deck()
console.log(`This is how the cards are represented:\n${myDeck}`)
myDeck.shuffle()
console.log(`\nAfter shuffling:\n${myDeck}`)
myDeck.sort()
console.log(`\nAfter sorting:\n${myDeck}`)
