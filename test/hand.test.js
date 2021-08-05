const Hand = require('../src/hand')

describe('Playing hand', () => {
    it('should create a hand', () => {
        const myHand = new Hand()
        expect(myHand.cards).toEqual([])
    })
    it('should add cards', () => {
        const myHand = new Hand()
        myHand.add({ value: '7', suite: 'c', index: 20 })
        myHand.add({ value: 'J', suite: 'h', index: 38 })
        expect(myHand.cards).toEqual([
            { value: '7', suite: 'c', index: 20 },
            { value: 'J', suite: 'h', index: 38 },
        ])
    })
})
