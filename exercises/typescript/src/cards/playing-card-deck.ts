import { PlayingCard } from "./playing-card";

export class PlayingCardDeck {
  playingCards: PlayingCard[];

  constructor(playingCards: PlayingCard[]) {
    this.playingCards = playingCards;
  }
 
}
