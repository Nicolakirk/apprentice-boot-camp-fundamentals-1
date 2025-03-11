import { Suit } from "./suit";

export class PlayingCard {
  suit: Suit;
  faceValueName: number;

  constructor(suit:Suit, faceValueName:number) {
    this.suit = suit;
    this.faceValueName = faceValueName;
  }
}
