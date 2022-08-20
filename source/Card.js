"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.Suit = void 0;
var Suit;
(function (Suit) {
    Suit[Suit["HEARTS"] = 1] = "HEARTS";
    Suit[Suit["DIAMONDS"] = 2] = "DIAMONDS";
    Suit[Suit["CLUBS"] = 3] = "CLUBS";
    Suit[Suit["SPADES"] = 4] = "SPADES";
})(Suit = exports.Suit || (exports.Suit = {}));
var Card = /** @class */ (function () {
    function Card(value, suit) {
        this._value = value;
        this._suit = suit;
    }
    Object.defineProperty(Card.prototype, "value", {
        get: function () {
            return this._value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "Suit", {
        get: function () {
            return this._suit;
        },
        enumerable: false,
        configurable: true
    });
    Card.prototype.cardValue = function () {
        return this._value > 10 ? 10 : this._value;
    };
    Card.prototype.toString = function () {
        var value = this._value;
        switch (this._value) {
            case 1:
                value = 'A';
                break;
            case 11:
                value = 'J';
                break;
            case 12:
                value = 'Q';
                break;
            case 13:
                value = 'K';
                break;
        }
        switch (this._suit) {
            case 1:
                return "".concat(value, "H");
            case 2:
                return "".concat(value, "D");
            case 3:
                return "".concat(value, "C");
            case 4:
                return "".concat(value, "S");
        }
    };
    return Card;
}());
exports.Card = Card;
//# sourceMappingURL=Card.js.map