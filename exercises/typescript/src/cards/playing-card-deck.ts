import { Card } from "./card";
import { Deck } from "./deck";
import { PlayingCard } from "./playing-card";
import { Suit } from "./suit";
import { suitNames } from "./suit-names";

export class PlayingCardDeck extends Deck {

  constructor() {
    super()
    suitNames.forEach((suitName) => {
      for (let faceValue = 0; faceValue < 13; faceValue++) {
        const newSuit = new Suit(suitName);
        const playingCard = new PlayingCard(newSuit, faceValue);
        this.cards.push(playingCard);
      }
    });
  }
  getCard(){
    return this.cards.shift()
  }
}
