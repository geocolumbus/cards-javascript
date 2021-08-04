module.exports = class Deck {
    constructor() {
        const values = '234567890JQKA'
        const suites = 'cdhs'
        this._cards = []
        let index = 0
        for (const value of values) {
            for (const suite of suites) {
                this._cards.push({ value: value === '0' ? '10' : value, suite, index })
                index += 1
            }
        }
    }

    get cards() {
        return this._cards
    }
}
