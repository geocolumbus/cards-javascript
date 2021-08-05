const HandType = require('../src/handType')
const Hand = require('../src/hand')

const check = ({
    myHand,
    isPair = false,
    isTwoPair = false,
    isThreeOfAKind = false,
    isStraight = false,
    isFlush = false,
    isFullHouse = false,
    isFourOfAKind = false,
    isStraightFlush = false,
    isRoyalFlush = false,
}) => {
    expect(HandType.isPair(myHand)).toEqual(isPair)
    expect(HandType.isTwoPair(myHand)).toEqual(isTwoPair)
    expect(HandType.isThreeOfAKind(myHand)).toEqual(isThreeOfAKind)
    expect(HandType.isStraight(myHand)).toEqual(isStraight)
    expect(HandType.isFlush(myHand)).toEqual(isFlush)
    expect(HandType.isFullHouse(myHand)).toEqual(isFullHouse)
    expect(HandType.isFourOfAKind(myHand)).toEqual(isFourOfAKind)
    expect(HandType.isStraightFlush(myHand)).toEqual(isStraightFlush)
    expect(HandType.isRoyalFlush(myHand)).toEqual(isRoyalFlush)
}

describe('Hand type', () => {
    it('should handle no types', () => {
        const myHand = new Hand()
        myHand.add({ value: '2', suite: 'c', index: 0 })
        myHand.add({ value: '3', suite: 'c', index: 4 })
        myHand.add({ value: '8', suite: 's', index: 27 })
        myHand.add({ value: '5', suite: 'c', index: 12 })
        myHand.add({ value: '6', suite: 'c', index: 16 })
        check({ myHand })
    })
    it('should handle one pair', () => {
        const myHand = new Hand()
        myHand.add({ value: '2', suite: 'c', index: 0 })
        myHand.add({ value: '2', suite: 'd', index: 1 })
        myHand.add({ value: '3', suite: 'c', index: 4 })
        myHand.add({ value: '4', suite: 'c', index: 8 })
        myHand.add({ value: '5', suite: 'c', index: 12 })
        check({ myHand, isPair: true })
    })

    it('should handle two pair', () => {
        const myHand = new Hand()
        myHand.add({ value: '2', suite: 'c', index: 0 })
        myHand.add({ value: '4', suite: 'c', index: 8 })
        myHand.add({ value: '4', suite: 'h', index: 10 })
        myHand.add({ value: '5', suite: 'c', index: 12 })
        myHand.add({ value: '2', suite: 'd', index: 1 })
        check({ myHand, isTwoPair: true })
    })
    it('should handle three of a kind', () => {
        const myHand = new Hand()
        myHand.add({ value: '4', suite: 's', index: 11 })
        myHand.add({ value: '2', suite: 'd', index: 1 })
        myHand.add({ value: '4', suite: 'c', index: 8 })
        myHand.add({ value: '4', suite: 'h', index: 10 })
        myHand.add({ value: '5', suite: 'c', index: 12 })
        check({ myHand, isThreeOfAKind: true })
    })
    it('should handle a straight', () => {
        const myHand = new Hand()
        myHand.add({ value: '2', suite: 'c', index: 0 })
        myHand.add({ value: '3', suite: 'd', index: 5 })
        myHand.add({ value: '4', suite: 'c', index: 8 })
        myHand.add({ value: '5', suite: 'c', index: 12 })
        myHand.add({ value: '6', suite: 'c', index: 16 })
        check({ myHand, isStraight: true })
    })
    it('should handle a flush', () => {
        const myHand = new Hand()
        myHand.add({ value: '2', suite: 'c', index: 0 })
        myHand.add({ value: '4', suite: 'c', index: 8 })
        myHand.add({ value: '5', suite: 'c', index: 12 })
        myHand.add({ value: 'K', suite: 'c', index: 44 })
        myHand.add({ value: 'A', suite: 'c', index: 48 })
        check({ myHand, isFlush: true })
    })
    it('should handle a full house', () => {
        const myHand = new Hand()
        myHand.add({ value: '2', suite: 'c', index: 0 })
        myHand.add({ value: '2', suite: 's', index: 3 })
        myHand.add({ value: '3', suite: 'd', index: 5 })
        myHand.add({ value: '3', suite: 'h', index: 6 })
        myHand.add({ value: '2', suite: 'd', index: 1 })
        check({ myHand, isFullHouse: true })
    })
    it('should handle four of a kind', () => {
        const myHand = new Hand()
        myHand.add({ value: '2', suite: 'c', index: 0 })
        myHand.add({ value: '2', suite: 'd', index: 1 })
        myHand.add({ value: '3', suite: 'd', index: 5 })
        myHand.add({ value: '2', suite: 'h', index: 2 })
        myHand.add({ value: '2', suite: 's', index: 3 })
        check({ myHand, isFourOfAKind: true })
    })
    it('should handle a straight flush', () => {
        const myHand = new Hand()
        myHand.add({ value: '2', suite: 'c', index: 0 })
        myHand.add({ value: '3', suite: 'c', index: 5 })
        myHand.add({ value: '4', suite: 'c', index: 8 })
        myHand.add({ value: '5', suite: 'c', index: 12 })
        myHand.add({ value: '6', suite: 'c', index: 16 })
        check({ myHand, isStraightFlush: true })
    })
    it('should handle a royal flush', () => {
        const myHand = new Hand()
        myHand.add({ value: '10', suite: 's', index: 35 })
        myHand.add({ value: 'J', suite: 's', index: 39 })
        myHand.add({ value: 'Q', suite: 's', index: 43 })
        myHand.add({ value: 'K', suite: 's', index: 47 })
        myHand.add({ value: 'A', suite: 's', index: 51 })
        check({ myHand, isRoyalFlush: true })
    })
})
