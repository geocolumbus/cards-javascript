const Stringify = require('./stringify')

module.exports = class Hand {
    constructor(cards) {
        this._cards = cards || []
    }

    get cards() {
        return this._cards
    }

    add(card) {
        this._cards.push(card)
        this._sort()
    }

    _sort() {
        this._cards.sort((a, b) => {
            if (a.index < b.index) return -1
            if (a.index > b.index) return 1
            return 0
        })
    }

    toString() {
        return Stringify.toString(this._cards)
    }
}
