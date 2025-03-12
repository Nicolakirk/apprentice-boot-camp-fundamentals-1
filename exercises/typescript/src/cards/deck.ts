import { Card } from "./card";

export abstract class Deck {
  protected cards: Card[] = [];
  constructor() {}
  getCards(): string[] {
    const result: string[] = [];

    for (let i = 0; i < this.cards.length; i++) {
      const card: Card = this.cards[i];
      result.push(card.toString());
    }

    return result;
  }

  shuffle() {
    for (let i = 0; i < this.cards.length; i++) {
      const indexA = Math.floor(Math.random() * i);
      const indexB = i;

      const valueA = this.cards[indexA];
      const valueB = this.cards[indexB];

      this.cards[indexA] = valueB;
      this.cards[indexB] = valueA;
    }
  }

  deal(): Card {
    return this.cards.splice(0, 1)[0];
  }

  hasCards(): boolean {
    if (this.cards.length > 0) {
      return true
    } else {
      return false
    }
  }
}
