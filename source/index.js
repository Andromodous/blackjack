"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Dealer_1 = require("./Dealer");
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var prompt = (0, prompt_sync_1.default)();
var fundsAvailable = 5000;
var bet;
while (fundsAvailable > 0 && (bet = makeBet(fundsAvailable)) != -1) {
    fundsAvailable -= bet;
    console.log("you have bet $".concat(bet, ". current balance: $").concat(fundsAvailable, "\n"));
    var blackJack = new Dealer_1.Dealer();
    var winner = blackJack.use();
    if (winner != null) {
        console.log("\n".concat(winner.name, " wins ").concat(winner.blackJack ? "blackjack" : "the game"));
        if (winner.name !== 'The Dealer') {
            var won = (bet * 2);
            fundsAvailable += won;
            console.log("you won $".concat(won, ". current balance: $").concat(fundsAvailable, "\n"));
        }
        else
            console.log("you lost $".concat(bet, ". current balance: $").concat(fundsAvailable, "\n"));
    }
    else {
        console.log('draw!');
        fundsAvailable += bet;
        console.log("your balance is $".concat(fundsAvailable, "\n"));
    }
}
function makeBet(funds) {
    var num;
    while (isNaN(num) || (num > funds)) {
        try {
            num = Number.parseInt(prompt("how much would you like to bet? -1 to exit: $"));
            if (isNaN(num))
                throw new Error('this is not a number');
            if (num > funds)
                throw new Error('you cannot bet more than $' + funds);
        }
        catch (e) {
            console.log('error: ' + e.message + '\n');
        }
    }
    return num;
}
//# sourceMappingURL=index.js.map