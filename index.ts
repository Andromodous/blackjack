import { Dealer } from "./Dealer"
import { User } from "./Player"
import PromptSync from 'prompt-sync'


const prompt = PromptSync();
let fundsAvailable: number = 5000;
let bet: number;


while (fundsAvailable > 0 && (bet = makeBet(fundsAvailable)) != -1) {
    fundsAvailable -= bet;
    console.log(`you have bet $${bet}. current balance: $${fundsAvailable}\n`);
    const blackJack: Dealer = new Dealer();
    let winner: null | User = blackJack.use();
    if (winner != null) {
        console.log(`\n${winner.name} wins ${winner.blackJack ? `blackjack` : `the game`}`);
        if (winner.name !== 'The Dealer') {
            const won: number = (bet * 2);
            fundsAvailable += won;
            console.log(`you won $${won}. current balance: $${fundsAvailable}\n`);
        }
        else console.log(`you lost $${bet}. current balance: $${fundsAvailable}\n`);
    }
    else {
        console.log('draw!');
        fundsAvailable += bet;
        console.log(`your balance is $${fundsAvailable}\n`);
    }
}

function makeBet(funds : number) {
    let num: number;
    while (isNaN(num) || (num > funds)) {
        try {
            num = Number.parseInt(prompt("how much would you like to bet? -1 to exit: $"));
            if (isNaN(num)) throw new Error('this is not a number');
            if (num > funds) throw new Error('you cannot bet more than $' + funds);
        }
        catch (e) {
            console.log('error: ' + e.message + '\n');
        }
    }
    return num;
}