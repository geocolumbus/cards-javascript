const Deck = require('./deck')
const Hand = require('./hand')

const myDeck = new Deck()
const myHand = new Hand()

myDeck.shuffle()
myDeck.deal({ hand: myHand })
console.log(myHand.cards)
console.log(`${myHand}`)
