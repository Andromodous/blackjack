import { Card, Suit } from './Card'

export class Deck {
    deck : Card[] = [];
    cardsInUse : Set<Card> = new Set<Card>();

    constructor() {
        for(let i = 1; i <= 13; i++) { 
            this.deck.push(new Card(i, Suit.CLUBS));
            this.deck.push(new Card(i, Suit.DIAMONDS));
            this.deck.push(new Card(i, Suit.HEARTS));
            this.deck.push(new Card(i, Suit.SPADES));
        }
        for (var i = this.deck.length - 1; i > 0; i--) { //shuffle the deck
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }

    select(): Card { 
        var card : Card | null = null; //this improved implementation uses a Set for O(1) lookup but will have O(n) space
        do {
            const chosen : number = Math.floor(Math.random() * this.deck.length);
            card = this.deck[chosen];
        }
        while(this.cardsInUse.has(card)) {
        }
        this.cardsInUse.add(card);
        return card;
    }

    toString() {
        for(const card of this.deck) {
            console.log(card.toString());
        }
    }
}