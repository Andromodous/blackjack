"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hand = void 0;
var Hand = /** @class */ (function () {
    function Hand(Hand) {
        this.hand = Hand;
    }
    Hand.prototype.current = function () {
        var total = 0;
        var aceExists = false;
        for (var _i = 0, _a = this.hand; _i < _a.length; _i++) {
            var card = _a[_i];
            var val = card.value;
            switch (val) {
                case 1:
                    10 >= total ? total += 11 : total += 1;
                    aceExists = true;
                    break;
                case 11:
                case 12:
                case 13:
                    total += 10;
                    break;
                default:
                    total += val;
                    break;
            }
        }
        if (aceExists && total > 21)
            total -= 10;
        return total;
    };
    Hand.prototype.bust = function () {
        return this.current() > 21;
    };
    Hand.prototype.toString = function () {
        return this.hand;
    };
    Hand.prototype.add = function (card) {
        this.hand = __spreadArray(__spreadArray([], this.hand, true), [card], false);
    };
    Hand.prototype.has = function (value) {
        for (var _i = 0, _a = this.hand; _i < _a.length; _i++) {
            var card = _a[_i];
            if (card.cardValue() === value) {
                return true;
            }
        }
        return false;
    };
    Hand.prototype.blackJack = function () {
        return this.has(1) && this.has(10);
    };
    Hand.prototype.beat = function (hand) {
        return this.current() > hand.current();
    };
    return Hand;
}());
exports.Hand = Hand;
//# sourceMappingURL=Hand.js.map