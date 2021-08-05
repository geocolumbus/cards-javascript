const _pairCount = (hand) => {
    let pairCount = 0
    let c1 = 0
    while (c1 < 4) {
        let c2 = c1 + 1
        while (c2 < 5) {
            if (hand.cards[c1].value === hand.cards[c2].value) {
                pairCount += 1
            }
            c2 += 1
        }
        c1 += 1
    }
    return pairCount
}

const _isPair = (hand) => _pairCount(hand) === 1

const _isTwoPair = (hand) => _pairCount(hand) === 2

const _isFullHouse = (hand) => (
    hand.cards[0].value === hand.cards[1].value
    && hand.cards[1].value === hand.cards[2].value
    && hand.cards[2].value !== hand.cards[3].value
    && hand.cards[3].value === hand.cards[4].value
) || (
    hand.cards[0].value === hand.cards[1].value
    && hand.cards[1].value !== hand.cards[2].value
    && hand.cards[2].value === hand.cards[3].value
    && hand.cards[3].value === hand.cards[4].value)

const _isFourOfAKind = (hand) => (
    hand.cards[0].value === hand.cards[1].value
    && hand.cards[1].value === hand.cards[2].value
    && hand.cards[2].value === hand.cards[3].value
    && hand.cards[3].value !== hand.cards[4].value
) || (hand.cards[0].value !== hand.cards[1].value
    && hand.cards[1].value === hand.cards[2].value
    && hand.cards[2].value === hand.cards[3].value
    && hand.cards[3].value === hand.cards[4].value
)

const _isThreeOfAKind = (hand) => {
    let isThreeOfAKind = false
    let c1 = 0
    while (c1 < 3) {
        if (hand.cards[c1].value === hand.cards[c1 + 1].value
            && hand.cards[c1].value === hand.cards[c1 + 2].value) {
            isThreeOfAKind = true
        }
        c1 += 1
    }
    return !_isFullHouse(hand) && !_isFourOfAKind(hand) && isThreeOfAKind
}

const _straight = (hand) => {
    let isStraight = true
    for (let i = 0; i < 4; i += 1) {
        if (Math.floor(hand.cards[i].index / 4)
            !== Math.floor(hand.cards[i + 1].index / 4) - 1) {
            isStraight = false
        }
    }
    return isStraight
}

const _flush = (hand) => {
    let isFlush = true
    for (let i = 0; i < 4; i += 1) {
        if (hand.cards[i].suite
            !== hand.cards[i + 1].suite) {
            isFlush = false
        }
    }
    return isFlush
}

const _straightFlush = (hand) => _flush(hand) && _straight(hand)

const _isRoyalFlush = (hand) => _straightFlush(hand) && hand.cards[0].value === '10'

const _isStraightFlush = (hand) => _straightFlush(hand) && !_isRoyalFlush(hand)

const _isStraight = (hand) => _straight(hand) && !_isStraightFlush(hand) && !_isRoyalFlush(hand)

const _isFlush = (hand) => _flush(hand) && !_isStraightFlush(hand) && !_isRoyalFlush(hand)

module.exports.isPair = _isPair
module.exports.isTwoPair = _isTwoPair
module.exports.isThreeOfAKind = _isThreeOfAKind
module.exports.isStraight = _isStraight
module.exports.isFlush = _isFlush
module.exports.isFullHouse = _isFullHouse
module.exports.isFourOfAKind = _isFourOfAKind
module.exports.isStraightFlush = _isStraightFlush
module.exports.isRoyalFlush = _isRoyalFlush
