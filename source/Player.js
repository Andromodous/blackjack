"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Hand_1 = require("./Hand");
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.blackJack = false;
        this.hand = new Hand_1.Hand([]);
    }
    Player.prototype.addCard = function (deck) {
        this.hand.add(deck.select());
    };
    Player.prototype.bust = function () {
        return this.hand.bust();
    };
    Player.prototype.current = function () {
        return this.hand.current();
    };
    Player.prototype.print = function () {
        var printCards = '';
        for (var _i = 0, _a = this.hand.hand; _i < _a.length; _i++) {
            var card = _a[_i];
            printCards += card.toString() + ' ';
        }
        return printCards;
    };
    Player.prototype.beat = function (hand) {
        var bust = hand.bust();
        if (bust)
            return bust;
        return this.hand.beat(hand);
    };
    Player.prototype.haveTurn = function (deck) {
        var prompt = (0, prompt_sync_1.default)();
        var play;
        var bust = false;
        while ((bust = !this.bust()) && (play = prompt("".concat(this.name, " ").concat(this.print(), " hit / stand: "))) != 'stand') {
            switch (play) {
                case 'hit':
                    this.addCard(deck);
                    break;
            }
        }
        return bust;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=Player.js.map