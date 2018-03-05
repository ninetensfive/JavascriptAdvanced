function createCard(card, suit){
    const VALID_CARDS = cardsInit();
    const VALID_SUITS = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    if(VALID_CARDS.indexOf(card) < 0){
        throw new Error('Invalid card!');
    }

    if(!VALID_SUITS.hasOwnProperty(suit)){
        throw new Error('Invalid suit!');
    }

    return {
        toString: function () {
            return card + VALID_SUITS[suit];
        }
    }

    function cardsInit() {
        let cards = [];
        for (var i = 2; i <= 10; i++) {
            cards.push(i.toString());
        }

        cards.push('J');
        cards.push('Q');
        cards.push('K');
        cards.push('A');

        return cards;
    }
}

console.log(createCard('2','H').toString());