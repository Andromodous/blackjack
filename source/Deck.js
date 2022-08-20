"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deck = void 0;
var Card_1 = require("./Card");
var Deck = /** @class */ (function () {
    function Deck() {
        this.deck = [];
        this.cardsInUse = new Set();
        for (var i_1 = 1; i_1 <= 13; i_1++) {
            this.deck.push(new Card_1.Card(i_1, Card_1.Suit.CLUBS));
            this.deck.push(new Card_1.Card(i_1, Card_1.Suit.DIAMONDS));
            this.deck.push(new Card_1.Card(i_1, Card_1.Suit.HEARTS));
            this.deck.push(new Card_1.Card(i_1, Card_1.Suit.SPADES));
        }
        for (var i = this.deck.length - 1; i > 0; i--) { //shuffle the deck
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
    Deck.prototype.select = function () {
        var card = null; //this improved implementation uses a Set for O(1) lookup but will have O(n) space
        do {
            var chosen = Math.floor(Math.random() * this.deck.length);
            card = this.deck[chosen];
        } while (this.cardsInUse.has(card));
        {
        }
        this.cardsInUse.add(card);
        return card;
    };
    Deck.prototype.toString = function () {
        for (var _i = 0, _a = this.deck; _i < _a.length; _i++) {
            var card = _a[_i];
            console.log(card.toString());
        }
    };
    return Deck;
}());
exports.Deck = Deck;
//# sourceMappingURL=Deck.js.map