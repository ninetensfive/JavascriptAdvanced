function printDeckOfCards(cards) {
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

    let result = '';
    for(let cardData of cards){
        let suit = cardData[cardData.length - 1];
        let card = cardData.substring(0, cardData.length - 1);

        try {
            result += createCard(card, suit) + ' ';
        }catch (e){
            console.log("Invalid card: " + cardData);
            return;
        }
    }

    console.log(result);
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);