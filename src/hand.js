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
    }

    toString() {
        return Stringify.toString(this._cards)
    }
}
