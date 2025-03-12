import { Animal as animals } from "./animal"
import { AnimalCard } from "./animal-card"
import { Card } from "./card"
import { Deck } from "./deck"

export class AnimalDeck extends Deck {

  constructor() {
    super()
    this.cards = []

    for (const animal in animals) {
      this.cards.push(new AnimalCard(animal))
      this.cards.push(new AnimalCard(animal))
    }
  }

}
