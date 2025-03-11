import { PlayingCard } from "./playing-card";
import { Suit } from "./suit";
import { suitNames } from "./suit-names";

export class PlayingCardDeck {
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
}
