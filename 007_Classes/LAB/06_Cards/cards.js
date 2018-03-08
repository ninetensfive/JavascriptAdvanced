let result = function cards() {
    const Suits = {
        SPADES: '\u2660',
        HEARTS: '\u2665',
        DIAMONDS: '\u2666',
        CLUBS: '\u2663'
    };

    const Faces = cardsInit();

    class Card{
        constructor(face, suit){
            this.face = face;
            this.suit = suit;
        }

        get face(){
            return this._face;
        }

        get suit(){
            return this._suit;
        }

        set face(newFace){
            if(!Faces.includes(newFace)){
                throw new Error("Invalid card face: " + newFace);
            }

            this._face = newFace;
        }

        set suit(newSuit){
            if(!Object.keys(Suits).map(k => Suits[k]).includes(newSuit)){
                throw new Error("Invalid card suit: " + newSuit);
            }

            this._suit = newSuit;
        }

        toString(){
            return this.face + this.suit;
        }
    }

    return {Suits, Card};

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

}();

let card = result.Card;
let suits = result.Suits;

let cardObj = new card('2', suits.CLUBS);
console.log(cardObj.toString());