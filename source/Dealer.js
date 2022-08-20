"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dealer = void 0;
var Hand_1 = require("./Hand");
var Player_1 = require("./Player");
var Deck_1 = require("./Deck");
var Dealer = /** @class */ (function () {
    function Dealer() {
        this.name = 'The Dealer';
        this.blackJack = false;
        this.hand = new Hand_1.Hand([]);
        this.Deck = new Deck_1.Deck();
        this.Players = [new Player_1.Player("TopG Berat"), this];
    }
    Dealer.prototype.use = function () {
        this.round();
        this.round();
        var winner = null;
        for (var _i = 0, _a = this.Players; _i < _a.length; _i++) {
            var player = _a[_i];
            if (player.hand.blackJack()) {
                winner = player;
                player.blackJack = true;
            }
        }
        if (!winner) {
            winner = this.play();
        }
        this.finalSCores();
        return winner;
    };
    Dealer.prototype.round = function () {
        for (var _i = 0, _a = this.Players; _i < _a.length; _i++) {
            var player = _a[_i];
            player.addCard(this.Deck);
        }
    };
    Dealer.prototype.play = function () {
        for (var _i = 0, _a = this.Players; _i < _a.length; _i++) {
            var player = _a[_i];
            var bust = player.haveTurn(this.Deck);
            if (!bust)
                break;
        }
        return this.decide();
    };
    Dealer.prototype.addCard = function (deck) {
        this.hand.add(deck.select());
    };
    Dealer.prototype.bust = function () {
        return this.hand.bust();
    };
    Dealer.prototype.current = function () {
        return this.hand.current();
    };
    Dealer.prototype.print = function () {
        var printCards = '';
        for (var _i = 0, _a = this.hand.hand; _i < _a.length; _i++) {
            var card = _a[_i];
            printCards += card.toString() + ' ';
        }
        return printCards;
    };
    Dealer.prototype.beat = function () {
        return true;
    };
    Dealer.prototype.finalSCores = function () {
        console.log('\n');
        for (var _i = 0, _a = this.Players; _i < _a.length; _i++) {
            var player = _a[_i];
            console.log("".concat(player.name, "'s hand: ").concat(player.print()));
        }
    };
    Dealer.prototype.haveTurn = function (deck) {
        while (this.current() < 17) {
            this.addCard(deck);
        }
        return true;
    };
    Dealer.prototype.decide = function () {
        var winner = null;
        var values = new Set();
        for (var _i = 0, _a = this.Players; _i < _a.length; _i++) {
            var player = _a[_i];
            var count = player.current();
            !values.has(count) ? values.add(count) : values.delete(count);
            winner = !player.bust() && player.beat(this.hand) ? player : null;
            if (winner)
                break;
        }
        return values.size !== 0 ? winner : null;
    };
    return Dealer;
}());
exports.Dealer = Dealer;
//# sourceMappingURL=Dealer.js.map