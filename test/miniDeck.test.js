const MiniDeck = require('../src/miniDeck')

const { miniDeck } = MiniDeck

describe('MiniDeck tests', () => {
    it('should create a deck', () => {
        expect(miniDeck.hello).toEqual('hello')
    })
})
