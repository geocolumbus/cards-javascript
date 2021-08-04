const Deck = require('../src/deck')

const myDeck = new Deck()

describe('Card deck', () => {
    it('Should create a deck', () => {
        expect(myDeck.cards[0]).toEqual({ index: 0, suite: 'c', value: '2' })
        expect(myDeck.cards[32]).toEqual({ index: 32, suite: 'c', value: '10' })
        expect(myDeck.cards[51]).toEqual({ index: 51, suite: 's', value: 'A' })
    })

    it('Should shuffle the deck', () => {
        myDeck.shuffle()
        const ordered = myDeck.cards[0].value === '2'
            && myDeck.cards[4].value === '3'
            && myDeck.cards[8].value === '4'
            && myDeck.cards[12].value === '5'
            && myDeck.cards[16].value === '6'
            && myDeck.cards[20].value === '7'
        expect(ordered).toEqual(false)
    })

    it('Should sort the deck', () => {
        myDeck.sort()
        const ordered = myDeck.cards[0].value === '2'
            && myDeck.cards[4].value === '3'
            && myDeck.cards[8].value === '4'
            && myDeck.cards[12].value === '5'
            && myDeck.cards[16].value === '6'
            && myDeck.cards[20].value === '7'
        expect(ordered).toEqual(true)
    })

    it('Should display a string version of the deck', () => {
        const deckString = '2♣ 2♦ 2♥ 2♠ 3♣ 3♦ 3♥ 3♠ 4♣ 4♦ 4♥ 4♠ 5♣ 5♦ 5♥ 5♠ 6♣ 6♦ 6♥ 6♠ 7♣ 7♦ 7♥ 7♠ 8♣ 8♦ 8♥ 8♠ 9♣ 9♦ 9♥ 9♠ 10♣ 10♦ 10♥ 10♠ J♣ J♦ J♥ J♠ Q♣ Q♦ Q♥ Q♠ K♣ K♦ K♥ K♠ A♣ A♦ A♥ A♠'
        expect(`${myDeck}`).toEqual(deckString)
    })
})
