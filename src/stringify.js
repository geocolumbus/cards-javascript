const _toString = function (cards) {
    const suiteToCharacter = {
        c: '♣',
        d: '♦',
        h: '♥',
        s: '♠',
    }
    let res = ''
    cards.forEach((card) => {
        res += ` ${card.value === '0' ? '10' : card.value}${suiteToCharacter[card.suite]}`
    })
    return res.trimLeft()
}

module.exports.toString = _toString
