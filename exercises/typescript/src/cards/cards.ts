// to execute the runnable code in this file, use the command
// `npn run cards` from the command line positioned at
// the project's root directory.

import { PlayingCard } from "./playing-card";
import { Suit } from "./suit";

export class Cards {
  getCards(): string[] {
    const result: string[] = [];
    const deck: PlayingCard[] = [];

    for (let suit = 0; suit < 4; suit++) {
      for (let faceValue = 0; faceValue < 13; faceValue++) {
        let suitName: string;
        switch (suit) {
          case 0:
            suitName = "clubs";
            break;
          case 1:
            suitName = "diamonds";
            break;
          case 2:
            suitName = "hearts";
            break;
          case 3:
            suitName = "spades";
            break;
          default:
            throw new Error(
              "Something went wrong ")
        }
        const newSuit = new Suit(suitName);
        const playingCard = new PlayingCard(newSuit, faceValue);
        deck.push(playingCard);
      }

      let cardNumber = 0;

      for (const card of deck) {
        let faceValueName: string;

        switch (card.faceValueName) {
          case 0:
            faceValueName = "ace";
            break;
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            faceValueName = (card.faceValueName + 1).toString();
            break;
          case 10:
            faceValueName = "jack";
            break;
          case 11:
            faceValueName = "queen";
            break;
          case 12:
            faceValueName = "king";
            break;
          default:
            throw new Error(
              "Something went wrong " +
                card.faceValueName +
                " is not a valid faceValue!"
            );
        }

        result[cardNumber] = faceValueName + " of " + card.suit.suitName;
        cardNumber++;
      }

    }
    return result;
  }
}
const cards = new Cards();
const deckInOrder = cards.getCards();

for (const card of deckInOrder) {
  console.log(card);
}
