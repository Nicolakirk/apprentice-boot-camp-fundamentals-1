import { Card } from "./card"

export class AnimalCard extends Card {
  private readonly animal: string

  constructor(animal: string) {
    super()
    this.animal = animal
  }

  snap(otherCard: AnimalCard): boolean {
    return otherCard && this.animal === otherCard.animal
  }

  toString(): string {
    return this.animal.toString()
  }
}