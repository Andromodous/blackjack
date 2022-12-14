export enum Suit {
    HEARTS = 1,
    DIAMONDS,
    CLUBS,
    SPADES
}
export class Card {
    private _value: number;
    private _suit: Suit;

    constructor(value: number, suit: Suit) {
        this._value = value;
        this._suit = suit;
    }

    get value(): number {
        return this._value;
    }

    get Suit(): Suit {
        return this._suit;
    }

    cardValue(): number {
        return this._value > 10 ? 10 : this._value;
    }

    toString() {
        let value: String | number = this._value;
        switch (this._value) {
            case 1:
                value = 'A'
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
                return `${value}H`;
            case 2:
                return `${value}D`;
            case 3:
                return `${value}C`;
            case 4:
                return `${value}S`;
        }
    }
}