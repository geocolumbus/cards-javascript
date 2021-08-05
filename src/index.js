const Deck = require('./deck')
const Hand = require('./hand')
const HandType = require('./handType')

let loop = true
let count = 0
while (loop) {
    const myDeck = new Deck()
    const myHand = new Hand()
    myDeck.shuffle()
    myDeck.deal({ hand: myHand })
    if (HandType.isFullHouse(myHand)) {
        console.log(`${count} ... ${myHand}`)
        loop = false
    }
    count += 1
}
