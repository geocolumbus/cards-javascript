const Deck = require('../src/deck')

const myDeck = new Deck()

describe('Card deck', () => {
    it('Should create a deck', () => {
        expect(myDeck.cards[0]).toEqual({ index: 0, suite: 'c', value: '2' })
        expect(myDeck.cards[32]).toEqual({ index: 32, suite: 'c', value: '10' })
        expect(myDeck.cards[51]).toEqual({ index: 51, suite: 's', value: 'A' })
    })
})
