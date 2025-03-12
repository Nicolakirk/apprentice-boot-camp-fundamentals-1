import { Card } from "./card";
import { Deck } from "./deck";
import { PlayingCard } from "./playing-card";
import { Suit } from "./suit";
import { suitNames } from "./suit-names";

export class PlayingCardDeck implements Deck {
  playingCards: PlayingCard[] = [];

  constructor() {
    suitNames.forEach((suitName) => {
      for (let faceValue = 0; faceValue < 13; faceValue++) {
        const newSuit = new Suit(suitName);
        const playingCard = new PlayingCard(newSuit, faceValue);
        this.playingCards.push(playingCard);
      }
    });
  }
  getCards(): string[] {
    const result: string[] = [];

    for (let i = 0; i < this.playingCards.length; i++) {
      const card: PlayingCard = this.playingCards[i];
      result.push(card.toString());
    }

    return result;
  }

  shuffle() {
    for (let i = 0; i < this.playingCards.length; i++) {
      const indexA = Math.floor(Math.random() * i);
      const indexB = i;

      const valueA = this.playingCards[indexA];
      const valueB = this.playingCards[indexB];

      this.playingCards[indexA] = valueB;
      this.playingCards[indexB] = valueA;
    }
  }
  deal(): Card {
    return this.playingCards.splice(0, 1)[0];
  }
}
