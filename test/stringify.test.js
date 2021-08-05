const Stringify = require('../src/stringify')

describe('Stringify', () => {
    it('Should display a string version of the deck', () => {
        const cards = [
            { value: '2', suite: 'c', index: 0 },
            { value: '2', suite: 'd', index: 1 },
            { value: '2', suite: 'h', index: 2 },
            { value: '2', suite: 's', index: 3 },
            { value: '3', suite: 'c', index: 4 },
            { value: '3', suite: 'd', index: 5 },
            { value: '3', suite: 'h', index: 6 },
            { value: '3', suite: 's', index: 7 },
            { value: '4', suite: 'c', index: 8 },
            { value: '4', suite: 'd', index: 9 },
            { value: '4', suite: 'h', index: 10 },
            { value: '4', suite: 's', index: 11 },
            { value: '5', suite: 'c', index: 12 },
            { value: '5', suite: 'd', index: 13 },
            { value: '5', suite: 'h', index: 14 },
            { value: '5', suite: 's', index: 15 },
            { value: '6', suite: 'c', index: 16 },
            { value: '6', suite: 'd', index: 17 },
            { value: '6', suite: 'h', index: 18 },
            { value: '6', suite: 's', index: 19 },
            { value: '7', suite: 'c', index: 20 },
            { value: '7', suite: 'd', index: 21 },
            { value: '7', suite: 'h', index: 22 },
            { value: '7', suite: 's', index: 23 },
            { value: '8', suite: 'c', index: 24 },
            { value: '8', suite: 'd', index: 25 },
            { value: '8', suite: 'h', index: 26 },
            { value: '8', suite: 's', index: 27 },
            { value: '9', suite: 'c', index: 28 },
            { value: '9', suite: 'd', index: 29 },
            { value: '9', suite: 'h', index: 30 },
            { value: '9', suite: 's', index: 31 },
            { value: '10', suite: 'c', index: 32 },
            { value: '10', suite: 'd', index: 33 },
            { value: '10', suite: 'h', index: 34 },
            { value: '10', suite: 's', index: 35 },
            { value: 'J', suite: 'c', index: 36 },
            { value: 'J', suite: 'd', index: 37 },
            { value: 'J', suite: 'h', index: 38 },
            { value: 'J', suite: 's', index: 39 },
            { value: 'Q', suite: 'c', index: 40 },
            { value: 'Q', suite: 'd', index: 41 },
            { value: 'Q', suite: 'h', index: 42 },
            { value: 'Q', suite: 's', index: 43 },
            { value: 'K', suite: 'c', index: 44 },
            { value: 'K', suite: 'd', index: 45 },
            { value: 'K', suite: 'h', index: 46 },
            { value: 'K', suite: 's', index: 47 },
            { value: 'A', suite: 'c', index: 48 },
            { value: 'A', suite: 'd', index: 49 },
            { value: 'A', suite: 'h', index: 50 },
            { value: 'A', suite: 's', index: 51 },
        ]
        const deckString = '2♣ 2♦ 2♥ 2♠ 3♣ 3♦ 3♥ 3♠ 4♣ 4♦ 4♥ 4♠ 5♣ 5♦ 5♥ 5♠ 6♣ 6♦ 6♥ 6♠ 7♣ 7♦ 7♥ 7♠ 8♣ 8♦ 8♥ 8♠ 9♣ 9♦ 9♥ 9♠ 10♣ 10♦ 10♥ 10♠ J♣ J♦ J♥ J♠ Q♣ Q♦ Q♥ Q♠ K♣ K♦ K♥ K♠ A♣ A♦ A♥ A♠'
        expect(Stringify.toString(cards)).toEqual(deckString)
    })
})
