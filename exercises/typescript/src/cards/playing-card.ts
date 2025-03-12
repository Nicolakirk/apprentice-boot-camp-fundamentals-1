import { Card } from "./card";
import { Suit } from "./suit";

export class PlayingCard implements Card {
  suit: Suit;
  faceValueName: number;

  constructor(suit: Suit, faceValueName: number) {
    this.suit = suit;
    this.faceValueName = faceValueName;
  }
  snap(otherCard: PlayingCard): boolean {
    return otherCard && this.faceValueName === otherCard.faceValueName;
  }
  toString(): string {
    return this.faceValueName.toString()
  }
}
