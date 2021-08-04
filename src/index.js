const Deck = require('./deck')

const myDeck = new Deck()
console.log('This is how the cards are represented:\n')
console.log(JSON.stringify(myDeck.cards))
