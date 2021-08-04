const suiteToCharacter = {
    c: '♣',
    d: '♦',
    h: '♥',
    s: '♠',
}

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

    shuffle() {
        for (let i = 0; i < 500; i++) {
            const cardSelect1 = Math.floor(Math.random() * 52)
            const cardSelect2 = Math.floor(Math.random() * 52)
            const swap = this._cards[cardSelect1]
            this._cards[cardSelect1] = this._cards[cardSelect2]
            this._cards[cardSelect2] = swap
        }
    }

    sort() {
        this._cards.sort((a, b) => {
            if (a.index < b.index) return -1
            if (a.index > b.index) return 1
            return 0
        })
    }

    toString() {
        let res = ''
        this._cards.forEach((card) => {
            res += ` ${card.value === '0' ? '10' : card.value}${suiteToCharacter[card.suite]}`
        })
        return res.trimLeft()
    }
}
