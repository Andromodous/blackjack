import { Deck } from './Deck'
import { Hand } from './Hand'
import PromptSync from 'prompt-sync'

export interface User {
    name: String;
    hand: Hand;
    blackJack : boolean;
    haveTurn(deck: Deck, play?: String): boolean;
    addCard(deck: Deck): void;
    bust(): boolean;
    current(): number;
    print?(hand?: Hand): String;
    beat(hand?: Hand): boolean;
}

export class Player implements User {
    name: String;
    hand: Hand;
    blackJack : boolean;

    constructor(name: String) {
        this.name = name;
        this.blackJack = false;
        this.hand = new Hand([]);
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

    beat(hand: Hand): boolean {
        const bust = hand.bust();
        if (bust) return bust;
        return this.hand.beat(hand);
    }

    haveTurn(deck: Deck): boolean {
        const prompt = PromptSync();
        let play: string;
        let bust: boolean = false;
        while ((bust = !this.bust()) && (play = prompt(`${this.name} ${this.print()} hit / stand: `)) != 'stand') {
            switch (play) {
                case 'hit':
                    this.addCard(deck);
                    break;
            }
        }
        return bust;
    }

}