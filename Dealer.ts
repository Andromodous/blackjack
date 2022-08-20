import { Hand } from './Hand'
import { Player, User } from './Player'
import { Deck } from './Deck'

export class Dealer implements User {
    name: String;
    hand: Hand;
    Deck: Deck;
    blackJack : boolean;
    Players: User[];

    constructor() {
        this.name = 'The Dealer';
        this.blackJack = false;
        this.hand = new Hand([]);
        this.Deck = new Deck();
        this.Players = [new Player("TopG Berat"), this];
    }

    use(): User | null {
        this.round();
        this.round();
        let winner: User | null = null;
        for (const player of this.Players) {
            if (player.hand.blackJack()) {
                winner = player;
                player.blackJack = true;
            }
        }
        if(!winner) {
            winner = this.play();
        }
        this.finalSCores();
        return winner;
    }

    round() {
        for (const player of this.Players) {
            player.addCard(this.Deck);
        }
    }

    play() {
        for (const player of this.Players) {
            const bust: boolean = player.haveTurn(this.Deck);
            if (!bust) break;
        }
        return this.decide();
    }

    addCard(deck: Deck) {
        this.hand.add(deck.select());
    }

    bust(): boolean {
        return this.hand.bust();
    }

    current(): number {
        return this.hand.current();
    }

    print(): String {
        let printCards : string = '';
        for(const card of this.hand.hand) printCards+= card.toString() + ' ';
        return printCards;
    }

    beat(): boolean {
        return true;
    }

    finalSCores(): void {
        console.log('\n');
        for (const player of this.Players) {
            console.log(`${player.name}'s hand: ${player.print()}`);
        }
    }

    haveTurn(deck: Deck) {
        while (this.current() < 17) {
            this.addCard(deck);
        }
        return true;
    }

    decide(): User | null {
        let winner: User | null = null;
        const values = new Set<Number>();
        for (const player of this.Players) {
            const count = player.current();
            !values.has(count) ? values.add(count) : values.delete(count);
            winner = !player.bust() && player.beat(this.hand) ? player : null;
            if (winner) break;
        }
        return values.size !== 0 ? winner : null;
    }
}
 